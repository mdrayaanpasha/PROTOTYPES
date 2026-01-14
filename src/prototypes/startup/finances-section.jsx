import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  AlertCircle, 
  ArrowRight, 
  Target, 
  PieChart,
  Search,
  Sparkles,
  PackageX
} from 'lucide-react';

const FinancialGoalPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-8 flex justify-center">
      <div className="w-full max-w-6xl space-y-8">

        {/* --- HEADER: SYNC STATUS --- */}
        <header className="flex justify-between items-end border-b border-zinc-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wider">
                AI Audit Complete
              </span>
              <span className="text-zinc-500 text-xs">Synced 14 mins ago</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-white">Financial Pulse</h1>
            <p className="text-zinc-400 mt-1">Q3 Performance vs. "Growth Plan A"</p>
          </div>
          
          <div className="flex gap-3">
             <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-sm font-medium rounded-lg text-zinc-300 transition-colors">
                Upload Receipts
             </button>
             <button className="px-4 py-2 bg-zinc-100 text-black text-sm font-medium rounded-lg hover:bg-white transition-colors flex items-center gap-2">
                <Sparkles size={14} className="text-indigo-600"/> Ask CFO Agent
             </button>
          </div>
        </header>

        {/* --- 1. THE BIG PICTURE (Goal Tracking) --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Revenue Goal Card */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-10"><Target size={100}/></div>
                <p className="text-zinc-500 text-sm font-medium mb-1">Gross Revenue (Q3)</p>
                <div className="flex items-baseline gap-2">
                    <h2 className="text-3xl font-bold text-white">$245,000</h2>
                    <span className="text-zinc-600 text-sm">/ $300k Goal</span>
                </div>
                
                <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs">
                        <span className="text-zinc-400">81% to Target</span>
                        <span className="text-emerald-400">+12% vs last month</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full w-[81%]"></div>
                    </div>
                </div>
            </div>

            {/* Net Profit Card */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10"><DollarSign size={100}/></div>
                <p className="text-zinc-500 text-sm font-medium mb-1">Net Profit Margin</p>
                <div className="flex items-baseline gap-2">
                    <h2 className="text-3xl font-bold text-white">18.4%</h2>
                    <span className="text-zinc-600 text-sm">/ 22% Target</span>
                </div>
                
                <div className="mt-5 flex items-center gap-2 text-xs bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-2 rounded-lg w-fit">
                    <AlertCircle size={14} />
                    <span>OpEx is 4% higher than model.</span>
                </div>
            </div>

             {/* Cash Runway */}
             <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl relative overflow-hidden">
                <p className="text-zinc-500 text-sm font-medium mb-1">Cash Runway</p>
                 <div className="flex items-baseline gap-2">
                    <h2 className="text-3xl font-bold text-white">4.2 <span className="text-lg text-zinc-500 font-normal">Months</span></h2>
                </div>
                <p className="text-xs text-zinc-500 mt-2">Based on current burn rate of $42k/mo.</p>
                <div className="mt-4 pt-4 border-t border-zinc-800/50 flex gap-2">
                     <button className="text-xs bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-md text-zinc-300 transition-colors">Simulate Recession</button>
                </div>
            </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            
            {/* --- 2. THE "LEAK DETECTOR" (Left Column - 2/3 width) --- */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white flex items-center gap-2">
                        <Search size={18} className="text-indigo-500"/> Detected Financial Leaks
                    </h3>
                    <span className="text-xs text-zinc-500">AI scanned 482 transactions</span>
                </div>

                <div className="space-y-4">
                    {/* LEAK 1: Logistics */}
                    <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-rose-500/30 transition-colors group">
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
                                <PackageX size={20} />
                            </div>
                            <div>
                                <h4 className="text-zinc-200 font-medium">Return Rate Anomaly</h4>
                                <p className="text-sm text-zinc-400 mt-1 max-w-md">
                                    "Velvet Armchair" returns spiked to 15% this month due to "Fabric Damage." Cost of returns: <span className="text-rose-400 font-medium">-$4,200</span>.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 min-w-[140px]">
                            <span className="text-rose-500 font-bold text-lg">-$4,200</span>
                            <button className="text-xs bg-zinc-800 text-white px-3 py-1.5 rounded-lg border border-zinc-700 hover:bg-zinc-700 w-full text-center">
                                View QA Report
                            </button>
                        </div>
                    </div>

                    {/* LEAK 2: Subscriptions */}
                    <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-amber-500/30 transition-colors">
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                                <TrendingDown size={20} />
                            </div>
                            <div>
                                <h4 className="text-zinc-200 font-medium">Phantom Subscriptions</h4>
                                <p className="text-sm text-zinc-400 mt-1">
                                    Detected recurring payments to "Shopify App - Heatmap" ($49/mo) and "Zoom Pro" ($140/mo) that haven't been logged in to for 60 days.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 min-w-[140px]">
                            <span className="text-amber-500 font-bold text-lg">-$189<span className="text-xs font-normal text-zinc-500">/mo</span></span>
                            <button className="text-xs bg-white text-black px-3 py-1.5 rounded-lg font-medium hover:bg-zinc-200 w-full text-center">
                                Auto-Cancel
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- UNIT ECONOMICS CHART --- */}
                <div className="mt-8 pt-8 border-t border-zinc-800">
                    <h3 className="text-lg font-medium text-white flex items-center gap-2 mb-6">
                        <PieChart size={18} className="text-emerald-500"/> Unit Economics (Top Sellers)
                    </h3>
                    
                    <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-zinc-900 text-zinc-500 uppercase text-xs font-medium">
                                <tr>
                                    <th className="px-6 py-4">Product</th>
                                    <th className="px-6 py-4">Sale Price</th>
                                    <th className="px-6 py-4">COGS (Landed)</th>
                                    <th className="px-6 py-4">Net Margin</th>
                                    <th className="px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800">
                                <tr className="hover:bg-zinc-800/50">
                                    <td className="px-6 py-4 font-medium text-white">Nordic Dining Chair</td>
                                    <td className="px-6 py-4 text-zinc-300">$240</td>
                                    <td className="px-6 py-4 text-zinc-400">$110</td>
                                    <td className="px-6 py-4 text-emerald-400 font-bold">54%</td>
                                    <td className="px-6 py-4"><span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded">Push Ads</span></td>
                                </tr>
                                <tr className="hover:bg-zinc-800/50">
                                    <td className="px-6 py-4 font-medium text-white">Marble Coffee Table</td>
                                    <td className="px-6 py-4 text-zinc-300">$850</td>
                                    <td className="px-6 py-4 text-zinc-400">$680</td>
                                    <td className="px-6 py-4 text-rose-400 font-bold">20%</td>
                                    <td className="px-6 py-4"><span className="text-xs bg-rose-500/10 text-rose-400 px-2 py-1 rounded">Raise Price</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* --- 3. FORECAST & SUGGESTIONS (Right Column - 1/3 width) --- */}
            <div className="lg:col-span-1 space-y-6">
                
                {/* AI CFO Suggestion */}
                <div className="bg-gradient-to-b from-indigo-900/20 to-zinc-900 border border-indigo-500/30 p-6 rounded-3xl">
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={16} className="text-indigo-400"/>
                        <h3 className="text-indigo-200 font-medium text-sm uppercase tracking-wide">CFO Recommendation</h3>
                    </div>
                    <p className="text-xl font-medium text-white mb-4 leading-relaxed">
                        "Your shipping costs to the West Coast are killing your margin on the Marble Table."
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="min-w-[4px] h-[4px] mt-2 rounded-full bg-indigo-500"></div>
                            <p className="text-sm text-zinc-400">Switch to flat-pack crating (Est. saving: $40/unit).</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="min-w-[4px] h-[4px] mt-2 rounded-full bg-indigo-500"></div>
                            <p className="text-sm text-zinc-400">Use a 3PL in California for heavy items.</p>
                        </div>
                    </div>
                    <button className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-colors">
                        Draft 3PL Request
                    </button>
                </div>

                {/* Quick Actions */}
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
                    <h3 className="text-zinc-400 text-sm font-medium uppercase tracking-wide mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                        <button className="w-full text-left px-4 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 transition-colors flex justify-between items-center group">
                            <span className="text-sm text-zinc-300">Generate P&L PDF</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover:text-white"/>
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 transition-colors flex justify-between items-center group">
                            <span className="text-sm text-zinc-300">Run Payroll Simulator</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover:text-white"/>
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 transition-colors flex justify-between items-center group">
                            <span className="text-sm text-zinc-300">Approve Expenses (4)</span>
                            <div className="h-5 w-5 rounded-full bg-rose-500 text-[10px] flex items-center justify-center text-white">4</div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialGoalPage;