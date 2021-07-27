import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup/SignUp";
import Login from "./components/Login/Login";

const MainRouter = (props) => {
  return (
    <Router>
      <Route exact path="/sign-up" component={Signup} />
      <Route
        exact
        path="/login"
        render={(routerProps) => (
          <Login {...routerProps} handleUserLogin={props.handleUserLogin} />
        )}
      />
    </Router>
  );
};

export default MainRouter;
