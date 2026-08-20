const steps = [
  { num: "1", title: "Be Still", text: "A quiet moment, phone silenced, a few slow breaths." },
  { num: "2", title: "Read Scripture", text: "One short passage, read slowly, more than once." },
  { num: "3", title: "Reflect", text: "A brief insight and reflection on what stands out today." },
  { num: "4", title: "Pray", text: "A guided prayer to pray aloud or silently, in your own words." },
  { num: "5", title: "Journal", text: "A few honest prompts — eloquence isn't the point, honesty is." },
  { num: "6", title: "Surrender", text: "One line to name exactly what you're releasing to God today." },
];

export default function DailyRitual() {
  return (
    <section className="ritual">
      <div className="wrap">
        <div className="ritual-head">
          <div className="eyebrow">The Daily Rhythm</div>
          <h2>The same gentle practice, every single day.</h2>
          <p>
            10–15 minutes. No guesswork about what to do next — just a
            rhythm you return to until it becomes instinct.
          </p>
        </div>
        <div className="ritual-grid">
          {steps.map((s) => (
            <div className="ritual-card" key={s.num}>
              <div className="ritual-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
