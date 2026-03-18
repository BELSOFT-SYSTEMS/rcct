"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import { useReveal } from "@/components/ui/useReveal";

export default function ServicesPreview() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} style={{ background: "#080808" }}>
      <div className="container section">

        {/* Header */}
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "flex-end",
          justifyContent: "space-between", gap: "24px", marginBottom: "56px",
        }}>
          <div className="reveal">
            <div className="overline" style={{ color: "#cc0000" }}>What We Do</div>
            <h2 className="h-display h2" style={{ color: "#fff" }}>
              OUR <span style={{ color: "#cc0000" }}>SERVICES</span>
            </h2>
          </div>
          <Link href="/services" className="reveal delay-1" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            color: "rgba(255,255,255,0.45)", fontSize: "14px",
            fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
            textDecoration: "none", borderBottom: "2px solid rgba(255,255,255,0.15)",
            paddingBottom: "6px", transition: "color 0.2s, border-color 0.2s",
          }}>
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid — 4 col desktop, 2 col tablet, 1 col mobile */}
        <div className="service-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "2px", background: "rgba(255,255,255,0.06)",
        }}>
          {services.map((s, i) => (
            <div key={s.id} className="reveal" style={{
              background: "#080808", padding: "44px 36px",
              cursor: "default", transition: "background 0.25s",
              position: "relative", overflow: "hidden",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "#111")}
              onMouseLeave={e => (e.currentTarget.style.background = "#080808")}>
              <div style={{
                position: "absolute", top: "20px", right: "20px",
                fontFamily: "var(--font-display)", fontSize: "48px",
                fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1,
                pointerEvents: "none",
              }}>{String(i + 1).padStart(2, "0")}</div>
              <div style={{ width: "28px", height: "3px", background: "#cc0000", marginBottom: "32px" }} />
              <div style={{ fontSize: "38px", marginBottom: "20px" }}>{s.icon}</div>
              <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "14px", lineHeight: "1.3" }}>{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.32)", fontSize: "15px", lineHeight: "1.8", marginBottom: "28px" }}>{s.description}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#cc0000", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Learn more <ArrowUpRight size={13} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: "56px", paddingTop: "48px",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "flex", justifyContent: "center",
        }}>
          <Link href="/services" className="btn btn-red reveal">
            Explore All Services <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
