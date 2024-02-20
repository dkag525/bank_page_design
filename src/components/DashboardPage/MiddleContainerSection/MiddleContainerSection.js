import React from "react";
import "../MiddleContainerSection/MiddleContainerSection.css";
import { BarChart } from "./BarGraph";
import { PieChart } from "./PieGraph";

const MiddleContainerSection = () => {
  const Ellips = [
    {
      bgColor: "#16DBCC",
      depositeStatus: "Diposit",
    },
    {
      bgColor: "#FF82AC",
      depositeStatus: "Withdraw",
    },
  ];

  return (
    <div className="MiddleContainerSection">
      <div className="Graph-Report-Container-middle-left">
        <div className="Heading-Sec font-weight-600-22px">Weekly Activity</div>
        <div className="Graph-Report-Body">
          <div className="Ellips-Section">
            {Ellips.map((el, i) => {
              return (
                <div key={i} className="rightside-ellips">
                  <div
                    style={{ backgroundColor: el.bgColor }}
                    className="ellips-point"
                  ></div>
                  <div className="deposit-withdraw-status inter">
                    {el.depositeStatus}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Graph-Report">
            <BarChart />
          </div>
        </div>
      </div>
      <div className="Statics-Report">
        <div className="Heading-Sec font-weight-600-22px">
          Expense Statistics
        </div>
        <div className="Pie-Graph-Container">
          <div className="Pie-Graph">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContainerSection;
