import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {" "}
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
