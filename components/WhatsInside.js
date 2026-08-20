import { BookIcon } from "./Icons";

const parts = [
  {
    roman: "PART I",
    days: "Days 1–7",
    title: "Understanding Your Anxiety",
    text: "Before anything can change, it helps to feel understood. This week is about naming your anxiety honestly, in the presence of a God who already knows what you're carrying.",
  },
  {
    roman: "PART II",
    days: "Days 8–14",
    title: "Surrendering Your Worries",
    text: "A shift from carrying it alone to bringing it to God. Surrender isn't giving up — it's handing over what was never meant to be carried by you alone.",
  },
  {
    roman: "PART III",
    days: "Days 15–21",
    title: "Praying Through Real Life",
    text: "Anxiety attaches itself to real situations — money, family, decisions, relationships. This week brings prayer into the specific, ordinary places worry actually lives.",
  },
  {
    roman: "PART IV",
    days: "Days 22–28",
    title: "Finding Peace in God",
    text: "The tone shifts toward rest, strength, and a kind of peace that doesn't wait for your circumstances to change first.",
  },
  {
    roman: "PART V",
    days: "Days 29–30",
    title: "Choosing Faith Over Fear",
    text: "Two extended, closing days that bring everything together — ending in a final declaration and a closing prayer written to carry you far beyond day 30.",
  },
];

export default function WhatsInside() {
  return (
    <section className="inside" id="inside">
      <div className="wrap">
        <div className="inside-head">
          <div className="eyebrow">Table of Contents</div>
          <h2>Five parts. Thirty days. One steady practice.</h2>
          <p>
            Move through it in order, or return to whichever part meets you
            where you are today.
          </p>
        </div>
        <div className="part-list">
          {parts.map((p) => (
            <div className="part-item" key={p.roman}>
              <div>
                <div className="part-roman">{p.roman}</div>
                <div className="part-days">{p.days}</div>
              </div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          ))}

          <div className="bonus-row">
            <BookIcon />
            <div>
              <h3>Every day follows the same rhythm</h3>
              <p>
                Scripture (KJV) → Insight → Reflection → Guided Prayer →
                Journal Prompts → a one-line Surrender to close. Plus 4
                weekly checkpoints to pause and look back before moving
                forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
