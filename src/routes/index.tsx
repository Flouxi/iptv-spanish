import { requestIptvCheckout } from "@/lib/checkout";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Check,
  Clock,
  Shield,
  Star,
  Zap,
  MessageCircle,
  Subtitles,
  Award,
  ChevronDown,
  Sparkles,
  Tv,
} from "lucide-react";
import channelsBundleAsset from "@/assets/channels-bundle.webp";
import poster1Asset from "@/assets/aquaman.webp";
import poster2Asset from "@/assets/oppenheimer.webp";
import poster3Asset from "@/assets/red-one.webp";
import poster4Asset from "@/assets/venom-last-dance.webp";
import poster5Asset from "@/assets/1QdXdRYfktUSONkl1oD5gc6Be0s.webp";
import poster6Asset from "@/assets/36xXlhEpQqVVPuiZhfoQuaY4OlA.webp";
import poster7Asset from "@/assets/hE3LRZAY84fG19a18pzpkZERjTE.webp";
import poster8Asset from "@/assets/iDHzRALtZCzHVmx7uyjTTKvMAPB.webp";
import testimonial1Asset from "@/assets/customer-review-1.webp";
import testimonial2Asset from "@/assets/customer-review-2.webp";
import testimonial3Asset from "@/assets/customer-review-3.webp";
import testimonial4Asset from "@/assets/customer-review-4.webp";
import testimonial5Asset from "@/assets/customer-review-5.webp";
import video1Asset from "@/assets/lifewithlaurenk_TikTokDownloader.com_42a06.webm";
import video2Asset from "@/assets/meeralakhani_TikTokDownloader.com_1c70b.webm";
import video3Asset from "@/assets/onthelot_TikTokDownloader.com_b35cd.webm";
import video4Asset from "@/assets/sabbytatt_TikTokDownloader.com_283a8.webm";
import video5Asset from "@/assets/zenmaruu_TikTokDownloader.com_d268d.webm";
import devSmartTvAsset from "@/assets/smart-tv-v2.webp";
import devFirestickAsset from "@/assets/firestick.webp";
import devAppleTvAsset from "@/assets/apple-tv-box-v2.webp";
import devAndroidAsset from "@/assets/android.webp";
import devIphoneAsset from "@/assets/iphone-ipad-v2.webp";
import devDatorAsset from "@/assets/dator-v2.webp";
import payVisaAsset from "@/assets/pay-visa.svg";
import payMastercardAsset from "@/assets/pay-mastercard.svg";
import payKlarnaAsset from "@/assets/adf23171-e874-4bb9-a43b-abee958e8973.svg";
import paySwishAsset from "@/assets/3a877adf-f502-4eab-ba74-a1fa14b9611b.svg";
import payPaypalAsset from "@/assets/pay-paypal.svg";
import payAmexAsset from "@/assets/pay-american-express.svg";
import sportPlAsset from "@/assets/ai-pl.webp";
import sportClAsset from "@/assets/ai-cl.webp";
import sportAllsvAsset from "@/assets/ai-allsvenskan.webp";
import sportShlAsset from "@/assets/ai-shl.webp";
import sportVinterAsset from "@/assets/ai-vinter-os.webp";
import sportNationsAsset from "@/assets/ai-nations-cup.webp";
import sportLaligaAsset from "@/assets/ai-laliga.webp";
import sportBiathlonAsset from "@/assets/ai-biathlon.webp";
import sportEliteserienAsset from "@/assets/ai-eliteserien.webp";
import chTv4Asset from "@/assets/tv4.png";
import chViaplayAsset from "@/assets/viaplay.png";
import chHboAsset from "@/assets/hbo.png";
import chNetflixAsset from "@/assets/netflix.png";
import chDisneyAsset from "@/assets/disney-plus.png";
import chEspnAsset from "@/assets/espn.png";
import chEurosportAsset from "@/assets/eurosport.png";
import chSkyAsset from "@/assets/sky-sports.png";
import chPrimeAsset from "@/assets/prime-video.png";
import chDaznAsset from "@/assets/dazn.png";
import chFoxAsset from "@/assets/fox.png";
import chAppleTvAsset from "@/assets/apple-tv.png";
import brandLogoAsset from "@/assets/brand-logo.png";

