import React from 'react';
import { 
  Tag, 
  BarChart2, 
  TrendingUp, 
  AlertOctagon, 
  Layers, 
  Search, 
  ArrowUpRight, 
  ArrowDownRight,
  Globe,
  MessageSquare,
  Package
} from 'lucide-react';

const ProductCatalogAnalysis = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans p-8 flex justify-center">
      <div className="w-full max-w-7xl space-y-8">

        {/* --- HEADER: MERCHANDISING HEALTH --- */}
        <header className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-2">
                <h1 className="text-2xl font-semibold tracking-tight text-white">Catalog Intelligence</h1>
                <p className="text-zinc-500 mt-1">AI Audit of <span className="text-white font-medium">142 SKUs</span> against 5 major competitors.</p>
            </div>
            
            {/* Dead Stock Alert */}
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-4 flex items-center justify-between">
                <div>
                    <p className="text-xs text-rose-400 font-medium uppercase tracking-wider">Dead Stock Value</p>
                    <p className="text-xl font-bold text-white">$12,450</p>
                    <p className="text-[10px] text-rose-300/70">Inventory > 180 days</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500">
                    <AlertOctagon size={20} />
                </div>
            </div>

            {/* Opportunity Alert */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between">
                <div>
                    <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Pricing Opportunity</p>
                    <p className="text-xl font-bold text-white">+$3,200<span className="text-xs font-normal text-zinc-500">/mo</span></p>
                    <p className="text-[10px] text-emerald-300/70">If you match market avg.</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <TrendingUp size={20} />
                </div>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-200px)]">

            {/* --- LEFT: PRODUCT MATRIX (4 Cols) --- */}
            <div className="lg:col-span-4 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4 px-2">
                    <h3 className="font-medium text-zinc-200">Performance Matrix</h3>
                    <button className="text-xs text-zinc-500 hover:text-white">Filter</button>
                </div>

                {/* The List */}
                <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
                    
                    {/* Item: STAR */}
                    <div className="p-4 bg-zinc-800 rounded-xl border-l-4 border-emerald-500 cursor-pointer ring-1 ring-emerald-500/20 shadow-lg">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-white text-sm">Teak Lounge Chair</h4>
                            <span className="text-[10px] bg-emerald-500 text-black font-bold px-1.5 py-0.5 rounded">STAR</span>
                        </div>
                        <div className="flex justify-between text-xs text-zinc-400">
                            <span>Vol: <span className="text-white">High</span></span>
                            <span>Margin: <span className="text-white">62%</span></span>
                        </div>
                    </div>

                    {/* Item: UNDERPRICED */}
                    <div className="p-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-700 cursor-pointer transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-zinc-300 group-hover:text-white text-sm">Modular Sofa (Grey)</h4>
                            <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded border border-indigo-500/30">Underpriced</span>
                        </div>
                        <div className="flex justify-between text-xs text-zinc-500">
                            <span>Vol: Med</span>
                            <span>Margin: 45%</span>
                        </div>
                    </div>

                    {/* Item: DEAD STOCK */}
                    <div className="p-4 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-700 cursor-pointer transition-colors group">
                         <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-zinc-300 group-hover:text-white text-sm">Industrial Lamp</h4>
                            <span className="text-[10px] bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded border border-rose-500/20">Dead Stock</span>
                        </div>
                        <div className="flex justify-between text-xs text-zinc-500">
                            <span>Stock: 42 units</span>
                            <span>Last Sale: 40d ago</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MIDDLE: DEEP DIVE ANALYSIS (5 Cols) --- */}
            <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Hero Product Card */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-mono text-zinc-500">SKU-8821</span>
                                <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] border border-indigo-500/20">High Potential</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white">Modular Sofa (Grey)</h2>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-zinc-400">Your Price</p>
                            <p className="text-xl font-bold text-white">$899</p>
                        </div>
                    </div>

                    {/* COMPETITOR SPY CHART */}
                    <div className="space-y-4 mb-8">
                        <h3 className="text-xs text-zinc-500 uppercase tracking-wide font-medium flex items-center gap-2">
                            <Globe size={12}/> Market Comparison
                        </h3>
                        
                        {/* Competitor 1 (Higher) */}
                        <div className="relative">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-zinc-400">West Elm</span>
                                <span className="text-zinc-400">$1,299</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-zinc-600 h-full w-[100%]"></div>
                            </div>
                        </div>

                         {/* Competitor 2 (Higher) */}
                         <div className="relative">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-zinc-400">Article</span>
                                <span className="text-zinc-400">$1,099</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-zinc-600 h-full w-[85%]"></div>
                            </div>
                        </div>

                        {/* YOU */}
                        <div className="relative">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-indigo-400 font-bold">You</span>
                                <span className="text-indigo-400 font-bold">$899</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                                <div className="bg-indigo-500 h-full w-[65%] relative">
                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
                                </div>
                            </div>
                             <div className="mt-2 flex gap-2">
                                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded flex items-center gap-1">
                                    <ArrowUpRight size={10} /> 18% below market avg
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* AI Sentiment Analysis */}
                    <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800/50">
                        <h3 className="text-xs text-zinc-500 uppercase tracking-wide font-medium flex items-center gap-2 mb-2">
                            <MessageSquare size={12}/> Review Sentiment
                        </h3>
                        <p className="text-sm text-zinc-300 italic">
                            "Customers love the fabric quality but 15% complain the <span className="text-rose-400 border-b border-rose-400/30">legs are hard to attach</span>."
                        </p>
                    </div>
                </div>

                {/* AI Suggestion */}
                <div className="bg-indigo-900/10 border border-indigo-500/30 p-5 rounded-2xl flex items-center justify-between">
                    <div>
                        <p className="text-indigo-300 text-sm font-bold mb-1">AI Recommendation</p>
                        <p className="text-zinc-300 text-sm">Raise price to <span className="text-white font-medium">$949</span>. You will still be the cheapest option, but maximize margin.</p>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Apply Update
                    </button>
                </div>

            </div>

            {/* --- RIGHT: BUNDLING & ACTIONS (3 Cols) --- */}
            <div className="lg:col-span-3 space-y-6">
                
                {/* Bundle Builder */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                        <Layers size={16} className="text-amber-500" />
                        <h3 className="text-sm font-semibold text-white">Smart Bundle Logic</h3>
                    </div>
                    <p className="text-xs text-zinc-500 mb-4">
                        34% of customers who bought "Modular Sofa" also viewed "Wool Throw".
                    </p>

                    <div className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/50 flex items-center gap-3 mb-2">
                        <div className="h-8 w-8 bg-zinc-700 rounded-md flex items-center justify-center"><Package size={14}/></div>
                        <div className="text-xs">
                            <p className="text-white">Modular Sofa</p>
                            <p className="text-zinc-500">$899</p>
                        </div>
                    </div>
                    <div className="flex justify-center -my-2 relative z-10">
                        <div className="bg-zinc-900 rounded-full p-1 border border-zinc-700 text-zinc-500">+</div>
                    </div>
                     <div className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/50 flex items-center gap-3 mt-2">
                        <div className="h-8 w-8 bg-zinc-700 rounded-md flex items-center justify-center"><Tag size={14}/></div>
                        <div className="text-xs">
                            <p className="text-white">Wool Throw</p>
                            <p className="text-zinc-500">$89</p>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-zinc-800">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs text-zinc-400">Bundle Price</span>
                            <span className="text-sm font-bold text-emerald-400">$949 <span className="text-zinc-600 font-normal line-through text-xs">$988</span></span>
                        </div>
                        <button className="w-full py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition-colors">
                            Create "Cozy Bundle"
                        </button>
                    </div>
                </div>

                 {/* Clearance Helper */}
                 <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                        <Tag size={16} className="text-zinc-400" />
                        <h3 className="text-sm font-semibold text-white">Clearance Check</h3>
                    </div>
                    <p className="text-xs text-zinc-400 mb-3">
                        "Industrial Lamp" needs to move.
                    </p>
                    <button className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-xs font-medium rounded-lg transition-colors">
                        Generate Discount Email
                    </button>
                 </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCatalogAnalysis;