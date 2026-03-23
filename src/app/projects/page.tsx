import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, ArrowRight } from "lucide-react";

const R = "#CC0000";
const projects = [
  { id:1,  category:"Telecommunications",  title:"MTN Nigeria Tower Sites",             location:"Nigeria-wide",          client:"MTN Nigeria",              scope:"Construction of multiple telecom tower sites, foundations, and equipment shelters across multiple states.", tags:["Telecom","Infrastructure"] },
  { id:2,  category:"Telecommunications",  title:"Sonitel Tower Sites — Niger Republic", location:"Aderbissinat & Abalak", client:"Sonitel",                  scope:"Design and construction of two complete tower sites for Sonitel's national network in Niger Republic.", tags:["Telecom","International"] },
  { id:3,  category:"Telecommunications",  title:"OFC Underground Cabling",             location:"Katsina, Nigeria",      client:"MTN Nigeria",              scope:"Underground trenching, HDPE laying, PVC sub-ducting, and full reinstatement for MTN Nigeria in Katsina Metro.", tags:["Telecom","Fiber"] },
  { id:4,  category:"Telecommunications",  title:"Optic Fiber Cable Blowing",           location:"Nigeria",               client:"Etisalat Nigeria",         scope:"End-to-end fiber optic cable blowing operations, including manhole access and route management.", tags:["Telecom","Fiber"] },
  { id:5,  category:"Telecommunications",  title:"Telecom Manhole Construction",        location:"Jos, Plateau State",    client:"MTN Nigeria",              scope:"Construction of telecom manholes and cable chambers for MTN Jos Broadband project.", tags:["Telecom","Civil"] },
  { id:6,  category:"Civil Engineering",   title:"Road Construction — Imack Estate",    location:"Nigeria",               client:"Imack Estate",             scope:"Full road construction including grading, sub-base, base course, and asphalt paving.", tags:["Civil","Roads"] },
  { id:7,  category:"Civil Engineering",   title:"Road Construction — Lapo Niger",      location:"Niger Express, Nigeria",client:"Lapo",                     scope:"Expressway road construction with earth moving, compaction, and surface finishing.", tags:["Civil","Roads"] },
  { id:8,  category:"Civil Engineering",   title:"Drainage Construction — Kaduna",      location:"Kaduna, Nigeria",       client:"Government Contract",      scope:"Open channel and box culvert drainage construction to mitigate flooding in the area.", tags:["Civil","Drainage"] },
  { id:9,  category:"Civil Engineering",   title:"Drainage Construction — Lagos",       location:"Palms Garden, Lagos",   client:"Palms Garden Development", scope:"Drainage channel construction within residential estate including culvert and outfall works.", tags:["Civil","Drainage"] },
  { id:10, category:"Civil Engineering",   title:"Warehouse Construction",              location:"Lagos, Nigeria",        client:"Private Client",           scope:"Steel structure warehouse construction including portal frames, cladding, and concrete floor.", tags:["Civil","Construction"] },
  { id:11, category:"Housing & Estate",    title:"Housing Construction",                location:"Kano, Nigeria",         client:"Private Developer",        scope:"Multi-unit residential housing construction from foundation to roofing and finishing.", tags:["Construction","Housing"] },
  { id:12, category:"Housing & Estate",    title:"Estate Development",                  location:"Oshogbo, Nigeria",      client:"Estate Developer",         scope:"Full estate development including housing units, roads, drainage, and estate infrastructure.", tags:["Construction","Estate"] },
  { id:13, category:"Water Projects",      title:"Water Infrastructure — Jos",          location:"Jos, Plateau State",    client:"Plateau State Govt",       scope:"Water treatment plant, overhead storage tanks, and distribution pipeline infrastructure.", tags:["Water","Infrastructure"] },
  { id:14, category:"Water Projects",      title:"Borehole Drilling Project",           location:"Kano State, Nigeria",   client:"Kano State Govt",          scope:"Multiple borehole drilling, completion, pump installation, and overhead tank construction.", tags:["Water","Drilling"] },
  { id:15, category:"Water Projects",      title:"Hand Pump & Water Supply",            location:"Kano State, Nigeria",   client:"Community Development",    scope:"Installation of hand pumps, water supply systems, and pump house construction for rural communities.", tags:["Water","Community"] },
  { id:16, category:"Telecommunications",  title:"Manhole Cover Production & Supply",   location:"Abuja, Nigeria",        client:"MTN Nigeria",              scope:"In-house production and supply of cast iron manhole covers for MTN Nigeria network rollout.", tags:["Telecom","Supply"] },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=80')" }}>
        <div className="page-hero-overlay" />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "5px", background: R }} />
        <div className="container">
          <span className="label h-left-1" style={{ color: "rgba(255,255,255,0.6)" }}>Our Portfolio</span>
          <div style={{ width: "40px", height: "3px", background: R, margin: "12px 0 24px" }} className="h-left-1" />
          <h1 className="h-up-1" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "white", fontSize: "clamp(2.8rem,6vw,4.5rem)", lineHeight: 1.05, marginBottom: "20px" }}>
            Our Projects<br /><span style={{ color: R }}>&amp; Experience</span>
          </h1>
          <p className="h-up-2" style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", maxWidth: "480px", lineHeight: "1.8" }}>
            A track record of delivering complex infrastructure projects across Nigeria and Niger Republic.
          </p>
          <div className="h-up-3 flex items-center gap-2 mt-8" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            <span>/</span><span style={{ color: R }}>Projects</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: "#0A0A0A", padding: "56px 0" }}>
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{value:"16+",label:"Major Projects"},{value:"5+",label:"Nigerian States"},{value:"2",label:"Countries"},{value:"8+",label:"Key Clients"}].map(({value,label}, i) => (
            <ScrollReveal key={label} animation="reveal" delay={(i+1) as any}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,4vw,3.2rem)", fontWeight: 700, color: R, marginBottom: "8px" }}>{value}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#666" }}>{label}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <section style={{ background: "white" }} className="section-pad">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <ScrollReveal key={p.id} animation="reveal" delay={((i % 3) + 1) as any}>
                <div className="project-card" style={{ height: "100%" }}>
                  <div className="card-top" />
                  <div style={{ padding: "32px 28px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                      <span className="label">{p.category}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#999" }}>{String(p.id).padStart(2,"0")}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "19px", fontWeight: 700, color: "#0A0A0A", marginBottom: "8px", lineHeight: 1.2 }}>{p.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
                      <MapPin size={12} style={{ color: R }} />
                      <span style={{ fontSize: "13px", color: "#4A4A4A" }}>{p.location}</span>
                    </div>
                    <p style={{ color: "#4A4A4A", fontSize: "14px", lineHeight: "1.8", marginBottom: "20px" }}>{p.scope}</p>
                    <div style={{ borderTop: "1px solid #E8E8E5", paddingTop: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginBottom: "3px" }}>Client</div>
                        <div style={{ fontSize: "13px", fontWeight: 600, color: "#0A0A0A" }}>{p.client}</div>
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        {p.tags.slice(0,2).map(tag => (
                          <span key={tag} style={{ padding: "4px 10px", fontSize: "10px", fontFamily: "var(--font-mono)", background: "rgba(204,0,0,0.08)", color: R, letterSpacing: "0.06em" }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ background: "#F7F7F5", borderTop: "1px solid #E8E8E5" }} className="section-pad-sm">
        <div className="container">
          <ScrollReveal animation="reveal" className="text-center" style={{ marginBottom: "48px" }}>
            <span className="label">Clients &amp; Partners</span>
            <div style={{ width: "40px", height: "3px", background: R, margin: "12px auto 20px" }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, color: "#0A0A0A" }}>Trusted By Industry Leaders</h2>
          </ScrollReveal>
          <ScrollReveal animation="reveal" delay={1} className="flex flex-wrap justify-center gap-3">
            {["MTN Nigeria","Huawei","Etisalat Nigeria","Airtel Nigeria","Globacom","Oando","PHCN","Kano State Govt","Plateau State Govt","CITEC"].map(p => (
              <div key={p} className="partner-pill">{p}</div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section style={{ background: R }} className="section-pad-sm">
        <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <ScrollReveal animation="reveal-left">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, color: "white", marginBottom: "10px" }}>Start your project with us</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "15px" }}>Join our growing list of satisfied clients across Nigeria and beyond.</p>
          </ScrollReveal>
          <ScrollReveal animation="reveal-right" delay={1} className="shrink-0">
            <Link href="/contact" className="btn-white">Get in Touch <ArrowRight size={16} /></Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
