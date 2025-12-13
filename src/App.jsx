import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MagariAIApp from "./prototypes/furnitures/magari";
export default function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/magari" element={<MagariAIApp/>} />
      </Routes>
    </Router>
    </>
  )
}