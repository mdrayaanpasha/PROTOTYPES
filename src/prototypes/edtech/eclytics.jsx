import React, { useState, useEffect } from 'react';
import { ArrowRight, Plus, Minus, MoveUpRight, Hexagon, Terminal } from 'lucide-react';

// Using gritty, high-contrast B&W imagery for an "Editorial" look
const images = {
  hero: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop", // Cyberpunk/Industrial
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop", // Clean corporate
  abstract: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop" // Abstract geometric
};

const metrics = [
  { label: "DATA_PROCESSED", val: "1.2 TB", delta: "+12%" },
  { label: "CLIENT_INDEX", val: "0052", delta: "ACTIVE" },
  { label: "SUCCESS_RT", val: "100.0", delta: "STABLE" },
  { label: "QUERY_VELOCITY", val: "40ms", delta: "OPTIMAL" },
];

const services = [
  { id: "01", name: "FINANCIAL_ARCHITECT", desc: "P&L Visualization / Automated Reporting" },
  { id: "02", name: "SALES_VECTOR", desc: "Predictive Modelling / Market Basket Analysis" },
  { id: "03", name: "HUMAN_CAPITAL", desc: "Talent Retention / Attrition Heatmaps" },
  { id: "04", name: "SUPPLY_GRID", desc: "Logistics Optimization / Inventory Flow" },
];

