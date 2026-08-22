import { CheckIcon, ShieldIcon } from "./Icons";

const features = [
  "Full 30-day devotional PDF (5 parts, 81 pages)",
  "31 guided prayers + 100+ journal prompts",
  "4 weekly checkpoints to pause and reflect",
  "Extended Day 29 & 30 closing chapters",
  "Instant download, lifetime access",
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="eyebrow">Get Started Today</div>
        <h2>One devotional. One simple price. Yours for life.</h2>
        <p>
          No subscriptions, no upsells. Just the complete 30-day journey,
          delivered instantly.
        </p>
        <div className="price-card">
          <div className="top-row">
            <div className="title">When Anxiety Takes Over</div>
            <div className="price-tag">
              <div className="deal-label">SPECIAL LAUNCH PRICE</div>
              <div className="compare">
                <span className="old">$9</span>
                <span className="price-arrow" aria-hidden="true">&darr;</span>
                <span className="new">
                  <span className="amt">$5</span>
                </span>
              </div>
              <div className="save-label">Save $4 today</div>
              <div className="per">one-time payment</div>
            </div>
          </div>
          <ul>
            {features.map((f) => (
              <li key={f}>
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="/checkout"
            className="btn btn-gold btn-cta"
          >
            Get Instant Access — $5
          </a>
          <div className="guarantee">
            <ShieldIcon />
            <p>
              <strong>7-Day Money-Back Guarantee</strong>
              Not the right fit? Email us within 7 days for a full,
              no-questions-asked refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
