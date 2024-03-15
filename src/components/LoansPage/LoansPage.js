import "../LoansPage/LoansPage.css";
import Personal_loan_icon from "../../assets/svg/Personal_loan_icon.svg";
import Corporate_loan_icon from "../../assets/svg/Corporate_loan_icon.svg";
import Business_loan_icon from "../../assets/svg/Business_loan_icon.svg";
import Custom_loan_icon from "../../assets/svg/Custom_loan_icon.svg";

const LoansPage = () => {
  const Loans = [
    {
      img: Personal_loan_icon,
      LoansName: "Personal Loans",
      LoansAmount: "$50,000",
    },
    {
      img: Corporate_loan_icon,
      LoansName: "Corporate Loans",
      LoansAmount: "$100,000",
    },
    {
      img: Business_loan_icon,
      LoansName: "Business Loans",
      LoansAmount: "$500,000",
    },
    {
      img: Custom_loan_icon,
      LoansName: "Custom Loans",
      LoansAmount: "Choose Money",
    },
  ];

  const LoansData = [
    {
      SLNO: "01",
      LoanMoney: "$100,000",
      Lefttorepay: "$40,500",
      Duration: "8 Months",
      InterestRate: "12%",
      Installment: "$2,000 / month",
    },
    {
      SLNO: "02",
      LoanMoney: "$500,000",
      Lefttorepay: "$250,000",
      Duration: "36 Months",
      InterestRate: "10%",
      Installment: "$8,000 / month",
    },
    {
      SLNO: "03",
      LoanMoney: "$900,000",
      Lefttorepay: "$40,500",
      Duration: "12 Months",
      InterestRate: "12%",
      Installment: "$5,000 / month",
    },
    {
      SLNO: "04",
      LoanMoney: "$50,000",
      Lefttorepay: "$40,500",
      Duration: "25 Months",
      InterestRate: "5%",
      Installment: "$2,000 / month",
    },
    {
      SLNO: "05",
      LoanMoney: "$50,000",
      Lefttorepay: "$40,500",
      Duration: "5 Months",
      InterestRate: "16%",
      Installment: "$10,000 / month",
    },
    {
      SLNO: "06",
      LoanMoney: "$80,000",
      Lefttorepay: "$25,500",
      Duration: "14 Months",
      InterestRate: "8%",
      Installment: "$2,000 / month",
    },
    {
      SLNO: "07",
      LoanMoney: "$12,000",
      Lefttorepay: "$5,500",
      Duration: "9 Months",
      InterestRate: "13%",
      Installment: "$500 / month",
    },
    {
      SLNO: "08",
      LoanMoney: "$160,000",
      Lefttorepay: "$100,800",
      Duration: "3 Months",
      InterestRate: "12%",
      Installment: "$900 / month",
    },
  ];

  let TotalLoanMoney = 0;
  let TotalLefttorepay = 0;
  let TotalInstallment = 0;

  LoansData.forEach((el) => {
    TotalLoanMoney =
      TotalLoanMoney +
      parseFloat(el.LoanMoney.replace("$", "").replace(",", ""));
    TotalLefttorepay =
      TotalLefttorepay +
      parseFloat(el.Lefttorepay.replace("$", "").replace(",", ""));
    TotalInstallment =
      TotalInstallment +
      parseFloat(
        el.Installment.replace("$", "")
          .replace(",", "")
          .replace("/", "")
          .replace("month", "")
      );
  });

  return (
    <>
      <div className="Loans-body-top-container Margin_Bottom_UnderHeadSec">
        {Loans.map((el, i) => {
          return (
            <div key={i} className="TypeOfLoan-body">
              <img className="Loan_Icon" src={el.img} alt="Loan_Icon" />
              <div>
                <p className="font-weight-400-16px secondary-color LineHeight">
                  {el.LoansName}
                </p>
                <p className="font-weight-600-20px">{el.LoansAmount}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Loans-body-middle-container">
        <div className="Active_Loans_Overview">
          <div className="font-weight-600-22px Margin_Bottom_UnderHeadSec">
            Active Loans Overview
          </div>
          <div className="Active_Loans_body">
            <table className="Loans-Table">
              <tr>
                <th className="Loans-Table-Head">SL No</th>
                <th className="Loans-Table-Head">Loan Money</th>
                <th className="Loans-Table-Head">Left to repay</th>
                <th className="Loans-Table-Head">Duration</th>
                <th className="Loans-Table-Head">Interest Rate</th>
                <th className="Loans-Table-Head">Installment</th>
                <th className="Loans-Table-Head">Repay</th>
              </tr>
              <div className="TableGap"></div>

              {LoansData.map((el, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td className="Loans-Table-Data">{el.SLNO}</td>
                      <td className="Loans-Table-Data">{el.LoanMoney}</td>
                      <td className="Loans-Table-Data">{el.Lefttorepay}</td>
                      <td className="Loans-Table-Data">{el.Duration}</td>
                      <td className="Loans-Table-Data">{el.InterestRate}</td>
                      <td className="Loans-Table-Data">{el.Installment}</td>
                      <td className="Loans-Table-Data">
                        <div className="LoansButton font-weight-500-15px">
                          Repay
                        </div>
                      </td>
                    </tr>
                    <div className="TableGap"></div>
                  </>
                );
              })}

              <tr>
                <td className="LoansTotalData">Total</td>
                <td className="LoansTotalData">
                  ${TotalLoanMoney.toLocaleString()}
                </td>
                <td className="LoansTotalData">
                  ${TotalLefttorepay.toLocaleString()}
                </td>
                <td className="LoansTotalData"></td>
                <td className="LoansTotalData"></td>
                <td className="LoansTotalData">
                  ${TotalInstallment.toLocaleString()}/ month
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoansPage;
