import React from "react";
import NoOfInvestment_Icon from "../../assets/svg/NoOfInvestment_Icon.svg";
import Return_Icon from "../../assets/svg/Return_Icon.svg";
import Total_Investment_ICon from "../../assets/svg/Total_Investment_ICon.svg";
import AppleStore_Icon from "../../assets/svg/AppleStore_Icon.svg";
import Samsung_Icon from "../../assets/svg/Samsung_Icon.svg";
import Tesla_Icon from "../../assets/svg/Tesla_Icon.svg";
import "../InvestmentsPage/InvestmentsPage.css";
import LineChartOfInvestment from "../../components/InvestmentsPage/LineChartofInvestment";
import LineChartMonthlyRevenue from "../../components/InvestmentsPage/LineChartMonthlyRevenue";

const InvestmentsPage = () => {
  const Investment_Amount = [
    {
      img: Total_Investment_ICon,
      InvestmentStatus: "Total Investment Amount",
      InvesmentAmountStatus: "$150,000",
    },
    {
      img: NoOfInvestment_Icon,
      InvestmentStatus: "Number of Investments",
      InvesmentAmountStatus: "1250",
    },
    {
      img: Return_Icon,
      InvestmentStatus: "Rate of Return",
      InvesmentAmountStatus: "+5.80%",
    },
  ];

  const MyInvestment = [
    {
      img: AppleStore_Icon,
      StoreName: "Apple Store",
      PlatformName1: "E-commerce",
      PlatformName2: "Marketplace",
      investmentvalue: "$54000",
      ReturnValue: "+16%",
    },
    {
      img: Samsung_Icon,
      StoreName: "Samsung Mobile",
      PlatformName1: "E-commerce",
      PlatformName2: "Marketplace",
      investmentvalue: "$25300",
      ReturnValue: "-4%",
    },
    {
      img: Tesla_Icon,
      StoreName: "Tesla Motors",
      PlatformName1: "Electric Vehicles",
      investmentvalue: "$8200",
      ReturnValue: "+25%",
    },
  ];

  const TrendingStock = [
    {
      SerialNumber: "01",
      TrendingName: "Trivago",
      TrendingPrice: "$520",
      TrendingReturn: "+5%",
    },
    {
      SerialNumber: "02",
      TrendingName: "Canon",
      TrendingPrice: "$480",
      TrendingReturn: "+10%",
    },
    {
      SerialNumber: "03",
      TrendingName: "Uber Food",
      TrendingPrice: "$350",
      TrendingReturn: "-3%",
    },
    {
      SerialNumber: "04",
      TrendingName: "Nokia",
      TrendingPrice: "$940",
      TrendingReturn: "+2%",
    },
    {
      SerialNumber: "05",
      TrendingName: "TikTok",
      TrendingPrice: "$670",
      TrendingReturn: "-12%",
    },
  ];

  return (
    <>
      <div className="investment-top-container">
        {Investment_Amount.map((el, i) => {
          return (
            <div key={i} className="Investment-Status">
              <div className="Investment_Icon">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={el.img} alt="Total_Investment_ICon" />
                </div>
                <div>
                  <h6 className="font-weight-400-16px">
                    {el.InvestmentStatus}
                  </h6>
                  <h6 className="font-weight-600-20px">
                    {el.InvesmentAmountStatus}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Invest-middle-container">
        <div className="yearly-investment-graph">
          <div className="font-weight-600-22px Margin_Bottom_UnderHeadSec">
            Yearly Total Investment
          </div>
          <div className="Monthly_Revenue">
            <LineChartOfInvestment />
          </div>
        </div>
        <div className="Monthly-Revenue-graph ">
          <div className="font-weight-600-22px Margin_Bottom_UnderHeadSec">
            Monthly Revenue
          </div>
          <div className="LineChartMonthlyRevenue">
            <LineChartMonthlyRevenue />
          </div>
        </div>
      </div>
      <div className="Invest-bottom-container gap30px">
        <div className="My-Investment-container">
          <div className="font-weight-600-22px Margin_Bottom_UnderHeadSec">
            My Investment
          </div>
          {MyInvestment.map((el, i) => {
            const newValue = el.ReturnValue;
            const NewAmount = parseFloat(newValue.replace("%", ""));

            const EstValue = el.investmentvalue;
            const NewEstValue = parseFloat(EstValue.replace("$", ""));
            const NewValue = NewEstValue.toLocaleString();
            const ValueWithDollor = "$" + NewValue;

            console.log(ValueWithDollor);

            return (
              <div key={i} className="MyInvestment-Place">
                <div className="Investment-store-Name">
                  <img src={el.img} alt="apple_store_icon" />
                  <div>
                    <h6 className="head-section-transaction-500-16px LineHeight">
                      {el.StoreName}
                    </h6>
                    <h6 className="font-weight-400-15px secondary-color">
                      {`${el.PlatformName1},${el.PlatformName2}`}
                    </h6>
                  </div>
                </div>
                <div className="returnAndinvestment">
                  <div className="Invest-Value">
                    <h6 className="head-section-transaction-500-16px LineHeight">
                      {ValueWithDollor}
                    </h6>
                    <h6 className="font-weight-400-15px secondary-color">
                      Investment Value
                    </h6>
                  </div>
                  <div className="Return-Value">
                    <h6
                      className={`head-section-transaction-500-16px LineHeight ${
                        NewAmount > 0 ? "GreenColor" : "RedColor"
                      }`}
                    >
                      {el.ReturnValue}
                    </h6>
                    <h6 className="font-weight-400-15px secondary-color">
                      Return Value
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="My-Trending-Stock">
          <div className="font-weight-600-22px Margin_Bottom_UnderHeadSec">
            Trending Stock
          </div>
          <div className="Stock-Status">
            <table className="Stock_Table">
              <tr>
                <th className="Stock-th">SL No</th>
                <th className="Stock-th">Name</th>
                <th className="Stock-th">Price</th>
                <th className="Stock-th">Return</th>
              </tr>
              {TrendingStock.map((el, i) => {
                const ReturnAmount = parseFloat(
                  el.TrendingReturn.replace("%", "")
                );

                return (
                  <tr key={i}>
                    <td className="cell1 cell">{el.SerialNumber}</td>
                    <td className="cell2 cell">{el.TrendingName}</td>
                    <td className="cell3 cell">{el.TrendingPrice}</td>
                    <td
                      className={`cell4 ${
                        ReturnAmount > 0 ? "GreenColor" : "RedColor"
                      }`}
                    >
                      {el.TrendingReturn}
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentsPage;
