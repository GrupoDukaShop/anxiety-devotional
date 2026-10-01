import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: { email?: unknown; company?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill it, people don't. Pretend success.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  const webhookSecret = process.env.LEAD_WEBHOOK_SECRET;
  if (!webhook) {
    return NextResponse.json(
      { error: "Sign-up isn't available right now. Please try again later." },
      { status: 503 }
    );
  }

  try {
    const payload: {
      email: string;
      source: string;
      createdAt: string;
      secret?: string;
    } = {
      email,
      source: "landing-page",
      createdAt: new Date().toISOString(),
    };
    if (webhookSecret) payload.secret = webhookSecret;

    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);

    if (webhookSecret) {
      const result = (await res.json().catch(() => null)) as { ok?: unknown } | null;
      if (result?.ok !== true) throw new Error("Webhook did not confirm the lead");
    }
  } catch {
    return NextResponse.json(
      { error: "We couldn't save your email. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
