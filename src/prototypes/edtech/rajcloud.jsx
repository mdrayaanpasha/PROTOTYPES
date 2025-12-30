import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, ArrowRight, Star, 
  Check, Play, ArrowUpRight, 
  Briefcase, Award, Users
} from 'lucide-react';

const Raj = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real-looking company logos (using text for clean aesthetic or placeholder SVGs)
  const companies = [
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
  ];

  // Real people faces for social proof
  const students = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${darkMode ? 'bg-[#050505] text-white' : 'bg-[#FFFFFF] text-slate-900'}`}>
      
      {/* --- EXECUTIVE NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? (darkMode ? 'bg-[#050505]/90 border-white/10' : 'bg-white/90 border-black/5') : 'bg-transparent border-transparent'} backdrop-blur-md`}>
        <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* Logo: Minimalist Typographic */}
          <div className="flex items-center gap-12">
            <a href="#" className={`text-2xl font-serif tracking-tight font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
              Raj<span className="font-light italic">CloudTech</span>.
            </a>
            
            <div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest opacity-60">
              <a href="#curriculum" className="hover:opacity-100 hover:scale-105 transition-all">Curriculum</a>
              <a href="#mentors" className="hover:opacity-100 hover:scale-105 transition-all">Mentors</a>
              <a href="#reviews" className="hover:opacity-100 hover:scale-105 transition-all">Outcomes</a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all ${darkMode ? 'border-white/20 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'}`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#apply" className={`hidden md:flex items-center gap-2 px-8 py-3 rounded-none border text-xs font-bold uppercase tracking-widest transition-all ${darkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}>
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION: SPLIT SCREEN EDITORIAL --- */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Copy & Authority */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Trust Badge */}
            <div className={`w-fit mb-8 px-4 py-2 border rounded-full flex items-center gap-3 ${darkMode ? 'border-white/20 bg-white/5' : 'border-black/10 bg-black/5'}`}>
              <div className="flex -space-x-2">
                {students.map((img, i) => (
                  <img key={i} src={img} alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover grayscale" />
                ))}
              </div>
              <span className="text-xs font-medium uppercase tracking-wider opacity-80">Trusted by 20,000+ Engineers</span>
            </div>

            <h1 className="text-6xl lg:text-[5.5rem] leading-[0.95] font-serif mb-8 tracking-tight">
              Master the craft of <br />
              <span className="italic font-light opacity-60">high-scale</span> engineering.
            </h1>

            <p className={`text-xl font-light leading-relaxed max-w-xl mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We don’t sell courses. We facilitate career transformations. 
              Join the elite training program designed for the top 1% of software roles.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className={`px-10 py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                View Tracks <ArrowRight size={18} />
              </button>
              <button className={`px-10 py-4 text-sm font-bold uppercase tracking-widest border flex items-center justify-center gap-3 hover:scale-105 transition-all ${darkMode ? 'border-white text-white' : 'border-black text-black'}`}>
                <Play size={18} fill="currentColor" /> Watch Demo
              </button>
            </div>

            <div className="mt-16 pt-8 border-t border-dashed border-gray-700/30">
              <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-6">Alumni hired by</p>
              <div className="flex flex-wrap items-center gap-8 lg:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {companies.map((co, i) => (
                  <img key={i} src={co.url} alt={co.name} className="h-6 w-auto object-contain invert-0" style={{ filter: darkMode ? 'brightness(0) invert(1)' : 'none' }} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Hero Image (Clean, Professional, No Gradients) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[600px] w-full">
              {/* Main Image */}
              <div className="absolute inset-0 overflow-hidden rounded-sm">
     <img 
     src ="https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?semt=ais_hybrid&w=740&q=80"
  alt="Indian Professional" 
  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
/>
              </div>
              
              {/* Floating "Card" - Minimalist */}
              <div className={`absolute -bottom-8 -left-8 p-8 max-w-xs shadow-2xl border transition-all ${darkMode ? 'bg-[#111] border-white/10' : 'bg-white border-black/5'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-50 font-bold">Outcome</p>
                    <h3 className="text-2xl font-serif mt-1">Sr. Data Engineer</h3>
                  </div>
                  <div className={`p-2 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="opacity-60">Pre-Training</span>
                    <span className="line-through opacity-40">₹8 LPA</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span>Post-Training</span>
                    <span className="text-green-600">₹24 LPA</span>
                  </div>
                  <div className="h-px w-full bg-current opacity-10 my-2"></div>
                  <div className="flex gap-2 text-xs uppercase font-bold tracking-wider">
                    <span className="px-2 py-1 border border-current opacity-40">AWS</span>
                    <span className="px-2 py-1 border border-current opacity-40">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- STATS SECTION (Minimalist Grid) --- */}
      <section className={`border-y ${darkMode ? 'border-white/10' : 'border-black/5'}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 text-center">
          {[
            { label: "Placement Rate", val: "94%" },
            { label: "Avg Salary Hike", val: "140%" },
            { label: "Active Learners", val: "4.5k" },
            { label: "Hiring Partners", val: "500+" }
          ].map((stat, i) => (
            <div key={i} className={`py-12 md:py-16 px-6 ${darkMode ? 'divide-white/10' : 'divide-black/5'}`}>
              <h3 className="text-4xl md:text-5xl font-serif mb-2">{stat.val}</h3>
              <p className="text-xs uppercase tracking-widest opacity-50 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- COURSE CARDS (Clean, High Contrast) --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Elite Career Tracks</h2>
            <p className="opacity-60 max-w-md text-lg">Curated curriculums designed to take you from intermediate to expert.</p>
          </div>
          <a href="#" className="text-sm font-bold uppercase tracking-widest border-b border-current pb-1 hover:opacity-50 transition-opacity">
            View All 12 Tracks
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Generative AI Architect",
              desc: "Master LLMs, RAG pipelines, and agentic workflows. Build the future.",
              price: "₹38,499",
              img:"https://rajcloudtech.com/wp-content/uploads/2025/07/GEN-AI-Thumbnail.webp"
            },
            {
              title: "Cloud Data Engineering",
              desc: "From raw data to scalable lakes. Master AWS, Spark, and Airflow.",
              price: "₹27,499",
              img: "https://rajcloudtech.com/wp-content/uploads/2024/10/Azure-training-raj-cloud-technologies.webp"
            },
            {
              title: "Full Stack Python",
              desc: "Build production-grade distributed systems. Django, FastAPI, and React.",
              price: "₹32,999",
              img:"https://rajcloudtech.com/wp-content/uploads/2025/12/Python-Full-Stack.webp"
            }
          ].map((course, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 relative aspect-[4/3]">
                <img 
                  src={course.img} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  Certification
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif group-hover:underline decoration-1 underline-offset-4">{course.title}</h3>
                <span className="text-lg font-bold opacity-40 group-hover:opacity-100 transition-opacity">{course.price}</span>
              </div>
              
              <p className="opacity-60 text-sm leading-relaxed mb-6 border-l-2 border-gray-500/20 pl-4">
                {course.desc}
              </p>

              <button className={`w-full py-4 text-xs font-bold uppercase tracking-widest border transition-all flex justify-between px-6 items-center ${darkMode ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/10 hover:bg-black hover:text-white'}`}>
                <span>View Syllabus</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER (Minimalist) --- */}
      <footer className={`py-20 px-6 border-t ${darkMode ? 'border-white/10 bg-[#050505]' : 'border-black/5 bg-[#F9F9F9]'}`}>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <a href="#" className="text-2xl font-serif font-bold tracking-tight mb-6 block">
              Raj<span className="font-light italic">CloudTech</span>.
            </a>
            <p className="opacity-50 text-sm leading-relaxed">
              Bengaluru, India. <br />
              Building the next generation of software architects since 2018.
            </p>
          </div>
          
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-4">
              <span className="font-bold uppercase tracking-widest opacity-40 text-xs">Platform</span>
              <a href="#" className="hover:underline">All Courses</a>
              <a href="#" className="hover:underline">Mentorship</a>
              <a href="#" className="hover:underline">For Business</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold uppercase tracking-widest opacity-40 text-xs">Company</span>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Careers</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto mt-20 flex justify-between items-end border-t border-current/10 pt-8">
          <p className="text-[10px] uppercase tracking-widest opacity-40">© 2025 RajCloudTech Inc.</p>
          <div className="flex gap-4 opacity-40">
             {/* Social Placeholders */}
             <div className="w-4 h-4 bg-current rounded-full"></div>
             <div className="w-4 h-4 bg-current rounded-full"></div>
             <div className="w-4 h-4 bg-current rounded-full"></div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Raj;