"use client";

import { useEffect, useRef, useState } from "react";

// The one moment of motion on the page: the sun lifts over the horizon
// the first time this band scrolls into view.
export default function Horizon() {
  const ref = useRef<HTMLDivElement>(null);
  const [risen, setRisen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setRisen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRisen(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`horizon${risen ? " risen" : ""}`} aria-hidden="true">
      <div className="glow" />
      <div className="sun" />
      <div className="ground" />
    </div>
  );
}
