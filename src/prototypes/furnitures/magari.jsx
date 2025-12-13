import React, { useState, useEffect } from 'react';
import { 
  Upload, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Scan, 
  Info,
  ChevronRight,
  Star,
  RefreshCw // <--- Added this missing import
} from 'lucide-react';

// --- Mock Data ---
const MAGARI_COLLECTIONS = {
  modern: [
    { id: 1, name: "Massera Sectional", price: "₹2,45,000", matchScore: 98, matchReason: "Complements your room's linear geometry.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Aayutha Lounge Chair", price: "₹85,000", matchScore: 94, matchReason: "Adds contrast to the neutral palette.", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800" },
    { id: 7, name: "Vantana Coffee Table", price: "₹45,000", matchScore: 91, matchReason: "Low profile suits the ceiling height.", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800" }
  ],
  classic: [
    { id: 3, name: "Heritage Velvet Sofa", price: "₹1,95,000", matchScore: 97, matchReason: "Warm tones match your flooring.", image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Royal Wingback", price: "₹1,10,000", matchScore: 92, matchReason: "Classic silhouette fits the architecture.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" }
  ],
  minimalist: [
    { id: 5, name: "Cloud Modular", price: "₹3,10,000", matchScore: 99, matchReason: "Softens the harsh lighting angles.", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800" },
    { id: 6, name: "Low Profile Settee", price: "₹1,45,000", matchScore: 95, matchReason: "Maintains the open flow of the space.", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800" }
  ]
};

// --- Reusable Components ---

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 tracking-wide";
  const variants = {
    primary: "bg-white text-black hover:bg-stone-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    gold: "bg-amber-700 text-white hover:bg-amber-600 shadow-lg shadow-amber-900/20",
    ghost: "text-stone-400 hover:text-white"
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default function MagariAIApp() {
  const [step, setStep] = useState('intro'); 
  const [style, setStyle] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  
  // Simulation of the "Original" room image
  const MOCK_USER_ROOM = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop";

  const handleStyleSelect = (selectedStyle) => {
    setStyle(selectedStyle);
    setTimeout(() => setStep('upload'), 500);
  };

  const handleUpload = () => {
    setUploadedImage(MOCK_USER_ROOM);
    setStep('processing');
  };

  useEffect(() => {
    if (step === 'processing') {
      const timer = setTimeout(() => {
        setStep('studio');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // --- Render Steps ---

  const renderIntro = () => (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fade-in px-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-700/50 text-amber-500 text-xs tracking-widest uppercase">
        <Sparkles size={12} />
        Magari AI Atelier
      </div>
      <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
        Reimagine your <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-200 via-stone-400 to-stone-600">
          sanctuary.
        </span>
      </h1>
      <p className="text-stone-400 max-w-lg text-lg font-light">
        Experience the future of interior design. Upload a photo, and let our AI curate the perfect Magari pieces for your unique space.
      </p>
      <Button onClick={() => setStep('quiz')} variant="primary" className="mt-8">
        Start Design Journey <ArrowRight size={18} />
      </Button>
    </div>
  );

  const renderQuiz = () => (
    <div className="max-w-5xl mx-auto w-full h-full flex flex-col justify-center animate-fade-in px-6">
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Define your aesthetic.</h2>
      <p className="text-stone-400 mb-10">This helps our AI fine-tune the furniture recommendations.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { id: 'modern', label: 'Modern Luxury', desc: 'Clean lines, bold contrasts.', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=400' },
          { id: 'classic', label: 'Timeless Heritage', desc: 'Warm wood, rich fabrics.', img: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=400' },
          { id: 'minimalist', label: 'Soft Minimalist', desc: 'Serene, uncluttered, airy.', img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=400' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleStyleSelect(item.id)}
            className="group relative h-96 rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/50 transition-all duration-300 text-left"
          >
            <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-amber-400 transition-colors">{item.label}</h3>
              <p className="text-sm text-stone-300">{item.desc}</p>
            </div>
            {style === item.id && (
              <div className="absolute top-4 right-4 bg-amber-500 text-black p-2 rounded-full">
                <Check size={20} />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  const renderUpload = () => (
    <div className="max-w-2xl mx-auto w-full h-full flex flex-col justify-center animate-fade-in px-4">
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 text-center">Capture your space.</h2>
      
      <div 
        onClick={handleUpload}
        className="group relative w-full aspect-video rounded-3xl border-2 border-dashed border-stone-700 hover:border-amber-500/50 hover:bg-stone-900/50 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="p-4 bg-stone-800 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
          <Upload className="text-stone-300" size={32} />
        </div>
        <p className="text-lg text-white font-medium mb-2">Click to upload photo</p>
        <p className="text-sm text-stone-500">Supports JPG, PNG, HEIC</p>
      </div>
    </div>
  );

  const renderProcessing = () => (
    <div className="flex flex-col items-center justify-center h-full w-full relative overflow-hidden">
       {/* Background Scan Effect */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-500/50 blur-sm animate-scan-y shadow-[0_0_40px_rgba(245,158,11,0.5)]" />
          <img src={MOCK_USER_ROOM} className="w-full h-full object-cover opacity-20 filter blur-sm grayscale" alt="Processing Room" />
       </div>

       <div className="z-10 bg-black/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col items-center max-w-sm w-full">
         <div className="relative w-16 h-16 mb-6">
           <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-amber-500 animate-spin" />
           <Sparkles className="absolute inset-0 m-auto text-amber-500 animate-pulse" size={24} />
         </div>
         
         <div className="space-y-3 text-center w-full">
            <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-600 animate-progress" />
            </div>
            <p className="text-white font-medium animate-pulse">Analyzing spatial data...</p>
         </div>
       </div>
    </div>
  );

  const renderStudio = () => {
    const activeCollection = MAGARI_COLLECTIONS[style === 'boho' || !style ? 'modern' : style];

    return (
      <div className="h-full w-full overflow-y-auto animate-fade-in pb-20">
        
        {/* Header Section: Room Analysis */}
        <div className="relative h-[400px] w-full border-b border-white/10 overflow-hidden">
          <img src={uploadedImage || MOCK_USER_ROOM} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <div className="flex flex-col md:flex-row gap-8 items-end">
              <div className="w-48 h-32 rounded-xl overflow-hidden border border-white/20 shadow-2xl flex-shrink-0 hidden md:block">
                <img src={uploadedImage || MOCK_USER_ROOM} className="w-full h-full object-cover" alt="User Room" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                  <Scan size={14} />
                  Analysis Complete
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                  Your curated collection.
                </h2>
                <p className="text-stone-300 text-lg leading-relaxed max-w-2xl">
                  Based on the <span className="text-white font-medium">natural light</span> and <span className="text-white font-medium">warm undertones</span> of your room, we've selected pieces that enhance spatial flow without cluttering the aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid Section */}
        <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeCollection.map((product) => (
              <div 
                key={product.id}
                className="group bg-stone-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10 hover:-translate-y-2"
              >
                {/* Image Area */}
                <div className="h-64 overflow-hidden relative">
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute top-4 right-4 bg-black/70 backdrop-blur text-amber-500 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1">
                     <Star size={10} fill="currentColor" /> {product.matchScore}% Match
                   </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-white">{product.name}</h3>
                    <ArrowRight className="text-stone-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  
                  <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                    <span className="text-amber-500/80 mr-2">Why it fits:</span>
                    {product.matchReason}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-lg font-medium text-white">{product.price}</span>
                    <button className="text-xs text-stone-400 hover:text-white underline underline-offset-4">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Call to Action Card */}
            <div className="bg-gradient-to-br from-amber-900/20 to-stone-900 border border-amber-500/20 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <Sparkles className="text-amber-500 mb-4" size={32} />
              <h3 className="text-2xl font-serif text-white mb-2">Want more?</h3>
              <p className="text-stone-400 mb-6 text-sm">Our interior designers can further refine this list.</p>
              <Button variant="outline" className="w-full text-sm">
                Book Consultation
              </Button>
            </div>

          </div>

          <div className="mt-16 text-center">
            <Button variant="ghost" onClick={() => {setStep('quiz'); setStyle(null);}}>
              <RefreshCw className="mr-2" size={16} /> Start Over
            </Button>
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-stone-200 font-sans selection:bg-amber-500/30 overflow-hidden flex flex-col">
      {/* Global Header */}
      <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-neutral-950 z-50">
        <div className="text-2xl font-serif text-white tracking-tight cursor-pointer" onClick={() => setStep('intro')}>Magari</div>
        <div className="hidden md:flex gap-8 text-sm text-stone-400">
          <span className="hover:text-white cursor-pointer transition-colors">Collections</span>
          <span className="hover:text-white cursor-pointer transition-colors">Projects</span>
          <span className="text-white border-b border-amber-500 pb-0.5">AI Studio</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-700" />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        {step === 'intro' && renderIntro()}
        {step === 'quiz' && renderQuiz()}
        {step === 'upload' && renderUpload()}
        {step === 'processing' && renderProcessing()}
        {step === 'studio' && renderStudio()}
      </main>

      <style>{`
        @keyframes scan-y {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-y {
          animation: scan-y 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 3s linear forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-reverse {
          animation: spin 3s linear infinite reverse;
        }
      `}</style>
    </div>
  );
}
