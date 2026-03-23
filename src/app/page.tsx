import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight, CheckCircle, Building2, Radio, Zap, Truck,
  Droplets, Flame, ChevronRight, Award, Users, MapPin,
  TrendingUp, Package, Phone,
} from "lucide-react";

const R = "#CC0000";

const services = [
  { icon: Building2, title: "Civil Engineering",           desc: "Roads, drainage systems, housing construction, and infrastructure development across Nigeria.", href: "/services#civil" },
  { icon: Radio,     title: "Telecommunications",          desc: "Tower site construction, OFC underground cabling, manhole construction, and network infrastructure.", href: "/services#telecom" },
  { icon: Zap,       title: "Mechanical & Electrical",     desc: "Comprehensive M&E services including power solutions, installations, and maintenance.", href: "/services#electrical" },
  { icon: Droplets,  title: "Water Management",            desc: "Borehole drilling, water project installations, and water supply infrastructure solutions.", href: "/services#water" },
  { icon: Flame,     title: "Oil & Gas",                   desc: "Specialist services in the oil and gas sector — procurement, supply, and field operations.", href: "/services#oil" },
  { icon: Truck,     title: "Transportation & Logistics",  desc: "End-to-end logistics, clearing & forwarding, distribution, and supply chain management.", href: "/services#logistics" },
];

const stats = [
  { value: "15+",  label: "Years of Experience", icon: TrendingUp },
  { value: "100+", label: "Projects Delivered",  icon: CheckCircle },
  { value: "8+",   label: "Partner Organizations", icon: Users },
  { value: "2",    label: "Countries Covered",   icon: MapPin },
];

const partners = ["MTN Nigeria","Huawei","Etisalat","Airtel","Glo","Oando","PHCN","Kano State Govt"];

const projects = [
  { title: "MTN Nigeria Tower Sites",    category: "Telecommunications", location: "Nigeria-wide",         description: "Construction of multiple telecom tower sites, OFC underground cabling, and manhole construction for MTN Nigeria." },
  { title: "Sonitel Tower Sites",        category: "Telecommunications", location: "Niger Republic",        description: "Built tower sites at Aderbissinat and Abalak in Niger Republic for Sonitel's national network expansion." },
  { title: "Water Infrastructure",       category: "Civil Engineering",  location: "Jos, Plateau State",   description: "Large-scale water project including storage tanks, distribution pipelines, and pump house construction." },
  { title: "Housing & Estate Dev",       category: "Architecture",       location: "Kano & Oshogbo",        description: "Residential housing construction and estate property development across multiple Nigerian states." },
];

