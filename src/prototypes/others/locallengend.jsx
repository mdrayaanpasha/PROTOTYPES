import React, { useState } from 'react';
import { Search, ShoppingBag, MapPin, Heart, Home, MessageSquare, User, Plus, Star, Zap, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';

const LocalLegend = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [viewMode, setViewMode] = useState('products'); // 'products' or 'services'

  // --- MOCK DATA ---
  const nearbyStores = [
    {
      id: 1,
      name: "T Shops Premium",
      distance: "0.2 km",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
      logo: "T",
      color: "bg-blue-600",
      verified: true
    },
    {
      id: 2,
      name: "Dhanshree Gourmet",
      distance: "0.6 km",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=400",
      logo: "D",
      color: "bg-emerald-600",
      verified: true
    },
    {
      id: 3,
      name: "Masti Goli",
      distance: "1.2 km",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
      logo: "M",
      color: "bg-orange-500",
      verified: false
    }
  ];

  const products = [
    {
      id: 1,
      title: "Truffle Oil Extract",
      brand: "KNORR",
      price: "1,313",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400", 
    },
    {
      id: 2,
      title: "German Roast Mix",
      brand: "GOURMET",
      price: "1,309",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Organic Pork Seasoning",
      brand: "KNORR",
      price: "2,725",
      rating: 4.9,
      image: "https://media.istockphoto.com/id/1436118426/photo/tasty-salt-pork-with-herbs-onion-and-garlic-on-wooden-table-closeup.jpg?s=1024x1024&w=is&k=20&c=HvIRZlj6WyHMwX7MNWcZyODK9k5g6DvqSyMa6yON-Q0="
    },
    {
      id: 4,
      title: "Aromat Classic",
      brand: "ESSENTIALS",
      price: "630",
      rating: 4.5,
      image: "https://img.freepik.com/free-photo/cup-tea-with-dried-flowers-cinnamon-white_140725-44457.jpg?ga=GA1.1.197242447.1767085713&semt=ais_hybrid&w=740&q=80"
    },
  ];

  const services = [
    { id: 101, title: "Knife Sharpening", price: "150", time: "30 min" },
    { id: 102, title: "Gift Wrapping", price: "50", time: "10 min" }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white pb-24 md:pb-0">
      
      {/* --- HEADER: Invisible & Functional --- */}
      <header className="sticky top-0 z-40 bg-[#FAFAFA]/90 backdrop-blur-xl border-b border-black/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">Location</span>
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-sm font-bold tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Bengaluru, Indiranagar
              </span>
              <div className="bg-black text-white p-1 rounded-full">
                <MapPin size={10} strokeWidth={3} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-white border border-neutral-200 px-4 py-2 rounded-full text-xs font-medium text-neutral-500 hover:border-neutral-400 transition-all">
              <Search size={14} />
              <span>Search for products...</span>
              <span className="ml-8 text-neutral-300">⌘K</span>
            </button>
            <button className="relative p-3 bg-white border border-neutral-100 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95">
              <ShoppingBag size={18} className="text-neutral-900" />
              <span className="absolute top-2 right-2.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto pt-6 px-4 md:px-6 space-y-12">

        {/* --- SECTION: NEARBY STORES (The "Destinations" Look) --- */}
        <section>
          <div className="flex items-end justify-between mb-6 px-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-neutral-900">Nearby Stores</h2>
              <p className="text-xs text-neutral-500 mt-1 font-medium tracking-wide">CURATED SELLERS IN YOUR AREA</p>
            </div>
            <button className="text-xs font-bold border-b border-black pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors">VIEW MAP</button>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="flex gap-4 overflow-x-auto pb-8 -mx-4 px-6 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory">
            {nearbyStores.map((store) => (
              <div key={store.id} className="snap-center shrink-0 w-[280px] md:w-[320px] group cursor-pointer">
                {/* Store Image Card */}
                <div className="relative h-48 rounded-[2rem] overflow-hidden mb-4 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img src={store.image} alt={store.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Floating Logo */}
                  <div className={`absolute bottom-4 left-4 z-20 w-10 h-10 ${store.color} rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}>
                    {store.logo}
                  </div>
                  
                  {/* Verified Badge */}
                  {store.verified && (
                    <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md border border-white/20 px-2 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-white" fill="currentColor" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">Verified</span>
                    </div>
                  )}
                </div>

                {/* Store Meta */}
                <div className="pl-2">
                  <h3 className="text-lg font-bold tracking-tight text-neutral-900 flex items-center gap-2">
                    {store.name}
                    <ChevronRight size={16} className="text-neutral-300 group-hover:text-black transition-colors" />
                  </h3>
                  <p className="text-xs font-medium text-neutral-400 mt-0.5 flex items-center gap-2">
                    <span className="bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded text-[10px]">{store.distance}</span>
                    <span>•</span>
                    <span>Delivery in 20 min</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* --- SECTION: THE SEGMENTED TOGGLE (iOS Style) --- */}
        <div className="sticky top-[80px] z-30 py-4 bg-[#FAFAFA]/95 backdrop-blur-sm">
           <div className="bg-neutral-200/50 p-1.5 rounded-full max-w-sm mx-auto flex relative shadow-inner">
              {/* Sliding Background Pill Animation */}
              <div 
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${viewMode === 'products' ? 'left-1.5' : 'left-[calc(50%+3px)]'}`}
              />
              
              <button 
                onClick={() => setViewMode('products')}
                className={`relative flex-1 py-2.5 text-sm font-bold tracking-wide z-10 transition-colors duration-300 text-center ${viewMode === 'products' ? 'text-black' : 'text-neutral-500 hover:text-neutral-700'}`}
              >
                Products
              </button>
              <button 
                onClick={() => setViewMode('services')}
                className={`relative flex-1 py-2.5 text-sm font-bold tracking-wide z-10 transition-colors duration-300 text-center ${viewMode === 'services' ? 'text-black' : 'text-neutral-500 hover:text-neutral-700'}`}
              >
                Services
              </button>
           </div>
        </div>


        {/* --- SECTION: CONTENT GRID --- */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {viewMode === 'products' ? (
            /* PRODUCT GRID */
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  {/* Editorial Image Card */}
                  <div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden mb-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    
                    {/* Minimalist Add Button */}
                    <button className="absolute bottom-3 right-3 w-10 h-10 bg-black/5 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white hover:border-transparent">
                      <Plus size={18} strokeWidth={2.5} />
                    </button>

                    {/* Brand Tag */}
                    <div className="absolute top-4 left-4">
                       <span className="text-[9px] font-black tracking-widest uppercase bg-white/90 backdrop-blur px-2 py-1 rounded-sm text-neutral-800">{product.brand}</span>
                    </div>
                  </div>

                  {/* Clean Typography */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-neutral-900 leading-tight group-hover:underline decoration-1 underline-offset-4 decoration-neutral-300">{product.title}</h3>
                      <div className="flex items-center gap-1 bg-neutral-100 px-1.5 py-0.5 rounded text-[10px] font-bold text-neutral-700">
                        <Star size={8} fill="currentColor" /> {product.rating}
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                       <span className="text-sm font-bold text-neutral-900">₹{product.price}</span>
                       <span className="text-[10px] text-neutral-400 line-through">₹{parseInt(product.price) + 200}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* SERVICES LIST VIEW (Toggle Switch Result) */
            <div className="flex flex-col gap-4">
              <div className="p-8 text-center bg-white rounded-3xl border border-dashed border-neutral-300">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-400">
                  <Zap size={20} />
                </div>
                <h3 className="font-bold text-lg text-neutral-900">Services Nearby</h3>
                <p className="text-sm text-neutral-500 mt-2 max-w-xs mx-auto">Book local experts for sharpening, wrapping, and repairs directly from the app.</p>
              </div>
              
              {services.map(service => (
                <div key={service.id} className="bg-white p-5 rounded-2xl flex items-center justify-between shadow-sm border border-neutral-100 hover:border-neutral-300 transition-all cursor-pointer">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        <Clock size={20} />
                     </div>
                     <div>
                       <h4 className="font-bold text-neutral-900">{service.title}</h4>
                       <span className="text-xs text-neutral-500 font-medium">{service.time} session</span>
                     </div>
                   </div>
                   <button className="px-4 py-2 bg-black text-white text-xs font-bold rounded-lg hover:bg-neutral-800 transition">
                     Book ₹{service.price}
                   </button>
                </div>
              ))}
            </div>
          )}

        </section>

      </main>

      {/* --- FLOATING DOCK (Mobile Only) --- */}
      {/* Replaces the standard bottom bar with a floating 'island' for maximum modernity */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="flex items-center gap-1 bg-black/90 backdrop-blur-xl p-1.5 rounded-full shadow-2xl border border-white/10 ring-1 ring-black/5">
           {['Home', 'Chat', 'Profile'].map((tab) => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`relative px-5 py-3 rounded-full transition-all duration-300 ${activeTab === tab ? 'bg-white/20 text-white' : 'text-neutral-400 hover:text-white'}`}
             >
               {tab === 'Home' && <Home size={20} strokeWidth={2.5} />}
               {tab === 'Chat' && <MessageSquare size={20} strokeWidth={2.5} />}
               {tab === 'Profile' && <User size={20} strokeWidth={2.5} />}
               
               {/* Active Dot Indicator */}
               {activeTab === tab && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>}
             </button>
           ))}
        </div>
      </nav>

    </div>
  );
};

export default LocalLegend;