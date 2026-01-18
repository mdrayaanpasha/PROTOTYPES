import { useEffect, useState, useMemo, useRef } from "react";
import { 
  ArrowRight, 
  MapPin, 
  Navigation, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  ArrowUpDown 
} from "lucide-react";

// --- Configuration ---
const THEME = {
  Purple: { hex: "#9F51A5", bg: "bg-[#9F51A5]", text: "text-[#9F51A5]", border: "border-[#9F51A5]", light: "bg-[#9F51A5]/10" },
  Green: { hex: "#4DB352", bg: "bg-[#4DB352]", text: "text-[#4DB352]", border: "border-[#4DB352]", light: "bg-[#4DB352]/10" },
  Yellow: { hex: "#F3C845", bg: "bg-[#F3C845]", text: "text-[#F3C845]", border: "border-[#F3C845]", light: "bg-[#F3C845]/10" },
};

const GRAPH = {
    "Whitefield": { line: "Purple", children: ["Channasandra"] },
    "Channasandra": { line: "Purple", children: ["Whitefield", "Kadugodi Tree Park"] },
    "Kadugodi Tree Park": { line: "Purple", children: ["Channasandra", "Pattandur Agrahara (ITPL)"] },
    "Pattandur Agrahara (ITPL)": { line: "Purple", children: ["Kadugodi Tree Park", "Sri Sathya Sai Hospital"] },
    "Sri Sathya Sai Hospital": { line: "Purple", children: ["Pattandur Agrahara (ITPL)", "Nallur Halli"] },
    "Nallur Halli": { line: "Purple", children: ["Sri Sathya Sai Hospital", "Kundala Halli"] },
    "Kundala Halli": { line: "Purple", children: ["Nallur Halli", "Seetharam Palya"] },
    "Seetharam Palya": { line: "Purple", children: ["Kundala Halli", "KR Puram"] },
    "KR Puram": { line: "Purple", children: ["Seetharam Palya", "Benngiganahalli"] },
    "Benngiganahalli": { line: "Purple", children: ["KR Puram", "Baiyappanahalli"] },
    "Baiyappanahalli": { line: "Purple", children: ["Benngiganahalli", "Swami Vivekananda Road"] },
    "Swami Vivekananda Road": { line: "Purple", children: ["Baiyappanahalli", "Indiranagar"] },
    "Indiranagar": { line: "Purple", children: ["Swami Vivekananda Road", "Halasuru"] },
    "Halasuru": { line: "Purple", children: ["Indiranagar", "Trinity"] },
    "Trinity": { line: "Purple", children: ["Halasuru", "Mahatma Gandhi Road"] },
    "Mahatma Gandhi Road": { line: "Purple", children: ["Trinity", "Cubbon Park"] },
    "Cubbon Park": { line: "Purple", children: ["Mahatma Gandhi Road", "Dr. B. R. Ambedkar (Vidhana Soudha)"] },
    "Dr. B. R. Ambedkar (Vidhana Soudha)": { line: "Purple", children: ["Cubbon Park", "Sir M Visveswaraya (Central College)"] },
    "Sir M Visveswaraya (Central College)": { line: "Purple", children: ["Dr. B. R. Ambedkar (Vidhana Soudha)", "Nadaprabhu Kempegowda Station (Majestic)"] },
    "Nadaprabhu Kempegowda Station (Majestic)": { line: "Purple", intersection: true, children: ["Sir M Visveswaraya (Central College)", "Krantivira Sangolli Rayanna Railway Station", "Mantri Square Sampige Road", "Chickpete"] },
    "Krantivira Sangolli Rayanna Railway Station": { line: "Purple", children: ["Nadaprabhu Kempegowda Station (Majestic)", "Magadi Road"] },
    "Magadi Road": { line: "Purple", children: ["Krantivira Sangolli Rayanna Railway Station"] },
    "Mantri Square Sampige Road": { line: "Green", children: ["Srirampura", "Nadaprabhu Kempegowda Station (Majestic)"] },
    "Srirampura": { line: "Green", children: ["Mantri Square Sampige Road"] },
    "Chickpete": { line: "Green", children: ["Nadaprabhu Kempegowda Station (Majestic)", "Krishna Rajendra Market"] },
    "Krishna Rajendra Market": { line: "Green", children: ["Chickpete", "National College"] },
    "National College": { line: "Green", children: ["Krishna Rajendra Market", "Lalbagh"] },
    "Lalbagh": { line: "Green", children: ["National College", "South End Circle"] },
    "South End Circle": { line: "Green", children: ["Lalbagh", "Jayanagar"] },
    "Jayanagar": { line: "Green", children: ["South End Circle", "Rashtreeya Vidyalaya Road"] },
    "Rashtreeya Vidyalaya Road": { line: "Green", intersection: true, children: ["Jayanagar", "Banashankari", "Ragigudda"] },
    "Banashankari": { line: "Green", children: ["Rashtreeya Vidyalaya Road"] },
    "Ragigudda": { line: "Yellow", children: ["Rashtreeya Vidyalaya Road", "Jayadeva Hospital"] },
    "Jayadeva Hospital": { line: "Yellow", children: ["Ragigudda", "BTM Layout"] },
    "BTM Layout": { line: "Yellow", children: ["Jayadeva Hospital", "Central Silk Board"] },
    "Central Silk Board": { line: "Yellow", children: ["BTM Layout", "Bommanahalli"] },
    "Bommanahalli": { line: "Yellow", children: ["Central Silk Board", "Hongasandra"] },
    "Hongasandra": { line: "Yellow", children: ["Bommanahalli", "Kudlu Gate"] },
    "Kudlu Gate": { line: "Yellow", children: ["Hongasandra", "Singasandra"] },
    "Singasandra": { line: "Yellow", children: ["Kudlu Gate", "Hosa Road"] },
    "Hosa Road": { line: "Yellow", children: ["Singasandra", "Beratena Agrahara"] },
    "Beratena Agrahara": { line: "Yellow", children: ["Hosa Road", "Electronic City"] },
    "Electronic City": { line: "Yellow", children: ["Beratena Agrahara", "Infosys Foundation Konappana Agrahara"] },
    "Infosys Foundation Konappana Agrahara": { line: "Yellow", children: ["Electronic City", "Huskur Road"] },
    "Huskur Road": { line: "Yellow", children: ["Infosys Foundation Konappana Agrahara", "Biocon Hebbagodi"] },
    "Biocon Hebbagodi": { line: "Yellow", children: ["Huskur Road"] }
};

