import React from "react";
import "../CreditCardsPage/CreditCardsPage.css";
import Cards from "../Cards/Cards";
import Chip_Card from "../../assets/svg/Chip_Card.svg";
import Chip_Card3 from "../../assets/svg/Chip_Card3.svg";
import Circle_icon1 from "../../assets/svg/Circle_icon1.svg";
import Circle_icon2 from "../../assets/svg/Circle_icon2.svg";
import CreditCards from "./CreditCards";
import Doughnut from "./Doughnut";
import CardTypeBlue from "../../assets/svg/CardTypeBlue.svg";
import CardTypePink from "../../assets/svg/CardTypePink.svg";
import CardTypeYellow from "../../assets/svg/CardTypeYellow.svg";

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
      atmcardchip: Chip_Card,
      CardHolder: "CARD HOLDER",
      CardName: "Eddy Cusuma",
      ValidThru: "VALID THRU",
      CardExpiry: "12/22",
      CardNumber: "3778 **** **** 1234",
      circleIcon: Circle_icon1,
    },
  ];

  const BankName1 = [
    {
      bankName: "DBL Bank",
    },
    {
      bankName: "BRC Bank",
    },
  ];
  const BankName2 = [
    {
      bankName: "ABM Bank",
    },
    {
      bankName: "MCP Bank",
    },
  ];

  return (
    <>
      <div className="CreditCardPage-top-container Margin_Bottom_UnderHeadSec">
        <div className="CreditCard-top-container-body">
          <div className="CreditCard-HeadSection font-weight-600-22px Margin_Bottom_UnderHeadSec">
            My Cards
          </div>
          <div className="Credit-Card-Sec">
            <div className="Credit-Card">
              <CreditCards atmcarddetails={atmcarddetails} />
            </div>
          </div>
        </div>
      </div>
      <div className="CreditCardPage-Middle-container">
        <div className="Card-expenses-statistics-container">
          <div className="font-weight-600-22px Margin_Bottom_UnderHeadSec">
            Card Expense Statistics
          </div>
          <div className="Card-expenses-statistics-graph-body">
            <div className="Card-expenses-statistics-graph">
              <div className="Card-expenses-statistics-graph-1">
                <Doughnut />
              </div>
            </div>
            <div className="Card-expenses-statistics-details">
              <div className="Bank-Name-container">
                <ul className="Bank-NAme-Body">
                  {BankName1.map((el, i) => {
                    return (
                      <li
                        key={i}
                        className="bankList font-weight-500-15px secondary-color"
                      >
                        <p
                          style={{
                            background:
                              i === 0
                                ? "#4C78FF"
                                : i === 1
                                ? "#FF82AC"
                                : "transparent",
                          }}
                          className="BankEllipse"
                        ></p>
                        <p>{el.bankName}</p>
                      </li>
                    );
                  })}
                </ul>
                <ul className="Bank-NAme-Body">
                  {BankName2.map((el, i) => {
                    return (
                      <li
                        key={i}
                        className="bankList font-weight-500-15px secondary-color"
                      >
                        <p
                          style={{
                            background:
                              i === 0
                                ? "#16DBCC"
                                : i === 1
                                ? "#FFBB38"
                                : "transparent",
                          }}
                          className="BankEllipse"
                        ></p>
                        <p>{el.bankName}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="Card-list-container">
          <div className="font-weight-600-22px Margin_Bottom_UnderHeadSec">
            Card List
          </div>
          <div className="Card-List-Body">
            <table className="Card-table-data">
              <tr>
                <th className="Card-table-heading table-heading-th1">
                  <div className="CardBackground">
                    <ul className="Card1"></ul>
                    <div className="Card-Type">
                      <p className="head-section-transaction-500-16px BlackColor LineHeight ">
                        Card Type
                      </p>
                      <p className="font-weight-400-15px">Secondary</p>
                    </div>
                  </div>
                </th>
                <th className="Card-table-heading">
                  <p className="head-section-transaction-500-16px BlackColor LineHeight ">
                    Bank
                  </p>
                  <p className="font-weight-400-15px">DBL Bank</p>
                </th>
                <th className="Card-table-heading">
                  <p className="head-section-transaction-500-16px BlackColor LineHeight ">
                    Card Number
                  </p>
                  <p className="font-weight-400-15px">**** **** 5600</p>
                </th>
                <th className="Card-table-heading">
                  <p className="head-section-transaction-500-16px BlackColor LineHeight ">
                    Namain Card
                  </p>
                  <p className="font-weight-400-15px">William</p>
                </th>
                <th className="Card-table-heading font-weight-500-15px">
                  <a
                    style={{ color: "#1814F3" }}
                    href="https://chat.openai.com/"
                  >
                    View Details
                  </a>
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCardsPage;