const certs = [
  { icon: Award,        label: "CAC Registered",    sub: "RC1150194" },
  { icon: CheckCircle,  label: "Tax Cleared",        sub: "FIRS Certified" },
  { icon: Award,        label: "SCUML Registered",   sub: "Anti Money Laundering" },
  { icon: CheckCircle,  label: "EFCC Compliant",     sub: "RN:SC 191600399" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} className="h-fade" />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.3) 100%)" }} />
        {/* Grid texture */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
        {/* Left accent */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "5px", background: R }} />
        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, white, transparent)" }} />

        <div className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div style={{ maxWidth: "740px" }}>
            {/* Label */}
            <div className="h-left-1 flex items-center gap-4" style={{ marginBottom: "32px" }}>
              <div style={{ width: "40px", height: "2px", background: R }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                Established 2008 · RC1150194 · Abuja, Nigeria
              </span>
            </div>

            {/* Headline */}
            <h1 className="h-up-1" style={{
              fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1.05, color: "white",
              fontSize: "clamp(3.2rem,7.5vw,5.6rem)", marginBottom: "28px",
            }}>
              Engineering<br /><span style={{ color: R }}>Excellence.</span><br />
              <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)" }}>Delivered.</span>
            </h1>

            {/* Sub */}
            <p className="h-up-2" style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: "1.8", marginBottom: "40px", maxWidth: "520px" }}>
              RTCC Concepts Limited delivers quality civil engineering and telecommunications infrastructure across Nigeria and beyond.
            </p>

            {/* Tags */}
            <div className="h-up-3 flex flex-wrap gap-2" style={{ marginBottom: "44px" }}>
              {["Civil Engineering","Telecommunications","Oil & Gas","Procurement"].map(tag => (
                <span key={tag} style={{
                  padding: "7px 16px", fontSize: "11px", fontFamily: "var(--font-mono)",
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.8)",
                }}>{tag}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="h-up-4 flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">
                <span>Our Services</span> <ArrowRight size={16} />
              </Link>
              <Link href="/projects" className="btn-outline"
                style={{ borderColor: "rgba(255,255,255,0.45)", color: "white" }}>
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid #E8E8E5", borderBottom: "1px solid #E8E8E5", background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <ScrollReveal key={label} delay={(i + 1) as any} animation="reveal"
                className={`flex flex-col items-center text-center py-12 px-8${i < 3 ? " border-r border-[#E8E8E5]" : ""}`}>
                <div style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(204,0,0,0.08)", border: "1px solid rgba(204,0,0,0.12)", marginBottom: "16px" }}>
                  <Icon size={20} style={{ color: R }} />
                </div>
                <div className="stat-number" style={{ fontSize: "clamp(2.4rem,4vw,3.2rem)", color: "#0A0A0A", marginBottom: "8px" }}>{value}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#999" }}>{label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────────── */}
      <section style={{ background: "#F7F7F5" }} className="section-pad">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div>
              <ScrollReveal animation="reveal-left">
                <span className="label">Who We Are</span>
                <div style={{ width: "40px", height: "3px", background: R, margin: "12px 0 28px" }} />
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 700, lineHeight: 1.15, color: "#0A0A0A", marginBottom: "28px" }}>
                  Built on Integrity,<br /><span style={{ color: R }}>Driven by Results</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="reveal-left" delay={1}>
                <p style={{ color: "#4A4A4A", fontSize: "16px", lineHeight: "1.85", marginBottom: "18px" }}>
                  Founded in 2008 as a Civil & Telecommunications Engineering company, RTCC Concepts Limited was officially incorporated in 2013 as a Limited Liability Company by the Corporate Affairs Commission of Nigeria.
                </p>
                <p style={{ color: "#4A4A4A", fontSize: "16px", lineHeight: "1.85", marginBottom: "40px" }}>
                  We have executed numerous projects across Nigeria and Niger Republic, growing our portfolio across engineering, oil & gas, logistics, architecture, and more.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="reveal-left" delay={2}>
                <ul style={{ marginBottom: "44px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {["ISO-aligned Environmental Management System","Experienced multi-disciplinary project teams","Proven track record with blue-chip clients","Safety-first culture on every job site"].map(point => (
                    <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <CheckCircle size={16} style={{ color: R, flexShrink: 0, marginTop: "3px" }} />
                      <span style={{ color: "#4A4A4A", fontSize: "15px" }}>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about" className="btn-primary">
                  <span>Learn More About Us</span> <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right — image mosaic */}
            <ScrollReveal animation="reveal-right" delay={1}>
              <div style={{ position: "relative" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div className="img-hover" style={{ height: "200px", overflow: "hidden" }}>
                      <div className="img-bg" style={{ height: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
                    </div>
                    <div className="img-hover" style={{ height: "140px", overflow: "hidden" }}>
                      <div className="img-bg" style={{ height: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1464207687429-750564970381?w=600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "36px" }}>
                    <div className="img-hover" style={{ height: "140px", overflow: "hidden" }}>
                      <div className="img-bg" style={{ height: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
                    </div>
                    <div className="img-hover" style={{ height: "200px", overflow: "hidden" }}>
                      <div className="img-bg" style={{ height: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
                    </div>
                  </div>
                </div>
                {/* Badge */}
                <div style={{ position: "absolute", bottom: "-16px", left: "-16px", padding: "24px 28px", background: R, color: "white", boxShadow: "0 16px 48px rgba(204,0,0,0.35)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "42px", fontWeight: 700, lineHeight: 1 }}>15+</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.8, marginTop: "6px" }}>Years Active</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section style={{ background: "white" }} className="section-pad">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", marginBottom: "64px" }}>
            <ScrollReveal animation="reveal-left">
              <span className="label">What We Do</span>
              <div style={{ width: "40px", height: "3px", background: R, margin: "12px 0 20px" }} />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 700, lineHeight: 1.1, color: "#0A0A0A" }}>
                Our Core Services
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="reveal-right">
              <Link href="/services" style={{ display: "flex", alignItems: "center", gap: "6px", color: R, fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", transition: "gap 0.2s" }}>
                View All Services <ChevronRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }, i) => (
              <ScrollReveal key={title} animation="reveal" delay={((i % 3) + 1) as any}>
                <Link href={href} className="svc-card" style={{ display: "block", padding: "40px 36px", textDecoration: "none", background: "white", height: "100%" }}>
                  <div className="svc-icon" style={{ marginBottom: "28px" }}>
                    <Icon size={22} style={{ color: R }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: "#0A0A0A", marginBottom: "14px", lineHeight: 1.3 }}>{title}</h3>
                  <p style={{ color: "#4A4A4A", fontSize: "15px", lineHeight: "1.8", marginBottom: "28px" }}>{desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: R, fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Learn More <ArrowRight size={13} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RED BANNER ───────────────────────────────────── */}
      <section className="red-banner" style={{
        position: "relative", overflow: "hidden",
        backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=80')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(180,0,0,0.92)" }} />
        <div className="container-full" style={{ textAlign: "center", padding: "100px 0" }}>
          <ScrollReveal animation="reveal">
            <div style={{ width: "40px", height: "3px", background: "rgba(255,255,255,0.4)", margin: "0 auto 32px" }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: "24px" }}>
              Passion For Business Is Our Pride.<br /><em>Quality Is Ensured.</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "17px", lineHeight: "1.8", maxWidth: "560px", margin: "0 auto 48px" }}>
              We don&apos;t just deliver projects — we deliver promises. Every contract, every site, every client gets our absolute best.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <Link href="/contact" className="btn-white">
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link href="/about" style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "14px 34px", border: "2px solid rgba(255,255,255,0.45)",
                color: "white", fontWeight: 600, fontSize: "13px",
                letterSpacing: "0.08em", textTransform: "uppercase",
                textDecoration: "none", transition: "border-color 0.25s",
              }}>
                About RTCC
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────── */}
      <section style={{ background: "#F7F7F5" }} className="section-pad">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", marginBottom: "64px" }}>
            <ScrollReveal animation="reveal-left">
              <span className="label">Our Work</span>
              <div style={{ width: "40px", height: "3px", background: R, margin: "12px 0 20px" }} />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.1 }}>Featured Projects</h2>
            </ScrollReveal>
            <ScrollReveal animation="reveal-right">
              <Link href="/projects" style={{ display: "flex", alignItems: "center", gap: "6px", color: R, fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                All Projects <ChevronRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} animation="reveal" delay={((i % 2) + 1) as any}>
                <div style={{ background: "white", border: "1px solid #E8E8E5", padding: "40px 36px", height: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                  className="card">
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                    <span className="label">{p.category}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#999" }}>{String(i+1).padStart(2,"0")}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "#0A0A0A", marginBottom: "10px", lineHeight: 1.2 }}>{p.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "18px" }}>
                    <MapPin size={12} style={{ color: R }} />
                    <span style={{ fontSize: "13px", color: "#4A4A4A" }}>{p.location}</span>
                  </div>
                  <p style={{ color: "#4A4A4A", fontSize: "15px", lineHeight: "1.8", marginBottom: "28px" }}>{p.description}</p>
                  <div style={{ borderTop: "1px solid #E8E8E5", paddingTop: "20px" }}>
                    <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: R, fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
                      View Details <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────── */}
      <section style={{ background: "white", borderTop: "1px solid #E8E8E5" }} className="section-pad-sm">
        <div className="container">
          <ScrollReveal animation="reveal" className="text-center" style={{ marginBottom: "52px" }}>
            <span className="label">Trusted By</span>
            <div style={{ width: "40px", height: "3px", background: R, margin: "12px auto 20px" }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, color: "#0A0A0A" }}>
              Our Partners & Clients
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="reveal" delay={1} className="flex flex-wrap justify-center gap-3" style={{ marginBottom: "64px" }}>
            {partners.map(p => (
              <div key={p} className="partner-pill">{p}</div>
            ))}
          </ScrollReveal>

          {/* Mini CTA */}
          <ScrollReveal animation="reveal" delay={2}>
            <div style={{
              display: "flex", flexWrap: "wrap", alignItems: "center",
              justifyContent: "space-between", gap: "24px",
              padding: "48px 52px", background: "#F7F7F5", border: "1px solid #E8E8E5",
            }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, color: "#0A0A0A", marginBottom: "8px" }}>
                  Ready to Work With Us?
                </h3>
                <p style={{ color: "#4A4A4A", fontSize: "15px" }}>
                  Let&apos;s discuss your project requirements and deliver excellence together.
                </p>
              </div>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", flexShrink: 0 }}>
                <Link href="/contact" className="btn-primary">
                  <span>Contact Us</span> <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-outline">Our Services</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CERTS STRIP ──────────────────────────────────── */}
      <section style={{ background: "#0A0A0A", padding: "48px 0" }}>
        <div className="container">
          <div className="cert-strip">
            {certs.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="cert-item">
                <Icon size={18} style={{ color: R, flexShrink: 0 }} />
                <div>
                  <div style={{ color: "white", fontSize: "13px", fontWeight: 600, lineHeight: 1.3 }}>{label}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "3px", letterSpacing: "0.08em" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
