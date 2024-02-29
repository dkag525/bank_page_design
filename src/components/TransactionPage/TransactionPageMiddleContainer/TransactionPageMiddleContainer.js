import React from "react";
import "../TransactionPageMiddleContainer/TransactionPageMiddleContainer.css";
import ArrowUp from "../../../assets/svg/ArrowUp.svg";
import ArrowDown from "../../../assets/svg/ArrowDown.svg";
import LeftArrow from "../../../assets/svg/LeftArrow.svg";
import RightArrow from "../../../assets/svg/RightArrow.svg";

const TransactionPageMiddleContainer = () => {
  const tableData = [
    {
      discription: "Spotify Subscription",
      TransactionId: "#12548796",
      Type: "Shopping",
      Card: "1234 ****",
      Date: "28 Jan, 12:30 AM",
      Amount: "-$2,500",
    },
    {
      discription: "Freepik Sales",
      TransactionId: "#12548796",
      Type: "Transfer",
      Card: "1234 ****",
      Date: "25 Jan, 12:30 AM",
      Amount: "+$750",
    },
    {
      discription: "Mobile Services",
      TransactionId: "#12548796",
      Type: "Service",
      Card: "1234 ****",
      Date: "20 Jan, 12:30 AM",
      Amount: "-$150",
    },
    {
      discription: "Wilson",
      TransactionId: "#12548796",
      Type: "Transfer",
      Card: "1234 ****",
      Date: "15 Jan, 12:30 AM",
      Amount: "-$1050",
    },
    {
      discription: "Emilly",
      TransactionId: "#12548796",
      Type: "Transfer",
      Card: "1234 ****",
      Date: "14 Jan, 12:30 AM",
      Amount: "+$840",
    },
  ];

  return (
    <div className="TransactionPageMiddleContainer">
      <div className="head-sections font-weight-600-22px">
        Recent Transactions
      </div>
      <div className="head-section-transaction-500-16px head-section-transaction secondary-color">
        <div>All Transactions</div>
        <div>Income</div>
        <div>Expense</div>
      </div>
      <div className="Transactions-body-list">
        <table className="table">
          <tr className="table-row-heading">
            <th className="Description">Description</th>
            <th className="Transaction_ID">Transaction ID</th>
            <th className="Type">Type</th>
            <th className="Card">Card</th>
            <th className="Date">Date</th>
            <th className="Amount">Amount</th>
            <th className="Receipt">Receipt</th>
          </tr>
          <div className="table-Line"></div>
          {tableData.map((el, i) => {
            const Amount = el.Amount;
            const NewAmount = parseFloat(Amount.replace("$", ""));
            console.log(NewAmount);

            return (
              <tr key={i} className="table-row-data">
                <td className="Spotify_Sub">
                  <ul className="Description_List">
                    <img
                      src={`${NewAmount < 0 ? ArrowUp : ArrowDown}`}
                      alt="ArrowUp"
                    />
                    <li className="Spotify">{el.discription}</li>
                  </ul>
                </td>
                <td className="tansaction_id">{el.TransactionId}</td>
                <td className="Shopping">{el.Type}</td>
                <td className="Card_Numbers">1234 ****</td>
                <td className="Card_Dates">{el.Date}</td>
                <td
                  className={`Card_Amounts ${
                    NewAmount > 0 ? "GreenColor" : "RedColor"
                  }`}
                >
                  {el.Amount}
                </td>
                <td className="Card_Receipt">
                  <button>Download</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="NextPageBody">
        <div className="NextPage">
          <div className="Previous">
            <img className="LeftArrow" src={LeftArrow} alt="LeftArrow" />
            <p>Previous</p>
          </div>
          <div className="PageNumber">
            <h6>1</h6>
          </div>
          <div className="PageNumber">
            <h6>2</h6>
          </div>
          <div className="PageNumber">
            <h6>3</h6>
          </div>
          <div className="PageNumber">
            <h6>4</h6>
          </div>
          <div className="Next">
            <p>Next</p>
            <img className="RightArrow" src={RightArrow} alt="RightArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPageMiddleContainer;
