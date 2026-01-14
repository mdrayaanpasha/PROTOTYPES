import React from 'react';
import { 
  GitMerge, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Play, 
  History, 
  ArrowRight,
  Zap,
  Users,
  Settings,
  ChevronRight,
  FileText
} from 'lucide-react';

const SOPEngine = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-8 flex justify-center">
      <div className="w-full max-w-7xl h-[calc(100vh-64px)] grid grid-cols-12 gap-6">

        {/* --- LEFT SIDEBAR: SOP LIBRARY (3 Cols) --- */}
        <div className="col-span-3 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-6 px-2 pt-2">
             <div className="bg-purple-500/10 p-2 rounded-lg text-purple-400">
                <GitMerge size={20} />
             </div>
             <h2 className="font-semibold text-white">Process Library</h2>
          </div>

          {/* Search/Filter */}
          <div className="mb-4">
            <input type="text" placeholder="Search processes..." className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:border-purple-500/50" />
          </div>

          {/* List */}
          <div className="space-y-2 overflow-y-auto flex-1 pr-1 custom-scrollbar">
             {/* Active Item */}
             <div className="p-3 bg-zinc-800 border-l-2 border-purple-500 rounded-r-xl cursor-pointer">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-medium text-white">Custom Upholstery</h3>
                    <span className="text-[10px] bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded border border-red-500/20">Critical</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Clock size={10} /> <span>Avg: 14 Days</span>
                </div>
             </div>

             {/* Other Items */}
             <div className="p-3 hover:bg-zinc-800/50 border-l-2 border-transparent rounded-r-xl cursor-pointer transition-colors group">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">Timber Procurement</h3>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">Optimal</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Clock size={10} /> <span>Avg: 3 Days</span>
                </div>
             </div>

             <div className="p-3 hover:bg-zinc-800/50 border-l-2 border-transparent rounded-r-xl cursor-pointer transition-colors group">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">White Glove Delivery</h3>
                    <span className="text-[10px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/20">Review</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Clock size={10} /> <span>Avg: 2 Days</span>
                </div>
             </div>
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-800">
             <button className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-xs font-medium rounded-lg text-zinc-300 transition-colors flex items-center justify-center gap-2">
                <FileText size={14}/> Import New PDF
             </button>
          </div>
        </div>


        {/* --- CENTER STAGE: THE LIVE FLOW (6 Cols) --- */}
        <div className="col-span-6 flex flex-col gap-6">
            
            {/* Header */}
            <div className="flex justify-between items-center bg-zinc-900/50 border border-zinc-800 p-4 rounded-3xl backdrop-blur-sm">
                <div>
                    <h1 className="text-xl font-semibold text-white">Custom Upholstery Flow</h1>
                    <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-zinc-500 flex items-center gap-1"><History size={12}/> Last updated 2 days ago</span>
                        <span className="text-xs text-zinc-500 flex items-center gap-1"><Users size={12}/> 4 Employees involved</span>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold font-mono text-red-400">48h</div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Delay Detected</div>
                </div>
            </div>

            {/* The Visual Engine */}
            <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center space-y-8">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

                {/* Step 1: Good */}
                <div className="relative z-10 w-64 bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex items-center gap-4 opacity-50">
                    <div className="h-8 w-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
                        <CheckCircle2 size={16} />
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 uppercase font-medium">Step 1</p>
                        <p className="text-sm font-medium text-zinc-300">Frame Selection</p>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-zinc-700"><ArrowRight className="rotate-90" size={20}/></div>
                </div>

                {/* Step 2: Good */}
                <div className="relative z-10 w-64 bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex items-center gap-4 opacity-50">
                     <div className="h-8 w-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
                        <CheckCircle2 size={16} />
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 uppercase font-medium">Step 2</p>
                        <p className="text-sm font-medium text-zinc-300">Foam Application</p>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-zinc-700"><ArrowRight className="rotate-90" size={20}/></div>
                </div>

                {/* Step 3: THE PROBLEM */}
                <div className="relative z-10 w-72 bg-red-950/30 border border-red-500/50 rounded-xl p-4 flex items-center gap-4 shadow-[0_0_30px_-5px_rgba(239,68,68,0.2)] ring-1 ring-red-500/30">
                    <div className="absolute -right-3 -top-3 bg-red-500 text-white p-1 rounded-full shadow-lg animate-bounce">
                        <AlertTriangle size={14} />
                    </div>
                    <div className="h-10 w-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center border border-red-500/30">
                        <Clock size={20} />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-xs text-red-400 uppercase font-bold">Step 3 • Bottleneck</p>
                            <span className="text-[10px] text-zinc-400">Owner: Marcus</span>
                        </div>
                        <p className="text-sm font-bold text-white">Fabric Inspection</p>
                        <p className="text-xs text-red-300 mt-1">Avg Time: 52 hours (Target: 4h)</p>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-zinc-700"><ArrowRight className="rotate-90" size={20}/></div>
                </div>

                 {/* Step 4: Pending */}
                 <div className="relative z-10 w-64 bg-zinc-900 border border-zinc-800 border-dashed rounded-xl p-4 flex items-center gap-4 opacity-40">
                     <div className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-500 flex items-center justify-center border border-zinc-700">
                        <div className="h-2 w-2 bg-zinc-600 rounded-full"></div>
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 uppercase font-medium">Step 4</p>
                        <p className="text-sm font-medium text-zinc-300">Final Stitching</p>
                    </div>
                </div>
            </div>
        </div>


        {/* --- RIGHT SIDEBAR: AI OPTIMIZER (3 Cols) --- */}
        <div className="col-span-3 flex flex-col gap-6">
            
            {/* The Analysis Card */}
            <div className="bg-gradient-to-b from-indigo-900/20 to-zinc-900 border border-indigo-500/30 rounded-3xl p-5">
                <div className="flex items-center gap-2 mb-4">
                    <Zap size={16} className="text-indigo-400" />
                    <h3 className="text-sm font-semibold text-indigo-100">AI Root Cause Analysis</h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    Step 3 is stalling because "Fabric QC" currently requires a <span className="text-white font-medium">Manager Signature</span> (Marcus), who is only on the floor 4 hours/day.
                </p>
                
                <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
                    <div className="flex justify-between text-xs text-zinc-500 mb-1">
                        <span>Current Flow Cost</span>
                        <span className="text-red-400">High</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mb-3">
                        <div className="bg-red-500 h-full w-[85%]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-zinc-500 mb-1">
                        <span>Proposed Flow Cost</span>
                        <span className="text-emerald-400">Low</span>
                    </div>
                     <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[35%]"></div>
                    </div>
                </div>
            </div>

            {/* The Solution Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex-1 flex flex-col">
                 <div className="flex items-center gap-2 mb-4">
                    <Settings size={16} className="text-zinc-400" />
                    <h3 className="text-sm font-semibold text-zinc-100">Optimization Plan</h3>
                </div>

                <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                        <div className="mt-0.5 min-w-[16px] flex justify-center"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div></div>
                        <p className="text-xs text-zinc-300"><strong className="text-white">Action:</strong> Remove "Manager Sign-off" for fabrics under $50/yard.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <div className="mt-0.5 min-w-[16px] flex justify-center"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div></div>
                         <p className="text-xs text-zinc-300"><strong className="text-white">Action:</strong> Delegate approval to "Senior Stitcher" (Sarah) via Mobile App.</p>
                    </div>
                </div>

                <div className="mt-auto pt-6">
                    <button className="w-full py-3 bg-white hover:bg-zinc-200 text-black text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/5">
                        <Play size={16} className="fill-black"/> Deploy New SOP
                    </button>
                    <p className="text-[10px] text-center text-zinc-600 mt-3">
                        Updates will be pushed to 3 employee devices.
                    </p>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default SOPEngine;