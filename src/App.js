import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import InvoiceDesign from "./components/InvoiceDesign";
import SalesReportDesign from "./components/SalesReportDesign";
import ProfitLoss from "./components/ProfitLoss";
import BalanceSheet from "./components/BalanceSheet";
import LaborReport from "./components/LaborReport";
import CashFlow from "./components/CashFlow";
import CustomerReport from "./components/CustomerReport"
import Millenium from "./components/Millenium";
function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<InvoiceDesign/>}/>
        <Route path="/salesReport" element={<SalesReportDesign/>}/>
        <Route path="/profitloss" element={<ProfitLoss/>} />
        <Route path="/balanceSheet" element={<BalanceSheet/> }/>
        <Route path="/laborReport" element={<LaborReport />} />
        <Route path="/cashFlow" element={<CashFlow />} />
        <Route path="/customerReport" element={<CustomerReport />}/>
        <Route path="/millemium" element={<Millenium/>}/>
      </Routes>
    </Router>
  );
}

export default App;
