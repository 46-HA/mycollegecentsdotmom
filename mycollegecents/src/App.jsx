import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0A0F1A",
  surface: "#111827",
  surfaceHover: "#162033",
  border: "#1E2D45",
  borderHover: "#2A4060",
  blue: "#3B82F6",
  blueGlow: "rgba(59,130,246,0.15)",
  textPrimary: "#F1F5F9",
  textSecondary: "#94A3B8",
  textMuted: "#475569",
};

function ParticleBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H, particles;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function init() {
      resize();
      particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.4,
        speed: Math.random() * 0.35 + 0.1,
        drift: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.4 + 0.1,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${p.opacity})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
        if (p.x < -4) p.x = W + 4;
        if (p.x > W + 4) p.x = -4;
      }
      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", init); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />
  );
}

function IconMentorship() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <circle cx="18" cy="16" r="7" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="32" cy="20" r="5" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M6 38c0-6 5-10 12-10s12 4 12 10" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 26c4 0 8 3 8 8" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
    </svg>
  );
}

function IconTestPrep() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <rect x="10" y="8" width="28" height="34" rx="3" stroke="#3B82F6" strokeWidth="1.5" />
      <path d="M28 10v8h8" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="16" y1="22" x2="32" y2="22" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="28" x2="32" y2="28" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="34" x2="24" y2="34" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="34" cy="34" r="5" fill="#0A0F1A" stroke="#3B82F6" strokeWidth="1.5" />
      <path d="M31.8 34l1.7 1.7 3.3-3.4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconStudyRooms() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="14" width="16" height="12" rx="3" stroke="#3B82F6" strokeWidth="1.5" />
      <rect x="26" y="8" width="16" height="12" rx="3" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="14" y1="26" x2="14" y2="32" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="20" x2="34" y2="32" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
      <line x1="8" y1="32" x2="40" y2="32" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="34.5" r="2" fill="#3B82F6" />
      <circle cx="34" cy="34.5" r="2" fill="#3B82F6" opacity="0.4" />
    </svg>
  );
}

function IconGuides() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <path d="M10 38V12a2 2 0 012-2h18l8 8v20a2 2 0 01-2 2H12a2 2 0 01-2-2z" stroke="#3B82F6" strokeWidth="1.5" />
      <path d="M28 10v8h8" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="16" y1="24" x2="32" y2="24" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="30" x2="28" y2="30" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconOpportunities() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <polygon points="24,8 28,18 39,18 30,25 33,36 24,29 15,36 18,25 9,18 20,18" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <circle cx="24" cy="24" r="4.5" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

const FEATURES = [
  { Icon: IconMentorship, title: "Mentorship", desc: "Get matched with college students and recent grads who've walked your path. Real talk, no scripts." },
  { Icon: IconTestPrep, title: "Test Prep", desc: "SAT, ACT, and AP resources built for students who can't afford $200/hr tutors." },
  { Icon: IconStudyRooms, title: "Study Rooms", desc: "Virtual spaces to stay accountable, find focus, and grind alongside people who get it." },
  { Icon: IconGuides, title: "Guides Library", desc: "FAFSA, essays, applications — step-by-step guides on everything they forgot to teach you." },
  { Icon: IconOpportunities, title: "Opportunities", desc: "Scholarships, internships, and programs curated for first-gen and low-income students." },
];

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function OtterMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="14" fill="#3B82F6" />
      <ellipse cx="14" cy="15" rx="5.5" ry="4.5" fill="rgba(255,255,255,0.12)" />
      <ellipse cx="14" cy="14.5" rx="4" ry="3.5" fill="#E8F0FE" />
      <circle cx="12" cy="13.5" r="0.9" fill="#1D4ED8" />
      <circle cx="16" cy="13.5" r="0.9" fill="#1D4ED8" />
      <ellipse cx="14" cy="16" rx="1.3" ry="0.7" fill="#C9A987" />
      <ellipse cx="9.5" cy="15.5" rx="1.8" ry="1.1" fill="#C9A987" />
      <ellipse cx="18.5" cy="15.5" rx="1.8" ry="1.1" fill="#C9A987" />
      <ellipse cx="14" cy="10.5" rx="4" ry="3.5" fill="#C9A987" />
      <ellipse cx="14" cy="10" rx="2.5" ry="2.2" fill="#E8C9AA" />
      <circle cx="10.5" cy="8.5" r="1.5" fill="#C9A987" />
      <circle cx="17.5" cy="8.5" r="1.5" fill="#C9A987" />
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? "rgba(10,15,26,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <OtterMark />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color: COLORS.textPrimary }}>MyCollegeCents</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {[["Features", "#features"], ["About", "#about"]].map(([label, href]) => (
            <a key={label} href={href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: COLORS.textSecondary, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = COLORS.textPrimary}
              onMouseLeave={e => e.target.style.color = COLORS.textSecondary}
            >{label}</a>
          ))}
          <a href="#cta" style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14,
            color: COLORS.bg, background: COLORS.blue, padding: "9px 22px",
            borderRadius: 100, textDecoration: "none", transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.target.style.opacity = "0.85"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >Get started</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 2rem 80px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 680 }}>
        <div style={{
          display: "inline-block", border: `1px solid ${COLORS.border}`,
          borderRadius: 100, padding: "5px 16px", marginBottom: 32,
          fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500,
          color: COLORS.textMuted, letterSpacing: "0.08em", textTransform: "uppercase",
          animation: "hFadeDown 0.6s ease both",
        }}>
          Free for every student
        </div>

        <h1 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "clamp(3.2rem, 7vw, 5.8rem)",
          fontWeight: 900, lineHeight: 1.02,
          color: COLORS.textPrimary,
          margin: "0 0 24px",
          letterSpacing: "-2.5px",
          animation: "hFadeUp 0.65s ease 0.1s both",
        }}>
          College is{" "}
          <span style={{ color: COLORS.blue, fontStyle: "italic" }}>for you</span>
          {" "}too.
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(1rem, 2vw, 1.15rem)",
          color: COLORS.textSecondary,
          maxWidth: 500, margin: "0 auto 44px",
          lineHeight: 1.75,
          animation: "hFadeUp 0.65s ease 0.2s both",
        }}>
          Mentorship, test prep, study rooms, guides, and opportunities — all free. Built by students who had to figure it out alone.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", animation: "hFadeUp 0.65s ease 0.3s both" }}>
          <a href="#cta" style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
            color: COLORS.bg, background: COLORS.blue, padding: "13px 34px",
            borderRadius: 100, textDecoration: "none", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Get started
          </a>
          <a href="#features" style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 15,
            color: COLORS.textSecondary, padding: "13px 34px",
            borderRadius: 100, textDecoration: "none",
            border: `1px solid ${COLORS.border}`, transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.borderHover; e.currentTarget.style.color = COLORS.textPrimary; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.textSecondary; }}
          >
            See what we offer
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,900&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; background: ${COLORS.bg}; }
        body { background: ${COLORS.bg}; }
        @keyframes hFadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @keyframes hFadeDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}

