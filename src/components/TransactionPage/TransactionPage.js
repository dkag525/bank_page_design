import React from "react";
import "../../components/TransactionPage/TransactionPage.css";
import TransactionPageTopContainer from "../TransactionPage/TransactionPageTopContainer/TransactionPageTopContainer";
import TransactionPageMiddleContainer from "./TransactionPageMiddleContainer/TransactionPageMiddleContainer";

const TransactionPage = () => {
  return (
    <>
      <TransactionPageTopContainer />
      <TransactionPageMiddleContainer />
    </>
  );
};

export default TransactionPage;
