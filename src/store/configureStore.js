import { createStore } from "redux";
import r5RootReducer from "../reducers";

export default function configureStore(initialState) {
  const store = createStore(r5RootReducer, initialState);

  return store;
}
