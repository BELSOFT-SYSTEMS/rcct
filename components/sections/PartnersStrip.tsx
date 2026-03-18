"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { partners } from "@/data/content";
import { useReveal } from "@/components/ui/useReveal";

export default function PartnersStrip() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} style={{ background: "#fff" }}>
      <div className="container section">
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "flex-end",
          justifyContent: "space-between", gap: "20px", marginBottom: "48px",
        }}>
          <div className="reveal">
            <div className="overline" style={{ color: "#cc0000" }}>Trusted By</div>
            <h2 className="h-display h2" style={{ color: "#080808" }}>
              OUR <span style={{ color: "#cc0000" }}>PARTNERS</span>
            </h2>
          </div>
          <Link href="/about#partners" className="reveal delay-1" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            color: "rgba(0,0,0,0.4)", fontSize: "14px", fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase",
            textDecoration: "none", borderBottom: "2px solid rgba(0,0,0,0.12)",
            paddingBottom: "6px",
          }}>
            All Partners <ArrowRight size={15} />
          </Link>
        </div>

        <div className="partner-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "2px", background: "rgba(0,0,0,0.08)",
        }}>
          {partners.slice(0, 10).map((p) => (
            <div key={p.name} className="reveal" style={{
              background: "#fff", padding: "32px 28px",
              cursor: "default", transition: "background 0.25s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#080808";
                (e.currentTarget.querySelector(".pname") as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#fff";
                (e.currentTarget.querySelector(".pname") as HTMLElement).style.color = "#080808";
              }}>
              <div style={{ width: "10px", height: "10px", background: "#cc0000", marginBottom: "18px" }} />
              <div className="pname" style={{
                color: "#080808", fontSize: "15px", fontWeight: 600,
                lineHeight: "1.4", marginBottom: "8px", transition: "color 0.25s",
              }}>{p.name}</div>
              <div style={{
                color: "rgba(0,0,0,0.35)", fontSize: "12px",
                fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              }}>{p.type.replace("-", " ")}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
