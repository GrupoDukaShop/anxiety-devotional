import Image from "next/image";
import { site } from "@/lib/config";
import { timeline, steps, spec, forYou, included, faq } from "@/lib/content";
import CheckoutLink from "@/components/CheckoutLink";
import Horizon from "@/components/Horizon";
import LeadForm from "@/components/LeadForm";
import StickyCta from "@/components/StickyCta";

function Cover() {
  if (site.coverImage) {
    return (
      <Image
        className="cover-img"
        src={site.coverImage}
        alt={`Cover of the devotional ${site.name}`}
        width={640}
        height={853}
        priority
      />
    );
  }
  return (
    <div className="book" role="img" aria-label={`Cover of the devotional ${site.name}`}>
      <div>
        <div className="b-top">A 30-day devotional</div>
        <div className="b-title">{site.name}</div>
      </div>
      <div className="b-bottom">Scripture, prayer, and peace</div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="hero night">
        <div className="wrap">
          <CheckoutLink className="hero-offer" href={site.checkoutRedirectPath} source="hero_banner">
            <span>30-day devotional</span>
            <span className="hero-offer-value">Start your journey today</span>
          </CheckoutLink>
          <nav className="top" aria-label="Top">
            <span className="wordmark">{site.name}</span>
            <CheckoutLink className="btn btn-small" href={site.checkoutRedirectPath} source="header">
              Get the devotional
            </CheckoutLink>
          </nav>
          <div className="hero-grid">
            <div>
              <h1>When your mind won't stop at 2&nbsp;a.m., you don't have to carry it alone.</h1>
              <p className="lede">
                A 30-day devotional of Scripture, guided prayer, and journaling for believers who love God and still
                struggle with worry. Ten minutes a day. No streaks, no pressure, no guilt.
              </p>
              <div className="cta-row">
                <CheckoutLink id="hero-cta" className="btn" href={site.checkoutRedirectPath} source="hero_button">
                  {site.ctaLabel}
                </CheckoutLink>
                <a className="text-link" href="#free">
                  Or read Day 1 free first
                </a>
              </div>
              <p className="fine">Instant PDF download. 7-day money-back guarantee.</p>
            </div>
            <div className="cover-wrap">
              <Cover />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="s-recog night">
          <div className="wrap">
            <h2 className="prose">It's 2&nbsp;a.m. The house is quiet. Your mind isn't.</h2>
            <div className="scene">
              <p>
                You replay the conversation. You run the numbers again. You whisper the same prayer you've whispered a
                hundred times, and the knot in your chest is still there.
              </p>
              <span className="thought">Maybe my faith isn't strong enough.</span>
              <p>It's the thought nobody says out loud.</p>
            </div>

            <ul className="recog-list">
              <li>
                <h3>Your mind won't stop at night</h3>
                <p>You lie awake running through what-ifs, wishing your thoughts came with an off switch.</p>
              </li>
              <li>
                <h3>You love God, and you still feel anxious</h3>
                <p>
                  You've prayed the same worry a hundred times, and some part of you wonders whether that means your
                  faith isn't strong enough. It doesn't.
                </p>
              </li>
              <li>
                <h3>You're tired of carrying it alone</h3>
                <p>
                  Money, family, a decision you can't make, a relationship that feels heavy. The worry keeps finding
                  new places to live.
                </p>
              </li>
            </ul>

            <p className="turn">
              Anxiety is not a measure of your faith. It's a weight, and you were never meant to carry it alone.
            </p>
          </div>
        </section>

        <section className="s-change night">
          <div className="wrap">
            <h2 className="prose">Thirty days, one small practice, repeated.</h2>
            <p className="intro prose">
              This isn't a quick fix, and it doesn't promise your anxiety will disappear in a month. It's a simple
              daily rhythm you return to until bringing your worry to God feels as familiar as the worry itself.
            </p>
            <ol className="tl">
              {timeline.map((item) => (
                <li key={item.title}>
                  <span className="when">{item.when}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="s-inside night">
          <div className="wrap inside-grid">
            <div>
              <h2>Ten minutes. The same six steps, every day.</h2>
              <p className="intro">
                No guesswork about what to do next. Each day follows one gentle rhythm, so all you have to do is show
                up.
              </p>
              <ol className="steps">
                {steps.map((s) => (
                  <li key={s.name}>
                    <strong>{s.name}</strong>
                    <span>{s.text}</span>
                  </li>
                ))}
              </ol>
            </div>

            <article className="paper" aria-label="A sample page from the devotional">
              <div className="p-head">
                <span className="p-day">Day 9</span>
                <span className="p-note">A sample page</span>
              </div>
              <h4>Scripture</h4>
              <p className="verse">
                Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your
                requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your
                hearts and minds through Christ Jesus.
              </p>
              <p className="verse-ref">Philippians 4:6-7, KJV</p>
              <h4>Reflection</h4>
              <p>
                Anxiety asks you to be the one who holds everything together. This verse doesn't tell you to stop
                feeling worried. It tells you where to take it.
              </p>
              <h4>Prayer</h4>
              <p>
                Lord, You see what I'm carrying tonight. I don't have the right words, and I don't need them. I'm
                handing You this worry, the one I keep picking back up. Help me leave it in Your hands. Amen.
              </p>
              <h4>Journal</h4>
              <p>What am I holding tonight that I keep picking back up?</p>
              <p className="surrender">Tonight I release ____________ into Your hands.</p>
            </article>
          </div>
        </section>

        <Horizon />

        <section className="s-day day">
          <div className="wrap">
            <div className="split">
              <div>
                <h2>What you're getting</h2>
                <p className="intro">One complete devotional, delivered the moment you check out.</p>
              </div>
              <dl className="spec">
                {spec.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="s-flat day pt0">
          <div className="wrap">
            <h2 className="prose">This devotional is for you if&hellip;</h2>
            <ul className="for-list">
              {forYou.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="s-flat day pt0" id="free">
          <div className="wrap">
            <div className="free">
              <div>
                <h2>Not ready yet? Read Day 1 free.</h2>
                <p style={{ marginTop: 16 }}>
                  One Scripture, one prayer, and one journal prompt, sent to your inbox. Try the rhythm tonight, decide
                  tomorrow.
                </p>
              </div>
              <LeadForm />
            </div>
          </div>
        </section>

        <section className="s-flat day pt0" id="pricing">
          <div className="wrap">
            <h2 className="prose">One devotional. One price. Yours to keep.</h2>
            <p className="intro prose" style={{ marginTop: 16 }}>
              No subscriptions and no upsells. The complete 30-day journey, delivered instantly.
            </p>
            <div className="offer">
              <div>
                <h3>{site.name}</h3>
                <p className="price">{site.price}</p>
                <p className="price-note">One-time payment. Instant download, lifetime access.</p>
                <CheckoutLink className="btn" href={site.checkoutRedirectPath} source="pricing">
                  {site.ctaLabel}
                </CheckoutLink>
              </div>
              <div>
                <ul>
                  {included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="guarantee">
                  <strong>7-day money-back guarantee.</strong> If it's not the right fit, email us within 7 days for a
                  full refund. No forms, no questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="s-flat day pt0">
          <div className="wrap">
            <h2 className="prose">Questions, answered</h2>
            <div className="faq">
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="s-flat day care pt0">
          <div className="wrap">
            <div className="care">
              <h3>Before you buy</h3>
              <p className="muted" style={{ marginTop: 12 }}>
                This devotional may not be what you need right now if:
              </p>
              <ul>
                <li>
                  You're in crisis or having thoughts of harming yourself. Please call or text 988 (U.S.) or contact
                  your local emergency services right now.
                </li>
                <li>
                  You're managing a diagnosed anxiety disorder and need clinical treatment. This is a spiritual
                  companion, not a replacement for therapy or medical care.
                </li>
                <li>
                  You want a guarantee that anxiety will disappear in 30 days. This is a practice to return to, not a
                  cure.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="s-final" id="final-cta">
          <div className="wrap">
            <h2>Fear may still come. Now you'll know exactly where to bring it.</h2>
            <p>Instant download. You could be reading Day 1 in the next five minutes.</p>
            <CheckoutLink className="btn" href={site.checkoutRedirectPath} source="final">
              {site.ctaLabel}
            </CheckoutLink>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>
            {site.name} is a faith-based spiritual resource created to encourage prayer, Scripture reflection, and trust
            in God. It is not a substitute for professional mental health care, therapy, or medical treatment. If you
            are experiencing persistent, severe, or overwhelming anxiety, please also reach out to a licensed counselor,
            therapist, or medical provider.
          </p>
          <p>
            If you are in crisis or having thoughts of harming yourself, call or text 988 (U.S.) or contact your local
            emergency services immediately.
          </p>
          <p className="links">
            <a href={site.links.contact}>Contact</a>
            <a href={site.links.privacy}>Privacy Policy</a>
            <a href={site.links.terms}>Terms</a>
          </p>
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </footer>

      <StickyCta href={site.checkoutRedirectPath} label={site.ctaLabel} />
    </>
  );
}
