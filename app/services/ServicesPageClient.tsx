"use client";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";

interface Service { id: string; title: string; description: string; icon: string; }
const details: Record<string, string[]> = {
  "civil-engineering":["Road & highway construction","Drainage systems","Structural development","Housing & commercial buildings","Site preparation & excavation"],
  telecommunications:["Tower site construction","OFC underground cabling","Fiber optic deployment","Manhole construction","HDPE laying & PVC sub-ducting"],
  manhole:["In-house manhole cover manufacturing","Supply to telecom operators","Custom specifications","Quality-assured production","Nationwide delivery"],
  mne:["Electrical installations","Mechanical systems","Industrial engineering","Commercial M&E projects","Maintenance contracts"],
  architecture:["Architectural design","Estate development","Property management","Residential complexes","Commercial developments"],
  "oil-gas":["Engineering support","Logistical operations","Pipeline services","Site construction","Equipment supply"],
  procurement:["Telecom materials sourcing","Supply chain management","Vendor management","Warehousing","Accessories & equipment"],
  transport:["Port pickup & clearing","Container unloading","Warehousing & storage","Distribution networks","Last-mile delivery"],
};

export default function ServicesPageClient({ services }: { services: Service[] }) {
  const s1 = useRef<HTMLElement>(null);
  const s2 = useRef<HTMLElement>(null);
  useReveal(s1); useReveal(s2);

  return (
    <>
      {/* Anchor nav */}
      <section ref={s1} style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <div className="container" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {services.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                height: "44px", padding: "0 18px",
                border: "2px solid rgba(0,0,0,0.12)", color: "rgba(0,0,0,0.5)",
                fontSize: "13px", fontWeight: 600, letterSpacing: "0.07em",
                textTransform: "uppercase", textDecoration: "none",
                transition: "all 0.2s", whiteSpace: "nowrap",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#cc0000"; (e.currentTarget as HTMLElement).style.color = "#cc0000"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.currentTarget as HTMLElement).style.color = "rgba(0,0,0,0.5)"; }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", opacity: 0.6 }}>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section ref={s2}>
        {services.map((s, i) => {
          const dark = i % 2 === 0;
          const d = details[s.id] || [];
          return (
            <div key={s.id} id={s.id} style={{ background: dark ? "#080808" : "#f5f5f5" }}>
              <div className="container section">
                <div className="about-split" style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "72px", alignItems: "start",
                }}>
                  {/* Left */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "36px" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700, color: "#cc0000", letterSpacing: "0.15em" }}>{String(i + 1).padStart(2, "0")}</span>
                      <div style={{ flex: 1, height: "1px", background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)" }} />
                    </div>
                    <div style={{ fontSize: "52px", marginBottom: "28px" }}>{s.icon}</div>
                    <h2 className="reveal h-display h3" style={{ color: dark ? "#fff" : "#080808", marginBottom: "20px" }}>
                      {s.title.toUpperCase()}
                    </h2>
                    <p className="reveal delay-1 body-lg" style={{ color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.55)" }}>
                      {s.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="reveal delay-2">
                    <div style={{
                      background: dark ? "#111" : "#080808", padding: "44px 40px",
                      marginBottom: "3px",
                      border: dark ? "1px solid rgba(255,255,255,0.07)" : "none",
                    }}>
                      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "28px" }}>Scope of Work</p>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                        {d.map(item => (
                          <li key={item} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                            <div style={{ width: "7px", height: "7px", background: "#cc0000", flexShrink: 0, borderRadius: "1px" }} />
                            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href="/contact" style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      height: "68px", padding: "0 32px",
                      background: "#cc0000", color: "#fff", textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#e80000")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#cc0000")}>
                      <span style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Request This Service</span>
                      <ArrowUpRight size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
