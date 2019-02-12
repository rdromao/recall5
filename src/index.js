import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/navbar";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";

import "./css/styles.css";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
