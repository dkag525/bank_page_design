import React from "react";
import Setting_profile_icon from "../../assets/svg/Setting_profile_icon.svg";
import Pencil_icon from "../../assets/svg/Pencil_icon.svg";

const EditProfile = ({ userDetails, handleChange, formData }) => {
  return (
    <>
      <div className="Setting-Middle-Container-Heading">
        <div className="Setting-Profile-Image">
          <img src={Setting_profile_icon} alt="Setting_profile_icon" />
          <div className="Edit-Profile-Pic">
            <img src={Pencil_icon} alt="Pencil_icon" />
          </div>
        </div>

        <div className="Setting-Form-Container">
          {userDetails.map((el, i) => {
            return (
              <div key={i} className="Container1">
                <div className="YourName font-weight-400-16px">
                  {el.UserInfoType}
                </div>
                <div className="WriteYourName">
                  {/* {i === 4 ? (
                    <span className="icon-wrapper">
                      <img
                        className="arrow-icon"
                        src={ArrowDown1}
                        alt="arrow-icon"
                      />
                    </span>
                  ) : (
                    ""
                  )} */}

                  <input
                    className="InputName"
                    type={el.InputType}
                    placeholder={el.placeholder}
                    value={formData[el.key]}
                    onChange={(e) => handleChange(e, el.key)}
                    required
                    autoComplete="off"
                  />
                </div>
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
    </>
  );
};

export default EditProfile;
