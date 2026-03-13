"use client";
import { useEffect, useRef } from "react";
import { company } from "@/data/content";
import { MapPin, Phone, Building, Clock, ChevronRight } from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".rv").forEach(el => el.classList.add("show"));
      });
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  const contactItems = [
    {
      icon: Building, color:"#cc0000",
      label:"Head Office",
      primary:"RTCC Concepts Ltd",
      secondary: company.address,
    },
    {
      icon: MapPin, color:"#c9a84c",
      label:"Registration",
      primary:`RC Number: ${company.rc}`,
      secondary:`Incorporated ${company.incorporated} · CAC Nigeria`,
    },
    {
      icon: Clock, color:"#555",
      label:"Operations",
      primary:"Nigeria & Niger Republic",
      secondary:`Since ${company.established} · 17+ years of excellence`,
    },
  ];

  return (
    <section id="contact" ref={ref} className="sp bg-[#0b0b0b] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px
                      bg-gradient-to-r from-transparent via-[#cc0000]/40 to-transparent"/>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px]
                      bg-[#cc0000]/[0.04] blur-[130px] rounded-full pointer-events-none"/>

      <div className="cw">

        {/* Header */}
        <div className="mb-24">
          <div className="eyebrow rv">
            <span className="eyebrow-line bg-[#cc0000]"/>
            <span className="eyebrow-text text-[#cc0000]">Reach Us</span>
          </div>
          <h2 className="rv d1 text-[clamp(3rem,7vw,6rem)] font-black text-white leading-[0.92]"
              style={{fontFamily:"var(--font-display)"}}>
            GET IN <span className="text-[#cc0000]">TOUCH</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28">

          {/* Left — contact info */}
          <div>
            <p className="rv text-[#444] text-[1rem] leading-[2] mb-14">
              We&apos;re ready to discuss your project needs, provide technical advice,
              or explore partnership opportunities. Reach out to our Abuja office today.
            </p>

            {/* Contact rows */}
            <div className="space-y-px bg-white/[0.04]">
              {contactItems.map(({icon:Icon, color, label, primary, secondary}) => (
                <div key={label}
                     className="rv bg-[#0b0b0b] p-8 flex gap-6 items-start
                                hover:bg-[#121212] transition-colors group">
                  <div className="w-11 h-11 flex items-center justify-center flex-shrink-0
                                  border transition-colors duration-200"
                       style={{borderColor:`${color}22`, backgroundColor:`${color}10`}}
                       onMouseEnter={e=>(e.currentTarget.style.borderColor=`${color}55`)}
                       onMouseLeave={e=>(e.currentTarget.style.borderColor=`${color}22`)}>
                    <Icon size={17} style={{color}}/>
                  </div>
                  <div>
                    <p className="text-[#333] text-[0.6rem] tracking-[0.28em] uppercase mb-2">{label}</p>
                    <p className="text-white text-[0.9rem] font-semibold mb-1">{primary}</p>
                    <p className="text-[#444] text-[0.85rem] leading-relaxed">{secondary}</p>
                  </div>
                </div>
              ))}

              {/* Phones */}
              <div className="rv bg-[#0b0b0b] p-8 flex gap-6 items-start hover:bg-[#121212] transition-colors">
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0
                                border border-[#cc0000]/15 bg-[#cc0000]/10">
                  <Phone size={17} className="text-[#cc0000]"/>
                </div>
                <div>
                  <p className="text-[#333] text-[0.6rem] tracking-[0.28em] uppercase mb-4">Phone Numbers</p>
                  <div className="space-y-3">
                    {company.phones.map(ph => (
                      <a key={ph} href={`tel:${ph}`}
                         className="flex items-center gap-2.5 text-white hover:text-[#cc0000]
                                    transition-colors group">
                        <ChevronRight size={12} className="text-[#cc0000] group-hover:translate-x-0.5 transition-transform"/>
                        <span className="font-mono text-[0.85rem] tracking-wider">{ph}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — CTA panel */}
          <div className="rv d2">
            <div className="card p-12 h-full flex flex-col justify-between relative overflow-hidden">
              {/* Ghost RTCC */}
              <div className="absolute -bottom-6 -right-2 text-[7rem] font-black
                               opacity-[0.04] select-none pointer-events-none leading-none"
                   style={{fontFamily:"var(--font-display)"}}>RTCC</div>

              <div className="relative z-10">
                <div className="w-10 h-[3px] bg-[#cc0000] mb-10"/>
                <h3 className="text-[2.4rem] font-black text-white leading-[1.05] mb-6"
                    style={{fontFamily:"var(--font-display)"}}>
                  READY TO START YOUR PROJECT?
                </h3>
                <p className="text-[#444] text-[0.95rem] leading-[2] mb-10">
                  From civil engineering to telecom infrastructure, our experienced
                  team delivers on time and within budget.
                </p>

                <ul className="space-y-4">
                  {["Civil & Structural Engineering","Telecom Infrastructure",
                    "Estate & Property Development","Oil & Gas Services",
                    "Procurement & Logistics"].map(item => (
                    <li key={item} className="flex items-center gap-3.5">
                      <div className="w-1.5 h-1.5 bg-[#cc0000] flex-shrink-0"/>
                      <span className="text-[#555] text-[0.9rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-12">
                <a href={`tel:${company.phones[0]}`}
                   className="block w-full text-center bg-[#cc0000] hover:bg-[#e00]
                              text-white font-bold text-[0.68rem] tracking-[0.25em]
                              uppercase py-5 transition-colors">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
