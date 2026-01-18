import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MagariAIApp from "./prototypes/furnitures/magari";
import Wrapped2025 from "./prototypes/furnitures/new";
import Raj from "./prototypes/edtech/rajcloud";
import Xenica from "./prototypes/others/xenica";
import LocalLegend from "./prototypes/others/locallengend";
import BusinessCopilotDashboard from "./prototypes/startup/main";
import FinancialGoalPage from "./prototypes/startup/finances-section";
import SOPEngine from "./prototypes/startup/sop-section";
import ProductCatalogAnalysis from "./prototypes/startup/product-catalog";
// import LifeGraph from "./prototypes/others/gofuckyourself";
import EmployeeAnalysis from "./prototypes/startup/emp-analysis";
import Dashboard from "./prototypes/others/fameline";
import EclyticsLandingPage from "./prototypes/edtech/eclytics";
import MetroPath from "./prototypes/startup/bmrcl";

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
        {/* <Route path="/gfy" element={<LifeGraph/>} /> */}
        <Route path="/st-up" element={<BusinessCopilotDashboard/>} />
        <Route path="/st-up/finance" element={<FinancialGoalPage/>} />
      <Route path="/st-up/sop" element={<SOPEngine/>} />
            <Route path="/st-up/product-catalog" element={<ProductCatalogAnalysis/>} />

            <Route path="/st-up/emp-analysis" element={<EmployeeAnalysis/>} />
            <Route path="/fameline" element={<Dashboard/>} />
            <Route path="/eclyctics" element={<EclyticsLandingPage/>} />
            <Route path="/bmrcl" element={<MetroPath/>} />


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