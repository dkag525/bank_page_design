import React from "react";
import Circle_icon2 from "../../assets/svg/Circle_icon2.svg";
// import ChipCard from "../../assets/svgComponent/ChipCard";
import Chip_Card from "../../assets/svg/Chip_Card.svg";

const CreditCards = ({ atmcarddetails }) => {
  return (
    <>
      {atmcarddetails.map((el, i) => {
        let backgroundColor, Color;

        if (i === 1) {
          backgroundColor = "linear-gradient(180deg, #4C49ED 0%, #0A06F4 100%)";
          Color = "white";
        } else if (i === 2) {
          backgroundColor = "white";
          Color = "black";
        } else {
          backgroundColor = "";
          Color = "";
        }

        const style = {
          background: backgroundColor,
          color: Color,
        };

        return (
          <div key={i} className="CreditCard-body whiteColor ">
            <div
              style={{ background: style.background, color: style.color }}
              className="CreditCard-User-Details-Sec linearGradientBlue"
            >
              <div className="cc-balance-container">
                <div className="cc-balance-body">
                  <p className="lato-400-12px">{el.Balance}</p>
                  <p className="lato-600-20px">{el.Price}</p>
                </div>
                <img src={el.atmcardchip} alt="Chip_Card" />
              </div>
              <div className="cc-credit-card-name-container">
                <div className="cc-card-holder-name">
                  <p className="lato-400-12px LightGreyColor">
                    {el.CardHolder}
                  </p>
                  <p className="lato-600-15px">{el.CardName}</p>
                </div>
                <div className="cc-card-holder-name">
                  <p className="lato-400-12px LightGreyColor">{el.ValidThru}</p>
                  <p className="lato-600-15px">{el.CardExpiry}</p>
                </div>
              </div>
            </div>
            <div className="CreditCard-User-Card-No-Sec tertiary-background primary-background">
              <div className="CreditCard-User-Card-No lato-600-22px">
                {el.CardNumber}
              </div>
              <img src={el.circleIcon} alt="Circle_icon1" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CreditCards;
