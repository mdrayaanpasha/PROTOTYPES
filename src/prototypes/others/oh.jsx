import React from 'react';

const HyperPremiumOpenHeart = () => {
  const stories = [
    {
      id: 1,
      tag: "The Open Heart Story Pt. 1",
      title: "Melvin",
      excerpt: "A boy who loved music, followed rhythm, found courage, and transformed dreams into steady progress through passion and perseverance. 🎶❤️",
      link: "https://www.instagram.com/reels/DSXVfVCE87r/",
      img:"https://ik.imagekit.io/yylpuqff5/OH/1.jpg"
    },
    {
      id: 2,
      tag: "Chapters of Leadership",
      title: "Lohit Narayan",
      excerpt: "From challenges to chapters of leadership. Today, he stands tall as the University’s Council Representative and the SJU Student Council President.",
      link: "https://www.instagram.com/reel/DOaWC0uE7pV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      img:"https://ik.imagekit.io/yylpuqff5/OH/2.jpg"    
    },
    {
      id: 3,
      tag: "Special Feature",
      title: "Pillars of Strength",
      excerpt: "Every teacher carries a story, a smile, and a message just for their students. The answers that will melt your heart.",
      link: "https://www.instagram.com/reel/DONCaR7k5_-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      img: "https://ik.imagekit.io/yylpuqff5/OH/3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-red-600 selection:text-white antialiased">
      
      {/* --- PREMIUM NAVIGATION --- */}
      <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200 px-6 py-5 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="absolute inset-0 border-[1.5px] border-zinc-950 translate-x-1 -translate-y-1"></div>
            <div className="absolute inset-0 border-[1.5px] border-zinc-950 bg-white z-10"></div>
            <span className="relative z-20 text-red-600 text-[10px] font-black mt-[1px]">♥</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">
            Open <span className="text-red-600">Heart'</span>
          </span>
        </div>
        <div className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase">
          <a href="#ethos" className="hover:text-red-600 transition-colors">Ethos</a>
          <a href="#voices" className="hover:text-red-600 transition-colors">Voices</a>
          <a href="#format" className="hover:text-red-600 transition-colors">Experience</a>
          <a href="#archive" className="hover:text-red-600 transition-colors">Archive</a>
        </div>
        <button className="text-[11px] font-bold bg-zinc-950 text-white px-6 py-3 uppercase tracking-[0.2em] hover:bg-red-600 transition-colors duration-500">
          Join Waitlist
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-48 pb-32 md:pt-64 md:pb-40 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-zinc-200">
        <div className="max-w-6xl">
          <p className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-10 ml-1">
            An Initiative by St. Joseph's University
          </p>
          <h1 className="text-[14vw] md:text-[9.5rem] font-black leading-[0.8] tracking-tighter uppercase">
            <span className="block text-zinc-950 hover:translate-x-6 transition-transform duration-1000 ease-out">They Were.</span>
            <span className="block text-red-600 hover:translate-x-12 transition-transform duration-1000 ease-out">We Are.</span>
            <span className="block text-zinc-950 hover:translate-x-6 transition-transform duration-1000 ease-out">You Will Be.</span>
          </h1>
        </div>
      </header>

      {/* --- DYNAMIC MARQUEE --- */}
      <div className="w-full bg-red-600 text-white py-4 md:py-6 overflow-hidden border-b border-zinc-950">
        <div className="whitespace-nowrap flex gap-8 animate-marquee text-sm md:text-lg font-black tracking-widest uppercase">
          <span>#VISIBLEVOICE</span> <span>•</span> <span>UNHEARD STORIES</span> <span>•</span> <span>ST. JOSEPH'S UNIVERSITY</span> <span>•</span> 
          <span>#VISIBLEVOICE</span> <span>•</span> <span>UNHEARD STORIES</span> <span>•</span> <span>ST. JOSEPH'S UNIVERSITY</span> <span>•</span>
          <span>#VISIBLEVOICE</span> <span>•</span> <span>UNHEARD STORIES</span> <span>•</span> <span>ST. JOSEPH'S UNIVERSITY</span> <span>•</span>
        </div>
      </div>

   {/* --- THE ETHOS SECTION (NEW STAGGERED LAYOUT) --- */}
      <section id="ethos" className="bg-zinc-950 text-white px-6 py-32 md:py-48 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-24">
          
          {/* Top - Massive Full-Width Heading */}
          <div className="border-b border-zinc-800 pb-12 md:pb-16">
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase">
              The Age <br className="hidden md:block" />
              <span className="text-red-600">Of Deception.</span>
            </h2>
          </div>
          
          {/* Bottom - Offset Grid */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            
            {/* Left Column - Minimal Accent & Negative Space */}
            <div className="hidden md:block md:col-span-3 lg:col-span-4 pt-4">
               <div className="w-16 h-1 bg-red-600 mb-6"></div>
               <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">The Mission</p>
            </div>
            
            {/* Right Column - Core Content */}
            <div className="md:col-span-9 lg:col-span-8 flex flex-col justify-center">
              <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-zinc-300 mb-16 tracking-tight">
                Open Heart formulates its mission around the aspects of lives which have remained strictly <span className="text-white font-bold italic">"unheard"</span>.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 lg:gap-16 border-t border-zinc-800 pt-12">
                <p className="text-sm md:text-base leading-relaxed text-zinc-400 font-medium pr-4">
                  We attempt to provide our audience with an insight into the struggles, hardships faced, and the life-altering decisions taken.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-zinc-400 font-medium pr-4">
                  Steering away from curated PR, we dig into the raw, unfiltered reality of how individuals navigate crises to reach their current stature.
                </p>
              </div>
            </div>
            
          </div>

        </div>
      </section>

      {/* --- DRAMATIC MANIFESTO --- */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto text-center border-b border-zinc-200">
        <h3 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-tight text-zinc-300">
          "Success is not a straight line. <br/>
          <span className="text-zinc-950">It is forged in the crucible of</span> <span className="text-red-600">crisis.</span>"
        </h3>
      </section>

      {/* --- VOICES / STORIES SECTION --- */}
      <section id="voices" className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-zinc-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">The <br/>Unheard</h2>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-red-600 border-b-2 border-red-600 pb-2">SJU Stories & Beyond</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {stories.map((story) => (
            <a 
              key={story.id} 
              href={story.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block cursor-pointer"
            >
              <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden mb-8 border border-zinc-200">
                {/* --- DYNAMIC IMAGE ADDED HERE --- */}
                <img 
                  src={story.img} 
                  alt={story.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                
                {/* Dark Gradient Overlay (Appears on Hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute bottom-8 left-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out text-white flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-zinc-950/50 backdrop-blur-sm">
                    <span className="text-xs ml-1">▶</span>
                  </div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase">Play Reel</p>
                </div>
              </div>
              
              <div className="border-t border-zinc-950 pt-6">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-red-600 mb-4">{story.tag}</p>
                <h3 className="text-4xl font-black tracking-tighter mb-4 group-hover:text-red-600 transition-colors uppercase">{story.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-medium">{story.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- THE 60 MINUTE EXPERIENCE --- */}
      <section id="format" className="bg-zinc-50 py-32 md:py-48 px-6 md:px-12 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24 flex flex-col items-center text-center">
            <p className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs mb-6">The Methodology</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              The <span className="text-red-600">60-Minute</span> Formula
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-zinc-200 bg-white">
            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-zinc-200 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="text-7xl font-black text-zinc-100 mb-8 tracking-tighter group-hover:text-red-50 transition-colors">01</div>
              <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">The Story <span className="text-red-600 text-lg align-top">*</span></h4>
              <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                30 Minutes. Speakers bare their "Open Heart Story", stripping away the PR to reveal the raw reality of their climb.
              </p>
            </div>

            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-zinc-200 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="text-7xl font-black text-zinc-100 mb-8 tracking-tighter group-hover:text-zinc-200 transition-colors">02</div>
              <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">Dissection</h4>
              <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                15 Minutes. A high-pressure session. Tough questions. No deflections. Extracting the exact blueprint used in crisis.
              </p>
            </div>

            <div className="p-12 md:p-16 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="text-7xl font-black text-zinc-100 mb-8 tracking-tighter group-hover:text-red-50 transition-colors">03</div>
              <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">Dialogue</h4>
              <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                15 Minutes. The floor is yours. Share ideas, present dilemmas, and interact with vocal decisions that resonate today.
              </p>
            </div>
          </div>
        </div>
      </section>

 {/* --- EDITORIAL ARCHIVE --- */}
      <section id="archive" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-zinc-200">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Visual <br className="hidden md:block"/> Archive</h2>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-red-600 border-b-2 border-red-600 pb-2">Moments of Unfiltered Reality</p>
        </div>

        {/* Improved Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* Card 1 - Square */}
          <div className="aspect-square bg-zinc-100 overflow-hidden border border-zinc-200 group cursor-pointer">
            <img 
              src="https://ik.imagekit.io/yylpuqff5/OH/4.jpg"
              alt="Open Heart Event Moment 1" 
              className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
            />
          </div>

          {/* Card 2 - Large Portrait (Spans 2 columns, 2 rows) */}
          <div className="aspect-[4/5] bg-zinc-200 md:col-span-2 md:row-span-2 overflow-hidden border border-zinc-200 group cursor-pointer">
            <img 
            src="https://ik.imagekit.io/yylpuqff5/OH/5.webp"
              alt="Open Heart Main Stage Highlight" 
              className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
            />
          </div>

          {/* Card 3 - Square */}
          <div className="aspect-square bg-zinc-100 overflow-hidden border border-zinc-200 group cursor-pointer">
            <img 
              src="https://ik.imagekit.io/yylpuqff5/OH/6.jpg"
              alt="Open Heart Audience Interaction" 
              className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
            />
          </div>

          {/* Card 4 - Square */}
          <div className="aspect-square bg-zinc-300 overflow-hidden border border-zinc-200 group cursor-pointer">
            <img 
              src="https://ik.imagekit.io/yylpuqff5/OH/7.jpg"
              alt="Open Heart Speaker Portrait" 
              className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
            />
          </div>

          {/* Card 5 - Square */}
          <div className="aspect-square bg-zinc-200 overflow-hidden border border-zinc-200 group cursor-pointer">
            <img 
              src="https://ik.imagekit.io/yylpuqff5/OH/8.jpg"
              alt="Open Heart Behind the Scenes" 
              className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
            />
          </div>
        </div>
      </section>

      {/* --- HOUSE RULES --- */}
      <section className="bg-zinc-950 text-white py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">House Rules</h2>
            <p className="text-zinc-400 font-medium leading-relaxed max-w-md">To maintain the integrity of the Open Heart space, we ask all attendees to observe the following.</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="border-b border-zinc-800 pb-8 flex gap-8 items-start">
              <span className="text-red-600 font-black text-xl">01</span>
              <div>
                <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Absolute Presence</h4>
                <p className="text-zinc-400 text-sm">Phones off. Minds open. This is a space for active listening.</p>
              </div>
            </div>
            <div className="border-b border-zinc-800 pb-8 flex gap-8 items-start">
              <span className="text-red-600 font-black text-xl">02</span>
              <div>
                <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Radical Honesty</h4>
                <p className="text-zinc-400 text-sm">During Q&A, ask the hard questions. Leave small talk at the door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MASSIVE CTA & WAITLIST --- */}
      <section className="bg-red-600 text-white py-32 md:py-48 px-6 text-center border-b-[16px] border-zinc-950">
        <h2 className="text-[12vw] font-black leading-none tracking-tighter uppercase hover:scale-[1.02] transition-transform duration-700 cursor-pointer mb-12">
          Be Present.
        </h2>
        
        <div className="max-w-md mx-auto">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-6">Secure Your Seat at SJU</p>
          <div className="flex bg-white p-1">
            <input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS" 
              className="w-full bg-transparent text-zinc-950 px-4 py-3 outline-none text-xs font-bold tracking-widest placeholder:text-zinc-400"
            />
            <button className="bg-zinc-950 text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-red-600 hover:text-white transition-colors border border-zinc-950">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* --- PREMIUM FOOTER --- */}
      <footer className="bg-white text-zinc-950 py-16 px-6 md:px-12 text-[10px] uppercase tracking-[0.2em] font-bold">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-red-600 text-lg leading-none">♥</span>
            <p>© {new Date().getFullYear()} OPEN HEART. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex gap-8">
            <a href="https://instagram.com/openheart.sjc" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-red-600 transition-colors">Press</a>
            <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HyperPremiumOpenHeart;