import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";

import "./css/styles.css";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Content />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
