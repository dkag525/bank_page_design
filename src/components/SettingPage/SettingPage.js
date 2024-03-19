import React, { useState } from "react";
import "../SettingPage/SettingPage.css";
import Setting_profile_icon from "../../assets/svg/Setting_profile_icon.svg";
import Profile_Editing_icon from "../../assets/svg/Profile_Editing_icon.svg";
import Pencil_icon from "../../assets/svg/Pencil_icon.svg";
import ArrowDown1 from "../../assets/svg/ArrowDown1.svg";
import { useNavigate } from "react-router-dom";
import Preference from "./Preference";
import Security from "./Security";
import EditProfile from "./EditProfile";

const SettingPage = () => {
  const navigate = useNavigate();

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

  const userDetails = [
    {
      UserInfoType: "Your Name",
      InputType: "text",
      placeholder: "Charlene Reed",
      key: "yourname",
    },
    {
      UserInfoType: "User Name",
      InputType: "text",
      placeholder: "Charlene Reed",
      key: "username",
    },
    {
      UserInfoType: "Email",
      InputType: "Email",
      placeholder: "charleneed@gmail.com",
      key: "email",
    },
    {
      UserInfoType: "Password",
      InputType: "Password",
      placeholder: "**********",
      key: "password",
    },
    {
      UserInfoType: "Date of Birth",
      InputType: "date",
      placeholder: "25 Jan 1990",
      key: "dob",
    },
    {
      UserInfoType: "Present Address",
      InputType: "text",
      placeholder: "Caifornia, USA",
      key: "presentAddress",
    },
    {
      UserInfoType: "Permanent Address",
      InputType: "text",
      placeholder: "Caifornia, USA",
      key: "permanentAddress",
    },
    {
      UserInfoType: "City",
      InputType: "text",
      placeholder: "San Jose",
      key: "City",
    },
    {
      UserInfoType: "Postal Code",
      InputType: "text",
      placeholder: "45962",
      key: "postalCode",
    },
    {
      UserInfoType: "Country",
      InputType: "text",
      placeholder: "USA",
      key: "Country",
    },
  ];

  const [formData, setFormData] = useState({
    yourname: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    presentAddress: "",
    permanentAddress: "",
    City: "",
    postalCode: "",
    Country: "",
  });

  const handleChange = (e, key) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    // Clear the form after submitting
    setFormData({
      yourname: "",
      username: "",
      email: "",
      password: "",
      dob: "",
      presentAddress: "",
      permanentAddress: "",
      City: "",
      postalCode: "",
      Country: "",
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="Setting-Top-Container">
        {/* blue container */}

        <div className="Setting-Top-Container-Heading">
          <div className="Setting-Options">
            <ul className="Setting-List-Profile-Option head-section-transaction-500-16px">
              {SettingList.map((el, i) => {
                return (
                  <li
                    style={{
                      color: positionIndex === i ? "#1814F3" : "#718ebf",
                    }}
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

        {positionIndex === 0 && (
          <EditProfile
            userDetails={userDetails}
            handleChange={handleChange}
            formData={formData}
          />
        )}

        {positionIndex === 1 && (
          <div>
            <Preference />
          </div>
        )}
        {positionIndex === 2 && (
          <div>
            <Security />
          </div>
        )}
      </div>
    </form>
  );
};

export default SettingPage;
