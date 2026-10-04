import { NextResponse } from "next/server";

const CLICK_SOURCES = new Set(["hero_banner", "header", "hero_button", "pricing", "final", "sticky", "day_1_free_link"]);

export async function POST(request: Request) {
  let body: { source?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body.source !== "string" || !CLICK_SOURCES.has(body.source)) {
    return NextResponse.json({ error: "Invalid click source." }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  if (!webhook || !secret) {
    return NextResponse.json({ error: "Click tracking isn't available." }, { status: 503 });
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "checkout_click",
        source: body.source,
        clickedAt: new Date().toISOString(),
        secret,
      }),
    });

    if (!response.ok) {
      console.error("Checkout click webhook returned a non-success status", { status: response.status });
      return NextResponse.json({ error: "Could not record checkout click." }, { status: 502 });
    }

    const result = (await response.json().catch(() => null)) as { ok?: unknown } | null;
    if (result?.ok !== true) {
      console.error("Checkout click webhook did not confirm the event", { status: response.status });
      return NextResponse.json({ error: "Could not record checkout click." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Checkout click tracking failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Could not record checkout click." }, { status: 502 });
  }
}