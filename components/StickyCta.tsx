"use client";

import { useEffect, useState } from "react";

type Props = { href: string; label: string };

// Mobile-only bottom button. Appears once the main buttons
// (hero, pricing, final) are all out of view.
export default function StickyCta({ href, label }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ids = ["hero-cta", "pricing", "final-cta"];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Set<Element>();
    const update = () => setShow(visible.size === 0 && window.scrollY > 200);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      });
      update();
    });
    targets.forEach((el) => io.observe(el));
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div className={`sticky${show ? " show" : ""}`} aria-hidden={!show}>
      <a className="btn" href={href} tabIndex={show ? 0 : -1}>
        {label}
      </a>
    </div>
  );
}
