import React from 'react';
import { 
  TrendingDown, 
  IndianRupee, 
  Truck, 
  RotateCcw, 
  Zap, 
  AlertCircle,
  Package
} from 'lucide-react';

const StupidSimpleFinance = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* 1. THE MAIN NUMBERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
            <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Total Money In</p>
            <h2 className="text-3xl font-black">₹18.5 Lakh</h2>
          </div>

          <div className="bg-red-900/20 p-6 rounded-3xl border border-red-500/50">
            <p className="text-red-400 text-xs font-bold uppercase mb-1">Money Left (Profit)</p>
            <h2 className="text-3xl font-black text-white">12%</h2>
            <p className="text-[10px] text-red-400 mt-1">Last month was 18% (Falling!)</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
            <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Loss from Returns</p>
            <h2 className="text-3xl font-black text-zinc-400">₹1.4 Lakh</h2>
          </div>
        </div>

        {/* 2. THE MONEY TRAPS (Where is it going?) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Why you have less money:</h3>

            {/* Trap 1: Daily Running Costs */}
            <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 flex items-center justify-between">
              <div className="flex gap-4">
                <div className="bg-orange-500/10 p-3 rounded-xl text-orange-500">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Operating Expenses (Daily Kharcha)</h4>
                  <p className="text-xs text-zinc-500">Transport and packing costs went up this month.</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-orange-500">+₹45,000</p>
                <p className="text-[10px] text-zinc-600 uppercase font-bold">Extra Spend</p>
              </div>
            </div>

            {/* Trap 2: Specific Product Returns */}
            <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-4">
               <div className="flex items-center gap-4">
                <div className="bg-red-500/10 p-3 rounded-xl text-red-500">
                  <RotateCcw size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Returns on Specific Products</h4>
                  <p className="text-xs text-zinc-500">Some items are coming back too often.</p>
                </div>
              </div>

              {/* Product List */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="bg-black p-3 rounded-xl border border-zinc-800">
                   <p className="text-[10px] text-zinc-500 uppercase font-bold">Velvet Sofa Set</p>
                   <p className="text-sm font-bold text-red-500">15% Returned</p>
                   <p className="text-[9px] text-zinc-600 italic">"Fabric gets dusty in truck"</p>
                </div>
                <div className="bg-black p-3 rounded-xl border border-zinc-800">
                   <p className="text-[10px] text-zinc-500 uppercase font-bold">Glass Coffee Table</p>
                   <p className="text-sm font-bold text-red-500">8% Returned</p>
                   <p className="text-[9px] text-zinc-600 italic">"Glass breaks during delivery"</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. THE AI FIX */}
          <div className="lg:col-span-1">
            <div className="bg-blue-600 p-6 rounded-3xl shadow-xl h-full">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={16} fill="white" className="text-yellow-300" />
                <h3 className="text-xs font-black uppercase tracking-tighter">AI Quick Fix</h3>
              </div>
              
              <p className="text-lg font-bold text-white leading-tight mb-4">
                "Stop sending Velvet Sofas through open trucks."
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <p className="text-xs text-white">
                    You lost <b>₹80,000</b> just on Velvet Sofa returns. 
                    If you use <b>Plastic Bubble Wrap</b> (extra ₹500), you save almost all of that money.
                  </p>
                </div>
              </div>

              <button className="w-full bg-white text-blue-600 font-black py-4 rounded-2xl text-xs uppercase mt-6 shadow-lg">
                Fix Velvet SOP Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StupidSimpleFinance;