import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import LoginForm from "../components/login/LoginForm";
import HomePage from '../components/home/index'
const history = createBrowserHistory()
history.push("/")
const Root = () => (
  <Router history={history}>
    <Route exact path="/" component={LoginForm} />
    <Route path='/login' component={LoginForm}/>
    <Route path="/home" component={HomePage}/>
  </Router>
);


export default Root;