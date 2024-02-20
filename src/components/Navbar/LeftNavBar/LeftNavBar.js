import React, { useState } from "react";
import "../LeftNavBar/LeftNavBar.css";
import logo from "../../../assets/svg/logo.svg";
import Home from "../../../assets/svgComponent/home";
import Transaction from "../../../assets/svgComponent/transaction";
import Accounts from "../../../assets/svgComponent/accounts";
import Investments from "../../../assets/svgComponent/investments";
import CreditCards from "../../../assets/svgComponent/creditCards";
import Loans from "../../../assets/svgComponent/loans";
import Services from "../../../assets/svgComponent/services";
import MyPrivileges from "../../../assets/svgComponent/myPrivileges";
import Settings from "../../../assets/svgComponent/settings";

const leftBarLinks = [
  {
    img: <Home color={""} />,
    title: "Dashboard",
  },
  {
    img: <Transaction color={""} />,
    title: "Transactions",
  },
  {
    img: <Accounts color={""} />,
    title: "Accounts",
  },
  {
    img: <Investments color={""} />,
    title: "Investments",
  },
  {
    img: <CreditCards color={""} />,
    title: "Credit Cards",
  },
  {
    img: <Loans color={""} />,
    title: "Loans",
  },
  {
    img: <Services color={""} />,
    title: "Services",
  },
  {
    img: <MyPrivileges color={""} />,
    title: "My Privileges",
  },
  {
    img: <Settings color={""} />,
    title: "Setting",
  },
];

const LeftNavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const top = 3.75 * selectedIndex;

  const handleLinkClick = (element, index) => {
    // console.log(element, index);
    setSelectedIndex(index);
  };

  return (
    <div className="left-bar-container">
      <div className="logo">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <h1 className="logo-text lato primary-color">BankDash.</h1>
        </div>
      </div>
      <div className="left-nav-links-container">
        <div
          className="selected-view primary-background"
          style={{
            top: `${top}rem`,
          }}
        ></div>

        {leftBarLinks.map((el, i) => {
          return (
            <div
              className="left-nav-links"
              onClick={() => handleLinkClick(el, i)}
            >
              <div className="left-nav-linkss">
                <div className="link-img">
                  {React.cloneElement(el.img, {
                    color: selectedIndex === i ? "#2d60ff" : "",
                  })}
                </div>
                <div className="link-tittle-container">
                  <h3
                    className="link-title inter"
                    style={{
                      color: selectedIndex === i ? "#2d60ff" : "#b1b1b1",
                    }}
                  >
                    {el.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNavBar;
