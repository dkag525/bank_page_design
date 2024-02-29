import React from "react";
import Cards from "../../Cards/Cards";
import { BarChart } from "../BarCharts";
import Chip_Card from "../../../assets/svg/Chip_Card.svg";
import Chip_Card3 from "../../../assets/svg/Chip_Card3.svg";
import Circle_icon1 from "../../../assets/svg/Circle_icon1.svg";
import Circle_icon2 from "../../../assets/svg/Circle_icon2.svg";
// import ChipCard from "../../../assets/svgComponent/ChipCard";
// import CircleImage from "../../../assets/svgComponent/CircleIcon";

import "../TransactionPageTopContainer/TransactionPageTopContainer.css";

const TransactionPageTopContainer = () => {
  const atmcarddetails = [
    {
      Balance: "Balance",
      Price: "$5,756",
      // atmcardchip: <ChipCard color={""} />,
      atmcardchip: Chip_Card,
      CardHolder: "CARD HOLDER",
      CardName: "Eddy Cusuma",
      ValidThru: "VALID THRU",
      CardExpiry: "12/22",
      CardNumber: "3778 **** **** 1234",
      circleIcon: Circle_icon1,
    },
    {
      Balance: "Balance",
      Price: "$5,756",
      // atmcardchip: <ChipCard color={""} />,
      atmcardchip: Chip_Card3,
      CardHolder: "CARD HOLDER",
      CardName: "Eddy Cusuma",
      ValidThru: "VALID THRU",
      CardExpiry: "12/22",
      CardNumber: "3778 **** **** 1234",
      circleIcon: Circle_icon2,
    },
    {
      Balance: "Balance",
      Price: "$5,756",
      // atmcardchip: <ChipCard color={""} />,
      atmcardchip: Chip_Card,
      CardHolder: "CARD HOLDER",
      CardName: "Eddy Cusuma",
      ValidThru: "VALID THRU",
      CardExpiry: "12/22",
      CardNumber: "3778 **** **** 1234",
      circleIcon: Circle_icon1,
    },
  ];

  return (
    <div className="TopContainer">
      <div className="my-cards-body">
        <div className="head-sec inter primary-color">
          <div className="My-Cards">My Cards</div>
          <div className="Add-Cards">+ Add Card</div>
        </div>
        <div className="multiple-atm-card-Sec">
          <Cards atmcarddetails={atmcarddetails} />
        </div>
      </div>
      <div className="myexpense-body ">
        <div className="head-sections font-weight-600-22px ">My Expense</div>
        <div className="myexpense-body-section">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default TransactionPageTopContainer;
