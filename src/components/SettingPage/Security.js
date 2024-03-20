import React from "react";
import "../SettingPage/Security.css";

const Security = () => {
  return (
    <div className="Security-container-top-section">
      <div className="font-weight-500-17px Margin_Bottom_UnderHeadSec">
        Two-Factor Authentication
      </div>
      <div className="Authentication-Setting Margin_Bottom_UnderHeadSec">
        <div className="Switchs">
          <div className="SwitchbtnsLeft"></div>
        </div>
        <div style={{ color: "black" }} className="font-weight-400-16px ">
          Enable or disable two factor Authentication
        </div>
      </div>
      <div className="Password-Setting">
        <div className="Change-Password font-weight-500-17px">
          Change Password
        </div>
        <div className="Current-Password-body">
          <div
            style={{ color: "black" }}
            className="Current-Password font-weight-400-16px"
          >
            Current Password
          </div>
          <input
            className="InputPassword"
            type="text"
            placeholder="***********"
          />
        </div>
      </div>
      <div className="Btn-Container">
        <button
          // onClick={() => handleClicked()}
          type="submit"
          className="SaveBtn"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Security;
