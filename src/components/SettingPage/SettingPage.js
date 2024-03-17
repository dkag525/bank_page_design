import React, { useState } from "react";
import "../SettingPage/SettingPage.css";
import Setting_profile_icon from "../../assets/svg/Setting_profile_icon.svg";
import Profile_Editing_icon from "../../assets/svg/Profile_Editing_icon.svg";
import Pencil_icon from "../../assets/svg/Pencil_icon.svg";

const SettingPage = () => {
  const [positionIndex, setPositionIndex] = useState(0);
  const left = 11.875 * positionIndex;

  const handleClick = (el, i) => {
    setPositionIndex(i);
  };

  const SettingList = [
    {
      ListName: "Edit Profile",
    },
    {
      ListName: "Preference",
    },
    {
      ListName: "Security",
    },
  ];

  // const [newPhoto, setNewPhoto] = useState(0);

  // const editProfile = () => {
  //   setNewPhoto(Profile_Editing_icon);
  // };

  return (
    <div className="Setting-Top-Container">
      {/* blue container */}

      <div className="Setting-Top-Container-Heading">
        <div className="Setting-Options">
          <ul className="Setting-List-Profile-Option head-section-transaction-500-16px">
            {SettingList.map((el, i) => {
              return (
                <li
                  style={{ color: positionIndex === i ? "#1814F3" : "#718ebf" }}
                  onClick={() => handleClick(el, i)}
                  key={i}
                  className="Setting-Option-List"
                >
                  {el.ListName}
                </li>
              );
            })}
          </ul>
          <div
            style={{ left: `${left}rem` }}
            className="SettingBlue-NavLine primary-background"
          ></div>
        </div>
      </div>

      {/* .................................. */}

      <div className="Setting-Middle-Container-Heading">
        <div className="Setting-Profile-Image">
          <img src={Setting_profile_icon} alt="Setting_profile_icon" />
          <div className="Edit-Profile-Pic">
            <img src={Pencil_icon} alt="Pencil_icon" />
          </div>
        </div>

        <div className="Setting-Form-Container">
          <div className="User-Name-container">A</div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
