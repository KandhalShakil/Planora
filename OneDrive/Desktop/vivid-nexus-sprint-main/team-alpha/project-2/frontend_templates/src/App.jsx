import React, { useState, useEffect } from "react";
import {
  Menu, X, ArrowRight, ArrowUpRight, Check, MapPin, Phone, Mail,
  Clock, Sparkles, Palette, KeyRound, Heart, Sofa, Ruler, Lamp,
  Building2, Quote, ChevronDown, Send, CheckCircle2
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Design tokens                                                      */
/* ------------------------------------------------------------------ */
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&family=Jost:wght@300;400;500;600&display=swap');
`;

const COLORS = {
  cream: "#F1E7DC",
  creamSoft: "#F7F0E7",
  olive: "#363827",
  oliveDeep: "#2B2C1E",
  maroon: "#7C3F3C",
  gold: "#CBA35C",
  ink: "#2A2A20",
  inkSoft: "#5B5A4C",
  line: "#DCCEBC",
};

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */
function Eyebrow({ children }) {
  return (
    <span
      style={{
        fontFamily: "'Jost', sans-serif",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        fontSize: 12,
        color: COLORS.maroon,
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}

function Script({ children }) {
  return (
    <span
      style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        color: COLORS.maroon,
        fontWeight: 500,
        position: "relative",
        display: "inline-block",
      }}
    >
      {children}
      <svg
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        style={{ position: "absolute", left: 0, bottom: -6, width: "100%", height: 12 }}
      >
        <path d="M2,8 C60,2 140,2 198,8" fill="none" stroke={COLORS.maroon} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Logo({ onClick, dark }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: "0.02em",
        color: dark ? COLORS.creamSoft : COLORS.oliveDeep,
      }}
    >
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: `2px solid ${COLORS.maroon}`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Sparkles size={14} color={COLORS.maroon} />
      </span>
      Marlowe&nbsp;&amp;&nbsp;Oak
    </button>
  );
}

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Our Services" },
];

function Header({ page, go }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id) => {
    go(id);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(247,240,231,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.line}` : "1px solid transparent",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo onClick={() => navigate("home")} />

        <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Jost', sans-serif",
                fontSize: 15,
                color: page === item.id ? COLORS.maroon : COLORS.ink,
                fontWeight: page === item.id ? 600 : 400,
                borderBottom: page === item.id ? `2px solid ${COLORS.maroon}` : "2px solid transparent",
                paddingBottom: 4,
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate("book")}
            style={{
              fontFamily: "'Jost', sans-serif",
              background: COLORS.oliveDeep,
              color: COLORS.creamSoft,
              border: "none",
              borderRadius: 999,
              padding: "11px 26px",
              fontSize: 14,
              letterSpacing: "0.04em",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Book Us <ArrowUpRight size={15} />
          </button>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setOpen((o) => !o)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="mobile-menu"
          style={{
            background: COLORS.creamSoft,
            borderTop: `1px solid ${COLORS.line}`,
            padding: "18px 24px 26px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{
                textAlign: "left",
                background: "none",
                border: "none",
                fontFamily: "'Jost', sans-serif",
                fontSize: 16,
                color: page === item.id ? COLORS.maroon : COLORS.ink,
                cursor: "pointer",
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate("book")}
            style={{
              fontFamily: "'Jost', sans-serif",
              background: COLORS.oliveDeep,
              color: COLORS.creamSoft,
              border: "none",
              borderRadius: 999,
              padding: "12px 24px",
              fontSize: 14,
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            Book Us
          </button>
        </div>
      )}
    </header>
  );
}

function Footer({ go }) {
  const navigate = (id) => {
    go(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer style={{ background: COLORS.creamSoft, paddingTop: 56 }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px 40px",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: 300 }}>
          <Logo onClick={() => navigate("home")} />
          <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: 14.5, lineHeight: 1.7, marginTop: 14 }}>
            Interiors shaped around how you actually live — considered, warm, and built to last.
          </p>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          <a href="tel:+15551234567" style={{ ...footIconStyle }}><Phone size={16} color={COLORS.oliveDeep} /></a>
          <a href="mailto:hello@marloweoak.studio" style={{ ...footIconStyle }}><Mail size={16} color={COLORS.oliveDeep} /></a>
          <button onClick={() => navigate("contact")} style={{ ...footIconStyle, cursor: "pointer" }}><MapPin size={16} color={COLORS.oliveDeep} /></button>
        </div>
      </div>

      <div
        style={{
          borderTop: `1px solid ${COLORS.line}`,
          padding: "22px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          justifyContent: "center",
        }}
      >
        {[
          { id: "privacy", label: "Privacy Policy" },
          { id: "contact", label: "Contact Us" },
          { id: "terms", label: "Terms of Service" },
        ].map((l) => (
          <button
            key={l.id}
            onClick={() => navigate(l.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Jost', sans-serif",
              fontSize: 13.5,
              color: COLORS.inkSoft,
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center", padding: "8px 24px 40px" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: COLORS.oliveDeep, letterSpacing: "0.01em" }}>
          Marlowe &amp; Oak
        </span>
        <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: 12.5, marginTop: 10 }}>
          © {new Date().getFullYear()} Marlowe &amp; Oak Interior Design Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
const footIconStyle = {
  width: 38,
  height: 38,
  borderRadius: "50%",
  border: `1px solid ${COLORS.line}`,
  background: "#fff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
};

/* ------------------------------------------------------------------ */
/*  HOME PAGE                                                          */
/* ------------------------------------------------------------------ */
function Hero({ go }) {
  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px 0" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: 28,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 480,
        }}
        className="hero-grid"
      >
        <div style={{ padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Eyebrow>Interior Design Studio</Eyebrow>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(34px, 5vw, 52px)",
              lineHeight: 1.12,
              color: COLORS.ink,
              margin: "16px 0 22px",
              fontWeight: 600,
            }}
          >
            Today's <Script>Design</Script>
            <br />
            for Tomorrow's
            <br />
            <Script>Lifestyle</Script>
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: 16, lineHeight: 1.7, maxWidth: 380 }}>
            We turn ordinary rooms into spaces that fit the way you actually live — thoughtful, personal, and built around you.
          </p>
          <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              onClick={() => go("book")}
              style={{
                fontFamily: "'Jost', sans-serif",
                background: COLORS.oliveDeep,
                color: COLORS.creamSoft,
                border: "none",
                borderRadius: 999,
                padding: "15px 30px",
                fontSize: 14,
                letterSpacing: "0.03em",
                cursor: "pointer",
                textTransform: "lowercase",
              }}
            >
              start your change now
            </button>
            <button
              onClick={() => go("services")}
              style={{
                fontFamily: "'Jost', sans-serif",
                background: "transparent",
                color: COLORS.ink,
                border: `1px solid ${COLORS.line}`,
                borderRadius: 999,
                padding: "15px 26px",
                fontSize: 14,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              See our services <ArrowRight size={15} />
            </button>
          </div>
        </div>
        <div style={{ position: "relative", minHeight: 320 }}>
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
            alt="Bright modern living room with soft furnishings"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section style={{ maxWidth: 1180, margin: "56px auto 0", padding: "0 24px" }}>
      <div
        style={{
          background: COLORS.olive,
          borderRadius: 28,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="who-grid"
      >
        <img
          src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80"
          alt="Designer selecting fabric and colour swatches"
          style={{ width: "100%", height: "100%", minHeight: 300, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, color: "#fff", margin: 0, fontWeight: 600 }}>
            Who <span style={{ color: COLORS.gold }}>We Are</span>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: 15.5, lineHeight: 1.8, marginTop: 18 }}>
            We understand the challenges of creating excellent spaces within functionality, elegance, and aesthetics.
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: 15.5, lineHeight: 1.8, marginTop: 14 }}>
            As one of the region's leading interior design studios, we've made it our mission to simplify the process — turning it into homely comfort for every client we work with.
          </p>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { value: "120+", label: "Clients' problems have been resolved" },
  { value: "98%", label: "Customer's satisfaction feedback" },
  { value: "3,000+", label: "Engagements to our services raised daily" },
  { value: "15", label: "Teams ready at your service 24/7" },
];

function Stats() {
  return (
    <section style={{ maxWidth: 1180, margin: "20px auto 0", padding: "0 24px" }}>
      <div
        style={{
          background: COLORS.olive,
          borderRadius: 28,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        className="stats-grid"
      >
        {STATS.map((s, i) => (
          <div
            key={s.value}
            style={{
              padding: "38px 20px",
              textAlign: "center",
              borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "#fff", fontWeight: 600 }}>{s.value}</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 8, lineHeight: 1.5 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const WHY_US = [
  {
    title: "Expertise in Creativity",
    text: "Our teams are experts in their fields, bringing out maximum quality in creative results.",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Stress-Free Process",
    text: "We handle the difficult processes — decision-making, time-consuming planning, all of it.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Access to Exclusivity",
    text: "Our clients are given access to exclusive resources that aren't available to regular customers.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "A Home That Reflects You",
    text: "Our designers don't just impose their style — they listen to your preferences, needs, and daily habits.",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=500&q=80",
  },
];

function WhyUs() {
  return (
    <section style={{ maxWidth: 1180, margin: "72px auto 0", padding: "0 24px" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, textAlign: "center", color: COLORS.ink, margin: 0 }}>
        Why Us?
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          marginTop: 34,
        }}
        className="why-grid"
      >
        {WHY_US.map((w) => (
          <div
            key={w.title}
            style={{
              position: "relative",
              borderRadius: 22,
              overflow: "hidden",
              minHeight: 360,
              background: COLORS.olive,
            }}
          >
            <img
              src={w.img}
              alt={w.title}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.34 }}
            />
            <div style={{ position: "relative", padding: "26px 22px", display: "flex", flexDirection: "column", height: "100%" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: COLORS.gold, fontSize: 20, lineHeight: 1.3, fontWeight: 600 }}>
                {w.title}
              </h3>
              <p style={{ fontFamily: "'Jost', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: 13.5, lineHeight: 1.6, marginTop: 12 }}>
                {w.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomePage({ go }) {
  return (
    <>
      <Hero go={go} />
      <WhoWeAre />
      <Stats />
      <WhyUs />
      <CTA go={go} />
    </>
  );
}

function CTA({ go }) {
  return (
    <section style={{ maxWidth: 1180, margin: "72px auto 0", padding: "0 24px" }}>
      <div
        style={{
          background: "#fff",
          border: `1px solid ${COLORS.line}`,
          borderRadius: 28,
          padding: "48px 40px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: COLORS.ink, margin: 0 }}>
            Ready to reimagine your space?
          </h3>
          <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: 14.5, marginTop: 8 }}>
            Book a free first consultation — no obligation, just ideas.
          </p>
        </div>
        <button
          onClick={() => go("book")}
          style={{
            fontFamily: "'Jost', sans-serif",
            background: COLORS.oliveDeep,
            color: COLORS.creamSoft,
            border: "none",
            borderRadius: 999,
            padding: "15px 30px",
            fontSize: 14,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            flexShrink: 0,
          }}
        >
          Book Us <ArrowUpRight size={15} />
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT PAGE                                                         */
/* ------------------------------------------------------------------ */
const TEAM = [
  { name: "Naomi Fitcher", role: "Founder & Principal Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  { name: "Idris Cole", role: "Head of Spatial Planning", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80" },
  { name: "Priya Anand", role: "Materials & Colour Lead", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" },
  { name: "Marcus Odell", role: "Client Experience Manager", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
];

function AboutPage({ go }) {
  return (
    <>
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 24px 0" }}>
        <Eyebrow>About Us</Eyebrow>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4.5vw,46px)", color: COLORS.ink, margin: "14px 0 18px", maxWidth: 720 }}>
          A studio built around <Script>listening</Script> before designing.
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: 16, lineHeight: 1.8, maxWidth: 620 }}>
          Marlowe &amp; Oak started in 2014 with a simple idea: a home should be designed around the people who live in it, not the other way round. A decade on, we've carried a hundred-plus households through that same process — careful, collaborative, and genuinely enjoyable.
        </p>
      </section>

      <WhoWeAre />
      <Stats />

      <section style={{ maxWidth: 1180, margin: "72px auto 0", padding: "0 24px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: COLORS.ink, textAlign: "center", margin: 0 }}>
          The People Behind the Studio
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 34 }} className="why-grid">
          {TEAM.map((t) => (
            <div key={t.name} style={{ textAlign: "center" }}>
              <img
                src={t.img}
                alt={t.name}
                style={{ width: "100%", aspectRatio: "1/1.1", objectFit: "cover", borderRadius: 20 }}
              />
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: COLORS.ink, margin: "14px 0 4px" }}>{t.name}</h4>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12.5, color: COLORS.inkSoft }}>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA go={go} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICES PAGE                                                      */
/* ------------------------------------------------------------------ */
const SERVICES = [
  { icon: Sofa, title: "Full Home Design", price: "from $4,800", text: "End-to-end planning, sourcing, and styling for every room in your home." },
  { icon: Ruler, title: "Single Room Makeover", price: "from $1,200", text: "A focused refresh for one space — living room, bedroom, or home office." },
  { icon: Palette, title: "Colour & Material Consult", price: "from $350", text: "A two-hour session narrowing down palette, textures, and finishes." },
  { icon: Building2, title: "Commercial Interiors", price: "custom quote", text: "Studios, showrooms, and offices designed to represent your brand." },
  { icon: Lamp, title: "Lighting Design", price: "from $600", text: "Layered lighting plans that shape mood as much as visibility." },
  { icon: KeyRound, title: "Move-In Styling", price: "from $900", text: "Furniture, decor, and finishing touches ready before you unpack." },
];

const PROCESS = [
  { step: "Consult", text: "We start with a conversation about how you live and what's not working." },
  { step: "Concept", text: "Mood boards, floor plans, and material palettes come together for your review." },
  { step: "Source", text: "We handle procurement, trades, and timelines so you don't have to." },
  { step: "Reveal", text: "Final styling, walkthrough, and a space that finally feels like yours." },
];

function ServicesPage({ go }) {
  return (
    <>
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 24px 0" }}>
        <Eyebrow>Our Services</Eyebrow>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4.5vw,46px)", color: COLORS.ink, margin: "14px 0 18px", maxWidth: 700 }}>
          Design help, however much you <Script>need it</Script>.
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: 16, lineHeight: 1.8, maxWidth: 600 }}>
          From a single consultation to a full home transformation, choose the level of support that fits your project.
        </p>
      </section>

      <section style={{ maxWidth: 1180, margin: "44px auto 0", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="services-grid">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#fff",
                border: `1px solid ${COLORS.line}`,
                borderRadius: 22,
                padding: "30px 26px",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  background: COLORS.olive,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <s.icon size={20} color={COLORS.gold} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, color: COLORS.ink, margin: "18px 0 6px" }}>{s.title}</h3>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13.5, color: COLORS.inkSoft, lineHeight: 1.6 }}>{s.text}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 18 }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: COLORS.maroon, fontWeight: 600 }}>{s.price}</span>
                <button
                  onClick={() => go("book")}
                  style={{ background: "none", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4, color: COLORS.ink, fontFamily: "'Jost', sans-serif", fontSize: 13 }}
                >
                  Book <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "72px auto 0", padding: "0 24px" }}>
        <div style={{ background: COLORS.olive, borderRadius: 28, padding: "48px 40px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: "#fff", margin: "0 0 30px", textAlign: "center" }}>
            How a Project Runs
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="why-grid">
            {PROCESS.map((p, i) => (
              <div key={p.step}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: COLORS.gold, fontWeight: 600 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#fff", margin: "10px 0 6px" }}>{p.step}</h4>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.6 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA go={go} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  BOOK US PAGE (working form)                                        */
/* ------------------------------------------------------------------ */
function Field({ label, children }) {
  return (
    <label style={{ display: "block", marginBottom: 20 }}>
      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: COLORS.ink, fontWeight: 500, display: "block", marginBottom: 8 }}>
        {label}
      </span>
      {children}
    </label>
  );
}

const inputStyle = {
  width: "100%",
  fontFamily: "'Jost', sans-serif",
  fontSize: 14.5,
  padding: "13px 16px",
  borderRadius: 12,
  border: `1px solid ${COLORS.line}`,
  background: "#fff",
  color: COLORS.ink,
  boxSizing: "border-box",
  outline: "none",
};

function BookPage({ go }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Full Home Design", date: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (!form.phone.trim()) errs.phone = "Please enter a phone number.";
    if (!form.date) errs.date = "Please choose a preferred date.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section style={{ maxWidth: 640, margin: "80px auto", padding: "0 24px", textAlign: "center" }}>
        <CheckCircle2 size={54} color={COLORS.maroon} />
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: COLORS.ink, margin: "18px 0 12px" }}>
          Thank you, {form.name.split(" ")[0]}.
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: 15.5, lineHeight: 1.8 }}>
          Your request for <strong>{form.service}</strong> on <strong>{form.date}</strong> has been received. We'll reach out at {form.email} within one business day to confirm the details.
        </p>
        <button
          onClick={() => { setSubmitted(false); go("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            marginTop: 26,
            fontFamily: "'Jost', sans-serif",
            background: COLORS.oliveDeep,
            color: COLORS.creamSoft,
            border: "none",
            borderRadius: 999,
            padding: "14px 28px",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Back to home
        </button>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 24px 90px" }}>
      <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
        <Eyebrow>Book Us</Eyebrow>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4vw,42px)", color: COLORS.ink, margin: "14px 0 12px" }}>
          Let's start your <Script>change</Script>
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: 15.5, lineHeight: 1.7 }}>
          Tell us a little about your project and we'll be in touch to book your first consultation.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 32, alignItems: "start" }} className="book-grid">
        <form
          onSubmit={submit}
          style={{ background: "#fff", border: `1px solid ${COLORS.line}`, borderRadius: 24, padding: "34px 30px" }}
          noValidate
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
            <Field label="Full name">
              <input style={inputStyle} value={form.name} onChange={update("name")} placeholder="Jane Carter" />
              {errors.name && <ErrorText text={errors.name} />}
            </Field>
            <Field label="Phone">
              <input style={inputStyle} value={form.phone} onChange={update("phone")} placeholder="+1 555 123 4567" />
              {errors.phone && <ErrorText text={errors.phone} />}
            </Field>
          </div>

          <Field label="Email">
            <input style={inputStyle} value={form.email} onChange={update("email")} placeholder="jane@email.com" />
            {errors.email && <ErrorText text={errors.email} />}
          </Field>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
            <Field label="Service">
              <select style={inputStyle} value={form.service} onChange={update("service")}>
                {SERVICES.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Just a consultation</option>
              </select>
            </Field>
            <Field label="Preferred date">
              <input type="date" style={inputStyle} value={form.date} onChange={update("date")} />
              {errors.date && <ErrorText text={errors.date} />}
            </Field>
          </div>

          <Field label="Tell us about your space (optional)">
            <textarea
              style={{ ...inputStyle, minHeight: 100, resize: "vertical", fontFamily: "'Jost', sans-serif" }}
              value={form.message}
              onChange={update("message")}
              placeholder="Room type, style you love, timeline..."
            />
          </Field>

          <button
            type="submit"
            style={{
              width: "100%",
              fontFamily: "'Jost', sans-serif",
              background: COLORS.oliveDeep,
              color: COLORS.creamSoft,
              border: "none",
              borderRadius: 999,
              padding: "15px 24px",
              fontSize: 14.5,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 6,
            }}
          >
            Submit request <Send size={15} />
          </button>
        </form>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <InfoCard icon={Clock} title="Response time" text="We reply to every booking within one business day." />
          <InfoCard icon={MapPin} title="Studio visits" text="In-studio and on-site consultations available." />
          <InfoCard icon={Phone} title="Prefer to talk?" text="Call us directly at +1 555 123 4567." />
        </div>
      </div>
    </section>
  );
}

function ErrorText({ text }) {
  return <span style={{ fontFamily: "'Jost', sans-serif", color: COLORS.maroon, fontSize: 12, marginTop: 6, display: "block" }}>{text}</span>;
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div style={{ background: COLORS.olive, borderRadius: 20, padding: "22px 24px", display: "flex", gap: 14, alignItems: "flex-start" }}>
      <Icon size={18} color={COLORS.gold} style={{ marginTop: 3, flexShrink: 0 }} />
      <div>
        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15.5, color: "#fff", margin: "0 0 4px" }}>{title}</h4>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.72)", lineHeight: 1.55, margin: 0 }}>{text}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT PAGE                                                       */
/* ------------------------------------------------------------------ */
function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (form.name && /^\S+@\S+\.\S+$/.test(form.email) && form.message) setSent(true);
  };

  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 24px 90px" }}>
      <Eyebrow>Contact Us</Eyebrow>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4vw,42px)", color: COLORS.ink, margin: "14px 0 34px" }}>
        Say <Script>hello</Script>
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="book-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <InfoCard icon={MapPin} title="Studio address" text="14 Ashworth Lane, Ahmedabad, Gujarat" />
          <InfoCard icon={Phone} title="Phone" text="+1 555 123 4567" />
          <InfoCard icon={Mail} title="Email" text="hello@marloweoak.studio" />
          <InfoCard icon={Clock} title="Studio hours" text="Mon–Sat, 10am – 7pm" />
        </div>

        {sent ? (
          <div style={{ background: "#fff", border: `1px solid ${COLORS.line}`, borderRadius: 24, padding: "34px 30px", textAlign: "center" }}>
            <CheckCircle2 size={40} color={COLORS.maroon} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: COLORS.ink, margin: "14px 0 8px" }}>Message sent</h3>
            <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: 14 }}>
              Thanks, {form.name.split(" ")[0]} — we'll reply to {form.email} shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ background: "#fff", border: `1px solid ${COLORS.line}`, borderRadius: 24, padding: "34px 30px" }} noValidate>
            <Field label="Name">
              <input style={inputStyle} value={form.name} onChange={update("name")} placeholder="Your name" />
            </Field>
            <Field label="Email">
              <input style={inputStyle} value={form.email} onChange={update("email")} placeholder="you@email.com" />
            </Field>
            <Field label="Message">
              <textarea style={{ ...inputStyle, minHeight: 130, resize: "vertical", fontFamily: "'Jost', sans-serif" }} value={form.message} onChange={update("message")} placeholder="How can we help?" />
            </Field>
            <button
              type="submit"
              style={{
                width: "100%",
                fontFamily: "'Jost', sans-serif",
                background: COLORS.oliveDeep,
                color: COLORS.creamSoft,
                border: "none",
                borderRadius: 999,
                padding: "15px 24px",
                fontSize: 14.5,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              Send message <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  LEGAL PAGES                                                        */
/* ------------------------------------------------------------------ */
function LegalPage({ title, sections }) {
  return (
    <section style={{ maxWidth: 820, margin: "0 auto", padding: "56px 24px 90px" }}>
      <Eyebrow>Legal</Eyebrow>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px,4vw,42px)", color: COLORS.ink, margin: "14px 0 30px" }}>{title}</h1>
      {sections.map((s) => (
        <div key={s.h} style={{ marginBottom: 26 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, color: COLORS.ink, marginBottom: 8 }}>{s.h}</h3>
          <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: 14.5, lineHeight: 1.8 }}>{s.p}</p>
        </div>
      ))}
    </section>
  );
}

