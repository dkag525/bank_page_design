import React from "react";
import "../BottomContainerSection/BottomContainerSection.css";
import Arrow_icon from "../../../assets/svg/Arrow.svg";
import Profile_Picture_1 from "../../../assets/svg/Profile_Picture_1.svg";
import Profile_Picture_2 from "../../../assets/svg/Profile_Picture_2.svg";
import Profile_Picture_3 from "../../../assets/svg/Profile_Picture_3.svg";
import aeroplane_icon from "../../../assets/svg/aeroplane_icon.svg";
import { LineChart } from "./LineGraph";

const BottomContainerSection = () => {
  const UserDetails = [
    {
      id: 1,
      img: Profile_Picture_1,
      name: "Livia Bator",
      position: "CEO",
    },
    {
      id: 2,
      img: Profile_Picture_2,
      name: "Randy Press",
      position: "Director",
    },
    {
      id: 3,
      img: Profile_Picture_3,
      name: "Workman",
      position: "Designer",
    },
  ];

  return (
    <div className="BottomContainerSection">
      <div className="Quick-Transfer-Container">
        <div className="Heading-Sec font-weight-600-22px">Quick Transfer</div>
        <div className="Quick-Transfer-Body">
          <div className="Transfer-Details">
            <div className="Users-Details">
              {UserDetails.map((el, i) => {
                return (
                  <div className="User-Details">
                    <div className="User_Icon">
                      <img src={el.img} alt="Profile_Picture_1" />
                    </div>
                    <div className="User_Position_details inter">
                      <h3 className="User_Name">{el.name}</h3>
                      <h4 className="User_Position secondary-color">
                        {el.position}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="Arrow_Icon">
              <img src={Arrow_icon} alt="Arrow_icon" />
            </div>
          </div>
          <div className="Transfer-Amount-Details">
            <div className="Write-Amount">
              <input
                className="InputAmount inter"
                type="text"
                placeholder="Write Amount"
              />
            </div>
            <div className="Transfer-Amount-Sec">
              <div className="AmountAndSend">
                <div className="Enter-Amount">
                  <input
                    className="Enter-Amount-Input"
                    type="text"
                    placeholder="525.50"
                  />
                </div>
                <div className="Send-Amount inter">
                  <h6 className="send">Send</h6>
                  <img
                    style={{ width: "1.625rem", height: "1.4125rem" }}
                    src={aeroplane_icon}
                    alt="aeroplane_icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Balance-History-Container">
        <div className="Heading-Sec font-weight-600-22px">Balance History</div>
        <div className="Line-Graph-Container">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default BottomContainerSection;
