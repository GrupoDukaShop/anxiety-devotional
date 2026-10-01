"use client";

import { useEffect } from "react";
import { site } from "@/lib/config";

export default function CheckoutRedirect() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.replace(site.checkoutUrl);
    }, 500);

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}