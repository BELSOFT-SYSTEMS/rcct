import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Building2, Radio, Zap, Truck, Droplets, Flame, Home, Package, ArrowRight, CheckCircle } from "lucide-react";

const R = "#CC0000";
const services = [
  { id:"civil",        icon:Building2, title:"Civil Engineering",                    tagline:"Infrastructure built to last",
    desc:"Our civil engineering division delivers world-class infrastructure projects — from road construction and drainage systems to housing and estate development.",
    capabilities:["Road construction & rehabilitation","Drainage system design & construction","Housing & estate development","Warehouse construction","Water infrastructure","Bridge & culvert works"],
    projects:["Road at Imack Estate","Road at Lapo Niger Express","Warehouse in Lagos","Housing in Kano & Oshogbo"] },
  { id:"telecom",      icon:Radio,     title:"Telecommunications",                   tagline:"Connecting communities, powering networks",
    desc:"RTCC is a trusted partner for major telecoms in Nigeria. We provide end-to-end telecommunication infrastructure services — from tower site construction to underground fiber cable laying.",
    capabilities:["Tower site construction & installation","OFC underground cabling & trenching","Telecom manhole construction","HDPE laying & PVC sub-ducting","Optic fiber cable blowing","Route marker & accessories supply"],
    projects:["MTN Nigeria Tower Sites","Sonitel Niger Republic","MTN Katsina OFC","Etisalat Fiber Blowing"] },
  { id:"electrical",   icon:Zap,       title:"Mechanical & Electrical Services",     tagline:"Power. Precision. Performance.",
    desc:"Our M&E team provides comprehensive mechanical and electrical engineering services, supporting both new-build projects and retrofits.",
    capabilities:["Electrical installations & wiring","Power distribution systems","Generator installations","Plumbing & mechanical systems","Lighting & control systems","Preventive maintenance"],
    projects:["Commercial building M&E","Industrial facility installations","Residential electrical works"] },
  { id:"architecture", icon:Home,      title:"Architecture & Estate Management",     tagline:"Designing spaces people call home",
    desc:"From concept to completion, our architectural and estate management services bring vision to life.",
    capabilities:["Architectural design & planning","Estate development","Property management","Residential construction","Commercial builds","Interior finishing"],
    projects:["Oshogbo Estate Development","Kano Estate Development","FCT Residential Projects"] },
  { id:"water",        icon:Droplets,  title:"Water Management",                    tagline:"Clean water, delivered reliably",
    desc:"We provide complete water infrastructure solutions, from borehole drilling to full water treatment plants and distribution networks.",
    capabilities:["Borehole drilling & completion","Water treatment plant construction","Water distribution pipelines","Overhead tank construction","Hand pump installation","Water storage systems"],
    projects:["Jos Plateau Water Project","Kano Borehole Drilling","Kano Hand Pump Projects"] },
  { id:"oil",          icon:Flame,     title:"Oil & Gas",                           tagline:"Supporting the energy sector",
    desc:"RTCC operates in the oil and gas sector with expertise in procurement, supply, and field operations.",
    capabilities:["Oil field support services","Equipment procurement & supply","Pipeline accessories supply","Logistics & transportation","Site maintenance","Material sourcing"],
    projects:["Oando supply contracts","Energy sector procurement"] },
  { id:"procurement",  icon:Package,   title:"Procurement & Supply",                tagline:"The right materials, every time",
    desc:"Our procurement division sources and supplies a wide range of materials and equipment for engineering, construction, and telecom projects.",
    capabilities:["Telecom materials & accessories","Construction materials supply","OFC cable & fittings","Manhole covers & accessories","HDPE pipes & fittings","Fiber splice enclosures"],
    projects:["MTN Materials Supply","Telecom accessories contracts","Construction material sourcing"] },
  { id:"logistics",    icon:Truck,     title:"Transportation, Clearing & Forwarding",tagline:"Moving goods, meeting deadlines",
    desc:"Our logistics arm handles end-to-end transportation, clearing and forwarding, and supply chain management.",
    capabilities:["Port clearing & forwarding","Cargo transportation","Warehousing & storage","Distribution management","Pick, pack & dispatch","Inventory management"],
    projects:["Equipment clearing & delivery","Construction material transport"] },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1800&q=80')" }}>
        <div className="page-hero-overlay" />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "5px", background: R }} />
        <div className="relative max-w-7xl mx-auto px-8">
          <span className="label h-left-1" style={{ color: "rgba(255,255,255,0.6)" }}>What We Do</span>
          <div style={{ width: "40px", height: "3px", background: R, margin: "12px 0 24px" }} className="h-left-1" />
          <h1 className="h-up-1" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "white", fontSize: "clamp(2.8rem,6vw,4.5rem)", lineHeight: 1.05, marginBottom: "20px" }}>
            Our Services
          </h1>
          <p className="h-up-2" style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", maxWidth: "480px", lineHeight: "1.8" }}>
            Eight integrated service lines. One commitment to excellence.
          </p>
          <div className="h-up-3 flex items-center gap-2 mt-8" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            <span>/</span><span style={{ color: R }}>Services</span>
          </div>
        </div>
      </section>

      {/* Quick nav — CSS-only hover via .svc-nav-link class */}
      <section style={{ background: "#F7F7F5", borderBottom: "1px solid #E8E8E5", padding: "20px 0" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.map(({ id, icon: Icon, title }) => (
              <a key={id} href={`#${id}`} className="svc-nav-link">
                <Icon size={17} style={{ color: R, flexShrink: 0 }} />
                <span>{title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map(({ id, icon: Icon, title, tagline, desc, capabilities, projects }, idx) => (
        <section key={id} id={id} className="section-pad" style={{ background: idx % 2 === 0 ? "white" : "#F7F7F5" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-start">

              {/* Left */}
              <ScrollReveal animation="reveal-left">
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px" }}>
                  <div style={{ width: "52px", height: "52px", background: R, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={24} color="white" />
                  </div>
                  <div>
                    <div className="label" style={{ marginBottom: "4px" }}>{tagline}</div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.1 }}>{title}</h2>
                  </div>
                </div>
                <div style={{ width: "40px", height: "3px", background: R, marginBottom: "24px" }} />
                <p style={{ color: "#4A4A4A", fontSize: "16px", lineHeight: "1.85", marginBottom: "40px" }}>{desc}</p>
                <Link href="/contact" className="btn-primary">
                  <span>Enquire About This Service</span> <ArrowRight size={16} />
                </Link>
              </ScrollReveal>

              {/* Right */}
              <ScrollReveal animation="reveal-right" delay={1}>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {/* Capabilities box */}
                  <div style={{ background: "white", padding: "40px", border: "1px solid #E8E8E5" }}>
                    <h4 style={{ fontSize: "11px", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0A0A0A", marginBottom: "24px" }}>
                      Capabilities
                    </h4>
                    <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", listStyle: "none" }}>
                      {capabilities.map(cap => (
                        <li key={cap} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <CheckCircle size={14} style={{ color: R, flexShrink: 0, marginTop: "2px" }} />
                          <span style={{ color: "#4A4A4A", fontSize: "14px" }}>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Sample projects box */}
                  <div style={{ background: "#0A0A0A", padding: "36px 40px" }}>
                    <h4 style={{ fontSize: "11px", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", color: "white", marginBottom: "20px" }}>
                      Sample Projects
                    </h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {projects.map(p => (
                        <li key={p} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: R, flexShrink: 0 }} />
                          <span style={{ color: "#9CA3AF", fontSize: "14px" }}>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: R }} className="section-pad-sm">
        <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <ScrollReveal animation="reveal-left">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, color: "white", marginBottom: "10px" }}>
              Need a custom solution?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "15px" }}>
              Our team works collaboratively with every client to design the right approach.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="reveal-right" delay={1} className="shrink-0">
            <Link href="/contact" className="btn-white">Get a Quote <ArrowRight size={16} /></Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
