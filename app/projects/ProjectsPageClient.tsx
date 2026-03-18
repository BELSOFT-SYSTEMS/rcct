"use client";
import { useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";

interface ProjectItem { title: string; location: string; }
interface ProjectCategory { category: string; items: ProjectItem[]; }

export default function ProjectsPageClient({ projects }: { projects: ProjectCategory[] }) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const cat   = projects[active];
  const total = projects.reduce((s, c) => s + c.items.length, 0);

  return (
    <section ref={ref} style={{ background: "#f5f5f5" }}>
      <div className="container section">

        {/* Stats */}
        <div className="stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "3px", background: "rgba(0,0,0,0.1)", marginBottom: "72px",
        }}>
          {[{v:`${total}+`,l:"Total Projects"},{v:"2",l:"Countries"},{v:"17+",l:"Years Active"},{v:`${projects.length}`,l:"Sectors"}].map(s => (
            <div key={s.l} className="reveal" style={{ background: "#fff", padding: "44px 36px" }}>
              <div className="h-display" style={{ fontSize: "clamp(40px,5vw,64px)", color: "#080808", lineHeight: 1, marginBottom: "10px" }}>{s.v}</div>
              <div style={{ color: "rgba(0,0,0,0.4)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Layout: sidebar + list — stacks on mobile */}
        <div className="projects-layout" style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: "56px",
        }}>

          {/* Sidebar */}
          <div className="reveal">
            <p style={{ color: "rgba(0,0,0,0.35)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>Filter by Category</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              {projects.map((c, i) => (
                <button key={c.category} onClick={() => setActive(i)} style={{
                  height: "56px", padding: "0 20px",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  border: "none", cursor: "pointer",
                  background: active === i ? "#cc0000" : "#fff",
                  color: active === i ? "#fff" : "rgba(0,0,0,0.55)",
                  fontSize: "15px", fontWeight: 600,
                  fontFamily: "inherit", transition: "all 0.2s", textAlign: "left",
                }}>
                  <span>{c.category}</span>
                  <span style={{
                    fontSize: "13px", fontFamily: "var(--font-mono)",
                    padding: "2px 8px",
                    background: active === i ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.07)",
                    color: active === i ? "#fff" : "rgba(0,0,0,0.4)",
                  }}>{c.items.length}</span>
                </button>
              ))}
            </div>
            <div style={{ marginTop: "20px", background: "#080808", padding: "36px 32px" }}>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px" }}>Total</p>
              <div className="h-display" style={{ fontSize: "64px", color: "#cc0000", lineHeight: 1 }}>{total}+</div>
            </div>
          </div>

          {/* Project list */}
          <div className="reveal delay-1">
            <div style={{ paddingBottom: "20px", marginBottom: "28px", borderBottom: "3px solid rgba(204,0,0,0.2)" }}>
              <h2 className="h-display h3" style={{ color: "#080808", marginBottom: "6px" }}>{cat.category.toUpperCase()}</h2>
              <p style={{ color: "rgba(0,0,0,0.4)", fontSize: "15px", fontWeight: 500 }}>{cat.items.length} project{cat.items.length !== 1 ? "s" : ""}</p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "3px", background: "rgba(0,0,0,0.08)",
            }}>
              {cat.items.map((item, i) => (
                <div key={`${item.title}-${i}`} style={{
                  background: "#fff", padding: "32px 28px",
                  transition: "background 0.25s", cursor: "default",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#080808";
                    (e.currentTarget.querySelector(".ptitle") as HTMLElement).style.color = "#cc0000";
                    (e.currentTarget.querySelector(".ploc") as HTMLElement).style.color = "rgba(255,255,255,0.4)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "#fff";
                    (e.currentTarget.querySelector(".ptitle") as HTMLElement).style.color = "#080808";
                    (e.currentTarget.querySelector(".ploc") as HTMLElement).style.color = "rgba(0,0,0,0.4)";
                  }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                    <div>
                      <h4 className="ptitle" style={{ color: "#080808", fontSize: "15px", fontWeight: 600, lineHeight: "1.4", marginBottom: "14px", transition: "color 0.25s" }}>{item.title}</h4>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <MapPin size={12} color="#cc0000" style={{ flexShrink: 0 }} />
                        <span className="ploc" style={{ color: "rgba(0,0,0,0.4)", fontSize: "13px", transition: "color 0.25s" }}>{item.location}</span>
                      </div>
                    </div>
                    <span className="h-display" style={{ fontSize: "26px", color: "rgba(0,0,0,0.07)", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
