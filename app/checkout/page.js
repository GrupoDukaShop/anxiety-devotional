"use client";

import { useEffect } from "react";

const checkoutUrl = "https://pay.hotmart.com/T107258212F?checkoutMode=2";

export default function CheckoutRedirect() {
  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      window.location.replace(checkoutUrl);
    }, 500);

    return () => window.clearTimeout(redirectTimer);
  }, []);

  return null;
}