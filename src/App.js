import "./App.css";
import LeftNavBar from "./components/Navbar/LeftNavBar/LeftNavBar";
import TopNavBar from "./components/Navbar/TopNavBar/TopNavBar";
import { Routes, Route } from "react-router-dom";
import DashBoardPage from "./components/DashboardPage/DashBoardPage";

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
            {/* <Route path="/transaction" element={<Transactions />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/credit_card" element={<Credit_Card />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/services" element={<Services />} />
          <Route path="/settings" element={<Settings />} /> */}
            {/* <Route path="*" element={<Errorpage />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="layout-nav">
        <LeftNavBar />
      </div>
      <TopNavBar /> */
}
