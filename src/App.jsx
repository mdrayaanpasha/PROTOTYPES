import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MagariAIApp from "./prototypes/furnitures/magari";
import Wrapped2025 from "./prototypes/furnitures/new";
import Raj from "./prototypes/edtech/rajcloud";
import Xenica from "./prototypes/others/xenica";
import LocalLegend from "./prototypes/others/locallengend";
export default function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/magari" element={<MagariAIApp/>} />
        <Route path="/raj" element={<Raj/>} />
        <Route path="/xenica" element={<Xenica/>} />
        <Route path="/local-legend" element={<LocalLegend/>} />
         <Route
          path="/wrapped"
          element={
            <Wrapped2025 />
          }
        />
      </Routes>
    </Router>
    </>
  )
}