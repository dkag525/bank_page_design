import React from "react";
import "../Cards/Cards.css";
// import Chip_Card from "../../assets/svg/Chip_Card.svg";
// import Circle_icon1 from "../../assets/svg/Circle_icon1.svg";
// import ChipCard from "../../assets/svgComponent/ChipCard";
// import CircleImage from "../../assets/svgComponent/CircleIcon";

const Cards = ({ atmcarddetails }) => {
  return (
    <div className="my-cards">
      {atmcarddetails.map((el, i) => {
        return (
          <div
            key={i}
            className={
              i % 2 === 0
                ? "atmCard primary-background"
                : "atmCard secondary-background "
            }
          >
            <div className="atmCard-inner-top-sec-body">
              <div className="atmCard-inner-top-sec">
                <div
                  className={
                    i % 2 === 0
                      ? "bal-History-Section lato whiteColor"
                      : "bal-History-Section lato LightBlackColor"
                  }
                >
                  <h6 className="Balance-Section">{el.Balance}</h6>
                  <h5 className="Price-Section">{el.Price}</h5>
                </div>
                <div className="Chip_Card_Icon">
                  <img src={el.atmcardchip} alt="Chip_Card" />
                  {/* {React.cloneElement(el.atmcardchip, {
                    color: i % 2 === 0 ? "red" : "green",
                  })} */}
                </div>
              </div>
              <div className="User-Name-Section lato whiteColor">
                <div className="Card-Holder-Section">
                  <h6
                    className={
                      i % 2 === 0
                        ? "card-holder"
                        : "card-holder secondary-color"
                    }
                  >
                    {el.CardHolder}
                  </h6>
                  <h5
                    className={
                      i % 2 === 0
                        ? "card-holder-name"
                        : "card-holder-name LightBlackColor"
                    }
                  >
                    {el.CardName}
                  </h5>
                </div>
                <div className="Validity-Section">
                  <div
                    className={
                      i % 2 === 0 ? "valid-thru" : "valid-thru secondary-color"
                    }
                  >
                    {el.ValidThru}
                  </div>
                  <div
                    className={
                      i % 2 === 0 ? "valid-date" : "valid-date LightBlackColor"
                    }
                  >
                    {el.CardExpiry}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                i % 2 === 0
                  ? "atmCard-inner-bottom-sec tertiary-background"
                  : "atmCard-inner-bottom-sec quaternary-background"
              }
            >
              <div
                className={
                  i % 2 === 0
                    ? "Atm-Card-Number whiteColor lato"
                    : "Atm-Card-Number LightBlackColor lato"
                }
              >
                {el.CardNumber}
              </div>
              <div className="Circle_Icon">
                <img src={el.circleIcon} alt="Circle_icon1" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
