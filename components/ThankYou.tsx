"use client";

import Link from "next/link";

export default function ThankYou({ modal = false, onClose }: { modal?: boolean; onClose?: () => void }) {

  const content = (
    <div className="thanks-panel" role={modal ? "dialog" : undefined} aria-modal={modal || undefined} aria-labelledby="thanks-title">
      {modal && (
        <button className="thanks-close" type="button" aria-label="Close confirmation" onClick={onClose}>
          ×
        </button>
      )}
      <span className="thanks-mark" aria-hidden="true">✓</span>
      <h1 id="thanks-title">You&apos;re on your way.</h1>
      <p>Your Day 1 email is on its way. Check your inbox (and spam, just in case).</p>
      {modal ? (
        <button className="btn" type="button" onClick={onClose}>Back to the devotional</button>
      ) : (
        <Link className="btn" href="/">Back to the devotional</Link>
      )}
    </div>
  );

  if (!modal) {
    return <main className="thanks-page">{content}</main>;
  }

  return (
    <div className="thanks-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose?.();
    }}>
      {content}
    </div>
  );
}