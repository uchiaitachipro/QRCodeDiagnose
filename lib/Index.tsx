import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginFormBox from "./components/login/LoginForm";

ReactDOM.render(
  <Provider store={store}>
    <LoginFormBox />
  </Provider>,
  document.querySelectorAll(".app")[0]
);