const channelsBundle = { url: channelsBundleAsset };
const poster1 = { url: poster1Asset };
const poster2 = { url: poster2Asset };
const poster3 = { url: poster3Asset };
const poster4 = { url: poster4Asset };
const poster5 = { url: poster5Asset };
const poster6 = { url: poster6Asset };
const poster7 = { url: poster7Asset };
const poster8 = { url: poster8Asset };
const testimonial1 = { url: testimonial1Asset };
const testimonial2 = { url: testimonial2Asset };
const testimonial3 = { url: testimonial3Asset };
const testimonial4 = { url: testimonial4Asset };
const testimonial5 = { url: testimonial5Asset };
const video1 = { url: video1Asset };
const video2 = { url: video2Asset };
const video3 = { url: video3Asset };
const video4 = { url: video4Asset };
const video5 = { url: video5Asset };
const devSmartTv = { url: devSmartTvAsset };
const devFirestick = { url: devFirestickAsset };
const devAppleTv = { url: devAppleTvAsset };
const devAndroid = { url: devAndroidAsset };
const devIphone = { url: devIphoneAsset };
const devDator = { url: devDatorAsset };
const payVisa = { url: payVisaAsset };
const payMastercard = { url: payMastercardAsset };
const payKlarna = { url: payKlarnaAsset };
const paySwish = { url: paySwishAsset };
const payPaypal = { url: payPaypalAsset };
const payAmex = { url: payAmexAsset };
const sportPl = { url: sportPlAsset };
const sportCl = { url: sportClAsset };
const sportAllsv = { url: sportAllsvAsset };
const sportShl = { url: sportShlAsset };
const sportVinter = { url: sportVinterAsset };
const sportNations = { url: sportNationsAsset };
const sportLaliga = { url: sportLaligaAsset };
const sportBiathlon = { url: sportBiathlonAsset };
const sportEliteserien = { url: sportEliteserienAsset };
const chTv4 = { url: chTv4Asset };
const chViaplay = { url: chViaplayAsset };
const chHbo = { url: chHboAsset };
const chNetflix = { url: chNetflixAsset };
const chDisney = { url: chDisneyAsset };
const chEspn = { url: chEspnAsset };
const chEurosport = { url: chEurosportAsset };
const chSky = { url: chSkyAsset };
const chPrime = { url: chPrimeAsset };
const chDazn = { url: chDaznAsset };
const chFox = { url: chFoxAsset };
const chAppleTv = { url: chAppleTvAsset };
const brandLogo = { url: brandLogoAsset };

const POSTERS = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8].map((a) => a.url);
const TESTIMONIALS = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5].map((a) => a.url);
const SPORTS = [
  { label: "Premier League", img: sportPl.url },
  { label: "Champions League", img: sportCl.url },
  { label: "La Liga", img: sportLaliga.url },
  { label: "Mundial 2026", img: sportNations.url },
  { label: "Deportes de Invierno", img: sportVinter.url },
  { label: "Nations League", img: sportAllsv.url },
  { label: "Biatlón", img: sportBiathlon.url },
  { label: "SHL Hockey", img: sportShl.url },
  { label: "Eliteserien", img: sportEliteserien.url },
];

type MediaItem = { type: "image" | "video"; src: string };
const TESTIMONIAL_MEDIA: MediaItem[] = [
  { type: "image", src: testimonial1.url },
  { type: "video", src: video1.url },
  { type: "image", src: testimonial2.url },
  { type: "video", src: video2.url },
  { type: "image", src: testimonial3.url },
  { type: "video", src: video3.url },
  { type: "image", src: testimonial4.url },
  { type: "video", src: video4.url },
  { type: "image", src: testimonial5.url },
  { type: "video", src: video5.url },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IPTVNord4K — 30.000+ canales, todo el deporte & 4K UHD" },
      {
        name: "description",
        content:
          "IPTVNord4K: 30.000+ canales en vivo, 200.000+ películas y series en 4K UHD. Entrega en 15 minutos, 30 días de garantía. Pago único — sin suscripción.",
      },
      { property: "og:title", content: "IPTVNord4K — Transmite todo en 4K" },
      {
        property: "og:description",
        content: "30.000+ canales, todo el deporte y 200.000+ películas. Entrega en 15 min.",
      },
    ],
  }),
  component: LandingPage,
});

