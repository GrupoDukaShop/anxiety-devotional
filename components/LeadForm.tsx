"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import ThankYou from "@/components/ThankYou";

type Status = "idle" | "loading" | "ok" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    function closeConfirmation() {
      setShowConfirmation(false);
    }

    window.addEventListener("popstate", closeConfirmation);
    return () => window.removeEventListener("popstate", closeConfirmation);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? ""); // honeypot

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatus("ok");
      track("lead_submitted", { source: "day_1_form" });
      window.history.pushState({}, "", "/thanks");
      setShowConfirmation(true);
    } catch {
      setStatus("error");
      setMessage("Couldn't reach the server. Please try again in a moment.");
    }
  }

  return (
    <>
    <form className="lead" onSubmit={onSubmit} noValidate>
      <label className="sr" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Your email address"
      />
      {/* honeypot: real people never see or fill this */}
      <div className="hp" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button className="btn" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send me Day 1"}
      </button>
      <p className="lead-msg" role="status" aria-live="polite">
        {message}
      </p>
      <small>I'll also send a few short notes about the devotional. Unsubscribe anytime.</small>
    </form>
    {showConfirmation && <ThankYou modal onClose={() => window.history.back()} />}
    </>
  );
}
