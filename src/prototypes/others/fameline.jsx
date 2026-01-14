import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell 
} from 'recharts';
import { 
  Globe, Anchor, Activity, Server, Search, Bell, 
  ChevronDown, ArrowUpRight, Wind, Navigation, Layers 
} from 'lucide-react';

// --- Mock Data: Tailored to Fameline's Scale ---
const performanceData = [
  { month: 'Jan', efficiency: 92, vessels: 8400 },
  { month: 'Feb', efficiency: 94, vessels: 8600 },
  { month: 'Mar', efficiency: 91, vessels: 8900 },
  { month: 'Apr', efficiency: 96, vessels: 9200 },
  { month: 'May', efficiency: 98, vessels: 9800 },
  { month: 'Jun', efficiency: 97, vessels: 10000 },
];

const globalHubs = [
  { city: 'Limassol (HQ)', status: 'Active', load: 84 },
  { city: 'Singapore', status: 'High Traffic', load: 92 },
  { city: 'Hamburg', status: 'Active', load: 65 },
  { city: 'Rotterdam', status: 'Active', load: 78 },
];

const activeVessels = [
  { id: 'FHG-882', name: 'Fameline Titan', loc: 'North Sea', type: 'Offshore', status: 'Operational' },
  { id: 'FHG-104', name: 'Aegean Legacy', loc: 'Limassol Port', type: 'Maritime', status: 'Docked' },
  { id: 'FHG-099', name: 'Pacific Vision', loc: 'Malacca Strait', type: 'Maritime', status: 'In Transit' },
];

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('Maritime');

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 font-sans overflow-hidden selection:bg-[#c6a665] selection:text-black">
      
      {/* Background Gradients for Premium Depth */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#c6a665]/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Sidebar: Glassmorphism */}
      <aside className="relative z-10 w-72 border-r border-white/5 flex flex-col justify-between p-6 bg-slate-950/40 backdrop-blur-2xl">
        <div>
          {/* Brand Logo Area */}
          <div className="mb-12">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              FAMELINE
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c6a665] mt-1 font-semibold">
              Holding Group
            </p>
          </div>

          {/* Module Selector (Maritime / Healthcare / ICT) */}
          <div className="mb-8">
            <p className="text-xs font-medium text-slate-500 mb-3 uppercase tracking-wider">Active Sector</p>
            <button className="w-full flex items-center justify-between bg-white/5 border border-white/10 hover:border-[#c6a665]/50 px-4 py-3 rounded-xl text-sm text-white transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[#c6a665] text-black">
                  <Anchor size={16} />
                </div>
                <span className="font-medium">Maritime & Offshore</span>
              </div>
              <ChevronDown size={14} className="text-slate-500 group-hover:text-[#c6a665]" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {['Global Operations', 'Fleet Intelligence', 'Sustainable Growth', 'Digital Twin'].map((item, i) => (
              <button
                key={item}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                  i === 0 
                    ? 'bg-gradient-to-r from-blue-600/20 to-transparent border-l-2 border-blue-500 text-white font-medium' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {i === 0 && <Globe size={18} />}
                {i === 1 && <Navigation size={18} />}
                {i === 2 && <Wind size={18} />}
                {i === 3 && <Layers size={18} />}
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Footer: Motto */}
        <div className="pt-6 border-t border-white/5">
          <p className="text-[10px] text-slate-500 italic">"Relationships beyond contracts"</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#c6a665] to-[#fde047] p-[1px]">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-[10px] font-bold text-[#c6a665]">
                JD
              </div>
            </div>
            <div className="text-xs">
              <p className="text-white">John Doe</p>
              <p className="text-slate-500">Regional Director</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto">
        
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-10 sticky top-0 z-20 backdrop-blur-md border-b border-white/5 bg-[#020617]/50">
          <div>
            <h2 className="text-lg font-medium text-white">Global Command Center</h2>
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Data • 23 Locations Connected
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-white transition-colors" />
              <input 
                type="text" 
                placeholder="Search across 10,000 vessels..." 
                className="bg-transparent border-b border-slate-700 pl-8 pr-4 py-2 text-sm focus:outline-none focus:border-[#c6a665] transition-colors w-64 text-slate-200 placeholder:text-slate-600"
              />
            </div>
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#c6a665] rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Content Grid */}
        <div className="p-10 space-y-8">
          
          {/* Hero Metrics - Glass Cards */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: 'Total Vessels Served', val: '10,000+', sub: 'Global footprint', icon: Anchor },
              { label: 'Operational Hubs', val: '23', sub: 'Across 3 continents', icon: Globe },
              { label: 'Professionals', val: '600+', sub: 'United in diversity', icon: Activity },
              { label: 'ESG Rating', val: 'A+', sub: 'Sustainable growth', icon: Wind },
            ].map((kpi, i) => (
              <div key={i} className="group relative overflow-hidden p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c6a665]/30 transition-all duration-500">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white">
                  <kpi.icon size={60} />
                </div>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-2">{kpi.label}</p>
                <h3 className="text-3xl font-light text-white mb-1">{kpi.val}</h3>
                <div className="flex items-center gap-2 text-xs text-[#c6a665]">
                  <ArrowUpRight size={12} />
                  {kpi.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Main Visualization Section */}
          <div className="grid grid-cols-3 gap-6 h-[400px]">
            
            {/* Chart: Fleet Efficiency */}
            <div className="col-span-2 rounded-2xl p-8 bg-white/[0.03] border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-lg font-medium text-white">Fleet Performance</h3>
                  <p className="text-xs text-slate-400 mt-1">Efficiency metrics across Maritime & Offshore sectors</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] border border-white/10 text-slate-300">YTD</span>
                  <span className="px-3 py-1 rounded-full text-[10px] bg-[#c6a665]/10 text-[#c6a665] border border-[#c6a665]/20">Live</span>
                </div>
              </div>
              
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorVessel" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#c6a665" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#c6a665" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff'}}
                      itemStyle={{color: '#c6a665'}}
                    />
                    <Area type="monotone" dataKey="efficiency" stroke="#c6a665" strokeWidth={2} fillOpacity={1} fill="url(#colorVessel)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* List: Strategic Hubs */}
            <div className="col-span-1 rounded-2xl p-8 bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col">
              <h3 className="text-lg font-medium text-white mb-6">Hub Status</h3>
              <div className="flex-1 space-y-5">
                {globalHubs.map((hub, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                      <div>
                        <p className="text-sm text-slate-200 font-medium group-hover:text-[#c6a665] transition-colors">{hub.city}</p>
                        <p className="text-[10px] text-slate-500">{hub.status}</p>
                      </div>
                    </div>
                    <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-slate-600 group-hover:bg-[#c6a665] transition-colors" 
                        style={{width: `${hub.load}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-auto py-3 text-xs uppercase tracking-widest text-center border border-white/10 rounded-lg hover:bg-white/5 hover:text-white transition-all text-slate-400">
                View All 23 Locations
              </button>
            </div>
          </div>

          {/* Bottom Table: Live Vessels */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
            <div className="px-8 py-5 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-medium text-white">Live Operations Tracking</h3>
              <Server size={16} className="text-slate-500" />
            </div>
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-white/[0.02] text-xs uppercase font-medium text-slate-500">
                <tr>
                  <th className="px-8 py-4 font-normal tracking-wider">Vessel Name</th>
                  <th className="px-8 py-4 font-normal tracking-wider">Location</th>
                  <th className="px-8 py-4 font-normal tracking-wider">Sector</th>
                  <th className="px-8 py-4 font-normal tracking-wider text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {activeVessels.map((v, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-4 text-white font-medium flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                        <ShipIcon />
                      </div>
                      {v.name}
                      <span className="text-xs text-slate-600 px-2">{v.id}</span>
                    </td>
                    <td className="px-8 py-4">{v.loc}</td>
                    <td className="px-8 py-4">{v.type}</td>
                    <td className="px-8 py-4 text-right">
                      <span className={`px-2 py-1 rounded text-[10px] uppercase tracking-wide border ${
                        v.status === 'Operational' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' :
                        v.status === 'Docked' ? 'border-slate-500/30 text-slate-400 bg-slate-500/10' :
                        'border-blue-500/30 text-blue-400 bg-blue-500/10'
                      }`}>
                        {v.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
};

// Simple Icon component for the table
const ShipIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.9 5.8 2.8 8" />
    <path d="M5 10l7-7 7 7" />
    <path d="M12 3v11" />
  </svg>
);

export default Dashboard;