type Plan = {
  id: "3m" | "1y" | "3y";
  label: string;
  badge?: string;
  base: number;
  price: number;
  perMonth: string;
  highlight?: boolean;
};

const PLANS: Plan[] = [
  { id: "3m", label: "3 Meses", base: 69, price: 24.99, perMonth: "≈8.33€/mes" },
  { id: "1y", label: "1 Año", badge: "Más Popular", base: 139, price: 44.99, perMonth: "≈3.75€/mes", highlight: true },
  { id: "3y", label: "3 Años + 6 Meses Gratis", badge: "🎁 Mejor Valor", base: 259, price: 64.99, perMonth: "≈1.55€/mes" },
];

const PLAN_BULLETS = [
  "Entrega inmediata (menos de 15 min)",
  "30 días de garantía de devolución",
  "Funciona en todos los dispositivos",
];

const CHANNEL_LOGOS = [
  { name: "TV4", img: chTv4.url },
  { name: "Viaplay", img: chViaplay.url },
  { name: "HBO", img: chHbo.url },
  { name: "Netflix", img: chNetflix.url },
  { name: "Disney+", img: chDisney.url },
  { name: "ESPN", img: chEspn.url },
  { name: "Eurosport", img: chEurosport.url },
  { name: "Sky Sports", img: chSky.url },
  { name: "Prime Video", img: chPrime.url },
  { name: "DAZN", img: chDazn.url },
  { name: "FOX", img: chFox.url },
  { name: "Apple TV", img: chAppleTv.url },
];

const DEVICES = [
  { name: "Smart TV", img: devSmartTv.url },
  { name: "Firestick", img: devFirestick.url },
  { name: "Apple TV", img: devAppleTv.url },
  { name: "Android", img: devAndroid.url },
  { name: "iPhone / iPad", img: devIphone.url },
  { name: "Ordenador", img: devDator.url },
];

const FEATURES = [
  { title: "Sin congelaciones", desc: "Reproducción estable sin buffering, incluso en deportes en vivo de alta calidad.", icon: Zap },
  { title: "Calidad 4K UHD", desc: "Imagen nítida en todos los canales que transmiten en 4K.", icon: Sparkles },
  { title: "Todos los dispositivos", desc: "Smart TV, Firestick, Apple TV, móvil, tablet y ordenador.", icon: Tv },
  { title: "Entrega en 15 min", desc: "Tus datos de acceso se envían por correo inmediatamente después del pago.", icon: Clock },
  { title: "Subtítulos en español", desc: "Películas y series con subtítulos y audio en español.", icon: Subtitles },
  { title: "Soporte WhatsApp", desc: "Obtén ayuda con la instalación cuando la necesites — personas reales.", icon: MessageCircle },
];

const FAQ = [
  {
    q: "¿Necesito un decodificador, antena o cable?",
    a: "No. Solo necesitas un dispositivo que ya tengas (Smart TV, móvil, tablet, Firestick u ordenador) y una conexión a internet.",
  },
  {
    q: "¿Funciona en mi TV y teléfono?",
    a: "Sí. Funciona en todos los Smart TV, Firestick, Apple TV, Android, iPhone, iPad y ordenador.",
  },
  {
    q: "¿Cómo lo instalo?",
    a: "Recibirás una guía paso a paso sencilla inmediatamente después de la compra, y estamos disponibles en WhatsApp si tienes algún problema.",
  },
  { q: "¿Cuánto tarda en llegar el acceso?", a: "Tus datos de acceso se envían en un plazo de 15 minutos tras el pago." },
  {
    q: "¿Hay permanencia o suscripción?",
    a: "No. Pagas una sola vez — sin suscripciones ni periodos de permanencia.",
  },
  {
    q: "¿Qué pasa si no estoy satisfecho?",
    a: "Tienes una garantía de devolución de dinero de 30 días. Contáctanos y lo solucionaremos.",
  },
];

