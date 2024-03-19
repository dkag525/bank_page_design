import React, { useState } from "react";

const InputBox = ({ PreferenceDetails }) => {
  const [userPredetails, setUserPreDetails] = useState({
    currency: "",
    timezone: "",
  });
  //   console.log("userPredetails :", userPredetails);

  const handleChange = (e, key) => {
    const value = e.target.value; // or const {value} = e.target;
    setUserPreDetails((prevUserPreDetails) => ({
      ...prevUserPreDetails,
      [key]: value,
    }));
  };

  return (
    <>
      {PreferenceDetails.map((el, i) => {
        return (
          <div className="Pre-container">
            <div className="Currency font-weight-400-16px">{el.name}</div>
            <div className="Inputput-box">
              <input
                className="InputName"
                type={el.inputType}
                placeholder={el.placeholder}
                onChange={(e) => handleChange(e, el.key)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InputBox;
