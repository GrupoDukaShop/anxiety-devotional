import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { path?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (
    typeof body.path !== "string" ||
    !body.path.startsWith("/") ||
    body.path.startsWith("//") ||
    body.path.length > 200
  ) {
    return NextResponse.json({ error: "Invalid page path." }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  if (!webhook || !secret) {
    return NextResponse.json({ error: "Visit tracking isn't available." }, { status: 503 });
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "page_view",
        country: request.headers.get("x-vercel-ip-country") || "Unknown",
        path: body.path,
        visitedAt: new Date().toISOString(),
        secret,
      }),
    });

    if (!response.ok) {
      console.error("Page view webhook returned a non-success status", { status: response.status });
      return NextResponse.json({ error: "Could not record page view." }, { status: 502 });
    }

    const result = (await response.json().catch(() => null)) as { ok?: unknown } | null;
    if (result?.ok !== true) {
      console.error("Page view webhook did not confirm the event", { status: response.status });
      return NextResponse.json({ error: "Could not record page view." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Page view tracking failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Could not record page view." }, { status: 502 });
  }
}
