import { combineReducers } from "redux";
import navbar from "./navbar";
import reminders from "./reminders";

const recall5RootReducer = combineReducers({
  navbar,
  reminders
});

export default recall5RootReducer;
