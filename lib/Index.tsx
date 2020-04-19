import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Root from './routers/index'
ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.querySelectorAll(".app")[0]
);
