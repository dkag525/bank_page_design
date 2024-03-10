import React from "react";
import "../CreditCardsPage/CreditCardsPage.css";
import Cards from "../Cards/Cards";
import Chip_Card from "../../assets/svg/Chip_Card.svg";
import Chip_Card3 from "../../assets/svg/Chip_Card3.svg";
import Circle_icon1 from "../../assets/svg/Circle_icon1.svg";
import Circle_icon2 from "../../assets/svg/Circle_icon2.svg";
import CreditCards from "./CreditCards";

const CreditCardsPage = () => {
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
  ];

  return (
    <div className="CreditCardPage-top-container">
      <div className="CreditCard-top-container-body">
        <div className="CreditCard-HeadSection font-weight-600-22px Margin_Bottom_UnderHeadSec">
          My Cards
        </div>
        <CreditCards />
      </div>
    </div>
  );
};

export default CreditCardsPage;
