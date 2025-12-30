import React, { useState, useEffect, useRef } from 'react';
import { 
  Trophy, Code, GitCommit, Zap, AlertTriangle, 
  ArrowRight, Star, Cpu, TrendingUp, CheckCircle, 
  Award, Terminal, BookOpen, Crown, ChevronDown
} from 'lucide-react';

const Wrapped2025 = () => {
  const [activeSection, setActiveSection] = useState(0);

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* --- PROGRESS BAR / CHAPTER NAVIGATION --- */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {['INTRO', 'ACADEMICS', 'WINS', 'CODE', 'THE CLIMAX', 'FUTURE'].map((label, i) => (
          <div key={i} className="group flex items-center gap-4 cursor-pointer">
            <div className={`w-1 h-12 rounded-full transition-all duration-500 ${activeSection === i ? 'bg-purple-500 h-16' : 'bg-gray-800'}`}></div>
            <span className={`text-xs font-bold tracking-widest uppercase transition-opacity duration-300 ${activeSection === i ? 'opacity-100 text-purple-400' : 'opacity-0 group-hover:opacity-50'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* --- ACT 0: INTRO --- */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
        
        <div className="z-10 text-center space-y-6 animate-in fade-in zoom-in duration-1000">
          <div className="inline-block px-4 py-1.5 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-md text-xs font-mono text-purple-300 tracking-[0.2em] mb-4">
            SEASON 2025 RECAP
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600">
            THE ARC.
          </h1>
          <p className="text-xl text-gray-400 max-w-lg mx-auto leading-relaxed">
            From the lecture halls to the hackathon podiums. <br/>
            And the moment you decided to walk away.
          </p>
        </div>
        
        <div className="absolute bottom-10 animate-bounce text-gray-500">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* --- ACT I: THE ACADEMIC WEAPON --- */}
      <section className="min-h-screen relative border-t border-white/5 flex items-center py-20">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-900/5 blur-[120px]"></div>
        
        <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-xs font-bold text-blue-500 tracking-[0.2em] uppercase flex items-center gap-2">
              <BookOpen size={16} /> Act I: The Foundation
            </h2>
            <h3 className="text-5xl font-bold leading-tight">
              While the world slept,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                you studied.
              </span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Everyone talks about the drama, but they forget the discipline. 
              You secured the degree so you could focus on the craft.
            </p>
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-bold text-white">8.02</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Sem 2 SGPA</div>
              </div>
              <div className="w-px h-16 bg-white/10"></div>
              <div>
                <div className="text-4xl font-bold text-white flex items-center gap-2">
                  8.55 <TrendingUp size={20} className="text-green-500" />
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Sem 3 SGPA</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Glass Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative z-10 hover:border-blue-500/30 transition-colors duration-500">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-sm text-gray-400 uppercase">Attendance Log</div>
                  <div className="font-mono text-xs text-green-400">STATUS: PERFECT</div>
                </div>
                <CheckCircle className="text-blue-500" />
              </div>
              
              <div className="space-y-4">
                {['DBMS Lab', 'Computer Networks', 'Python Lab', 'Digital Logic'].map((sub, i) => (
                  <div key={i} className="flex justify-between items-center group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{sub}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-full"></div>
                      </div>
                      <span className="text-xs font-bold text-blue-400">100%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 text-[200px] font-black text-white/5 select-none -z-0">
              A+
            </div>
          </div>
        </div>
      </section>

      {/* --- ACT II: THE GOLD RUSH --- */}
      <section className="min-h-screen relative border-t border-white/5 flex items-center py-20 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold text-yellow-500 tracking-[0.2em] uppercase flex items-center justify-center gap-2">
              <Crown size={16} /> Act II: The Gold Rush
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
              The Bengaluru<br/>Sweep.
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              You didn't just participate. You dominated.
              From Christ University to National College, the trophy cabinet is full.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Major Win Card */}
            <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-500/20 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-700">
                <Trophy size={180} />
              </div>
              <div className="relative z-10">
                <div className="text-6xl font-black text-white mb-2">14+</div>
                <div className="text-xl text-yellow-400 font-bold mb-8">PODIUM FINISHES</div>
                
                <div className="flex flex-wrap gap-2">
                  {['Byte Code 🥇', 'Webathon 🥇', 'Appathon 🥇', 'MythQuest 🥇', 'Survival of Coders 🥇'].map((win, i) => (
                    <span key={i} className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 text-sm rounded-lg">
                      {win}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Special Award Card */}
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-3xl flex flex-col justify-center text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
                <Star size={32} fill="currentColor" />
              </div>
              <h4 className="text-white font-bold text-xl mb-2">Best Individual</h4>
              <p className="text-gray-400 text-sm mb-4">Startathon (Startup Hackathon)</p>
              <div className="text-xs text-gray-500 uppercase tracking-widest border-t border-white/10 pt-4">
                MVP Status
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACT III: THE CODEBASE --- */}
      <section className="min-h-screen relative border-t border-white/5 flex items-center py-20 overflow-hidden">
        {/* Animated Background Code */}
        <div className="absolute inset-0 opacity-5 font-mono text-xs p-4 overflow-hidden pointer-events-none select-none">
          {Array(50).fill("const distributed_system = new Architecture();").map((l, i) => (
            <div key={i} style={{ marginLeft: `${Math.random() * 50}px` }}>{l}</div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-green-500/20 blur-xl rounded-full opacity-50"></div>
            <div className="bg-black border border-green-500/30 p-8 rounded-3xl relative">
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-auto font-mono text-xs text-gray-500">leetcode_stats.json</div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-gray-400 font-mono text-sm">total_solved</span>
                  <span className="text-4xl font-bold text-green-400 font-mono">347</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-gray-400 font-mono text-sm">global_rank</span>
                  <span className="text-xl font-bold text-white font-mono">331,265</span>
                </div>
                <div>
                  <span className="text-gray-400 font-mono text-sm mb-2 block">specialty</span>
                  <div className="bg-green-900/30 border border-green-500/30 p-3 rounded text-green-300 font-mono text-sm">
                    "The Array Specialist" (54.8%)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-xs font-bold text-green-500 tracking-[0.2em] uppercase flex items-center gap-2">
              <Terminal size={16} /> Act III: The Technician
            </h2>
            <h3 className="text-5xl font-bold leading-tight">
              Building the<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Pop Culture Backend.
              </span>
            </h3>
            <p className="text-gray-400 text-lg">
              While others built Todo lists, you built distributed systems for Hogwarts and Central Perk.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Cpu className="text-purple-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Harry Potter Distributed LLM</h4>
                  <p className="text-sm text-gray-500">Stateless agents via Kafka & Docker.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="text-pink-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Sitcom Simulator</h4>
                  <p className="text-sm text-gray-500">RabbitMQ orchestration for "Friends".</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- THE CLIMAX: THE RESIGNATION --- */}
      <section className="min-h-screen relative flex items-center justify-center bg-red-950 py-20 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

        <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-10">
          <div className="inline-block mb-6 animate-pulse">
            <AlertTriangle className="text-red-500 w-16 h-16 mx-auto mb-4" />
          </div>
          
          <h2 className="text-xl font-bold text-red-500 tracking-[0.5em] uppercase mb-4">
            NOVEMBER 16, 2025
          </h2>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            "I FINALLY<br/>QUIT."
          </h1>
          
          <div className="bg-black/40 backdrop-blur-md border border-red-500/30 p-8 rounded-2xl max-w-2xl mx-auto shadow-[0_0_50px_rgba(220,38,38,0.2)]">
            <p className="text-xl italic text-gray-300 font-light mb-6">
              "I feel free as a bird... the tasks I'm doing there are not worth it."
            </p>
            <div className="h-px w-20 bg-red-500/50 mx-auto mb-6"></div>
            <p className="text-sm text-red-400 font-bold uppercase tracking-widest">
              The Turning Point
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Leaving the mundane to chase the mastery.
            </p>
          </div>
        </div>
      </section>

      {/* --- FUTURE: THE NEW ARC --- */}
      <section className="min-h-screen relative flex flex-col items-center justify-center py-20 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"></div>
        
        <div className="max-w-4xl mx-auto px-6 w-full relative z-10 text-center">
          <h2 className="text-sm font-bold text-gray-500 tracking-[0.3em] uppercase mb-8">
            PROTOCOL 2026: ACTIVATED
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
            <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl hover:bg-neutral-800 transition-colors text-left">
              <div className="text-purple-400 font-bold mb-1">MIT Deep Learning</div>
              <div className="text-gray-500 text-xs">Target: Mastery</div>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl hover:bg-neutral-800 transition-colors text-left">
              <div className="text-pink-400 font-bold mb-1">Distributed Systems</div>
              <div className="text-gray-500 text-xs">Target: Scale</div>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl hover:bg-neutral-800 transition-colors text-left">
              <div className="text-blue-400 font-bold mb-1">10 Apps Daily</div>
              <div className="text-gray-500 text-xs">Target: Relentless</div>
            </div>
            <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl hover:bg-neutral-800 transition-colors text-left">
              <div className="text-white font-bold mb-1">TensorFlow Basics</div>
              <div className="text-gray-500 text-xs">Target: Foundation</div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-black text-white">
              MOHAMMED RAYAAN
            </h1>
            <p className="text-xl text-purple-400 font-medium">
              "The Sitcom Engineer"
            </p>
            <div className="pt-8">
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto hover:scale-105 transition-transform">
                Start Season 2026 <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Wrapped2025;