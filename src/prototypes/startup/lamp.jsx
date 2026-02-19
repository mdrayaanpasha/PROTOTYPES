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
  MessageSquare,
  ExternalLink
} from 'lucide-react';

// --- ANIMATION CONFIG ---
const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition }
};

// --- DATA ---
const programs = [
  {
    id: "01",
    title: "Bridge Learning Gaps",
    category: "Project Bōdhane",
    description: "We believe education should not be a burden—but a joyful journey. Our hubs provide the scaffolding for a child's brilliance.",
    image: "https://lampeducationtrust.com//files/Program%201%20-%20Project%20Bhodane.JPG", 
    icon: <Zap className="w-6 h-6" />,
    color: "from-amber-400/20"
  },
  {
    id: "02",
    title: "Confusion To Clarity",
    category: "Makkaḷa Pravēśa",
    description: "Navigating the future through psychometric precision and bespoke career roadmaps for students re-entering education.",
    image: "https://lampeducationtrust.com//files/Program%202%20-%20Project%20Makkala%20Pravesa52f1ef.jpeg",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-400/20"
  },
  {
    id: "03",
    title: "Revive Earth",
    category: "Eco-Innovation",
    description: "Our unwavering commitment to environmental sustainability through hands-on ecological restoration and awareness.",
    image: "https://lampeducationtrust.com//files/Program%203%20-%20Project%20Kum%20Kum082954.jpeg",
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

const LampTrustApp = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-amber-200">
      
      {/* --- HYPER-MODERN NAV --- */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 px-6 py-4 ${
        isScrolled ? "top-4" : "top-0"
      }`}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 px-8 py-3 ${
          isScrolled ? "bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full shadow-2xl shadow-slate-200/30" : ""
        }`}>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-amber-400 transition-all duration-500">
              <Sparkles className="text-white w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase italic">Lamp<span className="text-amber-500">.</span></span>
          </div>
          
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            {['About', 'Programs', 'Events', 'Our Stories', 'Team'].map((item) => (
              <a key={item} href="#" className="hover:text-amber-500 transition-all">{item}</a>
            ))}
          </div>

          <button className="bg-amber-400 text-slate-900 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all transform active:scale-95 shadow-xl shadow-amber-200/50">
            Support Impact
          </button>
        </div>
      </nav>

      {/* --- HERO: THE LIGHT --- */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-amber-100 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-40" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="inline-block border border-slate-200 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.5em] mb-10 bg-white/50 backdrop-blur-sm shadow-sm text-slate-400">
              Foundational Education • Bengaluru
            </span>
            <h1 className="text-6xl md:text-[140px] font-black leading-[0.8] tracking-tighter mb-10 text-slate-900">
              EDUCATION <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">IS THE LIGHT.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-16">
              Reinventing learning for underprivileged children from Grade 3 to 12. 
              Bridging gaps, ending poverty, and building futures since 2019.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <button className="w-full md:w-auto bg-slate-900 text-white px-14 py-7 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-slate-300">
                Explore Programs <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="text-slate-900 font-bold uppercase text-xs tracking-widest flex items-center gap-4 group">
                Watch Impact <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-white transition-all shadow-sm"><ArrowRight className="w-5 h-5" /></div>
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- PROGRAMS: BRIDGING GAPS SECTION --- */}
      <section className="bg-slate-950 py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-amber-500"></span>
                <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.5em]">The Blueprint</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
                Bridging Gaps, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white italic">Building Futures</span>
              </h2>
            </motion.div>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-md border-l border-slate-800 pl-8">
              Explore our different programs, each a pillar of educational empowerment and community development.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((prog, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -15 }}
                className="group relative h-[650px] rounded-[3rem] overflow-hidden bg-slate-900 border border-white/5 cursor-pointer transition-all duration-700"
              >
                <div className="absolute inset-0 z-0">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-[1.5s]" />
                  <div className={`absolute inset-0 bg-gradient-to-b ${prog.color} via-transparent to-slate-950`} />
                </div>

                <div className="absolute inset-0 z-10 p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all shadow-2xl">
                      {prog.icon}
                    </div>
                    <span className="text-white/20 font-black text-4xl italic group-hover:text-amber-400 transition-colors">{prog.id}</span>
                  </div>

                  <div>
                    <span className="inline-block px-4 py-1 rounded-full border border-white/10 text-[9px] font-bold text-amber-400 uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
                      {prog.category}
                    </span>
                    <h3 className="text-3xl font-black text-white tracking-tight uppercase mb-4 leading-tight group-hover:italic transition-all">
                      {prog.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {prog.description}
                    </p>
                    <button className="flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.3em] group-hover:text-amber-400 transition-colors">
                      Read More 
                      <div className="w-12 h-[1px] bg-white/20 group-hover:bg-amber-400 transition-all w-8 group-hover:w-16"></div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EVENTS: ENGAGING COMMUNITIES --- */}
      <section className="bg-white py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-[100px] font-black text-slate-900 tracking-tighter uppercase leading-[0.8] mb-12">
              Engaging <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Communities</span>
            </h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">
              Discover skill development initiatives, campaigns, and gatherings driving positive change.
            </p>
          </div>

          <div className="space-y-4">
            {events.map((event, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 20 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-12 border-b border-slate-100 hover:bg-slate-50 transition-all cursor-pointer rounded-[2rem]"
              >
                <div className="flex items-center gap-12">
                  <div className="text-center min-w-[80px] border-r border-slate-200 pr-12">
                    <span className="block text-4xl font-black text-slate-900 leading-none mb-2">{event.date}</span>
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">{event.month.split(' ')[0]}</span>
                  </div>
                  <div>
                    <h4 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-2 group-hover:text-amber-500 transition-colors">{event.title}</h4>
                    <div className={`flex items-center gap-2 ${event.accent}`}>
                      {event.icon}
                      <p className="uppercase text-[10px] tracking-[0.3em] font-black">{event.edition}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-slate-400 text-xs font-medium max-w-[200px] text-right hidden lg:block">{event.desc}</p>
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </div>
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

      {/* --- HYPER-PREMIUM FOOTER --- */}
      <footer className="bg-slate-950 pt-32 pb-12 px-6 overflow-hidden relative text-white">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-amber-400 rounded-2xl flex items-center justify-center font-black text-slate-900 text-2xl">L</div>
                <span className="text-4xl font-black tracking-tighter uppercase italic">Lamp<span className="text-amber-400">.</span></span>
              </div>
              <p className="text-white/40 text-xl leading-relaxed font-medium max-w-md">
                Reinventing education for a better future. Transforming school dropouts into leaders through community-driven hubs.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-400 mb-10">Exploration</h5>
              <ul className="space-y-6 text-sm font-bold text-white/60 uppercase tracking-[0.2em]">
                <li className="hover:text-amber-400 transition-all cursor-pointer flex items-center gap-2">About Org <ArrowUpRight className="w-3 h-3" /></li>
                <li className="hover:text-amber-400 transition-all cursor-pointer flex items-center gap-2">EduPod Hubs <ArrowUpRight className="w-3 h-3" /></li>
                <li className="hover:text-amber-400 transition-all cursor-pointer flex items-center gap-2">Success Stories <ArrowUpRight className="w-3 h-3" /></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-400 mb-10">The Hub</h5>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <MapPin className="w-6 h-6 text-amber-400 shrink-0" />
                  <p className="text-white/60 text-sm font-medium leading-relaxed uppercase tracking-widest italic">1281, 9th Cross, RK Hegde Nagar,<br /> Bengaluru - 560077</p>
                </div>
                <div className="flex items-center gap-5">
                  <Mail className="w-6 h-6 text-amber-400 shrink-0" />
                  <p className="text-white/80 text-sm font-black uppercase tracking-[0.2em]">help@lampeducationtrust.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">
              © 2026 Lamp Education Trust • Bengaluru • Powered by Aikyam
            </p>
            <div className="flex gap-10 text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
              {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map(social => (
                <span key={social} className="hover:text-amber-400 transition-all cursor-pointer underline decoration-white/10 decoration-2 underline-offset-4">{social}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LampTrustApp;