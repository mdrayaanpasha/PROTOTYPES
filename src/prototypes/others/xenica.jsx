import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Plus, Minus, Sun, Moon, Award, ShieldCheck, Globe, Cpu } from 'lucide-react';

const TitanXenciaV2 = () => {
  const [isDark, setIsDark] = useState(false); // Defaults to Light Mode now
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Constants
  const theme = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#F4F4F0]', // Void Black vs Swiss Cream
    text: isDark ? 'text-[#E0E0E0]' : 'text-[#1A1A1A]',
    accent: 'text-[#FF4D00]', // International Orange
    border: isDark ? 'border-white/10' : 'border-black/10',
    navGlass: isDark ? 'bg-[#050505]/80' : 'bg-[#F4F4F0]/80',
    cardHover: isDark ? 'hover:bg-white/5' : 'hover:bg-black/5',
  };

  return (
    <div className={`${theme.bg} ${theme.text} transition-colors duration-700 font-sans min-h-screen selection:bg-[#FF4D00] selection:text-white overflow-x-hidden relative`}>
      
      {/* --- INJECTED CSS FOR MARQUEE (Fixes the animation issue) --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        /* Custom Scrollbar for premium feel */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #FF4D00; border-radius: 3px; }
      `}</style>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 px-6 md:px-12 h-24 flex justify-between items-center backdrop-blur-md border-b ${theme.border} ${theme.navGlass} transition-colors duration-700`}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#FF4D00] rounded-sm flex items-center justify-center text-white font-bold font-serif text-xl">X</div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tighter text-lg leading-none">XENCIA</span>
            <span className="text-[9px] tracking-[0.2em] opacity-60 font-mono uppercase">Architects</span>
          </div>
        </div>

        <div className="hidden md:flex gap-12 font-mono text-[11px] uppercase tracking-[0.15em] font-medium">
          {['Framework', 'Legacy', 'Intelligence'].map((link) => (
            <a key={link} href="#" className="relative group">
              <span className="group-hover:text-[#FF4D00] transition-colors">{link}</span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#FF4D00] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsDark(!isDark)} 
          className={`flex items-center gap-3 px-4 py-2 rounded-full border ${theme.border} hover:border-[#FF4D00] transition-all group`}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest group-hover:text-[#FF4D00]">
            {isDark ? 'Dark' : 'Light'} Mode
          </span>
          <div className="relative w-4 h-4 overflow-hidden">
            <div className={`absolute inset-0 transition-transform duration-500 ${isDark ? 'translate-y-0' : 'translate-y-full'}`}>
              <Moon size={16} />
            </div>
            <div className={`absolute inset-0 transition-transform duration-500 ${isDark ? '-translate-y-full' : 'translate-y-0'}`}>
              <Sun size={16} />
            </div>
          </div>
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-current">
        <div className="max-w-[90vw] mx-auto">
          {/* Status Indicators */}
          <div className="flex justify-between items-end mb-12">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest opacity-60">
              <span className="w-2 h-2 bg-[#FF4D00] rounded-full animate-pulse"></span>
              System Operational
            </div>
            <div className="text-right hidden md:block">
              <div className="font-serif italic text-2xl">2025 Award Winner</div>
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">Best Cyber Security Partner</div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-[12vw] leading-[0.85] font-serif tracking-tighter mb-12">
            Digital <br />
            <span className="flex items-center gap-6">
              <span className="italic text-[#FF4D00]">Gravity.</span>
              <span className={`h-[2px] grow ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></span>
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
                We don't just build cloud infrastructure. We engineer the invisible nervous system of the modern enterprise.
              </p>
            </div>
            <div className="md:col-span-7 flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="flex gap-4">
                <div className={`p-4 border ${theme.border} rounded-sm backdrop-blur-sm flex items-center gap-3`}>
                  <ShieldCheck className="text-[#FF4D00]" size={24} />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">Microsoft Gold</span>
                    <span className="text-[10px] opacity-60 uppercase">Certified Partner</span>
                  </div>
                </div>
                <div className={`p-4 border ${theme.border} rounded-sm backdrop-blur-sm flex items-center gap-3`}>
                  <Award className="text-[#FF4D00]" size={24} />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">Cyber Sec 2025</span>
                    <span className="text-[10px] opacity-60 uppercase">Global Winner</span>
                  </div>
                </div>
              </div>
              <button className="px-10 py-5 bg-[#FF4D00] text-white rounded-full font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                Initiate Protocol
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCROLLING MARQUEE (Fixed) --- */}
      <div className={`py-6 border-b ${theme.border} overflow-hidden bg-[#FF4D00] text-white`}>
        <div className="w-[200%] flex animate-marquee">
          {Array(20).fill(" ").map((_, i) => (
            <div key={i} className="flex items-center gap-12 whitespace-nowrap px-6">
              <span className="font-mono text-sm font-bold uppercase tracking-widest">The XEN Framework</span>
              <span className="text-xl">★</span>
              <span className="font-serif italic text-lg">Award Winning Security</span>
              <span className="text-xl">★</span>
              <span className="font-mono text-sm font-bold uppercase tracking-widest">Zero Defect Migration</span>
              <span className="text-xl">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- CAPABILITIES (Accordion) --- */}
      <section className="py-32 px-6 md:px-12 max-w-[95vw] mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 sticky top-32 h-fit">
            <span className="font-mono text-[#FF4D00] text-xs uppercase tracking-widest mb-4 block">01 — Capabilities</span>
            <h3 className="text-5xl font-serif leading-tight mb-8">
              Engineered <br/> Outcomes.
            </h3>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              Our proprietary XEN Framework eliminates the guesswork from digital transformation.
            </p>
          </div>
          
          <div className="md:col-span-8">
            <AccordionItem 
              num="01"
              title="Migration Architecture"
              subtitle="Zero-Defect Protocol"
              border={theme.border}
              icon={<Globe size={24} />}
              desc="Legacy systems are anchors. We cut the chain. Our automated XEN-WAM engine migrates workloads with 100% data integrity and 70% faster velocity than industry standards."
            />
            <AccordionItem 
              num="02"
              title="Fortress Security"
              subtitle="Best Cyber Sec Partner 2025"
              border={theme.border}
              icon={<Award size={24} className="text-[#FF4D00]" />}
              desc="We don't just patch holes; we build domes. Winner of the 2025 Cyber Security Partner Award, our F5-powered architecture creates a self-healing perimeter around your assets."
            />
            <AccordionItem 
              num="03"
              title="Generative Intelligence"
              subtitle="Data Estate Modernization"
              border={theme.border}
              icon={<Cpu size={24} />}
              desc="Data is dormant capital. We wake it up. Transforming static data lakes into fluid, AI-ready neural networks suitable for LLM integration and predictive dominance."
            />
          </div>
        </div>
      </section>

      {/* --- THE NUMBERS (Minimalist) --- */}
      <section className={`py-24 border-y ${theme.border}`}>
        <div className="max-w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <Stat val="250+" label="Enterprises" theme={theme} />
          <Stat val="100%" label="Success Ratio" theme={theme} />
          <Stat val="2025" label="Award Winner" theme={theme} highlight />
          <Stat val="24/7" label="Ops Center" theme={theme} />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-32 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs text-[#FF4D00] uppercase tracking-[0.3em] mb-8">Ready to Ascend?</p>
          <h2 className="text-6xl md:text-9xl font-serif tracking-tighter mb-12 hover:italic cursor-pointer transition-all">
            Initiate <br/> Dialogue.
          </h2>
          <div className="flex justify-center gap-8">
            <a href="#" className={`border ${theme.border} px-8 py-3 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] transition-all`}>
              Book Consultation
            </a>
            <a href="#" className={`border ${theme.border} px-8 py-3 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] transition-all`}>
              View Case Studies
            </a>
          </div>
        </div>
        
        <div className={`mt-32 pt-8 border-t ${theme.border} flex justify-between font-mono text-[10px] uppercase tracking-widest opacity-60`}>
          <span>Bengaluru • India</span>
          <span>© 2025 Xencia</span>
        </div>
      </footer>

    </div>
  );
};

/* --- SUB COMPONENTS --- */

const AccordionItem = ({ num, title, subtitle, desc, border, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b ${border} group`}>
      <div 
        className="py-10 cursor-pointer flex justify-between items-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-6 md:gap-12 items-baseline">
          <span className="font-mono text-xs text-[#FF4D00]">{num}</span>
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-3xl md:text-4xl font-serif group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
              {isOpen && <div className="animate-fade-in">{icon}</div>}
            </div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-60">{subtitle}</p>
          </div>
        </div>
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#FF4D00]' : ''}`}>
          {isOpen ? <Minus size={24} strokeWidth={1} /> : <Plus size={24} strokeWidth={1} />}
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[300px] opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
        <div className="pl-12 md:pl-24 max-w-2xl text-lg font-light leading-relaxed opacity-90">
          {desc}
        </div>
      </div>
    </div>
  );
};

const Stat = ({ val, label, theme, highlight }) => (
  <div className={`flex flex-col p-6 border-l ${theme.border}`}>
    <span className={`text-5xl md:text-6xl font-serif mb-2 ${highlight ? 'text-[#FF4D00]' : ''}`}>{val}</span>
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">{label}</span>
  </div>
);

export default TitanXenciaV2;