import React, { useState } from "react";
import "../SettingPage/Preference.css";
import InputBox from "./InputBox";

const Preference = () => {
  const [toggle, setToggle] = useState(false);
  const [indexPosition, setPositionIndex] = useState(0);

  const toggleSwitch = (el, i) => {
    setToggle(!toggle);
    setPositionIndex(i);
  };

  const PreferenceDetails = [
    {
      name: "Currency",
      inputType: "text",
      placeholder: "USD",
      key: "currency",
    },
    {
      name: "Time Zone",
      inputType: "text",
      placeholder: "(GMT-12:00) International Date Line West",
      key: "timezone",
    },
  ];

  const notificationSetting = [
    {
      settingStatus: "I Send or receive Digital Currency",
    },
    {
      settingStatus: "I Received Marchant Order",
    },
    {
      settingStatus: "There are recommendation for my account",
    },
  ];

  return (
    <>
      <form action="">
        <div className="Preference-container-top-section">
          <div className="Preference-top-body">
            <InputBox PreferenceDetails={PreferenceDetails} />
          </div>
        </div>

        <div>
          <div className="Notification">
            <div className="font-weight-500-17px Margin_Bottom_UnderHeadSec">
              Notification
            </div>
            <div className="Notification-Setting-body">
              {notificationSetting.map((el, i) => {
                return (
                  <div
                    key={i}
                    className="Notification-Setting font-weight-400-16px"
                  >
                    <div className="toggle">
                      <div
                        style={{
                          background: `${
                            indexPosition === i && toggle === true
                              ? "#16DBCC"
                              : "#DFEAF2"
                          }`,
                        }}
                        className="Switch"
                      >
                        <div
                          onClick={() => toggleSwitch(el, i)}
                          className={
                            indexPosition === i && toggle === true
                              ? "Switchbtntoggle"
                              : "Switchbtn"
                          }
                        ></div>
                      </div>
                    </div>
                    <div>{el.settingStatus}</div>
                  </div>
                );
              })}
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
      </form>
    </>
  );
};

export default Preference;

// Below Method is also Work //

// const PreferenceDetails = [
//   {
//     name: "Currency",
//     inputType: "text",
//     placeholder: "USD",
//   },
//   {
//     name: "Currency",
//     inputType: "text",
//     placeholder: "USDAF",
//   },
// ];

// export const inputBoxes = PreferenceDetails.map((el, i) => {
//   return (
//     <div className="Pre-container" key={i}>
//       <div className="Currency font-weight-400-16px">{el.name}</div>
//       <div className="Inputput-box">
//         <input
//           className="InputName"
//           type={el.inputType} // Fixed typo: changed from el.inputBox to el.inputType
//           placeholder={el.placeholder}
//         />
//       </div>
//     </div>
//   );
// });

// const Preference = () => {
//   return (
//     <div className="Preference-container-top-section">
//       <div className="Preference-top-body">
//         {/* Render the array of input boxes */}
//         {inputBoxes}
//       </div>
//     </div>
//   );
// };

// export default Preference;
