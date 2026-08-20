import { MoonIcon, CloudIcon, HeartIcon } from "./Icons";

const painPoints = [
  {
    icon: MoonIcon,
    title: "Your mind won't stop at night",
    text: "You lie awake replaying worries, running through what-ifs, wishing your thoughts came with an off switch.",
  },
  {
    icon: CloudIcon,
    title: "You love God, but still feel anxious",
    text: "You've prayed the same worry a hundred times. Some part of you wonders if that means your faith isn't strong enough. It doesn't.",
  },
  {
    icon: HeartIcon,
    title: "You're tired of carrying it alone",
    text: "Money, family, an unclear decision, a relationship that feels heavy — the worry keeps finding new places to live.",
  },
];

export default function Pain() {
  return (
    <section className="pain">
      <div className="wrap">
        <div className="eyebrow" style={{ color: "var(--gold-light)" }}>
          Sound familiar?
        </div>
        <h2>
          You&apos;ve prayed about it before.
          <br />
          The worry keeps coming back anyway.
        </h2>
        <p className="sub">
          Anxiety doesn&apos;t always look dramatic. Sometimes it&apos;s just
          the quiet, constant hum of worry underneath an ordinary day. This
          devotional was written for exactly that kind of anxious.
        </p>
        <div className="pain-grid">
          {painPoints.map(({ icon: Icon, title, text }) => (
            <div className="pain-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="pain-arrow">↓ There&apos;s a gentler way through ↓</div>
      </div>
    </section>
  );
}
