import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import InvoiceDesign from "./components/InvoiceDesign";
import SalesReportDesign from "./components/SalesReportDesign";
function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<InvoiceDesign/>}/>
        <Route path="/salesReport" element={<SalesReportDesign/>}/>
      </Routes>
    </Router>
  );
}

export default App;
