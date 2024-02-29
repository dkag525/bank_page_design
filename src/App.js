import "./App.css";
import LeftNavBar from "./components/Navbar/LeftNavBar/LeftNavBar";
import TopNavBar from "./components/Navbar/TopNavBar/TopNavBar";
import { Routes, Route } from "react-router-dom";
import DashBoardPage from "./components/DashboardPage/DashBoardPage";
import TransactionPage from "./components/TransactionPage/TransactionPage";
import AccountsPage from "./components/AccountsPage/AccountsPage";
import InvestmentsPage from "./components/InvestmentsPage/InvestmentsPage";
import CreditCardsPage from "./components/CreditCardsPage/CreditCardsPage";
import LoansPage from "./components/LoansPage/LoansPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import SettingPage from "./components/SettingPage/SettingPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <div>
        <LeftNavBar />
      </div>
      <div style={{ width: "calc(100% - 250px)" }}>
        <TopNavBar />
        <div className="middle-container">
          <Routes>
            <Route path="/" element={<DashBoardPage />} />
            <Route path="/transactionpage" element={<TransactionPage />} />
            <Route path="/accountspage" element={<AccountsPage />} />
            <Route path="/investmentspage" element={<InvestmentsPage />} />
            <Route path="/creditcardspage" element={<CreditCardsPage />} />
            <Route path="/loanspage" element={<LoansPage />} />
            <Route path="/servicespage" element={<ServicesPage />} />
            <Route path="/settingpage" element={<SettingPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
