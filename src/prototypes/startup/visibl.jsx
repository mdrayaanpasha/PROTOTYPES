import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Clock, Globe, BarChart3 } from 'lucide-react';

// --- Assets ---
const ASSETS = {
  hero: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000", // Minimalist Office
};

// --- Hooks ---
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [ref, options]);

  return [ref, isVisible];
};

// --- UI Components ---
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-24 md:py-40 px-6 md:px-12 max-w-[1600px] mx-auto ${className}`}>
    {children}
  </section>
);

// --- Sections ---

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FDFCFB]/95 backdrop-blur-md border-b border-zinc-200 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <span className="font-serif text-2xl font-bold tracking-tighter text-zinc-900">Visibl.</span>
        <div className="hidden md:flex gap-12 font-sans text-xs uppercase tracking-widest text-zinc-500 font-medium">
          <a href="#impact" className="hover:text-zinc-900 transition-colors">Impact</a>
          <a href="#method" className="hover:text-zinc-900 transition-colors">Method</a>
          <a href="#studio" className="hover:text-zinc-900 transition-colors">Studio</a>
        </div>
        <a href="#contact" className="hidden md:block border border-zinc-900 px-6 py-2 rounded-sm text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
          Inquire
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="min-h-screen pt-40 flex flex-col justify-between relative overflow-hidden">
    <div className="px-6 md:px-12 max-w-[1600px] mx-auto w-full z-10">
      <Reveal>
        <div className="border-l-2 border-zinc-900 pl-8 mb-12">
           {/* Removed redundant location mention */}
           <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">Global • Asynchronous • Strategic</span>
           <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-zinc-900 tracking-tight">
            Authority <br />
            <span className="text-zinc-400">At Speed.</span>
           </h1>
        </div>
      </Reveal>
      
      <Reveal delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 items-end">
          <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-zinc-700 max-w-xl">
            We architect brand dominance for B2B Tech and Training founders. 
            <span className="block mt-4 font-normal text-zinc-900">The result? 2x visibility in 90 days.</span>
          </p>
          <div className="flex gap-4">
             <div className="bg-zinc-100 p-6 flex-1 min-w-[200px]">
                <BarChart3 className="w-6 h-6 mb-4 text-zinc-900" />
                <div className="text-4xl font-serif text-zinc-900 mb-1">90<span className="text-lg text-zinc-400">Days</span></div>
                <div className="text-xs font-mono uppercase text-zinc-500">To Market Dominance</div>
             </div>
             <div className="bg-zinc-900 p-6 flex-1 min-w-[200px] text-white">
                <Globe className="w-6 h-6 mb-4 text-white" />
                <div className="text-4xl font-serif mb-1">2x</div>
                <div className="text-xs font-mono uppercase text-zinc-400">Client Visibility Scale</div>
             </div>
          </div>
        </div>
      </Reveal>
    </div>
    
    <div className="w-full h-[30vh] md:h-[40vh] mt-24 overflow-hidden relative">
      <img src={ASSETS.hero} className="w-full h-full object-cover object-center grayscale opacity-80" alt="Abstract Architecture" />
    </div>
  </section>
);

const TheApproach = () => (
  <Section id="method" className="bg-zinc-900 text-stone-50">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-4 sticky top-32 h-fit">
        <Reveal>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4 block">The Operations</span>
          <h2 className="font-serif text-5xl leading-tight mb-8">
            Precision over volume.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We know you are busy running a company. We don't sell hours; we sell efficiency. Our model is built for the executive who has everything but time.
          </p>
        </Reveal>
      </div>

      <div className="lg:col-span-8 grid gap-8">
        {[
          { 
            icon: <Clock className="w-6 h-6"/>,
            title: "100% Asynchronous", 
            desc: "No endless strategy Zoom calls. We use async project management to respect your deep work state. You approve content when it suits you." 
          },
          { 
            icon: <Globe className="w-6 h-6"/>,
            title: "Cross-Functional Pods", 
            desc: "You don't get a freelancer; you get a pod. A dedicated strategist, a technical writer, and a designer working in unison on your brand." 
          },
          { 
            icon: <BarChart3 className="w-6 h-6"/>,
            title: "B2B Specialization", 
            desc: "We speak the language of Tech and Training. We don't need 'dumbing down'—we take your complexity and turn it into authority." 
          }
        ].map((item, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="bg-white/5 border border-white/10 p-12 hover:bg-white/10 transition-colors duration-500">
              <div className="text-zinc-400 mb-6">{item.icon}</div>
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <p className="font-sans text-zinc-400 leading-relaxed max-w-lg">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

const Results = () => (
  <Section id="impact">
    <Reveal>
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Built for the B2B Ecosystem</h2>
        <p className="text-zinc-500 text-lg">We enhance personal branding strategies for technical leaders.</p>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-t border-b border-zinc-200">
      {[
        { title: "Visibility", stat: "200%", sub: "Increase in 90 Days" },
        { title: "Engagement", stat: "Top 1%", sub: "Of Industry Voices" },
        { title: "Workflow", stat: "-10hrs", sub: "Time Saved Per Month" },
      ].map((r, i) => (
        <Reveal key={i} delay={i * 150}>
          <div className="py-16 px-8 text-center hover:bg-zinc-50 transition-colors">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4 block">{r.title}</span>
            <div className="font-serif text-6xl text-zinc-900 mb-2">{r.stat}</div>
            <div className="font-sans text-sm text-zinc-500">{r.sub}</div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

// --- Updated FounderNote: No Image, Centered Text ---
const FounderNote = () => (
  <Section id="studio" className="bg-[#F6F5F4]">
    <Reveal>
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-8 block">From the Desk of the CEO</span>
        
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12 text-zinc-900">
          "Your expertise is the asset. <br /> We just build the distribution."
        </h2>
        
        <div className="w-24 h-[1px] bg-zinc-300 mx-auto mb-12"></div>

        <div className="prose prose-lg text-zinc-600 font-light mb-12 mx-auto leading-relaxed max-w-2xl">
          <p className="mb-6">
            In the last 9 months, I've watched brilliant B2B founders get drowned out by louder, less competent voices. 
          </p>
          <p className="mb-6">
            We built Visibl to fix this. Leading cross-functional teams of designers and writers, we deploy a system that extracts your knowledge and scales it.
          </p>
          <p>
            We don't guess. We engineer visibility through targeted content strategies.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-16 w-16 bg-zinc-900 rounded-full flex items-center justify-center text-white font-serif italic text-2xl">V</div>
            <div>
              <div className="font-bold text-zinc-900 tracking-tight">Founder & CEO</div>
              {/* Location removed */}
              <div className="text-xs font-mono text-zinc-500 uppercase mt-2 tracking-widest">Established 2025</div>
            </div>
        </div>
      </div>
    </Reveal>
  </Section>
);

const Footer = () => (
  <footer id="contact" className="bg-white pt-32 pb-12 px-6 md:px-12 border-t border-zinc-200">
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-24">
        <div className="max-w-xl">
          <h2 className="font-serif text-6xl md:text-7xl tracking-tighter mb-8 text-zinc-900">
            Let's get to work.
          </h2>
          <p className="text-zinc-500 text-lg mb-12">
            Accepting new B2B partners for Q2. <br/>
            Strictly asynchronous. Strictly results.
          </p>
          <a href="mailto:hello@visibl.io" className="inline-flex items-center gap-4 text-xl bg-zinc-900 text-white px-8 py-4 rounded-sm hover:bg-zinc-800 transition-all duration-300">
            Start the Process <ArrowRight size={18} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 gap-16 mt-16 md:mt-0 font-sans text-sm text-zinc-600">
           <div>
              <span className="font-mono text-xs uppercase text-zinc-400 mb-4 block">Socials</span>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-black">LinkedIn</a></li>
                <li><a href="#" className="hover:text-black">Twitter / X</a></li>
              </ul>
           </div>
           <div>
              <span className="font-mono text-xs uppercase text-zinc-400 mb-4 block">Legal</span>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-black">Privacy</a></li>
                <li><a href="#" className="hover:text-black">Terms</a></li>
              </ul>
           </div>
        </div>
      </div>
      
      <div className="flex justify-between items-end pt-8 border-t border-zinc-100 text-xs font-mono text-zinc-400 uppercase tracking-widest">
        <span>© 2026 Visibl Studio.</span>
        {/* Location removed */}
        <span>Operating Globally.</span>
      </div>
    </div>
  </footer>
);

export default function VisiblApp() {
  return (
    <div className="bg-[#FDFCFB] text-zinc-900 min-h-screen selection:bg-zinc-900 selection:text-white">
      {/* Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>
      
      <Navigation />
      <Hero />
      <Results />
      <TheApproach />
      <FounderNote />
      <Footer />
    </div>
  );
}