const PRIVACY_SECTIONS = [
  { h: "What we collect", p: "When you book a consultation or contact us, we collect your name, email, phone number, and any project details you choose to share." },
  { h: "How we use it", p: "Your information is used only to respond to your enquiry, schedule consultations, and share relevant project updates. We never sell client data." },
  { h: "Data retention", p: "We keep enquiry and project records for as long as needed to deliver our services, and no longer than legally required afterward." },
  { h: "Your rights", p: "You can request a copy of your data, ask us to correct it, or ask us to delete it at any time by contacting hello@marloweoak.studio." },
];

const TERMS_SECTIONS = [
  { h: "Booking a consultation", p: "Submitting the booking form is a request, not a confirmed appointment. We'll confirm your slot by email or phone within one business day." },
  { h: "Project estimates", p: "Prices shown on the Services page are starting estimates. A final quote is provided after your initial consultation, based on scope." },
  { h: "Cancellations", p: "Consultations can be rescheduled or cancelled free of charge up to 24 hours in advance." },
  { h: "Intellectual property", p: "Design concepts, drawings, and mood boards remain the property of the studio until a project is signed and paid in full." },
];

/* ------------------------------------------------------------------ */
/*  APP SHELL                                                          */
/* ------------------------------------------------------------------ */
export default function App() {
  const [page, setPage] = useState("home");

  const go = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let content;
  if (page === "home") content = <HomePage go={go} />;
  else if (page === "about") content = <AboutPage go={go} />;
  else if (page === "services") content = <ServicesPage go={go} />;
  else if (page === "book") content = <BookPage go={go} />;
  else if (page === "contact") content = <ContactPage />;
  else if (page === "privacy") content = <LegalPage title="Privacy Policy" sections={PRIVACY_SECTIONS} />;
  else if (page === "terms") content = <LegalPage title="Terms of Service" sections={TERMS_SECTIONS} />;
  else content = <HomePage go={go} />;

  return (
    <div style={{ background: COLORS.cream, minHeight: "100vh" }}>
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; }
        body { margin: 0; }
        button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible {
          outline: 2px solid ${COLORS.maroon};
          outline-offset: 2px;
        }
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .who-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid > div:nth-child(3) { border-left: none !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .book-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Header page={page} go={go} />
      {content}
      <Footer go={go} />
    </div>
  );
}
