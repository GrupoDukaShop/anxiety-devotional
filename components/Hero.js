import { CheckIcon } from "./Icons";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div>
          <div className="eyebrow">A 30-Day Devotional Journey</div>
          <h1>
            When anxiety takes over, <em>bring it to God</em> — one day at a
            time.
          </h1>
          <p className="lead">
            A faith-based, 30-day devotional of Scripture, prayer, and
            reflection to help you move from worry to surrender — even on the
            days your mind won&apos;t stop racing.
          </p>
          <div className="cta-row">
            <a href="#pricing" className="btn btn-primary">
              Get Instant Access — $9
            </a>
          </div>
          <div className="trust-row">
            <span>
              <CheckIcon />
              Instant PDF download
            </span>
            <span>
              <CheckIcon />
              30 days, 5 parts
            </span>
            <span>
              <CheckIcon />
              Scripture, prayer &amp; journaling
            </span>
          </div>
        </div>
        <div className="book-stage">
          <div className="book-mock">
            <div className="book-spine-shadow" />
            <img
              src="/cove22r.jpg"
              alt="When Anxiety Takes Over devotional cover"
            />
            <div className="book-pages" />
            <div className="badge-float">
              30
              <br />
              DAYS
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