function Features() {
  return (
    <section id="features" style={{ padding: "100px 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: COLORS.blue, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            What we offer
          </p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: COLORS.textPrimary, marginBottom: 14, letterSpacing: "-1px", lineHeight: 1.08 }}>
            Everything you need.<br />Nothing you have to pay for.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: COLORS.textSecondary, maxWidth: 440, lineHeight: 1.7, marginBottom: 60 }}>
            We built the toolkit we wish someone had handed us.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.07}>
              <div
                style={{
                  background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                  borderRadius: 16, padding: "28px 24px",
                  transition: "border-color 0.25s, background 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.borderHover; e.currentTarget.style.background = COLORS.surfaceHover; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.background = COLORS.surface; }}
              >
                <div style={{ marginBottom: 20 }}><Icon /></div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 18, color: COLORS.textPrimary, marginBottom: 8 }}>{title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: COLORS.textSecondary, lineHeight: 1.65 }}>{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: "100px 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <FadeIn>
          <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 24, padding: "48px 40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, background: COLORS.blueGlow, borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: COLORS.blue, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
              Our mission
            </p>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)", fontWeight: 700, color: COLORS.textPrimary, lineHeight: 1.45, marginBottom: 32 }}>
              "Built by students who had to figure it out alone. Now you don't have to."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <OtterMark />
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, color: COLORS.textPrimary }}>The MCC Team</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: COLORS.textMuted }}>First-gen students, for first-gen students</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: COLORS.blue, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            Who we are
          </p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: COLORS.textPrimary, marginBottom: 20, letterSpacing: "-1px", lineHeight: 1.08 }}>
            Built by students.<br />For students.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.75, marginBottom: 16 }}>
            Too many first-gen and low-income students enter the college process without a roadmap. The resources that exist are scattered, expensive, or locked behind paywalls.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.75, marginBottom: 36 }}>
            We built MyCollegeCents to change that. Free mentorship, real guides, and a community that actually shows up — because everyone deserves a fair shot.
          </p>
          <div style={{ display: "flex", gap: 36 }}>
            {[["100%", "Free, always"], ["5", "Core tools"], ["0", "Hidden fees"]].map(([num, label]) => (
              <div key={label}>
                <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 30, color: COLORS.blue, lineHeight: 1 }}>{num}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: COLORS.textMuted, marginTop: 5 }}>{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" style={{ padding: "120px 2rem", position: "relative", zIndex: 1, textAlign: "center" }}>
      <FadeIn>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: COLORS.blue, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            Ready?
          </p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, color: COLORS.textPrimary, marginBottom: 20, letterSpacing: "-1.5px", lineHeight: 1.06 }}>
            Your seat at the table<br />is waiting.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.75, marginBottom: 44 }}>
            Join students who are done figuring it out alone. It's free, built for you, and almost here.
          </p>

          <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 20, padding: "44px 36px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 300, height: 200, background: COLORS.blueGlow, borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none" }} />
            <svg width="40" height="40" viewBox="0 0 44 44" fill="none" style={{ marginBottom: 20 }}>
              <rect x="6" y="20" width="32" height="18" rx="3" stroke="#3B82F6" strokeWidth="1.5" />
              <path d="M14 20V14a8 8 0 0116 0v6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="22" cy="29" r="2.5" fill="#3B82F6" />
              <line x1="22" y1="31.5" x2="22" y2="34" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 20, color: COLORS.textPrimary, marginBottom: 10 }}>
              We're almost ready.
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: COLORS.textSecondary, lineHeight: 1.7, marginBottom: 28 }}>
              Sign-up is coming soon. We'll let you know the moment the doors open.
            </p>
            <a
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: "inline-block",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
                color: COLORS.bg, background: COLORS.blue,
                padding: "13px 38px", borderRadius: 100, textDecoration: "none",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Get early access
            </a>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: COLORS.textMuted, marginTop: 16 }}>
              No spam. Just a heads-up when we launch.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${COLORS.border}`, padding: "28px 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <OtterMark />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: COLORS.textPrimary }}>MyCollegeCents</span>
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: COLORS.textMuted }}>
          © {new Date().getFullYear()} MyCollegeCents. Free, forever.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
      <ParticleBackground />
      <Nav />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}