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
import BarChart from "../AccountsPage/BarChart";
import Apple_Icon from "../../assets/svg/Apple_Icon.svg";
import Michel_Icon from "../../assets/svg/Michel_Icon.svg";
import PlayStation_Icon from "../../assets/svg/PlayStation_Icon.svg";

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

  const AppleStoreDetails = [
    {
      img: Apple_Icon,
      storename: "Apple Store",
      storetime: "5h ago",
      storeAmount: "$450",
      backgroundColor: "#DCFAF8",
    },
    {
      img: Michel_Icon,
      storename: "Michael",
      storetime: "2 days ago",
      storeAmount: "$160",
      backgroundColor: "#FFF5D9",
    },
    {
      img: PlayStation_Icon,
      storename: "Playstation",
      storetime: "5 days ago",
      storeAmount: "$1085",
      backgroundColor: "#E7EDFF",
    },
    {
      img: Apple_Icon,
      storename: "William",
      storetime: "10 days ago",
      storeAmount: "$90",
      backgroundColor: "#FFE0EB",
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
      <div className="Body-Container-Bottom-Section">
        <div className="Body-Container-left-section">
          <div className="Last_Transation font-weight-600-22px">
            Debit & Credit Overview
          </div>
          <div className="D-C-OverView">
            <div className="D-B-Container-sec secondary-color">
              <div className="D-B-Container-left">
                <span>$7,560</span> Debited & <span>$5,420</span> Credited in
                this Week
              </div>
              <div className="D-B-Container-right">
                <div className="Debit-and-Credit">
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "blue",
                      borderRadius: "5px",
                    }}
                  ></div>
                  <p>Debit</p>
                </div>
                <div className="Debit-and-Credit">
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "#FF82AC",
                      borderRadius: "5px",
                    }}
                  ></div>
                  <p>Credit</p>
                </div>
              </div>
            </div>
            <BarChart />
          </div>
        </div>
        <div className="Body-Container-right-section">
          <div className="Last_Transation font-weight-600-22px">
            Invoices Sent
          </div>
          <div className="Invoice-Container">
            {AppleStoreDetails.map((el, i) => {
              return (
                <div key={i} className="Invoice-Bill-Container">
                  <div
                    style={{ backgroundColor: `${el.backgroundColor}` }}
                    className="apple-icon-div"
                  >
                    <img src={el.img} alt="Apple_Icon" />
                  </div>
                  <div className="Store_Invoice_Info">
                    <div className="Store_Name">
                      <p className="head-section-transaction-500-16px greyColor">
                        {el.storename}
                      </p>
                      <p className="font-weight-400-15px secondary-color Store_Price">
                        {el.storetime}
                      </p>
                    </div>

                    <div className="font-weight-400-16px">{el.storeAmount}</div>
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

export default AccountsPage;
