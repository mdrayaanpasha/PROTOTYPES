import { useEffect, useState, useMemo } from "react";
import { ArrowRight, MapPin, Navigation, ChevronDown, ChevronUp } from "lucide-react";

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

export default function MetroPathSmart() {
  const [path, setPath] = useState([]);
  const [processedSegments, setProcessedSegments] = useState([]);
  const [start, setStart] = useState("Cubbon Park");
  const [destination, setDestination] = useState("Biocon Hebbagodi");
  const [expandedGroups, setExpandedGroups] = useState({});

  const stationList = useMemo(() => Object.keys(GRAPH).sort(), []);

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
    setExpandedGroups({}); // Reset expansions on new search
  }, [start, destination]);

  // 2. Process Path into View Segments (The "Collapser" Logic)
  useEffect(() => {
    if (path.length === 0) return;

    const segments = [];
    let buffer = [];

    path.forEach((node, index) => {
        const [station, line] = node;
        const isStart = index === 0;
        const isEnd = index === path.length - 1;
        const nextNode = path[index + 1];
        
        // Check if this station is a "Key Node" (Start, End, or Interchange)
        // Interchange = current line is diff from next line
        const isInterchange = nextNode && nextNode[1] !== line;

        if (isStart || isEnd || isInterchange) {
            // If we have a buffer of intermediate stations, push them as a group first
            if (buffer.length > 0) {
                segments.push({ type: 'collapsed', nodes: buffer, line: buffer[0][1] });
                buffer = [];
            }
            // Push the Key Node
            segments.push({ type: 'station', node, index, isSwitch: isInterchange });
        } else {
            // It's an intermediate station, add to buffer
            buffer.push(node);
        }
    });

    setProcessedSegments(segments);
  }, [path]);

  const toggleGroup = (index) => {
    setExpandedGroups(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col items-center">
      
      {/* --- Inputs --- */}
      <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <div className="flex-1 flex flex-col gap-4">
                    <div className="group relative">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1 block">From</label>
                        <select value={start} onChange={(e) => setStart(e.target.value)} className="w-full bg-transparent text-xl font-bold text-gray-800 border-b border-gray-200 pb-2 focus:border-black outline-none appearance-none">{stationList.map(s => <option key={s} value={s}>{s}</option>)}</select>
                    </div>
                    <div className="group relative">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1 block">To</label>
                        <select value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full bg-transparent text-xl font-bold text-gray-800 border-b border-gray-200 pb-2 focus:border-black outline-none appearance-none">{stationList.map(s => <option key={s} value={s}>{s}</option>)}</select>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- Route Visualizer --- */}
      <div className="w-full max-w-3xl mx-auto p-6 md:p-12 pb-32">
        {path.length === 0 ? (
            <div className="text-center py-20 opacity-40"><Navigation className="w-12 h-12 mx-auto mb-4" /><p>Finding Route...</p></div>
        ) : (
            <div className="relative">
                {processedSegments.map((segment, segIndex) => {
                    
                    // --- Render Key Stations (Start, End, Interchange) ---
                    if (segment.type === 'station') {
                        const [station, line] = segment.node;
                        const theme = THEME[line];
                        const isStart = segment.index === 0;
                        const isEnd = segment.index === path.length - 1;
                        
                        // Look ahead for switch color
                        const nextNode = path[segment.index + 1];
                        const nextTheme = nextNode ? THEME[nextNode[1]] : theme;

                        return (
                            <div key={`st-${segIndex}`} className="grid grid-cols-[60px_40px_1fr] relative">
                                {/* Time/Index */}
                                <div className="text-right pr-6 pt-1">
                                    <span className={`text-xs font-mono font-medium ${isStart || isEnd ? "text-black" : "text-gray-300"}`}>
                                        {segment.index + 1}
                                    </span>
                                </div>
                                {/* Line & Dot */}
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
                                {/* Content */}
                                <div className="pb-8 pl-4">
                                    <h3 className={`text-lg leading-tight ${isStart || isEnd ? "font-bold text-black text-xl" : "font-medium text-gray-800"}`}>
                                        {station}
                                    </h3>
                                    {segment.isSwitch && (
                                        <div className="mt-3 flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm w-fit">
                                            <div className="p-1.5 bg-gray-100 rounded-md"><ArrowRight className="w-4 h-4 text-gray-500" /></div>
                                            <div>
                                                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Interchange</div>
                                                <div className={`text-sm font-bold ${nextTheme.text}`}>Switch to {nextNode[1]} Line</div>
                                            </div>
                                        </div>
                                    )}
                                    {isStart && <div className="mt-1 flex items-center gap-1 text-xs font-bold text-gray-400 uppercase tracking-wider"><MapPin className="w-3 h-3"/> Depart</div>}
                                    {isEnd && <div className="mt-1 flex items-center gap-1 text-xs font-bold text-gray-400 uppercase tracking-wider"><MapPin className="w-3 h-3"/> Arrive</div>}
                                </div>
                            </div>
                        );
                    } 
                    
                    // --- Render Collapsed Group ---
                    else {
                        const theme = THEME[segment.line];
                        const isExpanded = expandedGroups[segIndex];
                        const count = segment.nodes.length;

                        return (
                            <div key={`grp-${segIndex}`}>
                                {/* The Toggle Button Row */}
                                <div 
                                    onClick={() => toggleGroup(segIndex)}
                                    className="grid grid-cols-[60px_40px_1fr] relative group cursor-pointer"
                                >
                                    <div className="text-right pr-6 pt-1"></div>
                                    <div className="relative flex justify-center">
                                        {/* Background Line (Dotted if collapsed, Solid if expanded) */}
                                        <div className="absolute top-0 bottom-0 w-[4px] z-0 flex flex-col items-center overflow-hidden">
                                             {!isExpanded && (
                                                 <div className="h-full w-[2px] border-l-2 border-dotted border-gray-300"></div>
                                             )}
                                             {isExpanded && <div className="h-full w-[4px]" style={{ background: theme.hex }}></div>}
                                        </div>
                                        
                                        {/* The "Plus" Icon on the line */}
                                        <div className={`relative z-10 w-6 h-6 mt-0 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                                            {isExpanded ? <ChevronUp className="w-3 h-3 text-gray-400" /> : <ChevronDown className="w-3 h-3 text-gray-400" />}
                                        </div>
                                    </div>
                                    <div className="pb-8 pl-4 pt-0.5">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600 transition-colors">
                                            {isExpanded ? "Hide Stops" : `${count} stops`}
                                        </span>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                {isExpanded && segment.nodes.map(([station], i) => (
                                    <div key={station} className="grid grid-cols-[60px_40px_1fr] relative animate-in slide-in-from-top-2 duration-300">
                                        <div className="text-right pr-6 pt-1"></div>
                                        <div className="relative flex justify-center">
                                            {/* Solid line continues through expanded items */}
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