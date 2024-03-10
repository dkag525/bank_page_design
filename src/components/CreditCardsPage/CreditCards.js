import React from "react";
import Circle_icon2 from "../../assets/svg/Circle_icon2.svg";
// import ChipCard from "../../assets/svgComponent/ChipCard";
import Chip_Card from "../../assets/svg/Chip_Card.svg";

const CreditCards = () => {
  return (
    <div className="CreditCard-body whiteColor tertiary-background">
      <div className="CreditCard-User-Details-Sec">
        <div className="cc-balance-container">
          <div className="cc-balance-body">
            <p>Balance</p>
            <p>$5,756</p>
          </div>
          <img src={Chip_Card} alt="Chip_Card" />
        </div>
        <div className="cc-credit-card-name-container">f</div>
      </div>
      <div className="CreditCard-User-Card-No-Sec primary-background tertiary-background">
        <div className="CreditCard-User-Card-No lato-600-22px">
          3778 **** **** 1234
        </div>
        <img src={Circle_icon2} alt="Circle_icon1" />
      </div>
    </div>
  );
};

export default CreditCards;
