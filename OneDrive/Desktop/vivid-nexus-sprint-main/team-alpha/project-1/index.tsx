import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catery — Savor the Pause, Love the Brew" },
      {
        name: "description",
        content:
          "A quiet neighborhood cafe for unhurried mornings, honest coffee, and pastries baked before sunrise.",
      },
      { property: "og:title", content: "Catery — Savor the Pause, Love the Brew" },
      {
        property: "og:description",
        content: "Slow coffee, warm rooms, and a reason to stay a little longer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catery,
});

/* ---------- palette ----------
   espresso #1B0F06 · cocoa #3D2817 · cream #F6EFE3 · copper #B5652E · sage #6E7A54 · gold #E9B27C
------------------------------- */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Specials", href: "#specials" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
];

type IconType = "tart" | "mugcake" | "latte" | "coldfoam" | "eclair";
type Product = { name: string; tag: string; price: string; icon: IconType };

const PRODUCTS: Product[] = [
  { name: "Cheeseberry Tart", tag: "Baked fresh", price: "$5.80", icon: "tart" },
  { name: "Strawberry Mug Cake", tag: "Single serve", price: "$4.50", icon: "mugcake" },
  { name: "Signature Latte", tag: "House blend", price: "$4.20", icon: "latte" },
  { name: "Lavender Cold Foam", tag: "Seasonal", price: "$5.00", icon: "coldfoam" },
  { name: "Pistachio Éclair", tag: "Chef's pick", price: "$4.80", icon: "eclair" },
];

