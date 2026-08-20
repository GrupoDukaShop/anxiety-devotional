const faqs = [
  {
    q: "What format is the devotional in?",
    a: "It's an instant-download PDF (81 pages). You'll get a download link right after checkout, and it works on your phone, tablet, e-reader, or computer — no app required.",
    open: true,
  },
  {
    q: "Is this a substitute for therapy or medical treatment?",
    a: "No. This is a faith-based spiritual resource meant to encourage prayer, Scripture reflection, and trust in God — not a substitute for professional mental health care. If you're managing persistent or severe anxiety, we genuinely encourage you to also reach out to a licensed counselor, therapist, or doctor. If you're in crisis, please contact the 988 Suicide & Crisis Lifeline or your local emergency services immediately.",
  },
  {
    q: "Which Bible translation does it use?",
    a: "Every passage is quoted from the King James Version (KJV). Each day includes the full verse, so you don't need to look anything up separately.",
  },
  {
    q: "Do I need to do it every single day without missing one?",
    a: "Not at all. Some days you'll have fifteen unhurried minutes, other days just three. If you miss a day, simply pick back up where you left off — there's no streak to protect, only a practice to return to.",
  },
  {
    q: "What if I'm not happy with it?",
    a: "You're covered by a 7-day money-back guarantee. If it's not useful to you, just email us for a full refund — no forms, no hassle.",
  },
];

export default function FAQ() {
  return (
    <section className="faq">
      <div className="wrap">
        <h2>Questions, answered</h2>
        {faqs.map((item) => (
          <details key={item.q} open={item.open}>
            <summary>
              {item.q} <span className="plus">+</span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
