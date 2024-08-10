import { combineReducers } from "redux";
import amountreducer from "./amountReducer.js";

const reducers = combineReducers({
  amount: amountreducer,
});

export default reducers;
