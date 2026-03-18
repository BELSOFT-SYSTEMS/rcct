"use client";
import { useRef, useState } from "react";
import { MapPin, Phone, Building, Clock, Send, CheckCircle } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";

interface Company { name:string;rc:string;tagline:string;established:string;incorporated:string;address:string;phones:string[];vision:string;mission:string;about:string;aboutExtended:string;shortName:string; }

export default function ContactPageClient({ company }: { company: Company }) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", service:"", message:"" });
  const [sent, setSent]   = useState(false);

  const inp: React.CSSProperties = {
    display: "block", width: "100%", background: "#111",
    border: "1px solid rgba(255,255,255,0.1)", color: "#fff",
    padding: "16px 20px", fontSize: "16px", outline: "none",
    transition: "border-color 0.2s", fontFamily: "inherit",
  };
  const lbl: React.CSSProperties = {
    display: "block", color: "rgba(255,255,255,0.45)", fontSize: "13px",
    fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px",
  };

  const info = [
    { icon: Building, label:"Head Office",  primary:"RTCC Concepts Ltd",       secondary: company.address },
    { icon: MapPin,   label:"Registration", primary:`RC: ${company.rc}`,       secondary:`Incorporated ${company.incorporated} · CAC Nigeria` },
    { icon: Clock,    label:"Operations",   primary:"Nigeria & Niger Republic", secondary:`Since ${company.established} · 17+ years of excellence` },
  ];

  return (
    <section ref={ref} style={{ background: "#080808" }}>
      <div className="container section">
        <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "72px",
        }}>
          {/* Left */}
          <div>
            <p className="reveal body-xl" style={{ color: "rgba(255,255,255,0.4)", marginBottom: "52px" }}>
              We&apos;re ready to discuss your project needs, provide technical advice, or explore partnership opportunities. Reach out to our Abuja office today.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginBottom: "40px" }}>
              {info.map(({ icon: Icon, label, primary, secondary }) => (
                <div key={label} className="reveal" style={{
                  background: "#111", padding: "28px 32px",
                  display: "flex", gap: "20px", alignItems: "flex-start",
                  transition: "background 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#161616")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#111")}>
                  <div style={{
                    width: "48px", height: "48px", display: "flex",
                    alignItems: "center", justifyContent: "center", flexShrink: 0,
                    background: "rgba(204,0,0,0.1)", border: "1px solid rgba(204,0,0,0.2)",
                  }}>
                    <Icon size={20} color="#cc0000" />
                  </div>
                  <div>
                    <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
                    <p style={{ color: "#fff", fontSize: "16px", fontWeight: 600, marginBottom: "5px" }}>{primary}</p>
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", lineHeight: "1.7" }}>{secondary}</p>
                  </div>
                </div>
              ))}

              {/* Phones */}
              <div className="reveal" style={{
                background: "#111", padding: "28px 32px",
                display: "flex", gap: "20px", alignItems: "flex-start",
              }}>
                <div style={{
                  width: "48px", height: "48px", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0,
                  background: "rgba(204,0,0,0.1)", border: "1px solid rgba(204,0,0,0.2)",
                }}>
                  <Phone size={20} color="#cc0000" />
                </div>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>Phone Numbers</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {company.phones.map(ph => (
                      <a key={ph} href={`tel:${ph}`} style={{
                        color: "#fff", fontFamily: "var(--font-mono)",
                        fontSize: "16px", textDecoration: "none", transition: "color 0.2s",
                      }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#cc0000")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#fff")}>{ph}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call CTA */}
            <a href={`tel:${company.phones[0]}`} className="reveal" style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              height: "68px", padding: "0 32px",
              background: "#fff", color: "#080808",
              textDecoration: "none", transition: "background 0.25s, color 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#cc0000"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = "#080808"; }}>
              <span style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Call Us Now</span>
              <Phone size={20} />
            </a>
          </div>

          {/* Right — form */}
          <div className="reveal delay-1">
            {sent ? (
              <div style={{
                background: "#111", border: "1px solid rgba(255,255,255,0.07)",
                padding: "80px 48px", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: "24px", textAlign: "center", minHeight: "480px",
              }}>
                <CheckCircle size={68} color="#cc0000" />
                <h3 className="h-display h3" style={{ color: "#fff" }}>MESSAGE SENT</h3>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "17px", lineHeight: "1.8", maxWidth: "300px" }}>
                  Thank you. Our team will get back to you within 24 hours.
                </p>
                <button onClick={() => setSent(false)} style={{
                  marginTop: "8px", height: "52px", padding: "0 32px",
                  border: "2px solid rgba(255,255,255,0.2)", background: "none",
                  color: "rgba(255,255,255,0.6)", fontSize: "14px",
                  fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                  cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit",
                }}>Send Another</button>
              </div>
            ) : (
              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", padding: "52px 44px" }}>
                <div style={{ width: "44px", height: "3px", background: "#cc0000", marginBottom: "36px" }} />
                <h3 className="h-display" style={{ fontSize: "clamp(28px,3vw,40px)", color: "#fff", marginBottom: "10px" }}>SEND AN ENQUIRY</h3>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "16px", marginBottom: "44px" }}>
                  Fill out the form and we&apos;ll be in touch within 24 hours.
                </p>

                <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                  <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
                    <div>
                      <label style={lbl}>Full Name *</label>
                      <input type="text" required placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={inp}
                        onFocus={e => (e.target.style.borderColor = "#cc0000")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                    <div>
                      <label style={lbl}>Company</label>
                      <input type="text" placeholder="Your Company" value={form.company} onChange={e => setForm({...form, company: e.target.value})} style={inp}
                        onFocus={e => (e.target.style.borderColor = "#cc0000")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>
                  <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
                    <div>
                      <label style={lbl}>Email *</label>
                      <input type="email" required placeholder="you@company.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={inp}
                        onFocus={e => (e.target.style.borderColor = "#cc0000")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                    <div>
                      <label style={lbl}>Phone</label>
                      <input type="tel" placeholder="+234 ..." value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={inp}
                        onFocus={e => (e.target.style.borderColor = "#cc0000")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>
                  <div>
                    <label style={lbl}>Service of Interest</label>
                    <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} style={{ ...inp, appearance: "none" } as React.CSSProperties}>
                      <option value="">Select a service...</option>
                      {["Civil Engineering","Telecommunications","Manhole Cover Production","Mechanical & Electrical","Architecture & Estate","Oil & Gas","Procurement & Supply","Transportation & Logistics"].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={lbl}>Message *</label>
                    <textarea required rows={5} placeholder="Describe your project or enquiry..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{ ...inp, resize: "none", lineHeight: "1.7" }}
                      onFocus={e => (e.target.style.borderColor = "#cc0000")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>
                  <button type="submit" style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "12px", height: "64px", background: "#cc0000", color: "#fff",
                    border: "none", fontSize: "15px", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    cursor: "pointer", transition: "background 0.2s",
                    fontFamily: "inherit", marginTop: "6px",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#e80000")}
                    onMouseLeave={e => (e.currentTarget.style.background = "#cc0000")}>
                    Submit Enquiry <Send size={18} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
