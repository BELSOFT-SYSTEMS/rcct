"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label:"About",      href:"#about" },
  { label:"Services",   href:"#services" },
  { label:"Experience", href:"#experience" },
  { label:"Partners",   href:"#partners" },
  { label:"Contact",    href:"#contact" },
];

export default function Navbar() {
  const [open,   setOpen]   = useState(false);
  const [solid,  setSolid]  = useState(false);
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      solid ? "bg-[#090909]/95 backdrop-blur-md border-b border-white/[0.05]" : "bg-transparent"
    }`}>
      <div className="cw">
        <nav className="flex items-center justify-between h-[88px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute inset-0 bg-[#cc0000] rotate-45 group-hover:rotate-[54deg] transition-transform duration-300" />
              <span className="relative z-10 flex h-full items-center justify-center text-white font-black text-xs">R</span>
            </div>
            <div>
              <p className="text-white font-black tracking-[0.22em] text-lg leading-none"
                 style={{fontFamily:"var(--font-display)"}}>RTCC</p>
              <p className="text-[#3a3a3a] text-[0.55rem] tracking-[0.2em] uppercase mt-0.5">Concepts Ltd</p>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10 list-none">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="nu text-[#4a4a4a] hover:text-white text-[0.68rem]
                   tracking-[0.16em] uppercase font-medium transition-colors duration-200">{l.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+2348022200927"
               className="flex items-center gap-2 text-[#c9a84c] hover:text-[#e8c96a] transition-colors">
              <Phone size={13} strokeWidth={1.5} />
              <span className="font-mono text-[0.62rem] tracking-widest">+234 802 220 0927</span>
            </a>
            <a href="#contact"
               className="px-6 py-2.5 bg-[#cc0000] hover:bg-[#e00] text-white
                          text-[0.62rem] font-bold tracking-[0.22em] uppercase transition-colors">
              Get in Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-white p-1" onClick={() => setOpen(o => !o)}>
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300
                       bg-[#101010] border-t border-white/[0.05]
                       ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="cw py-8 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="text-[#555] hover:text-white text-[0.68rem] tracking-[0.18em]
                          uppercase font-medium py-3.5 border-b border-white/[0.05] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
             className="mt-5 text-center bg-[#cc0000] text-white
                        text-[0.68rem] font-bold tracking-[0.22em] uppercase py-4">
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
