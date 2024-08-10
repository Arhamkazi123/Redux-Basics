import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index.js";
import { bindActionCreators } from "redux";

const Randomcomp = () => {
  const dispatch = useDispatch();
  const { withdrawmoney, depositmoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="mt-5 mx-5">
      <h1>Withdraw/Deposit</h1>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositmoney(100);
        }}
      >
        +
      </button>
      Update Balance
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          withdrawmoney(100);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Randomcomp;