function useCountdown(initialSeconds: number) {
  const [s, setS] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function PlanCard({
  plan,
  active,
  onSelect,
  wide = false,
}: {
  plan: Plan;
  active: boolean;
  onSelect: () => void;
  wide?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative w-full text-left rounded-2xl border-2 p-4 bg-card transition ${
        active ? "border-primary shadow-card" : "border-border hover:border-primary/40"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-2.5 left-3 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold text-primary-foreground whitespace-nowrap">
          {plan.badge}
        </span>
      )}
      <div className={`flex ${wide ? "items-center justify-between" : "flex-col"} gap-2`}>
        <div>
          <div className="text-sm font-semibold">{plan.label}</div>
          <div className="mt-1 flex items-baseline gap-2">
            <div className="text-2xl font-extrabold tracking-tight">{plan.price}€</div>
            <div className="text-xs text-muted-foreground line-through">{plan.base}€</div>
          </div>
          <div className="mt-0.5 text-[11px] font-medium text-success">{plan.perMonth}</div>
        </div>
        <div
          className={`h-5 w-5 rounded-full border-2 grid place-items-center shrink-0 ${
            active ? "border-primary bg-primary" : "border-border"
          } ${wide ? "" : "mt-2"}`}
        >
          {active && <Check className="h-3 w-3 text-primary-foreground" />}
        </div>
      </div>
    </button>
  );
}

