import { redirect } from "next/navigation";

const checkoutUrl = "https://pay.hotmart.com/T107258212F?checkoutMode=2";

export default function CheckoutRedirect() {
  redirect(checkoutUrl);
}