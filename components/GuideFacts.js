const facts = [
  { label: "Days", value: "30", big: true },
  { label: "Parts", value: "5" },
  { label: "Scripture passages (KJV)", value: "30+" },
  { label: "Guided prayers", value: "31" },
  { label: "Journal prompts", value: "100+" },
  { label: "Weekly checkpoints", value: "4" },
];

export default function GuideFacts() {
  return (
    <section className="facts-section">
      <div className="wrap">
        <div className="facts-copy">
          <div className="eyebrow">What&apos;s Actually Inside</div>
          <h2>A daily rhythm, not a quick fix.</h2>
          <p>
            No promise that anxiety disappears in 30 days. Just a simple,
            repeatable practice — Scripture, prayer, and journaling — that
            you return to daily until turning to God feels as familiar as the
            worry itself.
          </p>
          <p>
            Every verse is quoted from the King James Version, and every day
            follows the same gentle rhythm so you always know what to expect.
          </p>
        </div>
        <div className="facts-label">
          <div className="flt">Devotional Facts</div>
          <div className="fsub">1 daily practice, self-paced</div>

          {facts.map((f) => (
            <div className={`facts-row ${f.big ? "big" : ""}`} key={f.label}>
              <span>{f.label}</span>
              <span className="val">{f.value}</span>
            </div>
          ))}

          <div className="facts-thick" />
          <div className="facts-row">
            <span>Translation</span>
            <span className="val">KJV</span>
          </div>
          <div className="facts-row">
            <span>Reading time per day</span>
            <span className="val">10&ndash;15 min</span>
          </div>
          <div className="facts-note">
            Format: Instant-download PDF. Compatible with phone, tablet,
            computer, and e-reader. Includes a crisis-support note and is not
            a substitute for professional mental health care.
          </div>
        </div>
      </div>
    </section>
  );
}
