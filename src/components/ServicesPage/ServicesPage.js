import React from "react";
import "../ServicesPage/ServicesPage.css";
import LifeIns_icon from "../../assets/svg/LifeIns_icon.svg";
import Shopping_icon from "../../assets/svg/Shopping_icon.svg";
import Safety_icon from "../../assets/svg/Safety_icon.svg";
import Business_loan_icon from "../../assets/svg/Business_icon.svg";
import CheckingAccount_icon from "../../assets/svg/CheckingAccount_icon.svg";
import Saving_accounts_icon from "../../assets/svg/Saving_accounts_icon.svg";
import DabitAndCredit_icon from "../../assets/svg/DabitAndCredit_icon.svg";
import LifeInsurance_icon from "../../assets/svg/LifeInsurance_icon.svg";

const ServicesPage = () => {
  const Services = [
    {
      img: LifeIns_icon,
      ServiceType: "Life Insurence",
      ServicesOption: "Unlimited protection",
    },
    {
      img: Shopping_icon,
      ServiceType: "Shopping",
      ServicesOption: "Buy. Think. Grow",
    },
    {
      img: Safety_icon,
      ServiceType: "Safety",
      ServicesOption: "we are your allies",
    },
  ];

  const BankServicesList = [
    {
      img: Business_loan_icon,
      ServicesType: "Business loans",
      ServicesOption: "it is long established",
      ServicesName1: "Lorem Ipsum",
      PublishStatus1: "Many Publishing",
      ServicesName2: "Lorem Ipsum",
      PublishStatus2: "Many Publishing",
      ServicesName3: "Lorem Ipsum",
      PublishStatus3: "Many Publishing",
    },
    {
      img: CheckingAccount_icon,
      ServicesType: "Business loans",
      ServicesOption: "it is long established",
      ServicesName1: "Lorem Ipsum",
      PublishStatus1: "Many Publishing",
      ServicesName2: "Lorem Ipsum",
      PublishStatus2: "Many Publishing",
      ServicesName3: "Lorem Ipsum",
      PublishStatus3: "Many Publishing",
    },
    {
      img: Saving_accounts_icon,
      ServicesType: "Business loans",
      ServicesOption: "it is long established",
      ServicesName1: "Lorem Ipsum",
      PublishStatus1: "Many Publishing",
      ServicesName2: "Lorem Ipsum",
      PublishStatus2: "Many Publishing",
      ServicesName3: "Lorem Ipsum",
      PublishStatus3: "Many Publishing",
    },
    {
      img: DabitAndCredit_icon,
      ServicesType: "Business loans",
      ServicesOption: "it is long established",
      ServicesName1: "Lorem Ipsum",
      PublishStatus1: "Many Publishing",
      ServicesName2: "Lorem Ipsum",
      PublishStatus2: "Many Publishing",
      ServicesName3: "Lorem Ipsum",
      PublishStatus3: "Many Publishing",
    },
    {
      img: LifeInsurance_icon,
      ServicesType: "Business loans",
      ServicesOption: "it is long established",
      ServicesName1: "Lorem Ipsum",
      PublishStatus1: "Many Publishing",
      ServicesName2: "Lorem Ipsum",
      PublishStatus2: "Many Publishing",
      ServicesName3: "Lorem Ipsum",
      PublishStatus3: "Many Publishing",
    },
    {
      img: Business_loan_icon,
      ServicesType: "Business loans",
      ServicesOption: "it is long established",
      ServicesName1: "Lorem Ipsum",
      PublishStatus1: "Many Publishing",
      ServicesName2: "Lorem Ipsum",
      PublishStatus2: "Many Publishing",
      ServicesName3: "Lorem Ipsum",
      PublishStatus3: "Many Publishing",
    },
  ];

  return (
    <>
      <div className="Services-Page-Top-Container Margin_Bottom_UnderHeadSec">
        {Services.map((el, i) => {
          return (
            <div key={i} className="ServicesType-Container">
              <img
                style={{ marginRight: "1.375rem" }}
                src={el.img}
                alt="Services_Icons"
              />
              <div className="ServicesName-Body">
                <p className="font-weight-600-20px">{el.ServiceType}</p>
                <p className="font-weight-400-16px">{el.ServicesOption}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Services-Page-Middle-Container">
        <div className="Services-Page-Container">
          <div className="font-weight-600-22px Margin_Bottom_UnderHeadSec">
            Bank Services List
          </div>

          {BankServicesList.map((el, i) => {
            const BackGroundColor = () => {
              let bgcolor;
              if (i === 0) {
                bgcolor = "#FFE0EB";
              } else if (i === 1) {
                bgcolor = "#FFF5D9";
              }
            };

            return (
              <div key={i} className="bank-services-list-container">
                <table className="Bank-Services-Table">
                  <tr>
                    <th className="Bank-Services-Table-Heading">
                      <div className="Bank-Services-Name-container">
                        <div
                          style={{
                            background: "pink",
                            marginRight: "1.375rem",
                            borderRadius: "1.25rem",
                            display: "flex",
                            alignItems: "center",
                            width: "3.75rem",
                            height: "3.75rem",
                            justifyContent: "center",
                          }}
                        >
                          <img src={el.img} alt="icon" />
                        </div>

                        <div className="BankServicesType-Body">
                          <p className="head-section-transaction-500-16px BlackColor">
                            {el.ServicesType}
                          </p>
                          <p className="font-weight-400-15px secondary-color">
                            {el.ServicesOption}
                          </p>
                        </div>
                      </div>
                    </th>
                    <th className="Bank-Services-Table-Heading">
                      <div className="BankServicesType-Body">
                        <p className="head-section-transaction-500-16px BlackColor">
                          {el.ServicesName1}
                        </p>
                        <p className="font-weight-400-15px secondary-color">
                          {el.PublishStatus1}
                        </p>
                      </div>
                    </th>
                    <th className="Bank-Services-Table-Heading">
                      <div className="BankServicesType-Body">
                        <p className="head-section-transaction-500-16px BlackColor">
                          {el.ServicesName2}
                        </p>
                        <p className="font-weight-400-15px secondary-color">
                          {el.PublishStatus2}
                        </p>
                      </div>
                    </th>
                    <th className="Bank-Services-Table-Heading">
                      <div className="BankServicesType-Body">
                        <p className="head-section-transaction-500-16px BlackColor">
                          {el.ServicesName3}
                        </p>
                        <p className="font-weight-400-15px secondary-color">
                          {el.PublishStatus3}
                        </p>
                      </div>
                    </th>
                    <th className="Bank-Services-Table-Heading">
                      <div className="Services-Btn font-weight-500-15px">
                        View Details
                      </div>
                    </th>
                  </tr>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
