"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company, stats } from "@/data/content";
import { useReveal } from "@/components/ui/useReveal";

export default function AboutPreview() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} style={{ background: "#f5f5f5", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "6px", background: "#cc0000" }} />
      <div className="container section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "80px", alignItems: "center" }}>

          {/* Left */}
          <div className="reveal">
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
              <div style={{ width: "40px", height: "3px", background: "#cc0000", flexShrink: 0 }} />
              <span style={{ color: "#cc0000", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Who We Are</span>
            </div>
            <h2 className="h-display h2" style={{ color: "#080808", marginBottom: "32px" }}>
              BUILDING<br /><span style={{ color: "#cc0000" }}>NIGERIA&rsquo;S</span><br />FUTURE
            </h2>
            <p className="body-xl reveal delay-1" style={{ color: "rgba(0,0,0,0.55)", marginBottom: "20px" }}>{company.about}</p>
            <p className="body-md reveal delay-2" style={{ color: "rgba(0,0,0,0.38)", marginBottom: "48px" }}>{company.aboutExtended}</p>
            <Link href="/about" className="reveal delay-3"
              style={{ display: "inline-flex", alignItems: "center", gap: "12px", height: "60px", padding: "0 36px", background: "#080808", color: "#fff", fontSize: "14px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.22s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#cc0000")}
              onMouseLeave={e => (e.currentTarget.style.background = "#080808")}>
              About RTCC <ArrowRight size={17} />
            </Link>
          </div>

          {/* Stats */}
          <div className="reveal delay-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", background: "rgba(0,0,0,0.1)" }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{ background: i % 2 === 0 ? "#080808" : "#cc0000", padding: "52px 44px" }}>
                <div className="h-display" style={{ color: "#fff", fontSize: "clamp(48px,6vw,72px)", lineHeight: 1, marginBottom: "14px" }}>{s.value}</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