// --- Custom Searchable Dropdown Component ---
const StationSearch = ({ label, value, onChange, stations, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  // Filter logic
  const filtered = stations.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update internal search when value changes externally
  useEffect(() => {
    setSearch(""); 
  }, [value]);

  return (
    <div className="relative group flex-1" ref={wrapperRef}>
      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 block pl-1">{label}</label>
      
      {/* The Input Box */}
      <div 
        className="relative flex items-center bg-gray-50 hover:bg-gray-100 border-b-2 border-transparent hover:border-gray-200 focus-within:border-black transition-colors rounded-t-lg p-3 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Icon className="w-5 h-5 text-gray-400 mr-3" />
        
        {isOpen ? (
          <input 
            autoFocus
            type="text" 
            className="bg-transparent outline-none w-full text-lg font-bold text-gray-900 placeholder-gray-300"
            placeholder="Type station name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          <div className="text-lg font-bold text-gray-900 truncate w-full">{value}</div>
        )}
        
        <div className="ml-2 text-gray-300">
          <Search className="w-4 h-4" />
        </div>
      </div>

      {/* The Dropdown List */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-b-xl border border-t-0 border-gray-100 max-h-64 overflow-y-auto z-[100] animate-in fade-in zoom-in-95 duration-100">
          {filtered.length > 0 ? (
            filtered.map((s) => (
              <div 
                key={s.name}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between group/item border-b border-gray-50 last:border-0"
                onClick={() => {
                  onChange(s.name);
                  setIsOpen(false);
                  setSearch("");
                }}
              >
                <span className="font-medium text-gray-700 group-hover/item:text-black">{s.name}</span>
                {/* Line Indicator Dot */}
                <div className={`w-2.5 h-2.5 rounded-full ${THEME[s.line].bg} ring-2 ring-white`}></div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-400 text-sm">No stations found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default function MetroPathSmart() {
  const [path, setPath] = useState([]);
  const [processedSegments, setProcessedSegments] = useState([]);
  const [start, setStart] = useState("Cubbon Park");
  const [destination, setDestination] = useState("Electronic City");
  const [expandedGroups, setExpandedGroups] = useState({});

  // Prepare full station objects for the search component
  const stationList = useMemo(() => {
    return Object.keys(GRAPH).sort().map(name => ({
      name,
      line: GRAPH[name].line
    }));
  }, []);

  // 1. Calculate BFS Path
  useEffect(() => {
    function bfs(startNode, endNode) {
      if (!startNode || !endNode) return [];
      const visited = new Set();
      const queue = [[startNode, [[startNode, GRAPH[startNode]?.line]]]];
      while (queue.length) {
        const [station, currentPath] = queue.shift();
        if (visited.has(station)) continue;
        visited.add(station);
        if (station === endNode) return currentPath;
        const node = GRAPH[station];
        if (!node) continue;
        for (const child of node.children) {
          if (!visited.has(child) && GRAPH[child]) {
            queue.push([child, [...currentPath, [child, GRAPH[child].line]]]);
          }
        }
      }
      return [];
    }
    const result = bfs(start, destination);
    setPath(result);
    setExpandedGroups({}); // Reset expansions
  }, [start, destination]);

  // 2. Process Path into View Segments (Smart Collapsing)
  useEffect(() => {
    if (path.length === 0) return;
    const segments = [];
    let buffer = [];

    path.forEach((node, index) => {
        const [station, line] = node;
        const isStart = index === 0;
        const isEnd = index === path.length - 1;
        const nextNode = path[index + 1];
        const isInterchange = nextNode && nextNode[1] !== line;

        if (isStart || isEnd || isInterchange) {
            if (buffer.length > 0) {
                segments.push({ type: 'collapsed', nodes: buffer, line: buffer[0][1] });
                buffer = [];
            }
            segments.push({ type: 'station', node, index, isSwitch: isInterchange });
        } else {
            buffer.push(node);
        }
    });
    setProcessedSegments(segments);
  }, [path]);

  const toggleGroup = (index) => {
    setExpandedGroups(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const swapStations = () => {
    const temp = start;
    setStart(destination);
    setDestination(temp);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col items-center">
      
      {/* --- Smart Search Header --- */}
      <div className="w-full bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-4 md:py-6">
            
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 relative">
                
                {/* Search 1 */}
                <StationSearch 
                  label="Origin" 
                  value={start} 
                  onChange={setStart} 
                  stations={stationList} 
                  icon={Navigation}
                />

                {/* Swap Button (Floating or inline) */}
                <button 
                  onClick={swapStations}
                  className="absolute right-4 top-[38px] md:static md:mt-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10 group"
                  aria-label="Swap Stations"
                >
                  <ArrowUpDown className="w-4 h-4 text-gray-500 group-hover:text-black transition-transform group-hover:rotate-180 duration-300" />
                </button>

                {/* Search 2 */}
                <StationSearch 
                  label="Destination" 
                  value={destination} 
                  onChange={setDestination} 
                  stations={stationList} 
                  icon={MapPin}
                />

            </div>

             {/* Stats Bar */}
             {path.length > 0 && (
                <div className="mt-4 flex gap-6 text-sm text-gray-500 pl-2">
                    <span><b>{path.length}</b> stops</span>
                    <span>•</span>
                    <span><b>{Math.round(path.length * 2.5)}</b> min</span>
                </div>
            )}
        </div>
      </div>

      {/* --- Route Visualization --- */}
      <div className="w-full max-w-3xl mx-auto p-6 md:p-12 pb-32">
        {path.length === 0 ? (
            <div className="text-center py-20 opacity-40">
              <Navigation className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-400 font-medium">Select stations to view route</p>
            </div>
        ) : (
            <div className="relative">
                {processedSegments.map((segment, segIndex) => {
                    
                    if (segment.type === 'station') {
                        const [station, line] = segment.node;
                        const theme = THEME[line];
                        const isStart = segment.index === 0;
                        const isEnd = segment.index === path.length - 1;
                        const nextNode = path[segment.index + 1];
                        const nextTheme = nextNode ? THEME[nextNode[1]] : theme;

                        return (
                            <div key={`st-${segIndex}`} className="grid grid-cols-[50px_40px_1fr] relative">
                                <div className="text-right pr-4 pt-1">
                                    <span className={`text-[10px] font-mono font-bold ${isStart || isEnd ? "text-black" : "text-gray-300"}`}>
                                        {segment.index + 1}
                                    </span>
                                </div>
                                <div className="relative flex justify-center">
                                    {!isEnd && (
                                        <div 
                                            className="absolute top-4 bottom-[-16px] w-[4px] z-0"
                                            style={{ background: segment.isSwitch ? `linear-gradient(to bottom, ${theme.hex}, ${nextTheme.hex})` : theme.hex }}
                                        ></div>
                                    )}
                                    <div className={`relative z-10 rounded-full border-[3px] bg-white shadow-sm transition-all duration-300 box-content ${isStart || isEnd ? "w-4 h-4 mt-1 border-black" : `w-3 h-3 mt-1.5 border-transparent ${theme.bg}`}`}>
                                        {(isStart || isEnd) && <div className={`absolute inset-0 m-auto w-2 h-2 rounded-full ${theme.bg}`}></div>}
                                    </div>
                                </div>
                                <div className="pb-8 pl-4">
                                    <h3 className={`leading-tight ${isStart || isEnd ? "font-bold text-black text-xl" : "font-medium text-gray-800 text-lg"}`}>
                                        {station}
                                    </h3>
                                    {segment.isSwitch && (
                                        <div className="mt-2 flex items-center gap-3 px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg w-fit">
                                            <ArrowRight className="w-4 h-4 text-gray-400" />
                                            <div>
                                                <div className="text-[10px] uppercase font-bold text-gray-400">Interchange</div>
                                                <div className={`text-xs font-bold ${nextTheme.text}`}>To {nextNode[1]} Line</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    } 
                    
                    else {
                        const theme = THEME[segment.line];
                        const isExpanded = expandedGroups[segIndex];
                        const count = segment.nodes.length;

                        return (
                            <div key={`grp-${segIndex}`}>
                                <div 
                                    onClick={() => toggleGroup(segIndex)}
                                    className="grid grid-cols-[50px_40px_1fr] relative group cursor-pointer"
                                >
                                    <div className="text-right pr-4 pt-1"></div>
                                    <div className="relative flex justify-center">
                                        <div className="absolute top-0 bottom-0 w-[4px] z-0 flex flex-col items-center overflow-hidden">
                                             {!isExpanded && <div className="h-full w-[2px] border-l-2 border-dotted border-gray-300"></div>}
                                             {isExpanded && <div className="h-full w-[4px]" style={{ background: theme.hex }}></div>}
                                        </div>
                                        <div className={`relative z-10 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:scale-110 transition-transform`}>
                                            {isExpanded ? <ChevronUp className="w-3 h-3 text-gray-400" /> : <ChevronDown className="w-3 h-3 text-gray-400" />}
                                        </div>
                                    </div>
                                    <div className="pb-8 pl-4 pt-1">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600 transition-colors">
                                            {isExpanded ? "Hide Stops" : `${count} stops`}
                                        </span>
                                    </div>
                                </div>

                                {isExpanded && segment.nodes.map(([station]) => (
                                    <div key={station} className="grid grid-cols-[50px_40px_1fr] relative animate-in slide-in-from-top-2 duration-300 fade-in">
                                        <div className="text-right pr-4 pt-1"></div>
                                        <div className="relative flex justify-center">
                                            <div className="absolute top-[-10px] bottom-[-10px] w-[4px] z-0" style={{ background: theme.hex }}></div>
                                            <div className="relative z-10 w-2 h-2 mt-2 rounded-full bg-white border-2 border-gray-300"></div>
                                        </div>
                                        <div className="pb-6 pl-4 pt-0.5">
                                            <h4 className="text-sm font-medium text-gray-500">{station}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    }
                })}
            </div>
        )}
      </div>
    </div>
  );
}