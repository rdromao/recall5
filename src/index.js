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
    <div className="App">
      <h1>recall5 app</h1>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
