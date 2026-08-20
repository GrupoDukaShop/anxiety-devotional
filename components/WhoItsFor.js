import { CheckIcon, XIcon } from "./Icons";

const yesItems = [
  "You love God and still struggle with worry or fear.",
  "You want a simple, daily practice instead of one more thing to figure out.",
  "You're tired of praying the same worry over and over with no relief.",
  "You'd rather sit with Scripture and prayer than scroll for reassurance.",
];

const noItems = [
  "You're in crisis or having thoughts of harming yourself — please contact the 988 Suicide & Crisis Lifeline or your local emergency services right now.",
  "You're managing a diagnosed anxiety disorder and need clinical treatment (this devotional is a spiritual companion, not a replacement for therapy or medical care).",
  "You want a guarantee that anxiety will disappear in 30 days — this is a practice to return to, not a cure.",
];

export default function WhoItsFor() {
  return (
    <section className="who">
      <div className="wrap">
        <div className="who-card yes">
          <h3>This devotional is for you if...</h3>
          <ul>
            {yesItems.map((item) => (
              <li key={item}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="who-card no">
          <h3>Please read this first</h3>
          <ul>
            {noItems.map((item) => (
              <li key={item}>
                <XIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
