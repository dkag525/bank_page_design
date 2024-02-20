import React from "react";
import "../TopNavBar/TopNavBar.css";
import Search_Icon from "../../../assets/svg/Search_Icon.svg";
import setting_icon from "../../../assets/svg/setting_icon.svg";
import bell_icon from "../../../assets/svg/bell_icon.svg";
import Profile_Photo from "../../../assets/svg/Profile_Photo.svg";

const TopNavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="topNavleft-container">
          <h3 className="OverView inter primary-color">Overview</h3>
        </div>
        <div className="topNavright-container">
          <div className="InputSearch">
            <img className="search_icon" src={Search_Icon} alt="Search_Icon" />
            <input
              className="SerchBar inter"
              type="text"
              placeholder="Search for something"
            />
          </div>
          <div className="setting_icon">
            <img src={setting_icon} alt="setting_icon" />
          </div>
          <div className="bell_icon">
            <img src={bell_icon} alt="bell_icon" />
          </div>
          <div className="profile_picture">
            <img src={Profile_Photo} alt="Profile_Photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
