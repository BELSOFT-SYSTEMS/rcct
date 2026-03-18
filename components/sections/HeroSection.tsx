"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { company, stats } from "@/data/content";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const fn = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    el.addEventListener("mousemove", fn);
    return () => el.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section ref={ref} id="home" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", overflow: "hidden",
      background: "radial-gradient(ellipse at var(--mx,20%) var(--my,60%), rgba(204,0,0,0.1) 0%, transparent 55%), #080808",
    }}>
      {/* Grid texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.02, pointerEvents: "none",
        backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Left red bar */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "4px",
        background: "linear-gradient(to bottom, transparent, #cc0000 30%, #cc0000 70%, transparent)",
      }} />

      {/* Ghost RTCC */}
      <div style={{
        position: "absolute", right: "-1vw", bottom: "80px",
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: "clamp(120px, 26vw, 300px)", lineHeight: 1,
        color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.025)",
        pointerEvents: "none", userSelect: "none",
      }}>RTCC</div>

      {/* Main content */}
      <div className="container rise-1" style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "flex-end", paddingTop: "160px", paddingBottom: "0",
      }}>
        {/* Overline */}
        <div className="rise-1" style={{
          display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px",
        }}>
          <div style={{ width: "44px", height: "3px", background: "#cc0000", flexShrink: 0 }} />
          <span style={{ color: "#cc0000", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Est. {company.established} · Abuja, Nigeria
          </span>
        </div>

        {/* Headline */}
        <h1 className="rise-2 h-display h1" style={{ color: "#fff", marginBottom: "44px", maxWidth: "960px" }}>
          <span style={{ display: "block" }}>ENGINEERING</span>
          <span style={{ display: "block", color: "#cc0000" }}>EXCELLENCE</span>
          <span style={{ display: "block", color: "rgba(255,255,255,0.07)" }}>IN NIGERIA</span>
        </h1>

        {/* Description + CTAs */}
        <div className="rise-3" style={{
          maxWidth: "580px", marginBottom: "0",
          display: "flex", flexDirection: "column", gap: "36px",
        }}>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "19px", lineHeight: "1.85", margin: 0 }}>
            Civil engineering, telecommunications, oil &amp; gas and procurement —
            delivering quality across Nigeria and beyond since {company.established}.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <Link href="/services" className="btn btn-red">
              Our Services <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="rise-4" style={{
        position: "relative", zIndex: 10, marginTop: "72px",
        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div className="container">
          <div className="stats-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderLeft: "1px solid rgba(255,255,255,0.07)",
          }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                padding: "36px 40px",
                borderRight: "1px solid rgba(255,255,255,0.07)",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.07)" : undefined,
              }}>
                <div className="h-display" style={{
                  color: "#fff", fontSize: "clamp(40px, 5vw, 64px)",
                  lineHeight: 1, marginBottom: "8px",
                }}>{s.value}</div>
                <div style={{
                  color: "rgba(255,255,255,0.4)", fontSize: "12px",
                  fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase",
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll nudge */}
      <div style={{
        position: "absolute", bottom: "200px", left: "50%",
        transform: "translateX(-50%)", opacity: 0.2,
      }}>
        <ChevronDown size={22} color="#fff" />
      </div>
    </section>
  );
}
