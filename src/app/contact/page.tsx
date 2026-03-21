"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle, ChevronDown } from "lucide-react";

const R = "#CC0000";
const services = ["Civil Engineering","Telecommunications","Mechanical & Electrical","Architecture & Estate Management","Oil & Gas","Procurement & Supply","Transportation & Logistics","Water Management","Other"];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name:"",email:"",phone:"",company:"",service:"",message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false); setSubmitted(true);
  };

  const info = [
    { icon:MapPin, label:"Head Office",     content: <p style={{ color:"#4A4A4A", fontSize:"14px", lineHeight:"1.75" }}>Suite 6, Second Floor, Shema Complex,<br />Asokoro Extension, FCT Abuja, Nigeria</p> },
    { icon:Phone,  label:"Phone",           content: <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}><a href="tel:+2348022200927" style={{ color:"#4A4A4A", fontSize:"14px", textDecoration:"none" }}>+234 802 220 0927</a><a href="tel:+2348133198124" style={{ color:"#4A4A4A", fontSize:"14px", textDecoration:"none" }}>+234 813 319 8124</a><a href="tel:+22959970859" style={{ color:"#4A4A4A", fontSize:"14px", textDecoration:"none" }}>+229 599 70859</a></div> },
    { icon:Mail,   label:"Email",           content: <a href="mailto:info@rtccconcepts.com" style={{ color:"#4A4A4A", fontSize:"14px", textDecoration:"none" }}>info@rtccconcepts.com</a> },
    { icon:Clock,  label:"Business Hours",  content: <div><p style={{ color:"#4A4A4A", fontSize:"14px" }}>Mon – Fri: 8:00 AM – 6:00 PM</p><p style={{ color:"#4A4A4A", fontSize:"14px" }}>Sat: 9:00 AM – 2:00 PM</p></div> },
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80')" }}>
        <div className="page-hero-overlay" />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "5px", background: R }} />
        <div className="relative max-w-7xl mx-auto px-8">
          <span className="label h-left-1" style={{ color:"rgba(255,255,255,0.6)" }}>Get In Touch</span>
          <div style={{ width:"40px", height:"3px", background:R, margin:"12px 0 24px" }} className="h-left-1" />
          <h1 className="h-up-1" style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"white", fontSize:"clamp(2.8rem,6vw,4.5rem)", lineHeight:1.05, marginBottom:"20px" }}>
            Contact<br /><span style={{ color:R }}>RTCC Concepts</span>
          </h1>
          <p className="h-up-2" style={{ fontSize:"18px", color:"rgba(255,255,255,0.72)", maxWidth:"480px", lineHeight:"1.8" }}>
            Ready to start your project? Reach out and we&apos;ll respond within 24 hours.
          </p>
          <div className="h-up-3 flex items-center gap-2 mt-8" style={{ fontFamily:"var(--font-mono)", fontSize:"11px", color:"rgba(255,255,255,0.45)", letterSpacing:"0.1em" }}>
            <Link href="/" style={{ color:"inherit", textDecoration:"none" }}>Home</Link>
            <span>/</span><span style={{ color:R }}>Contact</span>
          </div>
        </div>
      </section>

      {/* Main section */}
      <section style={{ background:"white" }} className="section-pad">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Info column */}
            <div className="lg:col-span-2">
              <ScrollReveal animation="reveal-left">
                <span className="label">Reach Us</span>
                <div style={{ width:"40px", height:"3px", background:R, margin:"12px 0 24px" }} />
                <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:700, lineHeight:1.2, color:"#0A0A0A", marginBottom:"20px" }}>
                  Let&apos;s Build Something<br /><span style={{ color:R }}>Great Together</span>
                </h2>
                <p style={{ color:"#4A4A4A", fontSize:"15px", lineHeight:"1.85", marginBottom:"40px" }}>
                  Whether you have a specific project in mind or need expert advice on your engineering requirements, our team is ready to help.
                </p>
              </ScrollReveal>

              <div style={{ display:"flex", flexDirection:"column", gap:"3px", marginBottom:"24px" }}>
                {info.map(({ icon:Icon, label, content }, i) => (
                  <ScrollReveal key={label} animation="reveal-left" delay={(i+1) as any}>
                    <div style={{ display:"flex", gap:"18px", padding:"24px 28px", background:"#F7F7F5", border:"1px solid #E8E8E5", alignItems:"flex-start" }}>
                      <div style={{ width:"44px", height:"44px", background:R, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <Icon size={17} color="white" />
                      </div>
                      <div>
                        <div style={{ fontFamily:"var(--font-mono)", fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase", color:R, marginBottom:"8px" }}>{label}</div>
                        {content}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal animation="reveal-left" delay={2}>
                <div style={{ padding:"20px 24px", borderLeft:`4px solid ${R}`, background:"#F7F7F5" }}>
                  <div style={{ fontFamily:"var(--font-mono)", fontSize:"10px", letterSpacing:"0.16em", textTransform:"uppercase", color:"#999", marginBottom:"6px" }}>CAC Registration</div>
                  <div style={{ fontWeight:700, fontSize:"15px", color:"#0A0A0A", marginBottom:"3px" }}>RC1150194</div>
                  <div style={{ fontSize:"13px", color:"#4A4A4A" }}>Incorporated October 29, 2013</div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal animation="reveal-right" delay={1}>
                {submitted ? (
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:"560px", textAlign:"center", padding:"64px 48px", background:"#F7F7F5", border:"1px solid #E8E8E5" }}>
                    <div style={{ width:"72px", height:"72px", display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(204,0,0,0.1)", borderRadius:"50%", marginBottom:"28px" }}>
                      <CheckCircle size={36} style={{ color:R }} />
                    </div>
                    <h3 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.8rem,3vw,2.4rem)", fontWeight:700, color:"#0A0A0A", marginBottom:"14px" }}>Message Received!</h3>
                    <p style={{ color:"#4A4A4A", fontSize:"15px", lineHeight:"1.8", maxWidth:"360px", marginBottom:"36px" }}>
                      Thank you for reaching out to RTCC Concepts Limited. Our team will get back to you within 24 hours.
                    </p>
                    <button onClick={() => { setSubmitted(false); setFormData({ name:"",email:"",phone:"",company:"",service:"",message:"" }); }} className="btn-outline">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div style={{ padding:"52px 48px", background:"#F7F7F5", border:"1px solid #E8E8E5" }}>
                    <h3 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.6rem,2.5vw,2.2rem)", fontWeight:700, color:"#0A0A0A", marginBottom:"8px" }}>Send Us a Message</h3>
                    <p style={{ color:"#4A4A4A", fontSize:"15px", marginBottom:"40px" }}>Fill in the form below and we&apos;ll get back to you shortly.</p>

                    <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Full Name <span style={{ color:R }}>*</span></label>
                          <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Adeyemi" className="form-input" />
                        </div>
                        <div>
                          <label className="form-label">Email Address <span style={{ color:R }}>*</span></label>
                          <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" className="form-input" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Phone Number</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000" className="form-input" />
                        </div>
                        <div>
                          <label className="form-label">Company / Organization</label>
                          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" className="form-input" />
                        </div>
                      </div>
                      <div style={{ position:"relative" }}>
                        <label className="form-label">Service Required <span style={{ color:R }}>*</span></label>
                        <select name="service" required value={formData.service} onChange={handleChange} className="form-input" style={{ appearance:"none", cursor:"pointer" }}>
                          <option value="">Select a service...</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown size={15} style={{ position:"absolute", right:"16px", bottom:"16px", pointerEvents:"none", color:"#4A4A4A" }} />
                      </div>
                      <div>
                        <label className="form-label">Project Details <span style={{ color:R }}>*</span></label>
                        <textarea name="message" required value={formData.message} onChange={handleChange} rows={5}
                          placeholder="Briefly describe your project, location, timeline, and any specific requirements..."
                          className="form-input" style={{ resize:"none" }} />
                      </div>
                      <button type="submit" disabled={loading} className="btn-primary" style={{ justifyContent:"center", paddingTop:"18px", paddingBottom:"18px", opacity:loading ? 0.7 : 1, cursor:loading ? "not-allowed" : "pointer" }}>
                        {loading ? (
                          <><div style={{ width:"16px", height:"16px", border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"white", borderRadius:"50%", animation:"spin 0.8s linear infinite" }} /><span>Sending...</span></>
                        ) : (
                          <><span>Send Message</span><Send size={16} /></>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ background:"#F7F7F5", borderTop:"1px solid #E8E8E5", padding:"56px 0", textAlign:"center" }}>
        <MapPin size={32} style={{ color:R, margin:"0 auto 14px" }} />
        <p style={{ fontSize:"15px", fontWeight:500, color:"#4A4A4A", marginBottom:"8px" }}>Suite 6, Second Floor, Shema Complex, Asokoro Extension, FCT Abuja, Nigeria</p>
        <a href="https://maps.google.com/?q=Asokoro+Extension+Abuja+Nigeria" target="_blank" rel="noopener noreferrer"
          style={{ display:"inline-flex", alignItems:"center", gap:"6px", fontSize:"13px", fontWeight:600, color:R, textDecoration:"none" }}>
          Open in Google Maps →
        </a>
      </section>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