const LandingPage = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-mono selection:bg-white selection:text-black">
      
      {/* Top Bar - Ticker Style */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a] border-b border-[#333] flex justify-between items-center h-12 px-4 text-xs uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-white animate-pulse"></div>
          <span className="font-bold">ECLYTICS_CONSULTING</span>
        </div>
        <div className="hidden md:flex gap-8 text-[#666]">
          <span>GURUGRAM: {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          <span>SYS_STATUS: ONLINE</span>
        </div>
        <button className="bg-white text-black px-4 h-full font-bold hover:bg-[#ccc] transition-colors">
          INITIATE_CONTACT
        </button>
      </header>

      {/* Hero Section - The "Grid" */}
      <section className="pt-12 min-h-screen grid grid-cols-1 md:grid-cols-12 border-b border-[#333]">
        
        {/* Left Column: Typography */}
        <div className="md:col-span-8 border-r border-[#333] p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
          
          <div className="relative z-10">
            <p className="text-[#666] text-xs mb-4 uppercase tracking-[0.2em]">00_INDEX // BI_SOLUTIONS</p>
            <h1 className="text-5xl md:text-8xl font-medium leading-[0.9] tracking-tighter mb-8 text-white mix-blend-difference">
              STRUCTURE<br/>
              IN CHAOS.
            </h1>
            <p className="max-w-md text-sm text-[#888] leading-relaxed mb-12 border-l border-[#333] pl-4">
              We do not just build dashboards. We architect data infrastructure for the modern enterprise. Low-code. High-precision.
            </p>
          </div>

          <div className="relative z-10 flex gap-0">
            <button className="h-14 px-8 border border-[#e5e5e5] text-white hover:bg-white hover:text-black transition-all flex items-center gap-4 text-sm tracking-widest uppercase">
              Explore Index <ArrowRight size={16} />
            </button>
            <button className="h-14 px-8 border-y border-r border-[#333] text-[#888] hover:text-white transition-all text-sm tracking-widest uppercase">
              Read Manifest
            </button>
          </div>
        </div>

        {/* Right Column: Imagery & Metrics */}
        <div className="md:col-span-4 flex flex-col">
          <div className="h-1/2 bg-[#111] border-b border-[#333] relative group overflow-hidden">
            <img 
              src={images.hero} 
              className="w-full h-full object-cover grayscale contrast-125 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              alt="Data Infrastructure"
            />
            <div className="absolute bottom-4 left-4 text-xs bg-black text-white px-2 py-1">
              FIG 1.0 // INFRASTRUCTURE
            </div>
          </div>
          <div className="h-1/2 bg-black p-8 flex flex-col justify-center gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="flex justify-between items-end border-b border-[#333] pb-2">
                <span className="text-[10px] text-[#666]">{m.label}</span>
                <div className="text-right">
                  <span className="text-xs text-[#444] block">{m.delta}</span>
                  <span className="text-lg font-mono text-white">{m.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - The "Ledger" Layout */}
      <section className="border-b border-[#333]">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-3 p-8 border-r border-[#333] sticky top-12 h-fit">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-2 text-[#666]">01 // Capabilities</h2>
            <p className="text-xs text-[#444]">
              We deploy industry-specific analytical vectors to maximize operational transparency.
            </p>
          </div>
          <div className="md:col-span-9">
            {services.map((s, i) => (
              <div key={i} className="group border-b border-[#333] last:border-b-0 p-8 md:p-12 hover:bg-[#f2f2f2] hover:text-black transition-colors cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-start gap-6">
                   <span className="text-xs font-mono text-[#444] group-hover:text-black/50 mt-1">{s.id}</span>
                   <div>
                     <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-1">{s.name}</h3>
                     <p className="text-sm text-[#666] group-hover:text-black/70">{s.desc}</p>
                   </div>
                </div>
                <MoveUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process - Horizontal Scroll / Timeline */}
      <section className="border-b border-[#333] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
          <div className="md:col-span-3 p-8 border-r border-[#333] bg-[#0f0f0f] flex flex-col justify-between">
             <h2 className="text-sm font-bold uppercase tracking-widest text-[#666]">02 // Execution</h2>
             <Terminal size={32} className="text-[#333]" />
          </div>
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#333]">
             {[
               {step: "DEFINE", icon: "01"},
               {step: "COLLECT", icon: "02"},
               {step: "ANALYZE", icon: "03"},
               {step: "MODEL", icon: "04"},
               {step: "DEPLOY", icon: "05"}
             ].map((item, i) => (
               <div key={i} className="p-8 flex flex-col justify-between h-64 hover:bg-[#111] transition-colors group relative">
                 <span className="text-4xl font-bold text-[#222] group-hover:text-white transition-colors">{item.icon}</span>
                 <div>
                   <div className="w-8 h-[1px] bg-[#444] mb-4 group-hover:w-full transition-all duration-500"></div>
                   <h4 className="text-sm tracking-widest uppercase">{item.step}</h4>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Client Log - Data Table Style */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[#333]">
        <div className="p-8 md:p-16 border-r border-[#333] flex flex-col justify-center">
            <h2 className="text-4xl font-medium mb-8">CLIENT LOG</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-mono text-white">50+</div>
                <div className="text-xs text-[#666] uppercase tracking-widest max-w-[100px]">
                  Enterprise Partners
                </div>
              </div>
              <p className="text-sm text-[#888] leading-relaxed mt-4">
                "EClytics provided the architecture required to scale our retention models. The precision is unmatched."
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs uppercase text-white">
                <div className="w-2 h-2 bg-white"></div>
                Rajib Kumar Jha / Nestle India
              </div>
            </div>
        </div>
        <div className="bg-[#111] relative group overflow-hidden h-[400px] md:h-auto">
           <img src={images.office} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale mix-blend-overlay" />
           <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="border border-white/5 hover:bg-white/10 transition-colors"></div>
              ))}
           </div>
        </div>
      </section>

      {/* Footer - Brutalist List */}
      <footer className="bg-black text-[#666] p-8 md:p-16 text-xs uppercase tracking-widest">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h3 className="text-white mb-4">ECLYTICS_CONSULTING</h3>
            <p className="mb-4 max-w-xs normal-case tracking-normal">
              Simplifying complex settings through rigorous data architecture.
            </p>
            <p>GURUGRAM, INDIA</p>
            <p>(+91) 9582876837</p>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">[ LINKEDIN ]</li>
              <li className="hover:text-white cursor-pointer">[ INSTAGRAM ]</li>
              <li className="hover:text-white cursor-pointer">[ TWITTER ]</li>
            </ul>
          </div>
          <div>
             <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">PRIVACY_PROTOCOL</li>
              <li className="hover:text-white cursor-pointer">TERMS_OF_SERVICE</li>
              <li className="text-[#333]">© 2025</li>
            </ul>
          </div>
        </div>
        
        {/* Massive Footer Text */}
        <div className="mt-24 border-t border-[#333] pt-4">
          <h1 className="text-[12vw] leading-none font-bold text-[#111] select-none text-center">
            ANALYTICS
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;