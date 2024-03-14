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
import ArrowDown1 from "../../assets/svg/ArrowDown1.svg";
import ApplePay_Icon from "../../assets/svg/ApplePay_Icon.jpg";
import AppleStore from "../../assets/svg/AppleStore.jpg";
import BlockCard_Icon from "../../assets/svg/BlockCard_Icon.svg";
import ChangePinCode_Icon from "../../assets/svg/ChangePinCode_Icon.svg";
import GooglePay_Icon from "../../assets/svg/GooglePay_Icon.svg";

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

  const Cardlist = [
    {
      img: CardTypeBlue,
      Card: "Card Type",
      CardType: "Secondary",
      Bank: "Bank",
      BankName: "DBL Bank",
      CardNumber: "Card Number",
      CardNo: "**** **** 5600",
      UserName: "Namain Card",
      CardOnName: "WiLLiam",
    },
    {
      img: CardTypeBlue,
      Card: "Card Type",
      CardType: "Secondary",
      Bank: "Bank",
      BankName: "BRC Bank",
      CardNumber: "Card Number",
      CardNo: "**** **** 4300",
      UserName: "Namain Card",
      CardOnName: "Michel",
    },
    {
      img: CardTypeBlue,
      Card: "Card Type",
      CardType: "Secondary",
      Bank: "Bank",
      BankName: "ABM Bank",
      CardNumber: "Card Number",
      CardNo: "**** **** 7560",
      UserName: "Namain Card",
      CardOnName: "Edward",
    },
  ];

  const CardSetting = [
    {
      img: BlockCard_Icon,
      CardSettingType: "Block Card",
      CardSettingOption: "Instantly block your card",
    },
    {
      img: ChangePinCode_Icon,
      CardSettingType: "Change Pin Code",
      CardSettingOption: "Choose another pin code",
    },
    {
      img: GooglePay_Icon,
      CardSettingType: "Add to Google Pay",
      CardSettingOption: "Withdraw without any card",
    },
    {
      img: ApplePay_Icon,
      CardSettingType: "Add to Apple Pay",
      CardSettingOption: "Withdraw without any card",
    },
    {
      img: AppleStore,
      CardSettingType: "Add to Apple Store",
      CardSettingOption: "Withdraw without any card",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
      <div className="CreditCardPage-Middle-container Margin_Bottom_UnderHeadSec">
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
          <div className="Card-List-Body-container">
            {Cardlist.map((el, i) => {
              const BackGroundColor = () => {
                let bgColor;
                if (i === 0) {
                  bgColor = "#E7EDFF";
                } else if (i === 1) {
                  bgColor = "#FFE0EB";
                } else {
                  bgColor = "#FFF5D9";
                }
                return bgColor;
              };

              return (
                <div className="Card-List-Body">
                  <table className="Card-table-data">
                    <tr>
                      <th className="Card-table-heading table-heading-th1">
                        <div className="CardBackground">
                          <ul
                            style={{ background: BackGroundColor() }}
                            className="Card1"
                          >
                            <img src={el.img} alt="CardType_Icon" />
                          </ul>
                          <div className="Card-Type">
                            <p className="head-section-transaction-500-16px BlackColor LineHeight ">
                              {el.Card}
                            </p>
                            <p className="font-weight-400-15px">
                              {el.CardType}
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className="Card-table-heading">
                        <p className="head-section-transaction-500-16px BlackColor LineHeight ">
                          {el.Bank}
                        </p>
                        <p className="font-weight-400-15px">{el.BankName}</p>
                      </th>
                      <th className="Card-table-heading">
                        <p className="head-section-transaction-500-16px BlackColor LineHeight ">
                          {el.CardNumber}
                        </p>
                        <p className="font-weight-400-15px">{el.CardNo}</p>
                      </th>
                      <th className="Card-table-heading">
                        <p className="head-section-transaction-500-16px BlackColor LineHeight ">
                          {el.UserName}
                        </p>
                        <p className="font-weight-400-15px">{el.CardOnName}</p>
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
              );
            })}
          </div>
        </div>
      </div>
      <div className="CC-Bottom-Container">
        <form action="" onSubmit={handleSubmit}>
          <div className="Add-New-CArd-Form-container">
            <div className="font-weight-600-22px Margin_Bottom_UnderHeadSec">
              Add New Card
            </div>
            <div className="Add-New-CArd">
              <div
                style={{ lineHeight: "1.75rem" }}
                className="CC-Paragraph font-weight-400-16px Margin_Bottom_UnderHeadSec"
              >
                Credit Card generally means a plastic card issued by Scheduled
                Commercial Banks assigned to a Cardholder, with a credit limit,
                that can be used to purchase goods and services on credit or
                obtain cash advances.
              </div>
              <div className="Credit-Card-Submit-Form">
                <div className="CardType-Container">
                  <h5
                    style={{ color: "black" }}
                    className="font-weight-400-16px"
                  >
                    Card Type
                  </h5>
                  <input
                    className="CardText"
                    type="text"
                    placeholder="Classic"
                  />
                </div>
                <div className="CardType-Name">
                  <h5
                    style={{ color: "black" }}
                    className="font-weight-400-16px"
                  >
                    Name on Card
                  </h5>
                  <input
                    className="CardText"
                    type="text"
                    placeholder="My Cards"
                  />
                </div>
              </div>
              <div className="Credit-Card-Submit-Form">
                <div className="CardType-Container">
                  <h5
                    style={{ color: "black" }}
                    className="font-weight-400-16px"
                  >
                    Card Number
                  </h5>
                  <input
                    className="CardText"
                    type="text"
                    placeholder="**** **** **** ****"
                  />
                </div>
                <div className="CardType-Name">
                  <h5
                    style={{ color: "black" }}
                    className="font-weight-400-16px"
                  >
                    Expiration Date
                  </h5>
                  <div className="Expiration-Date">
                    <select className="Expiration-Date-Text">
                      <option value="">25 January 2025</option>
                      <option value="">26 January 2025</option>
                      <option value="">27 January 2025</option>
                      <option value="">28 January 2025</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="CC-Submit-Button">
                <button type="submit" className="Submit-btn">
                  Add Card
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="card-setting-container">
          <div className="font-weight-600-22px Margin_Bottom_UnderHeadSec">
            Card Setting
          </div>
          <div className="card-setting-body">
            {CardSetting.map((el, i) => {
              return (
                <div key={i} className="card-setting-list-container">
                  <img
                    style={{ marginRight: "1.25rem" }}
                    src={el.img}
                    alt="Card-Setting-Icon"
                  />
                  <div>
                    <p className="head-section-transaction-500-16px LineHeight">
                      {el.CardSettingType}
                    </p>
                    <p className="font-weight-400-15px secondary-color">
                      {el.CardSettingOption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCardsPage;
