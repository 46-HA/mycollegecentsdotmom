import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0A0F1A",
  surface: "#111827",
  surfaceHover: "#162033",
  border: "#1E2D45",
  borderHover: "#2A4060",
  blue: "#3B82F6",
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
  { Icon: IconMentorship, title: "Mentorship", desc: "Get matched with college students and recent graduated who've been in your shoes." },
  { Icon: IconTestPrep, title: "Test Prep", desc: "SAT, ACT, and AP resources that are completely free for any student." },
  { Icon: IconStudyRooms, title: "Study Rooms", desc: "Spaces to stay accountable, find focus, and lock-in with others just like you." },
  { Icon: IconGuides, title: "Guides Library", desc: "Read about FAFSA, essays, applications.." },
  { Icon: IconOpportunities, title: "Opportunities", desc: "Scholarships, internships, and programs curated for you." },
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
          >Join waitlist</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 2rem 80px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 680 }}>
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
          maxWidth: 500, margin: "0 auto 12px",
          lineHeight: 1.75,
          animation: "hFadeUp 0.65s ease 0.2s both",
        }}>
          Helping FGLI students get into college.
        </p>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
          color: COLORS.textMuted,
          maxWidth: 480, margin: "0 auto 44px",
          lineHeight: 1.7,
          animation: "hFadeUp 0.65s ease 0.25s both",
        }}>
          Built for students, by a{" "}
          {/* Replace href with your personal page URL */}
          <a href="#" style={{ color: COLORS.blue, textDecoration: "none", borderBottom: `1px solid rgba(59,130,246,0.4)` }}
            onMouseEnter={e => e.currentTarget.style.borderBottomColor = COLORS.blue}
            onMouseLeave={e => e.currentTarget.style.borderBottomColor = "rgba(59,130,246,0.4)"}
          >student</a>
          . Free, open-source, and open to everyone — forever.
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
            Join the waitlist
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
      `}</style>
    </section>
  );
}

function Features() {
  return (
    <section id="features" style={{ padding: "100px 2rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: COLORS.textPrimary, marginBottom: 14, letterSpacing: "-1px", lineHeight: 1.08 }}>
            Everything you might need.<br />
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: COLORS.textSecondary, maxWidth: 440, lineHeight: 1.7, marginBottom: 60 }}>
            Nothing you have to pay for.
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
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: COLORS.blue, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>
            Why we exist
          </p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: COLORS.textPrimary, marginBottom: 28, letterSpacing: "-1px", lineHeight: 1.08 }}>
            Built for students.<br />by students.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: COLORS.textSecondary, lineHeight: 1.85, marginBottom: 20 }}>






Although I'm still a high school freshman, I realized applying to other high schools was harder than I thought it would be. I felt so lost. In my family, the only other person who had gone to college was my sister; even then, I didn’t know anything about CollegeBoard, how to write an essay, or where to even begin. I made numerous poor financial decisions and allocated my time on things that only pushed me further from my goals.  Having my sister by my side helped me cross the finish line and press the "Submit" button. I wish to pass that same spirit and advice on to someone else, even if it’s just one person I help.          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: COLORS.textSecondary, lineHeight: 1.85 }}>
   FGLI students are usually underrepresented, underfunded, and excluded from resources. MyCollegeCents aims to help close the gap by providing free tools, mentorship, and a welcoming community for all students.          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" style={{ padding: "120px 2rem", position: "relative", zIndex: 1 }}>
      <FadeIn>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, color: COLORS.textPrimary, marginBottom: 16, letterSpacing: "-1.5px", lineHeight: 1.06 }}>
            We're still working on it. (Psst: it's just one student working on it)
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: COLORS.textSecondary, lineHeight: 1.75, marginBottom: 36 }}>
            Join the waitlist and we'll let you know when we're ready. Feel free to reach out to me at Hussein@MyCollegeCents.com
          </p>
          {/* Replace href with your Fillout form URL */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
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
            Join the waitlist
          </a>
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