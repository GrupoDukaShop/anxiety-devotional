"use client";

type CheckoutSource = "hero_banner" | "header" | "hero_button" | "pricing" | "final" | "sticky" | "day_1_free_link";

type Props = {
  href: string;
  source: CheckoutSource;
  children: React.ReactNode;
  className?: string;
  id?: string;
  tabIndex?: number;
};

export default function CheckoutLink({ href, source, children, ...props }: Props) {
  function recordClick() {
    void fetch("/api/checkout-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source }),
      keepalive: true,
    }).catch(() => undefined);
  }

  return (
    <a href={href} onClick={recordClick} {...props}>
      {children}
    </a>
  );
}