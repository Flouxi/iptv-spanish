const PRODUCT_SLUGS = {
  "3m": "iptv-mundial-24",
  "1y": "iptv-mundial-44",
  "3y": "iptv-mundial-64",
} as const;

export async function requestIptvCheckout(plan: keyof typeof PRODUCT_SLUGS, screens: number, total: number) {
  const response = await fetch("https://iptv-clocking-00.vercel.app/api/redirect-checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productSlug: PRODUCT_SLUGS[plan], extraScreens: screens - 1, price: Math.round(total * 100), origin: window.location.origin }),
  });
  if (!response.ok) throw new Error("No se pudo iniciar el pago. Inténtalo de nuevo.");
  const data = await response.json();
  const url = new URL(data.url);
  if (url.protocol !== "https:" || url.hostname !== "checkout.stripe.com") throw new Error("No se recibió un enlace de pago válido.");
  return url.toString();
}
