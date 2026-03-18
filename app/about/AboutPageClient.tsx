"use client";
import { useRef } from "react";
import { Shield, Eye, Target } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";

interface Policy      { title: string; description: string; }
interface OrgDept     { name: string; sub: string[]; }
interface OrgChartData{ top: string; mid: string; departments: OrgDept[]; }
interface Partner     { name: string; type: string; }
interface Bank        { name: string; tagline: string; }
interface Company     { name:string;shortName:string;rc:string;tagline:string;established:string;incorporated:string;address:string;phones:string[];about:string;aboutExtended:string;vision:string;mission:string; }

const policyIcons = [Shield, Eye, Target];
const tc: Record<string,string> = { telecom:"#cc0000",government:"#555",technology:"#777",engineering:"#666",power:"#888",finance:"#999","oil-gas":"#666" };

export default function AboutPageClient({ company, policies, businessAreas, orgChart, partners, banks }: {
  company:Company; policies:Policy[]; businessAreas:string[]; orgChart:OrgChartData; partners:Partner[]; banks:Bank[];
}) {
  const s1=useRef<HTMLElement>(null), s2=useRef<HTMLElement>(null), s3=useRef<HTMLElement>(null), s4=useRef<HTMLElement>(null);
  useReveal(s1); useReveal(s2); useReveal(s3); useReveal(s4);

  return (
    <>
      {/* Story */}
      <section ref={s1} style={{ background: "#f5f5f5" }}>
        <div className="container section">
          <div className="about-split" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "72px", alignItems: "start" }}>

            {/* Left */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                <div style={{ width: "40px", height: "3px", background: "#cc0000", flexShrink: 0 }} />
                <span style={{ color: "#cc0000", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Story</span>
              </div>
              <h2 className="reveal h-display h2" style={{ color: "#080808", marginBottom: "32px" }}>
                17+ YEARS OF <span style={{ color: "#cc0000" }}>EXCELLENCE</span>
              </h2>
              <p className="reveal delay-1 body-xl" style={{ color: "rgba(0,0,0,0.55)", marginBottom: "18px" }}>{company.about}</p>
              <p className="reveal delay-2 body-lg" style={{ color: "rgba(0,0,0,0.38)", marginBottom: "44px" }}>{company.aboutExtended}</p>
              <div className="reveal delay-3">
                <p style={{ color: "rgba(0,0,0,0.35)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "18px" }}>Business Areas</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {businessAreas.map(a => (
                    <span key={a} style={{ display: "inline-flex", alignItems: "center", height: "40px", padding: "0 18px", border: "2px solid rgba(0,0,0,0.12)", color: "rgba(0,0,0,0.5)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="reveal" style={{ background: "#fff", padding: "36px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(204,0,0,0.08)", border: "1px solid rgba(204,0,0,0.2)", flexShrink: 0 }}><Eye size={22} color="#cc0000" /></div>
                  <div>
                    <p style={{ color: "#cc0000", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Vision</p>
                    <p style={{ color: "rgba(0,0,0,0.55)", fontSize: "16px", lineHeight: "1.85" }}>{company.vision}</p>
                  </div>
                </div>
              </div>
              <div className="reveal delay-1" style={{ background: "#fff", padding: "36px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)", flexShrink: 0 }}><Target size={22} color="rgba(0,0,0,0.5)" /></div>
                  <div>
                    <p style={{ color: "rgba(0,0,0,0.4)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Mission</p>
                    <p style={{ color: "rgba(0,0,0,0.55)", fontSize: "16px", lineHeight: "1.85" }}>{company.mission}</p>
                  </div>
                </div>
              </div>
              <div className="reveal delay-2" style={{ background: "#cc0000", padding: "32px 36px" }}>
                <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "17px", fontStyle: "italic", lineHeight: "1.8", textAlign: "center" }}>&ldquo;{company.tagline}&rdquo;</p>
              </div>
              <div className="reveal delay-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px", background: "rgba(0,0,0,0.1)" }}>
                {[{l:"Established",v:company.established},{l:"Incorporated",v:company.incorporated},{l:"RC Number",v:company.rc},{l:"HQ",v:"Abuja, FCT"}].map(f => (
                  <div key={f.l} style={{ background: "#fff", padding: "24px 20px" }}>
                    <p style={{ color: "rgba(0,0,0,0.3)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "6px" }}>{f.l}</p>
                    <p style={{ color: "#080808", fontWeight: 700, fontSize: "15px" }}>{f.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section ref={s2} style={{ background: "#080808" }}>
        <div className="container section">
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "40px", height: "3px", background: "#cc0000" }} />
              <span className="reveal" style={{ color: "#cc0000", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Commitments</span>
            </div>
            <h2 className="reveal delay-1 h-display h2" style={{ color: "#fff" }}>POLICIES &amp; <span style={{ color: "#cc0000" }}>STANDARDS</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "3px", background: "rgba(255,255,255,0.06)" }}>
            {policies.map((p, i) => {
              const Icon = policyIcons[i];
              return (
                <div key={p.title} className="reveal" style={{ background: "#080808", padding: "52px 44px", borderTop: "4px solid #cc0000", transition: "background 0.25s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#111")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#080808")}>
                  <div style={{ width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(204,0,0,0.1)", border: "1px solid rgba(204,0,0,0.2)", marginBottom: "32px" }}>
                    <Icon size={24} color="#cc0000" />
                  </div>
                  <h4 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "18px" }}>{p.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.32)", fontSize: "16px", lineHeight: "1.85" }}>{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Org Chart */}
      <section ref={s3} style={{ background: "#fff" }}>
        <div className="container section">
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "40px", height: "3px", background: "#cc0000" }} />
              <span className="reveal" style={{ color: "#cc0000", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Structure</span>
            </div>
            <h2 className="reveal delay-1 h-display h2" style={{ color: "#080808" }}>OUR <span style={{ color: "#cc0000" }}>TEAM</span></h2>
            <p className="reveal delay-2 body-lg" style={{ color: "rgba(0,0,0,0.45)", marginTop: "16px", maxWidth: "480px" }}>Seasoned management across engineering, finance, and operations.</p>
          </div>
          <div className="reveal org-chart-scroll" style={{ overflowX: "auto", paddingBottom: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "700px" }}>
              <div style={{ background: "#cc0000", padding: "18px 48px", color: "#fff", fontWeight: 700, fontSize: "15px", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center", minWidth: "280px" }}>{orgChart.top}</div>
              <div style={{ width: "1px", height: "44px", background: "rgba(204,0,0,0.4)" }} />
              <div style={{ border: "2px solid rgba(0,0,0,0.1)", background: "#fff", padding: "18px 48px", color: "#080808", fontWeight: 600, fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", minWidth: "340px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>{orgChart.mid}</div>
              <div style={{ width: "1px", height: "44px", background: "rgba(0,0,0,0.15)" }} />
              <div style={{ position: "relative", width: "100%", maxWidth: "1060px" }}>
                <div style={{ height: "1px", background: "rgba(0,0,0,0.1)", position: "absolute", top: 0, left: "8.33%", right: "8.33%" }} />
              </div>
              <div style={{ width: "100%", maxWidth: "1060px", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "3px", background: "rgba(0,0,0,0.08)" }}>
                {orgChart.departments.map(dept => (
                  <div key={dept.name} style={{ background: "#fff", display: "flex", flexDirection: "column" }}>
                    <div style={{ background: "#080808", padding: "16px", textAlign: "center", borderTop: "3px solid #cc0000" }}>
                      <p style={{ color: "#fff", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", lineHeight: "1.3" }}>{dept.name}</p>
                    </div>
                    <div>
                      {dept.sub.map(s => (
                        <div key={s} style={{ padding: "12px 14px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                          <p style={{ color: "rgba(0,0,0,0.45)", fontSize: "11px", lineHeight: "1.5" }}>{s}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section ref={s4} id="partners" style={{ background: "#080808" }}>
        <div className="container section">
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "40px", height: "3px", background: "#cc0000" }} />
              <span className="reveal" style={{ color: "#cc0000", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Trusted By</span>
            </div>
            <h2 className="reveal delay-1 h-display h2" style={{ color: "#fff" }}>OUR <span style={{ color: "#cc0000" }}>PARTNERS</span></h2>
          </div>

          <div className="partner-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: "3px", background: "rgba(255,255,255,0.06)", marginBottom: "72px" }}>
            {partners.map(p => (
              <div key={p.name} className="reveal" style={{ background: "#080808", padding: "36px 32px", cursor: "default", transition: "background 0.25s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#111")}
                onMouseLeave={e => (e.currentTarget.style.background = "#080808")}>
                <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: tc[p.type]||"#444", marginBottom: "18px" }} />
                <p style={{ color: "#fff", fontSize: "15px", fontWeight: 600, lineHeight: "1.4", marginBottom: "8px" }}>{p.name}</p>
                <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: tc[p.type]||"#444" }}>{p.type.replace("-"," ")}</p>
              </div>
            ))}
          </div>

          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "56px" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
            <div style={{ width: "40px", height: "3px", background: "rgba(255,255,255,0.2)" }} />
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Banking Relationships</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", gap: "3px", background: "rgba(255,255,255,0.06)" }}>
            {banks.map(b => (
              <div key={b.name} className="reveal" style={{ background: "#080808", padding: "44px 36px", cursor: "default", transition: "background 0.25s", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "160px" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.background = "#080808")}>
                <div>
                  <div className="h-display" style={{ fontSize: "26px", color: "#fff", marginBottom: "8px", transition: "color 0.25s" }}>{b.name.toUpperCase()}</div>
                  <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px", fontStyle: "italic" }}>{b.tagline}</p>
                </div>
                <div style={{ width: "36px", height: "3px", background: "#cc0000", marginTop: "24px" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
