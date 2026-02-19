import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ChevronRight, 
  MapPin, 
  Mail, 
  Heart, 
  Zap, 
  Globe, 
  Leaf, 
  Sparkles, 
  ArrowRight, 
  Rocket, 
  Users, 
  X, 
  Menu 
} from 'lucide-react';

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const LampTrustApp = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Programs', 'Events', 'Our Stories', 'Team'];

  const programs = [
    {
      id: "01",
      title: "Bridge Learning Gaps",
      category: "Project Bōdhane",
      description: "We believe education should not be a burden—but a joyful journey. Our hubs provide the scaffolding for a child's brilliance.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80", 
      icon: <Zap className="w-6 h-6" />,
      color: "from-amber-400/20"
    },
    {
      id: "02",
      title: "Confusion To Clarity",
      category: "Makkaḷa Pravēśa",
      description: "Navigating the future through psychometric precision and bespoke career roadmaps for students re-entering education.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-400/20"
    },
    {
      id: "03",
      title: "Revive Earth",
      category: "Eco-Innovation",
      description: "Our unwavering commitment to environmental sustainability through hands-on ecological restoration and awareness.",
      image: "https://images.unsplash.com/photo-1542601906-973be1f5a555?auto=format&fit=crop&q=80",
      icon: <Leaf className="w-6 h-6" />,
      color: "from-emerald-400/20"
    }
  ];

  const events = [
    {
      title: "Young Innovators Challenge",
      edition: "Tech Edition",
      date: "01",
      month: "JUNE 2025",
      desc: "Calling all tech whizzes! Design a robot, code a game, or create the next big app. Showcase your innovation and compete for exciting prizes.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      icon: <Rocket className="w-5 h-5" />,
      accent: "text-blue-400"
    },
    {
      title: "Freelancing 101 Mastery",
      edition: "Career Hub",
      date: "15",
      month: "JUNE 2025",
      desc: "Thinking of going freelance? Learn the tricks of the trade from successful freelancers. This workshop covers finding clients and rates.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80",
      icon: <Users className="w-5 h-5" />,
      accent: "text-amber-400"
    },
    {
      title: "YIC: Green Pioneers",
      edition: "Eco Edition",
      date: "23",
      month: "AUG 2025",
      desc: "Ever wondered how to make the world greener? Design an eco-friendly project or campaign to impress the judges at the YIC.",
      image: "https://images.unsplash.com/photo-1550353127-b0da3adff6c6?auto=format&fit=crop&q=80",
      icon: <Sparkles className="w-5 h-5" />,
      accent: "text-emerald-400"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-amber-200">
      
      {/* --- RESPONSIVE NAV --- */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 px-4 md:px-6 py-4 ${isScrolled ? "top-2 md:top-4" : "top-0"}`}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 px-6 md:px-8 py-3 ${isScrolled ? "bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full shadow-2xl shadow-slate-200/30" : "bg-transparent border border-transparent"}`}>
          <div className="flex items-center gap-3 group cursor-pointer z-[110]">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-amber-400 transition-all duration-500">
              <Sparkles className="text-white w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="font-black text-lg md:text-xl tracking-tighter uppercase italic">Lamp<span className="text-amber-500">.</span></span>
          </div>
          
          <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            {navLinks.map((item) => (
              <a key={item} href="#" className="hover:text-amber-500 transition-all relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-amber-400 text-slate-900 px-6 md:px-8 py-2.5 md:py-3 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all transform active:scale-95 shadow-xl shadow-amber-200/50">
              Support
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden z-[110] p-2 hover:bg-slate-100 rounded-full transition-colors">
              {isMobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-0 bg-white z-[105] flex flex-col p-8 pt-32">
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50" />
              <div className="flex flex-col gap-8 relative z-10">
                {navLinks.map((item, idx) => (
                  <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * idx }} key={item} href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-black tracking-tighter uppercase text-slate-900 flex items-center justify-between group">
                    {item}
                    <ArrowRight className="w-8 h-8 text-amber-400" />
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto border-t border-slate-100 pt-8">
                <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em]">Support Impact</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO --- */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-amber-100 rounded-full blur-[140px] opacity-60" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
            <span className="inline-block border border-slate-200 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.5em] mb-10 bg-white/50 backdrop-blur-sm text-slate-400">
              Foundational Education • Bengaluru
            </span>
            <h1 className="text-6xl md:text-[140px] font-black leading-[0.8] tracking-tighter mb-10 text-slate-900 uppercase">
              Education <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-serif">Is The Light.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-16">
              Reinventing learning for underprivileged children. Bridging gaps, ending poverty, and building futures since 2019.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <button className="w-full md:w-auto bg-slate-900 text-white px-14 py-7 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-slate-300">
                Programs <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- BRIDGING GAPS SECTION --- */}
      <section className="bg-slate-950 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-24 text-white">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-amber-500"></span>
                <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.5em]">The Blueprint</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                Bridging Gaps, <br /><span className="italic opacity-50">Building Futures</span>
              </h2>
            </div>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-md border-l border-slate-800 pl-8">
              Explore our different programs, each a pillar of educational empowerment and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((prog, index) => (
              <motion.div key={index} whileHover={{ y: -15 }} className="group relative h-[650px] rounded-[3rem] overflow-hidden bg-slate-900 border border-white/5 cursor-pointer transition-all duration-700">
                <div className="absolute inset-0 z-0">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-[1.5s]" />
                  <div className={`absolute inset-0 bg-gradient-to-b ${prog.color} via-transparent to-slate-950`} />
                </div>
                <div className="absolute inset-0 z-10 p-12 flex flex-col justify-between">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all shadow-2xl">{prog.icon}</div>
                  <div>
                    <span className="inline-block px-4 py-1 rounded-full border border-white/10 text-[9px] font-bold text-amber-400 uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">{prog.category}</span>
                    <h3 className="text-3xl font-black text-white tracking-tight uppercase mb-4 leading-tight">{prog.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">{prog.description}</p>
                    <button className="flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.3em] group-hover:text-amber-400 transition-colors">Read More <ArrowRight className="w-4 h-4" /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EVENTS SECTION --- */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-[100px] font-black text-slate-900 tracking-tighter uppercase leading-[0.8] mb-12">Engaging <br /><span className="text-amber-500">Communities</span></h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">Discover skill development initiatives, campaigns, and gatherings driving positive change.</p>
          </div>
          <div className="space-y-4">
            {events.map((event, idx) => (
              <motion.div key={idx} whileHover={{ x: 20 }} className="group flex flex-col md:flex-row md:items-center justify-between p-12 border-b border-slate-100 hover:bg-slate-50 transition-all cursor-pointer rounded-[2rem]">
                <div className="flex items-center gap-12 text-slate-900">
                  <div className="text-center min-w-[80px] border-r border-slate-200 pr-12">
                    <span className="block text-4xl font-black leading-none mb-2">{event.date}</span>
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">{event.month.split(' ')[0]}</span>
                  </div>
                  <div>
                    <h4 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-2 group-hover:text-amber-500">{event.title}</h4>
                    <p className={`uppercase text-[10px] tracking-[0.3em] font-black ${event.accent}`}>{event.edition}</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: VOICES OF EVOLUTION --- */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex items-center justify-between">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Impact <span className="text-amber-500 italic">Stories</span></h2>
            <div className="hidden md:flex gap-2">
              {[1,2,3,4].map(i => <div key={i} className="w-2 h-2 rounded-full bg-slate-300 hover:bg-amber-400 transition-all cursor-pointer" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-white p-16 rounded-[4rem] shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-bl-[4rem] -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform" />
               <p className="text-2xl font-medium leading-relaxed text-slate-700 italic mb-12 relative z-10">
                 "I am incredibly thankful for the high-quality education and financial assistance. This NGO proved to be a source of hope when I had limitations."
               </p>
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center font-black text-amber-400 text-xl">DT</div>
                 <div>
                   <p className="font-black uppercase text-sm tracking-widest text-slate-900">Divya Tejaswini</p>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Zero Waste Auditor, Vedan Trust</p>
                 </div>
               </div>
             </div>

             <div className="bg-slate-900 p-16 rounded-[4rem] shadow-2xl relative group">
               <p className="text-2xl font-medium leading-relaxed text-slate-300 italic mb-12">
                 "Greeting from Sparsha Trust! Your generous support sponsoring the children's visit to the M. Chinnaswamy Stadium made the day truly special."
               </p>
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center font-black text-slate-900 text-xl">MS</div>
                 <div>
                   <p className="font-black uppercase text-sm tracking-widest text-white">Manjunath SP</p>
                   <p className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] mt-1">Incharge, Sparsha Trust</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 pt-32 pb-12 px-6 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-amber-400 rounded-2xl flex items-center justify-center font-black text-slate-900 text-2xl">L</div>
                <span className="text-4xl font-black tracking-tighter uppercase italic">Lamp<span className="text-amber-400">.</span></span>
              </div>
              <p className="text-white/40 text-xl leading-relaxed font-medium max-w-md">Reinventing education for a better future. Transforming school dropouts into leaders through community-driven hubs.</p>
            </div>
            <div className="lg:col-span-3">
              <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-400 mb-10">Exploration</h5>
              <ul className="space-y-6 text-sm font-bold text-white/60 uppercase tracking-[0.2em]">
                {['About Org', 'EduPod Hubs', 'Success Stories'].map(item => <li key={item} className="hover:text-amber-400 transition-all cursor-pointer">{item}</li>)}
              </ul>
            </div>
            <div className="lg:col-span-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-400 mb-10">The Hub</h5>
              <div className="space-y-8 text-white/60 text-sm font-medium tracking-widest">
                <p>1281, 9th Cross, RK Hegde Nagar, Bengaluru - 560077</p>
                <p className="text-white font-black uppercase tracking-[0.2em]">help@lampeducationtrust.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 text-center">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">© 2026 Lamp Education Trust • Bengaluru</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LampTrustApp;