function ProductIcon({ type, className }: { type: IconType; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "tart":
      return (
        <svg viewBox="0 0 64 64" className={className} {...common}>
          <path d="M10 40c0-12 10-20 22-20s22 8 22 20" />
          <path d="M8 40h48" />
          <circle cx="22" cy="30" r="2.2" fill="currentColor" stroke="none" />
          <circle cx="32" cy="26" r="2.2" fill="currentColor" stroke="none" />
          <circle cx="42" cy="31" r="2.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "mugcake":
      return (
        <svg viewBox="0 0 64 64" className={className} {...common}>
          <rect x="16" y="26" width="32" height="26" rx="3" />
          <path d="M48 32h5a5 5 0 0 1 0 10h-5" />
          <path d="M20 26c0-8 6-14 12-14s12 6 12 14" />
          <path d="M32 12v-4" />
        </svg>
      );
    case "latte":
      return (
        <svg viewBox="0 0 64 64" className={className} {...common}>
          <path d="M14 24h30l-3 24a6 6 0 0 1-6 5H23a6 6 0 0 1-6-5z" />
          <path d="M44 26h4a6 6 0 0 1 0 12h-5" />
          <path d="M20 15c1-3 4-3 5-6M30 15c1-3 4-3 5-6" />
        </svg>
      );
    case "coldfoam":
      return (
        <svg viewBox="0 0 64 64" className={className} {...common}>
          <path d="M18 18h28l-4 34H22z" />
          <path d="M14 18h36" />
          <path d="M24 18c0-6 3.5-9 8-9s8 3 8 9" />
        </svg>
      );
    case "eclair":
      return (
        <svg viewBox="0 0 64 64" className={className} {...common}>
          <rect x="8" y="28" width="48" height="14" rx="7" />
          <path d="M12 28c2-4 6-6 10-6M42 28c2-4 6-6 10-6" />
          <circle cx="20" cy="22" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="32" cy="19" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="44" cy="22" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

function HeroCup() {
  return (
    <svg viewBox="0 0 360 360" className="w-full h-full">
      <defs>
        <radialGradient id="cupGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E9B27C" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#B5652E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#B5652E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cupBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBF5E9" />
          <stop offset="60%" stopColor="#EEDFC5" />
          <stop offset="100%" stopColor="#D9C29E" />
        </linearGradient>
        <linearGradient id="coffeeTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C542A" />
          <stop offset="55%" stopColor="#4A2C14" />
          <stop offset="100%" stopColor="#2A1608" />
        </linearGradient>
        <linearGradient id="ringShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B5652E" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#E9B27C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B5652E" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <circle cx="180" cy="180" r="170" fill="url(#cupGlow)" />
      <circle cx="180" cy="180" r="130" fill="none" stroke="#B5652E" strokeOpacity="0.15" strokeDasharray="2 6" />

      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${138 + i * 42} 92 C ${128 + i * 42} 68, ${148 + i * 42} 52, ${138 + i * 42} 28`}
          stroke="#F6EFE3"
          strokeOpacity="0.75"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="steam"
          style={{ animationDelay: `${i * 0.7}s` }}
        />
      ))}

      <ellipse cx="180" cy="132" rx="94" ry="22" fill="url(#coffeeTop)" />
      <ellipse cx="180" cy="128" rx="70" ry="10" fill="#F6EFE3" fillOpacity="0.08" />

      <path
        d="M86 132 L106 258 a22 22 0 0 0 22 19 h104 a22 22 0 0 0 22-19 L268 132 Z"
        fill="url(#cupBody)"
        stroke="#B5652E"
        strokeOpacity="0.35"
      />
      <path d="M268 156 h20 a24 24 0 0 1 0 48 h-16" fill="none" stroke="#B5652E" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="180" cy="132" rx="94" ry="22" fill="none" stroke="url(#ringShine)" strokeWidth="2" />

      <g opacity="0.85" stroke="#B5652E" strokeOpacity="0.35" strokeWidth="1.2" fill="none">
        <path d="M140 200 q10 -6 20 0 t20 0 t20 0 t20 0" />
        <path d="M140 220 q10 -6 20 0 t20 0 t20 0 t20 0" />
      </g>

      <style>{`
        .steam { animation: rise 3s ease-in-out infinite; transform-origin: center; }
        @keyframes rise {
          0% { opacity: 0; transform: translateY(6px); }
          40% { opacity: 0.85; }
          100% { opacity: 0; transform: translateY(-18px); }
        }
        @media (prefers-reduced-motion: reduce) { .steam { animation: none; opacity: 0.5; } }
      `}</style>
    </svg>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1B0F06]/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-[#F6EFE3] p-8 shadow-2xl"
        style={{ animation: "pop .25s ease-out" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-9 w-9 rounded-full text-[#1B0F06]/60 hover:bg-[#1B0F06]/5 hover:text-[#1B0F06] transition"
          aria-label="Close"
        >
          ✕
        </button>
        {!sent ? (
          <>
            <p className="text-xs uppercase tracking-[0.25em] text-[#B5652E]">Say hello</p>
            <h3 className="font-display text-3xl text-[#1B0F06] mt-2">Get in touch</h3>
            <p className="text-sm text-[#1B0F06]/60 mt-1">Visit us, or drop a note below.</p>
            <form
              className="mt-6 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#1B0F06]/10 focus:border-[#B5652E] focus:outline-none text-[#1B0F06] placeholder:text-[#1B0F06]/40"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#1B0F06]/10 focus:border-[#B5652E] focus:outline-none text-[#1B0F06] placeholder:text-[#1B0F06]/40"
              />
              <textarea
                required
                rows={3}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#1B0F06]/10 focus:border-[#B5652E] focus:outline-none text-[#1B0F06] placeholder:text-[#1B0F06]/40 resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#3D2817] to-[#1B0F06] text-[#F6EFE3] font-medium hover:from-[#B5652E] hover:to-[#8C4A1F] transition-colors shadow-lg shadow-[#1B0F06]/20"
              >
                Send message
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-[#1B0F06]/10 text-sm text-[#1B0F06]/70 space-y-1">
              <p>+1 992-435-143</p>
              <p>contact@catery.com</p>
              <p>4554 Oak Ave Suite 130, San Diego, CA 92124</p>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#E9B27C] to-[#B5652E] grid place-items-center text-2xl text-[#F6EFE3] shadow-lg">
              ☕
            </div>
            <h3 className="font-display text-2xl text-[#1B0F06] mt-4">Message sent</h3>
            <p className="text-sm text-[#1B0F06]/60 mt-2">
              Thanks for reaching out — we'll get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#1B0F06] text-[#F6EFE3] text-sm hover:bg-[#B5652E] transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
      <style>{`@keyframes pop { from { transform: scale(.94); opacity:0 } to { transform: scale(1); opacity:1 } }`}</style>
    </div>
  );
}

function Catery() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  const visible = [0, 1, 2, 3].map((i) => PRODUCTS[(slide + i) % PRODUCTS.length]);
  const nextSlide = () => setSlide((s) => (s + 1) % PRODUCTS.length);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="font-body min-h-screen bg-[#F6EFE3] text-[#1B0F06] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Work+Sans:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-body { font-family: 'Work Sans', sans-serif; }
        .nav-link { position: relative; }
        .nav-link::after {
          content: ''; position: absolute; left: 0; bottom: -6px;
          width: 0%; height: 1.5px; background: #B5652E;
          transition: width .3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .grain::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(rgba(27,15,6,0.06) 1px, transparent 1px);
          background-size: 3px 3px; mix-blend-mode: multiply; opacity: .6;
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F6EFE3]/80 border-b border-[#1B0F06]/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="h-9 w-9 grid place-items-center rounded-full bg-gradient-to-br from-[#B5652E] to-[#3D2817] text-[#F6EFE3] text-sm shadow-md shadow-[#B5652E]/25">
              ☕
            </span>
            <span className="font-display text-xl tracking-wide">CATERY</span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-sm text-[#1B0F06]/80 hover:text-[#1B0F06]">
                {l.label}
              </a>
            ))}
            <button
              onClick={() => setContactOpen(true)}
              className="px-5 py-2 rounded-full border border-[#1B0F06] text-sm hover:bg-[#1B0F06] hover:text-[#F6EFE3] transition-colors"
            >
              Contact Us
            </button>
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-5 flex flex-col gap-3 border-t border-[#1B0F06]/5 bg-[#F6EFE3]">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-1">
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                setContactOpen(true);
              }}
              className="text-left font-semibold text-[#B5652E] py-1"
            >
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative grain overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 500px at 85% -10%, rgba(233,178,124,0.35), transparent 60%), radial-gradient(900px 500px at -10% 110%, rgba(110,122,84,0.18), transparent 55%), #F6EFE3",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B0F06]/5 text-xs uppercase tracking-[0.22em] text-[#3D2817]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5652E]" />
              Small batch · Slow brewed
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] mt-6 text-[#1B0F06]">
              Savor the Pause,
              <br />
              <span className="italic text-[#B5652E]">Love</span> the Brew.
            </h1>
            <p className="mt-6 text-lg text-[#3D2817]/80 max-w-lg leading-relaxed">
              A quiet corner for unhurried mornings, honest coffee, and pastries baked before
              sunrise. Come sit a while — the pot's always on.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setContactOpen(true)}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#3D2817] to-[#1B0F06] text-[#F6EFE3] font-medium shadow-lg shadow-[#1B0F06]/25 hover:shadow-xl hover:shadow-[#B5652E]/30 hover:from-[#B5652E] hover:to-[#8C4A1F] transition-all"
              >
                Visit Us
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <a href="#menu" className="text-sm underline underline-offset-4 decoration-[#B5652E]/60 hover:text-[#B5652E]">
                Browse the menu
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-[#3D2817]/70">
              <div>
                <div className="font-display text-3xl text-[#1B0F06]">12+</div>
                <div className="text-xs uppercase tracking-widest">Years brewing</div>
              </div>
              <div className="h-10 w-px bg-[#1B0F06]/15" />
              <div>
                <div className="font-display text-3xl text-[#1B0F06]">2</div>
                <div className="text-xs uppercase tracking-widest">Cozy locations</div>
              </div>
              <div className="h-10 w-px bg-[#1B0F06]/15" />
              <div>
                <div className="font-display text-3xl text-[#1B0F06]">★ 4.9</div>
                <div className="text-xs uppercase tracking-widest">1.2k reviews</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square max-w-lg mx-auto w-full">
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#E9B27C]/40 to-transparent blur-2xl" />
            <HeroCup />
          </div>
        </div>
      </section>

      {/* DAILY SPECIAL */}
      <section id="specials" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden grain shadow-2xl shadow-[#1B0F06]/20"
               style={{
                 background:
                   "linear-gradient(160deg, #3D2817 0%, #1B0F06 60%, #0E0703 100%)",
               }}>
            <div className="absolute inset-0 opacity-40"
                 style={{ background: "radial-gradient(circle at 30% 30%, #B5652E, transparent 55%)" }} />
            <div className="absolute inset-0 flex items-center justify-center text-[#E9B27C]">
              <ProductIcon type="eclair" className="w-56 h-56" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[#F6EFE3]">
              <div className="text-xs uppercase tracking-[0.25em] text-[#E9B27C]">Fresh today</div>
              <div className="font-display text-2xl">$4.80</div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#B5652E]">Today's Feature</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-[#1B0F06]">Daily Specials</h2>
            <p className="mt-5 text-[#3D2817]/80 text-lg leading-relaxed max-w-md">
              A crisp, hollow-centered éclair layered with dark chocolate ganache and finished
              with a dusting of crushed pistachio. Rich, crunchy, and gone in three bites —
              made fresh, one tray a day.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1B0F06] hover:bg-[#1B0F06] hover:text-[#F6EFE3] transition-colors"
            >
              Grab One for Yourself <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCT CAROUSEL */}
      <section id="menu" className="py-24 bg-gradient-to-b from-[#F6EFE3] to-[#EEDFC5]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B5652E]">The Menu</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-[#1B0F06]">From the Counter</h2>
            </div>
            <button
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border border-[#1B0F06] hover:bg-[#1B0F06] hover:text-[#F6EFE3] transition-colors grid place-items-center"
              aria-label="Next"
            >
              →
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {visible.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="group relative bg-[#F6EFE3] rounded-3xl p-6 border border-[#1B0F06]/10 hover:border-[#B5652E]/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1B0F06]/10"
              >
                <div className="aspect-square rounded-2xl grid place-items-center mb-5 text-[#B5652E]"
                     style={{
                       background:
                         "radial-gradient(circle at 30% 25%, rgba(233,178,124,0.35), transparent 60%), #FBF5E9",
                     }}>
                  <ProductIcon type={p.icon} className="w-24 h-24 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#B5652E]">{p.tag}</p>
                <div className="flex items-baseline justify-between mt-2">
                  <h3 className="font-display text-xl text-[#1B0F06]">{p.name}</h3>
                  <span className="font-display text-[#3D2817]">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-[#B5652E]">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-[#1B0F06]">About Catery</h2>
            <p className="mt-5 text-[#3D2817]/80 text-lg leading-relaxed">
              Catery began as a single espresso cart and grew into two neighborhood cafes built
              around the same idea: good coffee deserves an unrushed moment. Every cup is pulled
              to order, every pastry baked in-house, and every seat is yours for as long as you
              need it.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#1B0F06]/[0.04]">
                <span className="text-[#B5652E]">📍</span>
                <div>
                  <p className="font-medium">San Diego</p>
                  <p className="text-sm text-[#3D2817]/70">4554 Oak Ave Suite 130, CA 92124</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#1B0F06]/[0.04]">
                <span className="text-[#B5652E]">📍</span>
                <div>
                  <p className="font-medium">Miami</p>
                  <p className="text-sm text-[#3D2817]/70">2913 Oak Pl Apt 156, FL 33155</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-[#B5652E]">★★★★★</span>
              <span className="italic text-[#3D2817]/80">"Savor the pause, love the brew."</span>
            </div>
          </div>

          <div className="order-1 md:order-2 relative aspect-square rounded-[2rem] overflow-hidden grain shadow-xl shadow-[#1B0F06]/20"
               style={{
                 background:
                   "linear-gradient(180deg, #E9B27C 0%, #B5652E 50%, #3D2817 100%)",
               }}>
            {/* abstract cafe interior */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="win" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F6EFE3" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#E9B27C" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* window */}
              <rect x="60" y="60" width="130" height="180" rx="6" fill="url(#win)" />
              <line x1="125" y1="60" x2="125" y2="240" stroke="#1B0F06" strokeOpacity=".3" />
              <line x1="60" y1="150" x2="190" y2="150" stroke="#1B0F06" strokeOpacity=".3" />
              {/* counter */}
              <rect x="40" y="270" width="320" height="20" fill="#1B0F06" fillOpacity=".55" />
              <rect x="40" y="290" width="320" height="80" fill="#1B0F06" fillOpacity=".35" />
              {/* pendant lamps */}
              {[240, 290, 340].map((x, i) => (
                <g key={i}>
                  <line x1={x} y1="0" x2={x} y2="70" stroke="#1B0F06" strokeOpacity=".4" />
                  <circle cx={x} cy="80" r="10" fill="#E9B27C" />
                  <circle cx={x} cy="80" r="18" fill="#E9B27C" fillOpacity=".25" />
                </g>
              ))}
              {/* mug on counter */}
              <g transform="translate(240,240)">
                <rect x="0" y="0" width="34" height="26" rx="3" fill="#F6EFE3" />
                <path d="M34 6 h6 a6 6 0 0 1 0 12 h-6" fill="none" stroke="#F6EFE3" strokeWidth="2.5" />
                <ellipse cx="17" cy="3" rx="14" ry="3" fill="#3D2817" />
              </g>
              {/* plant */}
              <g transform="translate(300,190)">
                <rect x="0" y="40" width="30" height="30" rx="3" fill="#3D2817" />
                <path d="M15 40 C 5 20, -5 10, 5 -5" stroke="#6E7A54" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M15 40 C 25 20, 35 5, 30 -8" stroke="#6E7A54" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M15 40 C 15 20, 15 5, 18 -12" stroke="#6E7A54" strokeWidth="3" fill="none" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B0F06] text-[#F6EFE3] pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none"
             style={{ background: "radial-gradient(600px 300px at 80% 0%, rgba(181,101,46,0.4), transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 grid place-items-center rounded-full bg-gradient-to-br from-[#E9B27C] to-[#B5652E] text-[#1B0F06] text-sm">
                ☕
              </span>
              <span className="font-display text-xl tracking-wide">CATERY</span>
            </div>
            <p className="mt-5 text-sm text-[#F6EFE3]/60 max-w-xs leading-relaxed">
              Slow coffee, warm rooms, and a reason to stay a little longer.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E9B27C] mb-4">Contact</h4>
            <button
              onClick={() => setContactOpen(true)}
              className="text-sm text-[#F6EFE3]/70 hover:text-[#E9B27C] block mb-2 text-left transition-colors"
            >
              +1 992-435-143
            </button>
            <button
              onClick={() => setContactOpen(true)}
              className="text-sm text-[#F6EFE3]/70 hover:text-[#E9B27C] block text-left transition-colors"
            >
              contact@catery.com
            </button>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E9B27C] mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-[#F6EFE3]/70">
              <li className="hover:text-[#E9B27C] transition-colors cursor-pointer">@caterycafe</li>
              <li className="hover:text-[#E9B27C] transition-colors cursor-pointer">@caterygram</li>
              <li className="hover:text-[#E9B27C] transition-colors cursor-pointer">@caterypage</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E9B27C] mb-4">Others</h4>
            <ul className="space-y-2 text-sm text-[#F6EFE3]/70">
              <li className="hover:text-[#E9B27C] transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-[#E9B27C] transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#E9B27C] transition-colors cursor-pointer">Booking Info</li>
            </ul>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 mt-14 pt-6 border-t border-[#F6EFE3]/10 text-xs text-[#F6EFE3]/40 flex flex-wrap justify-between gap-3">
          <p>© {new Date().getFullYear()} Catery. All rights reserved.</p>
          <p>Crafted with care · Brewed with love</p>
        </div>
      </footer>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  );
}
