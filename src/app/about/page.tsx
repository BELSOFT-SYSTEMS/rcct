import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, ArrowRight, Target, Eye, Shield, Leaf } from "lucide-react";

const R = "#CC0000";

const values = [
  { icon: Target, title: "Quality Assurance",         desc: "We maintain the highest quality standards on every project, ensuring work is delivered on time, within budget, and to specification." },
  { icon: Shield, title: "Health & Safety",            desc: "Accident prevention is a prime concern for all RTCC employees. We prioritize the well-being of our staff, subcontractors, and clients." },
  { icon: Leaf,   title: "Environmental Responsibility",desc: "We are fully committed to managing our environmental performance and minimizing business impacts through our Environmental Management System." },
  { icon: Eye,    title: "Client Focus",               desc: "We listen to the individual needs of every contract, ensuring clients know exactly what they're getting before any agreement is signed." },
];

const milestones = [
  { year: "2008", event: "Founded as a Civil & Telecom Engineering company" },
  { year: "2013", event: "Officially incorporated by the CAC as a Limited Liability Company" },
  { year: "2015", event: "Commenced formal business operations and expanded project scope" },
  { year: "2017", event: "SCUML registration — Anti Money Laundering compliance" },
  { year: "2020", event: "Expanded manhole cover production and supply operations" },
  { year: "2024", event: "Tax clearance renewed — operations continue at full capacity" },
];

