"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/content";
import { useReveal } from "@/components/ui/useReveal";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} style={{ background: "#cc0000", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
        backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
        backgroundSize: "64px 64px",
      }} />
      <div style={{
        position: "absolute", right: "-2vw", bottom: "-10px",
        fontFamily: "var(--font-display)", fontSize: "clamp(100px,20vw,240px)",
        fontWeight: 900, color: "rgba(255,255,255,0.07)", lineHeight: 1,
        pointerEvents: "none", userSelect: "none",
      }}>RTCC</div>

      <div className="container" style={{ paddingTop: "88px", paddingBottom: "88px", position: "relative", zIndex: 1 }}>
        <div className="cta-flex" style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: "48px",
        }}>
          <div className="reveal">
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "18px" }}>
              Start Your Project
            </div>
            <h2 className="h-display h2" style={{ color: "#fff", lineHeight: "0.93", maxWidth: "560px" }}>
              READY TO BUILD<br />SOMETHING GREAT?
            </h2>
          </div>
          <div className="reveal delay-1" style={{ display: "flex", flexWrap: "wrap", gap: "14px", flexShrink: 0 }}>
            <Link href="/contact" className="btn btn-white">
              Contact Us <ArrowRight size={17} />
            </Link>
            <a href={`tel:${company.phones[0]}`} className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)" }}>
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
