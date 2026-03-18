'use client';
import Link from "next/link";
import { MapPin, Phone, Building2, ArrowRight, Mail } from "lucide-react";
import { company, navLinks, services } from "@/data/content";

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ height: "4px", background: "#cc0000" }} />

      <div className="container" style={{ paddingTop: "96px", paddingBottom: "80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "64px 48px" }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
              <div style={{ position: "relative", width: "44px", height: "44px", flexShrink: 0 }}>
                <div style={{ position: "absolute", inset: 0, background: "#cc0000", transform: "rotate(45deg)" }} />
                <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#fff", fontWeight: 900, fontSize: "16px" }}>R</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", color: "#fff", fontWeight: 900, fontSize: "22px", letterSpacing: "0.18em", lineHeight: 1 }}>RTCC</div>
                <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, marginTop: "3px" }}>Concepts Ltd</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "15px", lineHeight: "1.85", marginBottom: "24px", maxWidth: "260px" }}>{company.tagline}</p>
            <p style={{ color: "rgba(255,255,255,0.18)", fontSize: "13px", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}>{company.rc}</p>
            <div style={{ marginTop: "24px", width: "48px", height: "3px", background: "#cc0000" }} />
          </div>

          {/* Navigation */}
          <div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "28px" }}>Navigation</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.38)", fontSize: "15px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}>
                    <ArrowRight size={14} color="#cc0000" style={{ flexShrink: 0 }} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "28px" }}>Services</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
              {services.slice(0, 6).map(s => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.38)", fontSize: "15px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}>
                    <ArrowRight size={14} color="#cc0000" style={{ flexShrink: 0 }} />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "28px" }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "14px" }}>
                <MapPin size={17} color="#cc0000" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "15px", lineHeight: "1.75" }}>{company.address}</span>
              </div>
              {company.phones.map(ph => (
                <div key={ph} style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                  <Phone size={15} color="#cc0000" style={{ flexShrink: 0 }} />
                  <a href={`tel:${ph}`} style={{ color: "rgba(255,255,255,0.38)", fontSize: "15px", textDecoration: "none", fontFamily: "var(--font-mono)", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}>{ph}</a>
                </div>
              ))}
              <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <Building2 size={15} color="#cc0000" style={{ flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "15px" }}>Est. {company.established} · Inc. {company.incorporated}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "24px 0" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "14px" }}>© {new Date().getFullYear()} RTCC Concepts Ltd · All rights reserved.</span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "14px" }}>FCT Abuja, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
