import React, { useState } from "react";
import "../TopContainerSection/TopContainerSection.css";
import Chip_Card from "../../../assets/svg/Chip_Card.svg";
import Chip_Card2 from "../../../assets/svg/Chip_Card2.svg";
import Circle_icon from "../../../assets/svg/Circle_icon1.svg";
import Circle_icon2 from "../../../assets/svg/Circle_icon2.svg";
import Deposite_icon_1 from "../../../assets/svg/deposite_icon_1.svg";
import Deposite_icon_2 from "../../../assets/svg/deposite_icon_2.svg";
import Deposite_icon_3 from "../../../assets/svg/deposite_icon_3.svg";

const TopContainerSection = () => {
  const [atmCard, setAtmCards] = useState(new Array(9).fill(0));
  const [recentTransaction, setrecenttransaction] = useState(
    new Array(1).fill(0)
  );

  const TranSactionDetails = [
    {
      id: 1,
      img: Deposite_icon_1,
      depositeFrom: "Deposite from my Card",
      depositeDate: "28 January 2021",
      depositeAmount: "-$582",
    },
    {
      id: 2,
      img: Deposite_icon_2,
      depositeFrom: "Deposite Paypal",
      depositeDate: "25 January 2021",
      depositeAmount: "+$2,500",
    },
    {
      id: 3,
      img: Deposite_icon_3,
      depositeFrom: "Jemi Wilson",
      depositeDate: "21 January 2021",
      depositeAmount: "+$5,400",
    },
    {
      id: 4,
      img: Deposite_icon_3,
      depositeFrom: "Jemi Wilson",
      depositeDate: "21 January 2021",
      depositeAmount: "+$5,400",
    },
  ];

  return (
    <div className="container-top-section">
      <div className="finance-detail-section">
        <div className="Card-Section">
          <div className="head-section">
            <div className="head-section-left font-weight-600-22px">
              My Cards
            </div>
            <div className="head-section-right font-weight-600-17px">
              See All
            </div>
          </div>
          <div className="my-card-body">
            {atmCard.map((el, i) => {
              return (
                <div
                  key={i}
                  className={
                    i % 2 === 0
                      ? "atm-card primary-background"
                      : "atm-card secondary-background "
                  }
                >
                  <div
                    className={
                      i % 2 === 0
                        ? "atm-card-top-sec whiteColor"
                        : "atm-card-top-sec"
                    }
                  >
                    <div className="balanceAndchipCard">
                      <div className="balance-section">
                        <h5 className="balance">Balance</h5>
                        <h4 className="price">$5,756</h4>
                      </div>
                      <div className="chip_card_icon">
                        <img
                          src={i % 2 === 0 ? Chip_Card : Chip_Card2}
                          alt="Chip_Card"
                        />
                      </div>
                    </div>
                    <div className="cardholder-validity">
                      <div className="CARD-HOL-DELTAILS lato">
                        <h5
                          className={i % 2 === 0 ? "cardholder" : "cardholders"}
                        >
                          CARD HOLDER
                        </h5>
                        <h5 className="cardholderName">Eddy Cusuma</h5>
                      </div>
                      <div className="CARD-HOL-DELTAILS lato">
                        <h5
                          className={i % 2 === 0 ? "cardholder" : "cardholders"}
                        >
                          VALID THRU
                        </h5>
                        <h5 className="cardholderName">12/22</h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      i % 2 === 0
                        ? "atm-card-bottom-sec tertiary-background"
                        : "atm-card-bottom-sec quaternary-background"
                    }
                  >
                    <div className="atm-card-number-section lato">
                      <div
                        className={
                          i % 2 === 0
                            ? "atm-card-number whiteColor lato"
                            : "atm-card-number lato"
                        }
                      >
                        <h3 className="card-number">3778 **** **** 1234</h3>
                      </div>
                      <div className="Image-Circle_Icon">
                        <img
                          src={i % 2 === 0 ? Circle_icon : Circle_icon2}
                          alt="Circle_icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Transaction-Section">
          <div className="Heading-Sec font-weight-600-22px">
            Recent Transaction
          </div>

          <div className="Transaction-details-List">
            <div className="Transaction-details-body">
              {recentTransaction.map((el, i) => {
                return (
                  <div
                    key={i}
                    className="Transaction-details secondary-background"
                  >
                    <div className="tran-list-details">
                      {TranSactionDetails.map((el, i) => {
                        const TrueorFalse =
                          parseFloat(el.depositeAmount.replace("$", "")) < 0
                            ? false
                            : true;

                        // niche wale logic ko uper short kia gaya hai

                        // let TrueorFalse;

                        // const stringWithCurrency = el.depositeAmount;
                        // const stringWithoutCurrency =
                        //   stringWithCurrency.replace("$", "");
                        // const number = parseFloat(stringWithoutCurrency);

                        // if (number < 0) {
                        //   TrueorFalse = false;
                        // } else {
                        //   TrueorFalse = true;
                        // }

                        return (
                          <div key={i} className="transaction-list">
                            <div className="deposite_icon">
                              <img src={el.img} alt="Deposite_icon_1" />
                            </div>
                            <div className="depositeFrom-sec inter">
                              <div className="depositeList">
                                <h4 className="depositeFrom">
                                  {el.depositeFrom}
                                </h4>
                                <h5 className="deposite-Amount secondary-color">
                                  {el.depositeDate}
                                </h5>
                              </div>
                              <div
                                className={`Transaction-Amount ${
                                  TrueorFalse === false
                                    ? "RedColor"
                                    : "GreenColor"
                                }`}
                              >
                                {el.depositeAmount}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainerSection;
