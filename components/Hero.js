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
            <a
              href="/checkout"
              className="btn btn-primary btn-cta"
            >
              Get Instant Access — $5
            </a>
          </div>
          <div className="price-anchor" aria-label="Limited-time price: was $9, now $5, save $4">
            <span className="price-anchor-label">Limited-time offer</span>
            <span className="price-anchor-old">$9</span>
            <span className="price-anchor-arrow" aria-hidden="true">&rarr;</span>
            <span className="price-anchor-now">Now $5</span>
            <span className="price-anchor-save">Save $4</span>
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
          <span className="ebook-badge">E-BOOK</span>
          <img
            className="cover-image"
            src="/cover2.png"
            alt="When Anxiety Takes Over devotional cover"
          />
          <div className="price-anchor price-anchor-mobile" aria-label="Limited-time price: was $9, now $5, save $4">
            <span className="price-anchor-label">Limited-time offer</span>
            <span className="price-anchor-old">$9</span>
            <span className="price-anchor-arrow" aria-hidden="true">&rarr;</span>
            <span className="price-anchor-now">Now $5</span>
            <span className="price-anchor-save">Save $4</span>
          </div>
          <a href="/checkout" className="btn btn-primary btn-cta mobile-book-cta">
            Get Instant Access — $5
          </a>
        </div>
      </div>
    </header>
  );
}
