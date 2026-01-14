import React from 'react';
import { 
  Users, 
  Award, 
  TrendingUp, 
  Activity, 
  Battery, 
  BatteryWarning, 
  BrainCircuit, 
  Clock, 
  Star,
  MessageCircle,
  Briefcase,
  ArrowUpRight
} from 'lucide-react';

const EmployeeAnalysis = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-8 flex justify-center">
      <div className="w-full max-w-7xl h-[calc(100vh-64px)] grid grid-cols-12 gap-8">

        {/* --- LEFT SIDEBAR: ROSTER (4 Cols) --- */}
        <div className="col-span-4 flex flex-col gap-6">
          
          {/* Header */}
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-3">
              <Users className="text-indigo-500" /> Talent DNA
            </h1>
            <p className="text-zinc-500 mt-1">Real-time performance tracking of 12 active staff.</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl">
                <p className="text-xs text-zinc-500 uppercase">Team Velocity</p>
                <p className="text-lg font-bold text-emerald-400">+14% <span className="text-xs font-normal text-zinc-600">vs last mo</span></p>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl">
                <p className="text-xs text-zinc-500 uppercase">Burnout Risk</p>
                <p className="text-lg font-bold text-rose-400">2 <span className="text-xs font-normal text-zinc-600">High Risk</span></p>
             </div>
          </div>

          {/* The Roster List */}
          <div className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col">
             <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                <span className="text-xs font-medium text-zinc-400">Team Members</span>
                <button className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300">Sort by Rank</button>
             </div>
             
             <div className="overflow-y-auto custom-scrollbar flex-1 p-2 space-y-2">
                
                {/* Active Profile */}
                <div className="p-3 bg-zinc-800/80 border border-indigo-500/30 rounded-xl cursor-pointer relative overflow-hidden group">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                         <div className="h-10 w-10 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-bold">SJ</div>
                         <div>
                            <p className="text-sm font-bold text-white">Sarah Jenkins</p>
                            <p className="text-[10px] text-zinc-400">Lead Designer • <span className="text-emerald-400">Top Performer</span></p>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                            98 <Award size={10}/>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Risk Profile */}
                <div className="p-3 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700 rounded-xl cursor-pointer transition-colors opacity-80">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                         <div className="h-10 w-10 rounded-full bg-zinc-800 text-zinc-500 flex items-center justify-center font-bold relative">
                            MK
                            <div className="absolute -top-1 -right-1 bg-rose-500 h-3 w-3 rounded-full border-2 border-zinc-900"></div>
                         </div>
                         <div>
                            <p className="text-sm font-medium text-zinc-200">Marcus K.</p>
                            <p className="text-[10px] text-zinc-500">Logistics • <span className="text-rose-400">Overworked</span></p>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-zinc-500 text-xs font-bold">
                            84
                         </div>
                      </div>
                   </div>
                </div>

                 {/* Standard Profile */}
                 <div className="p-3 hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700 rounded-xl cursor-pointer transition-colors opacity-60">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                         <div className="h-10 w-10 rounded-full bg-zinc-800 text-zinc-500 flex items-center justify-center font-bold">
                            EL
                         </div>
                         <div>
                            <p className="text-sm font-medium text-zinc-200">Elena Lopez</p>
                            <p className="text-[10px] text-zinc-500">Sales Assoc</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-zinc-500 text-xs font-bold">
                            72
                         </div>
                      </div>
                   </div>
                </div>

             </div>
          </div>
        </div>


        {/* --- RIGHT SIDEBAR: DEEP DIVE (8 Cols) --- */}
        <div className="col-span-8 flex flex-col gap-6">
            
            {/* 1. HERO CARD: THE "PLAYER CARD" */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <Star size={180} />
                </div>

                <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-6">
                        <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 shadow-2xl shadow-indigo-500/20">
                            <div className="h-full w-full bg-zinc-900 rounded-2xl flex items-center justify-center text-3xl font-bold text-white">
                                SJ
                            </div>
                        </div>
                        <div className="pt-1">
                            <h2 className="text-3xl font-bold text-white">Sarah Jenkins</h2>
                            <p className="text-indigo-400 font-medium">Head of Interior Design</p>
                            <div className="flex gap-3 mt-3">
                                <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded border border-emerald-500/20 flex items-center gap-1">
                                    <TrendingUp size={12}/> Top 5% Revenue
                                </span>
                                <span className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded border border-zinc-700 flex items-center gap-1">
                                    <Clock size={12}/> 3.2 Years Tenure
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* The "Score" */}
                    <div className="text-center">
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Impact Score</div>
                        <div className="text-5xl font-black text-white tracking-tighter">98<span className="text-xl text-zinc-600 font-normal">/100</span></div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Stat 1 */}
                    <div className="bg-zinc-950/50 rounded-xl p-4 border border-zinc-800">
                        <p className="text-xs text-zinc-500 mb-1">Revenue Attributed (Q3)</p>
                        <p className="text-xl font-bold text-white">$42,500</p>
                        <p className="text-[10px] text-emerald-500 mt-1 flex items-center gap-1"><ArrowUpRight size={10}/> 12% above target</p>
                    </div>
                    {/* Stat 2 */}
                    <div className="bg-zinc-950/50 rounded-xl p-4 border border-zinc-800">
                        <p className="text-xs text-zinc-500 mb-1">Task Completion Speed</p>
                        <p className="text-xl font-bold text-white">Fast</p>
                        <p className="text-[10px] text-zinc-400 mt-1">Avg 1.2 days ahead</p>
                    </div>
                    {/* Stat 3 */}
                    <div className="bg-zinc-950/50 rounded-xl p-4 border border-zinc-800">
                        <p className="text-xs text-zinc-500 mb-1">Client Rating</p>
                        <p className="text-xl font-bold text-white">4.9/5</p>
                        <p className="text-[10px] text-zinc-400 mt-1">Based on 14 reviews</p>
                    </div>
                </div>
            </div>

            {/* 2. THE ANALYTICS GRID */}
            <div className="grid grid-cols-2 gap-6 h-full">
                
                {/* SKILLS MATRIX (Visualizing Strengths) */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6">
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-6">
                        <BrainCircuit size={16} className="text-purple-500"/> Skill Matrix
                    </h3>
                    
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-zinc-400">Design Creativity</span>
                                <span className="text-white">99%</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full w-[99%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-zinc-400">Client Communication</span>
                                <span className="text-white">92%</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full w-[92%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-zinc-400">Technical CAD</span>
                                <span className="text-white">85%</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full w-[85%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-zinc-400">Leadership</span>
                                <span className="text-white">70%</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-zinc-600 h-full w-[70%]"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                        <p className="text-xs text-purple-300 italic">
                            "Sarah is currently carrying the creative load. Her leadership score is lower simply because she focuses on execution."
                        </p>
                    </div>
                </div>

                {/* BURNOUT & AI ACTIONS */}
                <div className="flex flex-col gap-6">
                    
                    {/* Burnout Meter */}
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 flex items-center gap-4">
                         <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                             <Battery size={24} />
                         </div>
                         <div className="flex-1">
                             <p className="text-xs text-zinc-500 uppercase font-medium">Burnout Risk</p>
                             <p className="text-lg font-bold text-white">Low <span className="text-sm font-normal text-zinc-500">(Stable)</span></p>
                             <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                 <div className="bg-emerald-500 h-full w-[20%]"></div>
                             </div>
                         </div>
                    </div>

                    {/* AI Manager Recommendations */}
                    <div className="flex-1 bg-gradient-to-br from-indigo-900/20 to-zinc-900 border border-indigo-500/30 rounded-3xl p-6 flex flex-col justify-between">
                         <div>
                             <div className="flex items-center gap-2 mb-3">
                                 <Briefcase size={16} className="text-indigo-400"/>
                                 <h3 className="text-sm font-semibold text-indigo-200">AI Recommendation</h3>
                             </div>
                             <p className="text-sm text-white font-medium mb-1">Action: Approve Performance Bonus</p>
                             <p className="text-xs text-zinc-400 leading-relaxed">
                                 Sarah has exceeded Q3 targets by 12%. To retain her against competitor offers, a spot bonus of <span className="text-white font-medium">$1,500</span> is recommended.
                             </p>
                         </div>
                         
                         <div className="flex gap-3 mt-4">
                             <button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors">
                                 Approve Bonus
                             </button>
                             <button className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium rounded-lg transition-colors">
                                 Schedule Review
                             </button>
                         </div>
                    </div>

                </div>

            </div>

        </div>

      </div>
    </div>
  );
};

export default EmployeeAnalysis;