function LandingPage() {
  const countdown = useCountdown(6 * 3600 - 10);
  const [selected, setSelected] = useState<Plan["id"]>("1y");
  const [device, setDevice] = useState<string | null>(null);
  const [screens, setScreens] = useState(1);
  const [shakeCta, setShakeCta] = useState(false);

  const plan = useMemo(() => PLANS.find((p) => p.id === selected)!, [selected]);
  const screenAdd = (screens - 1) * 20;
  const total = Number((plan.price + screenAdd).toFixed(2));
  const savings = Number((plan.base - plan.price).toFixed(2));

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleSelectPlan = (id: Plan["id"]) => {
    setSelected(id);
    setTimeout(() => scrollToId("devices"), 120);
  };

  const handleSelectDevice = (name: string) => {
    setDevice(name);
    setTimeout(() => scrollToId("checkout-summary"), 120);
    setShakeCta(false);
    requestAnimationFrame(() => setShakeCta(true));
    setTimeout(() => setShakeCta(false), 1600);
  };

  const handleCheckout = async () => {
    try {
      window.location.href = await requestIptvCheckout(selected, screens, total);
    } catch (error) {
      alert(error instanceof Error ? error.message : "No se pudo iniciar el pago.");
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-card/70 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="IPTVNord4K">
            <img src={brandLogo.url} alt="IPTVNord4K" className="h-7 w-auto" />
          </a>
          <a
            href="#bestall"
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition"
          >
            Comprar ahora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 pt-16 pb-20 text-center bg-gradient-hero overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_50%_0%,oklch(0.7_0.19_255/0.12),transparent_50%)]" />
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Campaña · 50% de descuento en todos los paquetes
        </div>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl sm:text-7xl font-bold leading-[1.02]">
          Todo lo que quieres ver.{" "}
          <span className="italic font-medium bg-gradient-primary bg-clip-text text-transparent">A mitad de precio.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          30.000+ canales, todo el deporte y 200.000+ películas y series. Una suscripción — en todos tus dispositivos.
        </p>

        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <strong className="text-foreground">4,9 de 5</strong>
          </span>
          <span>· 2.400+ clientes satisfechos</span>
          <span>· Entrega en 15 min</span>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="#bestall"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:brightness-110 hover:scale-[1.02] transition"
          >
            Elige tu paquete →
          </a>
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-promo px-5 py-2.5 text-sm font-semibold text-promo-foreground shadow-promo">
            <Clock className="h-4 w-4" />
            La oferta termina en {countdown}
          </div>
        </div>

        {/* Streaming bundle visual */}
        <div className="mx-auto mt-14 max-w-md animate-float-glow">
          <img
            src={channelsBundle.url}
            alt="Netflix, Prime Video, Disney+, Apple TV+ y Sky Sports — todo incluido"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Moving posters marquee */}
      <section className="py-14 overflow-hidden bg-card/40 border-y">
        <div className="text-center px-4 mb-8">
          <div className="text-xs font-bold tracking-widest text-primary">200.000+ TÍTULOS</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Películas y series en 4K — <span className="italic font-medium text-muted-foreground">actualizado cada semana.</span>
          </h2>
        </div>
        <div className="relative">
          <div className="flex gap-4 animate-marquee w-max">
            {[...POSTERS, ...POSTERS].map((src, i) => (
              <div
                key={i}
                className="w-40 sm:w-48 aspect-[2/3] rounded-xl overflow-hidden shadow-card shrink-0"
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-4 animate-marquee-reverse w-max">
            {[...POSTERS.slice().reverse(), ...POSTERS.slice().reverse()].map((src, i) => (
              <div
                key={i}
                className="w-40 sm:w-48 aspect-[2/3] rounded-xl overflow-hidden shadow-card shrink-0"
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Cup banner */}
      <section className="px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-accent/50 p-6 text-center">
          <div className="text-xs font-bold tracking-widest text-primary">FIFA MUNDIAL 2026</div>
          <p className="mt-2 text-lg">
            No te pierdas ni un momento del Mundial de Fútbol 2026 — cada partido, estés donde estés en el mundo.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span>4K UHD</span>·<span>30.000+ canales</span>·<span>Deporte en vivo & PPV</span>·
            <span>Todos los dispositivos</span>·<span>Entrega en 15 min</span>
          </div>
        </div>
      </section>

      {/* Order flow */}
      <section id="bestall" className="px-4 py-20">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Left: steps */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-promo/10 px-4 py-1.5 text-xs font-bold tracking-wide text-promo">
                SOLO HOY: OFERTA ESPECIAL
              </div>
              <h2 className="mt-3 text-3xl font-bold">Pide tu paquete</h2>
              <p className="mt-2 text-muted-foreground">
                Pagas una vez — sin suscripciones, sin contratos.
              </p>
              <ol className="mt-4 flex flex-wrap gap-3 text-sm">
                <li className="rounded-full bg-secondary px-3 py-1"><strong>1</strong> Elige paquete</li>
                <li className="rounded-full bg-secondary px-3 py-1"><strong>2</strong> Elige dispositivo</li>
                <li className="rounded-full bg-secondary px-3 py-1"><strong>3</strong> Pago seguro</li>
              </ol>
            </div>

            {/* Plans — 2 on top + 1 wide below */}
            <div className="grid grid-cols-2 gap-3">
              {PLANS.slice(0, 2).map((p) => (
                <PlanCard key={p.id} plan={p} active={selected === p.id} onSelect={() => handleSelectPlan(p.id)} />
              ))}
              <div className="col-span-2">
                <PlanCard plan={PLANS[2]} active={selected === PLANS[2].id} onSelect={() => handleSelectPlan(PLANS[2].id)} wide />
              </div>
            </div>

            {/* Devices */}
            <div id="devices" className="scroll-mt-24">
              <h3 className="text-lg font-semibold">Elige tu dispositivo</h3>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {DEVICES.map((d) => {
                  const active = device === d.name;
                  return (
                    <button
                      key={d.name}
                      onClick={() => handleSelectDevice(d.name)}
                      className={`rounded-xl border-2 p-3 flex flex-col items-center gap-2 bg-card transition ${
                        active ? "border-primary" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <img src={d.img} alt={d.name} className="h-16 w-16 object-contain" loading="lazy" />
                      <span className="text-sm font-medium">{d.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Screens */}
            <div>
              <h3 className="text-lg font-semibold">Número de pantallas</h3>
              <p className="text-sm text-muted-foreground">
                Cada pantalla puede ver diferentes canales al mismo tiempo.
              </p>
              <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[1, 2, 3, 4, 5, 6].map((n) => {
                  const active = screens === n;
                  return (
                    <button
                      key={n}
                      onClick={() => setScreens(n)}
                      className={`rounded-xl border-2 py-3 text-center bg-card transition ${
                        active ? "border-primary" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <div className="text-lg font-bold">{n}</div>
                      <div className="text-[11px] text-muted-foreground">
                        {n === 1 ? "Incluido" : `+${(n - 1) * 20}€`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Includes */}
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold">Incluido en todos los paquetes</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  "30.000+ Canales de TV en vivo",
                  "App de reproducción integrada gratis",
                  "Tecnología anti-congelación",
                  "220.000+ títulos VOD (actualizado semanalmente)",
                  "Subtítulos en español",
                  "Deporte, Documentales, Cine, Niños...",
                  "Todo el deporte mundial, PPV",
                  "Canales 4K, UHD, FHD, HD",
                  "Canales para adultos (opcional)",
                  "Mundial de Fútbol 2026 en vivo",
                  "Funciona en todos los dispositivos",
                  "Soporte dedicado 24/7",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-success shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: summary card */}
          <aside id="checkout-summary" className="lg:sticky lg:top-24 self-start scroll-mt-24">
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Tu pedido</h3>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Paquete</dt>
                  <dd>{plan.label}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Precio base</dt>
                  <dd>{plan.price}€</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Pantallas adicionales</dt>
                  <dd>+{screenAdd}€</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Dispositivo</dt>
                  <dd>{device ?? "—"}</dd>
                </div>
              </dl>
              <div className="my-4 border-t" />
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Total a pagar</div>
                  <div className="text-3xl font-bold">{total}€</div>
                  <div className="text-xs text-muted-foreground">Pago único</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Por mes</div>
                  <div className="text-sm font-semibold text-success">{plan.perMonth}</div>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-success/10 p-3 text-sm text-success">
                Ahorras <strong>{savings}€</strong> comparado con el precio ordinario.
              </div>
              <button
                onClick={handleCheckout}
                className={`mt-5 w-full rounded-full bg-gradient-primary py-3.5 text-base font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition ${
                  shakeCta ? "animate-cta-shake" : ""
                }`}
              >
                Ir a la caja segura — {total}€ →
              </button>

              <div className="mt-3 flex items-center justify-center gap-3 text-xs text-muted-foreground">
                <Shield className="h-3.5 w-3.5" /> Pago encriptado · TLS 1.3
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                {[
                  { src: payVisa.url, alt: "Visa" },
                  { src: payMastercard.url, alt: "Mastercard" },
                  { src: payAmex.url, alt: "American Express" },
                  { src: payKlarna.url, alt: "Klarna" },
                  { src: paySwish.url, alt: "Swish" },
                  { src: payPaypal.url, alt: "PayPal" },
                ].map((p) => (
                  <div
                    key={p.alt}
                    className="flex h-8 w-12 items-center justify-center rounded-md bg-white px-1.5 shadow-sm ring-1 ring-black/5"
                  >
                    <img src={p.src} alt={p.alt} className="max-h-5 max-w-full object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-success/30 bg-success/5 p-5">
              <div className="flex items-center gap-2 font-semibold text-success">
                <Award className="h-5 w-5" /> 30 días de devolución
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                ¿No estás satisfecho? Te devolvemos cada céntimo — sin preguntas complicadas.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Channels — one app */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs font-bold tracking-widest text-primary">TODOS LOS SERVICIOS</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Todos los canales — <span className="italic font-medium text-muted-foreground">una sola app.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            30.000+ canales en vivo de todo el mundo — reunidos en un solo acceso. Sin suscripciones separadas.
          </p>
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 gap-3">
            {CHANNEL_LOGOS.map((c) => (
              <div
                key={c.name}
                className="logo-tile aspect-[3/2] grid place-items-center rounded-xl bg-card shadow-card border border-border p-3 hover:border-primary/40 transition"
              >
                <img src={c.img} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            …y 30.000+ canales más — deporte, cine, noticias, niños, internacional.
          </p>
        </div>
      </section>

      {/* Customer testimonial videos */}
      <section className="py-20 overflow-hidden">
        <div className="text-center px-4 mb-10">
          <div className="text-xs font-bold tracking-widest text-primary">CLIENTES REALES</div>
          <h2 className="mt-2 text-4xl font-bold">
            Lo que dicen <span className="italic font-medium text-muted-foreground">nuestros clientes.</span>
          </h2>
        </div>
        <div className="relative">
          <div className="flex gap-4 animate-marquee w-max px-2">
            {[...TESTIMONIAL_MEDIA, ...TESTIMONIAL_MEDIA].map((m, i) => (
              <div
                key={i}
                className="relative w-44 sm:w-56 aspect-[9/16] rounded-2xl overflow-hidden shadow-card shrink-0 bg-card"
              >
                {m.type === "image" ? (
                  <>
                    <img src={m.src} alt="" loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="h-12 w-12 rounded-full bg-white/85 backdrop-blur grid place-items-center shadow-card">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 ml-0.5 fill-foreground"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <video
                    src={m.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground px-4">
          2.400+ clientes satisfechos · 4,9 de 5 de valoración media
        </p>
      </section>

      {/* Features */}
      <section className="px-4 py-20 bg-card/50 border-y">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs font-bold tracking-widest text-primary">POR QUÉ IPTVNORD4K</div>
            <h2 className="mt-2 text-4xl font-bold">
              Diseñado para que simplemente <span className="italic font-medium text-muted-foreground">funcione.</span>
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl bg-card p-6 shadow-card">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sports & content */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="text-xs font-bold tracking-widest text-primary">TODO EL DEPORTE</div>
          <h2 className="mt-2 text-4xl font-bold">
            Cada partido — <span className="italic font-medium text-muted-foreground">sin interrupciones.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            La Liga, Champions League, Premier League, Mundial 2026, F1, UFC y más — en vivo hasta 4K.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {SPORTS.map((s) => (
              <div
                key={s.label}
                className="relative aspect-video rounded-xl overflow-hidden shadow-card"
              >
                <img src={s.img} alt={s.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-left text-white text-sm font-semibold drop-shadow">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 bg-card/50 border-y">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="text-xs font-bold tracking-widest text-primary">PREGUNTAS FRECUENTES</div>
            <h2 className="mt-2 text-4xl font-bold">
              Respuestas rápidas — <span className="italic font-medium text-muted-foreground">sin complicaciones.</span>
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {FAQ.map((f, i) => (
              <details key={i} className="group rounded-2xl bg-card p-5 shadow-card">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {f.q}
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold">¿Listo para empezar a ver?</h2>
        <p className="mt-4 text-muted-foreground">Acceso en 15 minutos — empieza a ver ahora mismo.</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-promo px-5 py-2.5 text-sm font-semibold text-promo-foreground shadow-promo">
          <Clock className="h-4 w-4" /> La oferta termina en {countdown}
        </div>
        <div className="mt-6">
          <a
            href="#bestall"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:brightness-110 hover:scale-[1.02] transition"
          >
            Elige tu paquete →
          </a>
        </div>
      </section>

      <footer className="border-t bg-card/60 px-4 py-10 text-center text-sm text-muted-foreground">
        <img src={brandLogo.url} alt="IPTVNord4K" className="mx-auto h-9 w-auto" />
        <p className="mt-2">iptvnord4k.com · © {new Date().getFullYear()} — Todos los derechos reservados.</p>
      </footer>

      {/* Sticky mobile checkout bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t bg-card/95 backdrop-blur shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.4)]">
        <div className="px-4 pt-3 pb-2 flex items-center justify-between gap-3">
          <div className="leading-tight">
            <div className="text-[11px] text-muted-foreground">La oferta termina en</div>
            <div className="text-sm font-bold text-promo">{countdown}</div>
          </div>
          <a
            href="#checkout-summary"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("checkout-summary");
            }}
            className={`flex-1 text-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow ${
              shakeCta ? "animate-cta-shake" : ""
            }`}
          >
            Comprar ahora — {total}€
          </a>
        </div>
        <div className="px-4 pb-2 flex flex-wrap items-center justify-center gap-1.5">
          {[
            { src: payVisa.url, alt: "Visa" },
            { src: payMastercard.url, alt: "Mastercard" },
            { src: payAmex.url, alt: "American Express" },
            { src: payKlarna.url, alt: "Klarna" },
            { src: paySwish.url, alt: "Swish" },
            { src: payPaypal.url, alt: "PayPal" },
          ].map((p) => (
            <div
              key={p.alt}
              className="flex h-6 w-9 items-center justify-center rounded-sm bg-white px-1 shadow-sm ring-1 ring-black/5"
            >
              <img src={p.src} alt={p.alt} className="max-h-4 max-w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden h-28" aria-hidden />
    </div>
  );
}
