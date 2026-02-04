import React from 'react';
import { 
  Play, 
  AlertCircle, 
  Truck, 
  Factory, 
  FileSearch, 
  History, 
  Ban,
  MessageSquareText,
  ShieldAlert
} from 'lucide-react';

const OutsourcedSOP = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 p-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        
        {/* LEFT: OUTSOURCED SOPs */}
        <div className="col-span-3 bg-stone-900/50 border border-stone-800 rounded-2xl p-4">
          <h2 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-4 px-2">Active SOPs</h2>
          <div className="space-y-2">
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="font-bold text-sm text-white">SOP: Solid Wood Bed</p>
              <p className="text-[10px] text-red-400 font-medium italic">Vendor: Jodhpur Unit B</p>
            </div>
            <div className="p-3 bg-stone-800/50 rounded-xl opacity-50">
              <p className="font-bold text-sm">SOP: Marble Top Table</p>
              <p className="text-[10px] text-stone-400 font-medium italic">Vendor: Kishangarh Allied</p>
            </div>
          </div>
        </div>

        {/* CENTER: VENDOR FLOW MONITOR */}
        <div className="col-span-6 bg-stone-900 border border-stone-800 rounded-3xl p-8 relative">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-xl font-black text-white">SOP: Solid Wood Bed</h1>
              <p className="text-xs text-stone-500">Tracking: Saharanpur Manufacturing Hub</p>
            </div>
            <div className="px-3 py-1 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400 text-[10px] font-bold">
              STOPPED
            </div>
          </div>

          {/* STEP 1: COMPLETED */}
          <div className="mb-12 border-l-2 border-stone-800 ml-4 pl-8 relative">
            <div className="absolute -left-[9px] top-0 h-4 w-4 bg-emerald-500 rounded-full border-4 border-stone-950"></div>
            <div className="bg-stone-800/40 p-4 rounded-xl border border-stone-800 opacity-60">
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold">Step 1: Raw Material Seasoning</p>
                <span className="text-[10px] text-emerald-500 font-mono">VERIFIED</span>
              </div>
            </div>
          </div>

          {/* STEP 2: THE MANUFACTURER DELAY */}
          <div className="mb-12 border-l-2 border-stone-800 ml-4 pl-8 relative">
            <div className="absolute -left-[9px] top-0 h-4 w-4 bg-red-500 rounded-full border-4 border-stone-950 animate-pulse"></div>
            <div className="bg-red-950/20 p-5 rounded-xl border-2 border-red-500 shadow-lg shadow-red-900/10">
              <div className="flex gap-4">
                <div className="bg-red-500/20 p-2 rounded-lg h-fit text-red-500">
                  <Factory size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-red-400 uppercase tracking-tighter mb-1">Step 2: Joinery & Structure</p>
                  <p className="text-lg font-bold text-white leading-tight">Vendor Equipment Failure</p>
                  <p className="text-sm text-red-200 mt-2 bg-red-500/10 p-2 rounded italic">
                    "The hydraulic press at the vendor's site is broken. They are waiting for parts from Delhi."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3: BLOCKED */}
          <div className="ml-4 pl-8 relative opacity-20">
            <div className="absolute -left-[9px] top-0 h-4 w-4 bg-stone-700 rounded-full border-4 border-stone-950"></div>
            <div className="p-4 bg-stone-800 rounded-xl border border-stone-800">
              <p className="text-sm font-medium">Step 3: Hand Finishing</p>
            </div>
          </div>
        </div>

        {/* RIGHT: THE SMART FIX */}
        <div className="col-span-3 space-y-4">
          <div className="bg-stone-100 p-5 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2 mb-4 text-stone-900">
              <ShieldAlert size={18} />
              <h3 className="font-black text-[11px] uppercase tracking-tighter">AI Recovery Plan</h3>
            </div>
            
            <div className="space-y-4 text-stone-800">
              <div className="border-b border-stone-300 pb-3">
                <p className="text-[10px] font-bold text-stone-400 uppercase">Impact:</p>
                <p className="text-xs font-bold">This SOP will miss the delivery date by <span className="text-red-600 underline">9 days</span>.</p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-stone-400 uppercase mb-1">Recommendation:</p>
                <p className="text-xs leading-snug">
                  Shift the remaining structural work to <b>"Vendor B (Jodhpur)"</b> who has idle machine capacity.
                </p>
              </div>
            </div>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl flex flex-col items-center transition-all shadow-lg active:scale-95">
            <div className="flex items-center gap-2">
              <History size={18} />
              <span>RE-ASSIGN SOP</span>
            </div>
            <p className="text-[9px] uppercase mt-1 opacity-80">Shift production to backup vendor</p>
          </button>

          <button className="w-full bg-stone-800 text-stone-400 font-bold py-3 rounded-xl flex items-center justify-center gap-2 border border-stone-700 hover:text-white transition-colors">
            <MessageSquareText size={16} />
            <span className="text-xs">Chat with Vendor</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default OutsourcedSOP;