const certs = [
  { title: "CAC Certificate of Incorporation", no: "RC1150194",          date: "October 29, 2013" },
  { title: "FIRS Tax Clearance Certificate",   no: "TCC: 224119839859",  date: "Expires Dec 31, 2024" },
  { title: "SCUML Registration",               no: "RN:SC 191600399",    date: "Issued May 4, 2017" },
  { title: "TIN Registration",                 no: "17826861-0001",       date: "FIRS ID: 2401110139859" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80')" }}>
        <div className="page-hero-overlay" />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "5px", background: R }} />
        <div className="relative max-w-7xl mx-auto px-8">
          <span className="label h-left-1" style={{ color: "rgba(255,255,255,0.6)" }}>Who We Are</span>
          <div style={{ width: "40px", height: "3px", background: R, margin: "12px 0 24px" }} className="h-left-1" />
          <h1 className="h-up-1" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "white", fontSize: "clamp(2.8rem,6vw,4.5rem)", lineHeight: 1.05, marginBottom: "20px" }}>
            About RTCC<br /><span style={{ color: R }}>Concepts Ltd</span>
          </h1>
          <p className="h-up-2" style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", maxWidth: "480px", lineHeight: "1.8" }}>
            Delivering engineering excellence across Nigeria and beyond since 2008.
          </p>
          <div className="h-up-3 flex items-center gap-2 mt-8" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}>Home</Link>
            <span>/</span><span style={{ color: R }}>About</span>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section style={{ background: "white" }} className="section-pad">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal animation="reveal-left">
              <span className="label">Our Story</span>
              <div style={{ width: "40px", height: "3px", background: R, margin: "12px 0 28px" }} />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, lineHeight: 1.15, color: "#0A0A0A", marginBottom: "28px" }}>
                From Foundation to<br /><span style={{ color: R }}>Industry Leader</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {["RTCC Concepts Limited (RC1150194) was established in 2008 as a Civil & Telecommunications Engineering Company, with its Corporate Head Office at Suite 6, Second Floor, Shema Complex, Asokoro Extension, FCT Abuja, Nigeria.","The company was officially incorporated in 2013 as a Limited Liability Company by the Corporate Affairs Commission, in accordance with the laws of the Federal Republic of Nigeria.","Since 2008, RTCC has executed numerous projects across Nigeria and Niger Republic, growing its expertise across engineering, oil & gas, architecture, water management, and logistics."].map((p, i) => (
                  <p key={i} style={{ color: "#4A4A4A", fontSize: "15px", lineHeight: "1.85" }}>{p}</p>
                ))}
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal animation="reveal-right" delay={1}>
              <div style={{ position: "relative", paddingLeft: "0" }}>
                <div style={{ position: "absolute", left: "20px", top: "32px", bottom: "0", width: "1px", background: "#E8E8E5" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                  {milestones.map(({ year, event }, i) => (
                    <ScrollReveal key={year} animation="reveal" delay={((i % 4) + 1) as any}>
                      <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", paddingLeft: "56px", position: "relative" }}>
                        <div style={{ position: "absolute", left: "8px", top: "4px", width: "26px", height: "26px", background: R, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <div style={{ width: "8px", height: "8px", background: "white", borderRadius: "50%" }} />
                        </div>
                        <div>
                          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: R, letterSpacing: "0.12em", marginBottom: "6px" }}>{year}</div>
                          <p style={{ color: "#4A4A4A", fontSize: "15px", lineHeight: "1.7" }}>{event}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ background: "#0A0A0A" }} className="section-pad-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-1">
            <ScrollReveal animation="reveal-left">
              <div style={{ padding: "64px 56px", background: "#141414", height: "100%" }}>
                <div style={{ width: "48px", height: "48px", background: R, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
                  <Eye size={22} color="white" />
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: R, marginBottom: "16px" }}>Our Vision</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 700, color: "white", lineHeight: 1.25, marginBottom: "28px" }}>
                  To be the number one admired partner in providing solutions to human quest globally.
                </h3>
                <div style={{ width: "40px", height: "3px", background: R }} />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-right">
              <div style={{ padding: "64px 56px", background: R, height: "100%" }}>
                <div style={{ width: "48px", height: "48px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
                  <Target size={22} color="white" />
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>Our Mission</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 700, color: "white", lineHeight: 1.25, marginBottom: "28px" }}>
                  To work in partnership with all walks of life through the use of the right technology and expertise.
                </h3>
                <div style={{ width: "40px", height: "3px", background: "rgba(255,255,255,0.4)" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ background: "#F7F7F5" }} className="section-pad">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal animation="reveal" className="text-center" style={{ marginBottom: "64px" }}>
            <span className="label">How We Work</span>
            <div style={{ width: "40px", height: "3px", background: R, margin: "12px auto 20px" }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#0A0A0A" }}>Our Core Principles</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} animation="reveal" delay={((i % 4) + 1) as any}>
                <div className="svc-card" style={{ background: "white", padding: "40px 32px", height: "100%" }}>
                  <div className="svc-icon" style={{ marginBottom: "24px" }}>
                    <Icon size={22} style={{ color: R }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "#0A0A0A", marginBottom: "14px" }}>{title}</h3>
                  <p style={{ color: "#4A4A4A", fontSize: "14px", lineHeight: "1.85" }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ background: "white", borderTop: "1px solid #E8E8E5" }} className="section-pad-sm">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal animation="reveal" className="text-center" style={{ marginBottom: "56px" }}>
            <span className="label">Credentials</span>
            <div style={{ width: "40px", height: "3px", background: R, margin: "12px auto 20px" }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, color: "#0A0A0A" }}>Registrations & Certifications</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {certs.map((cert, i) => (
              <ScrollReveal key={cert.title} animation="reveal" delay={((i % 4) + 1) as any}>
                <div className="cert-card">
                  <CheckCircle size={16} style={{ color: R, marginBottom: "14px" }} />
                  <h4 style={{ fontWeight: 600, fontSize: "14px", color: "#0A0A0A", marginBottom: "10px", lineHeight: 1.4 }}>{cert.title}</h4>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: R, marginBottom: "4px", letterSpacing: "0.06em" }}>{cert.no}</div>
                  <div style={{ fontSize: "12px", color: "#4A4A4A" }}>{cert.date}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: R }} className="section-pad-sm">
        <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <ScrollReveal animation="reveal-left">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, color: "white", marginBottom: "10px" }}>Ready to partner with us?</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "15px" }}>Reach out today and let&apos;s build something extraordinary together.</p>
          </ScrollReveal>
          <ScrollReveal animation="reveal-right" delay={1} className="shrink-0">
            <Link href="/contact" className="btn-white">Contact Us <ArrowRight size={16} /></Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
