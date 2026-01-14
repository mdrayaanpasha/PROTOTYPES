import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Package, 
  Truck, 
  Sofa, 
  ArrowRight, 
  AlertTriangle,
  ClipboardList
} from 'lucide-react';

const FurnitureCopilot = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500/30 p-8 flex justify-center">
      
      <div className="w-full max-w-5xl space-y-10">
        
        {/* --- 1. CONTEXT: The Furniture Owner's Pulse --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
                <h1 className="text-2xl font-semibold tracking-tight text-white">
                    Studio <span className="text-amber-600">Command</span>.
                </h1>
                <p className="text-zinc-500 mt-1">
                    Morning, Owner. You have <span className="text-white font-medium">2 supply chain alerts</span> and <span className="text-white font-medium">1 SOP bottleneck</span> in the workshop.
                </p>
            </div>
            
            {/* The "North Star" Goal */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between backdrop-blur-sm">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Sofa size={14} className="text-amber-500" />
                        <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Q1 "Lounge" Collection</span>
                    </div>
                    <div className="text-xl font-bold font-mono">$84,500 <span className="text-zinc-600 text-sm font-sans">/ $100k Target</span></div>
                </div>
                {/* Visual Progress Ring */}
                <div className="relative h-12 w-12 flex items-center justify-center">
                    <svg className="transform -rotate-90 w-12 h-12">
                        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-zinc-800" />
                        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" fill="transparent" strokeDasharray="113" strokeDashoffset="20" className="text-amber-500" />
                    </svg>
                    <span className="absolute text-[10px] font-medium text-zinc-300">84%</span>
                </div>
            </div>
        </section>

        {/* --- 2. PRIORITY ACTION STREAM --- */}
        <section className="space-y-6">
            <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium uppercase tracking-widest pl-1">
                <Zap size={14} className="text-amber-500" /> Critical Decisions
            </div>

            {/* CARD 1: Inventory/Supply Chain (The "Teak Wood" Crisis) */}
            <div className="group relative bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 rounded-3xl p-6 transition-all shadow-xl shadow-black/20">
                <div className="absolute top-6 right-6 flex gap-2">
                    <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-medium rounded-full border border-red-500/20">Stockout Risk</span>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* The Problem */}
                    <div className="flex-1 space-y-4">
                        <div className="h-10 w-10 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                            <Package size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white">"Nordic Oak Chair" Stock Low</h3>
                            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                                Demand spiked 40% this week. Current raw timber stock only supports <span className="text-white">12 more units</span>. Supplier "TimberCo" has a 3-week lead time.
                            </p>
                        </div>
                        
                        {/* The AI Solution */}
                        <div className="bg-amber-900/10 border border-amber-500/20 p-4 rounded-xl">
                            <p className="text-amber-300 text-sm font-medium mb-1">Recommended Action:</p>
                            <p className="text-zinc-300 text-sm">Split order: Buy 20% from local backup supplier (pricier but instant) to cover the gap, and bulk order the rest normally.</p>
                        </div>
                    </div>

                    {/* The Delegation */}
                    <div className="md:w-80 bg-zinc-950 rounded-2xl p-5 border border-zinc-800/50 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs text-zinc-500 font-medium uppercase">Best Handler</span>
                                <span className="text-emerald-500 text-xs font-bold">96% History</span>
                            </div>
                            
                            <div className="flex items-center gap-3 mb-3">
                                <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center font-medium text-zinc-300 border border-zinc-700">
                                    EL
                                </div>
                                <div>
                                    <p className="text-sm text-white font-medium">Elena Lopez</p>
                                    <p className="text-xs text-zinc-500">Procurement Lead</p>
                                </div>
                            </div>
                            <p className="text-xs text-zinc-400 mb-4">
                                <span className="text-amber-500">Why?</span> She successfully negotiated the emergency Mahogany deal last year.
                            </p>
                        </div>

                        <button className="w-full py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                            Delegate to Elena <ArrowRight size={14}/>
                        </button>
                    </div>
                </div>
            </div>


            {/* CARD 2: SOP/Quality Control (The "Velvet" Problem) */}
            <div className="group relative bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-3xl p-6 transition-all shadow-xl shadow-black/20">
                 <div className="absolute top-6 right-6 flex gap-2">
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-medium rounded-full border border-indigo-500/20">Quality SOP Alert</span>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* The Problem */}
                    <div className="flex-1 space-y-4">
                        <div className="h-10 w-10 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                            <ClipboardList size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white">Bottleneck in Upholstery</h3>
                            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                                Custom Velvet orders are taking <span className="text-red-400">14 days</span> (Target: 8 days). The bottleneck is the manual fabric inspection step.
                            </p>
                        </div>
                         {/* The AI Solution */}
                         <div className="bg-indigo-900/10 border border-indigo-500/20 p-4 rounded-xl">
                            <p className="text-indigo-300 text-sm font-medium mb-1">Recommended Action:</p>
                            <p className="text-zinc-300 text-sm">Update SOP: Move fabric inspection to "Goods Inward" stage rather than "Pre-Assembly" to prevent workshop stoppages.</p>
                        </div>
                    </div>

                    {/* The Delegation */}
                    <div className="md:w-80 bg-zinc-950 rounded-2xl p-5 border border-zinc-800/50 flex flex-col justify-between">
                         <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs text-zinc-500 font-medium uppercase">Best Handler</span>
                                <span className="text-emerald-500 text-xs font-bold">89% History</span>
                            </div>
                            
                            <div className="flex items-center gap-3 mb-3">
                                <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center font-medium text-zinc-300 border border-zinc-700">
                                    MK
                                </div>
                                <div>
                                    <p className="text-sm text-white font-medium">Marcus K.</p>
                                    <p className="text-xs text-zinc-500">Workshop Foreman</p>
                                </div>
                            </div>
                             <p className="text-xs text-zinc-400 mb-4">
                                <span className="text-indigo-400">Why?</span> He re-organized the wood sanding station for 15% efficiency gain.
                            </p>
                        </div>
                        <button className="w-full py-2.5 bg-zinc-800 text-zinc-200 border border-zinc-700 text-sm font-semibold rounded-lg hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
                            Assign to Marcus <ArrowRight size={14}/>
                        </button>
                    </div>
                </div>
            </div>

            {/* CARD 3: Logistics (Customer Complaint Risk) */}
            <div className="group relative bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 rounded-3xl p-6 transition-all opacity-80 hover:opacity-100">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-2">
                         <div className="flex items-center gap-2 mb-2">
                            <Truck size={14} className="text-blue-500" />
                            <span className="text-xs text-blue-400 font-medium">Logistics Warning</span>
                        </div>
                        <h3 className="text-lg font-medium text-white">Delivery Delays in Sector 4</h3>
                        <p className="text-zinc-400 text-sm">Heavy rains are affecting our courier "FastShip". 15 orders might miss the weekend delivery window. <span className="text-zinc-200 cursor-pointer underline decoration-dotted">View affected customers</span></p>
                    </div>
                    
                    <div className="md:w-80 flex items-center justify-end">
                         <button className="w-full md:w-auto px-6 py-2.5 bg-zinc-800 text-zinc-300 border border-zinc-700 text-sm font-semibold rounded-lg hover:text-white transition-colors">
                            Draft Apology Email
                        </button>
                    </div>
                </div>
            </div>

        </section>
      </div>
    </div>
  );
};

export default FurnitureCopilot;