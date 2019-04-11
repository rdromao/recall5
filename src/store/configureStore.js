import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import r5RootReducer from "../reducers";

export default function configureStore(initialState) {
  const store = createStore(
    r5RootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );

  return store;
}
