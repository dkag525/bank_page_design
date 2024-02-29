import React from "react";
import "../AccountsPage/AccountsPage.css";
import Expense_Icon from "../../assets/svg/Expense_Icon.svg";
import Income_Icon from "../../assets/svg/Income_Icon.svg";
import Total_Saving_Icon from "../../assets/svg/Total_Saving_Icon.svg";
import Balance_icon from "../../assets/svg/Balance_icon.svg";
import Cards from "../Cards/Cards";
import Chip_Card from "../../assets/svg/Chip_Card.svg";
import Circle_icon1 from "../../assets/svg/Circle_icon1.svg";
import Emilly_Wilson_Icon from "../../assets/svg/Emilly_Wilson_Icon.svg";
import Spotify_Sub_Icon from "../../assets/svg/Spotify_Sub_Icon.svg";
import Mobile_Services_Icon from "../../assets/svg/Mobile_Services_Icon.svg";

const AccountsPage = () => {
  const AccountsFinanceStatus = [
    {
      img: Balance_icon,
      Accounts_Status: "My Balance",
      Accounts_Price: "$12,750",
    },
    {
      img: Income_Icon,
      Accounts_Status: "Income",
      Accounts_Price: "$5,600",
    },
    {
      img: Expense_Icon,
      Accounts_Status: "Expense",
      Accounts_Price: "$3,460",
    },
    {
      img: Total_Saving_Icon,
      Accounts_Status: "Total Saving",
      Accounts_Price: "$7,920",
    },
  ];

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

  const TransactionDetails = [
    {
      img: Spotify_Sub_Icon,
      ServiveName: "Spotify Subscription",
      ServiceDate: "25 Jan 2021",
      Type: "Shopping",
      Card: "1234 ****",
      Status: "Pending",
      Amount: "-$150",
    },
    {
      img: Mobile_Services_Icon,
      ServiveName: "Mobile Services",
      ServiceDate: "25 Jan 2021",
      Type: "Service",
      Card: "1234 ****",
      Status: "Completed",
      Amount: "-$340",
    },
    {
      img: Emilly_Wilson_Icon,
      ServiveName: "Emilly Wilson",
      ServiceDate: "25 Jan 2021",
      Type: "Transfer",
      Card: "1234 ****",
      Status: "Completed",
      Amount: "+$780",
    },
  ];

  return (
    <>
      <div className="AccountsPage">
        {AccountsFinanceStatus.map((el, i) => {
          return (
            <div key={i} className="Accounts_Information-container">
              <div className="Accounts_Information">
                <div className="Amounts-Logo">
                  <img
                    className="Amounts-Logo_icon"
                    src={el.img}
                    alt="Amounts-Logo_icon"
                  />
                </div>
                <div className="Accounts-Finance-Status">
                  <p className="Balance-Income-Expense-Saving">
                    {el.Accounts_Status}
                  </p>
                  <p className="Accounts-Price">{el.Accounts_Price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Middle-Container">
        <div className="Last-Transaction-Container">
          <div className="Last_Transation font-weight-600-22px">
            Last Transaction
          </div>

          <div className="Last_Transation-Details">
            {TransactionDetails.map((el, i) => {
              const Amount = el.Amount;
              const NewAmount = parseFloat(Amount.replace("$", ""));

              return (
                <div className="User-transaction-list">
                  <table className="T-Table">
                    <tbody>
                      <tr>
                        <th className="T-Data T-Data-1">
                          <ul className="UL-Lists">
                            <li className="List-1">
                              <img
                                className="Mobile_Services_Icon"
                                src={el.img}
                                alt="Mobile_Services_Icon"
                              />
                            </li>
                            <li className="List-2">
                              <p className="head-section-transaction-500-16px Spotify">
                                {el.ServiveName}
                              </p>
                              <p className="T-Date"> {el.ServiceDate}</p>
                            </li>
                          </ul>
                        </th>
                        <th className="T-Data T-TH">{el.Type}</th>
                        <th className="T-Data T-TH">{el.Card}</th>
                        <th className="T-Data T-TH">{el.Status}</th>
                        <th
                          style={{
                            color: `${NewAmount > 0 ? "#41D4A8" : "#FF4B4A"}`,
                          }}
                          className="T-Data T-TH"
                        >
                          {el.Amount}
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
        <div className="My-ATM-Card-Container">
          <div className="atm-card-head-sec">
            <div className="font-weight-600-22px">My Card</div>
            <div className="font-weight-600-17px">See All</div>
          </div>
          <div className="">
            <Cards atmcarddetails={atmcarddetails} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsPage;
