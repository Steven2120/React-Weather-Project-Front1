import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup/SignUp";

const MainRouter = () => {
  return (
    <Router>
      <Route exact path="/sign-up" component={Signup} />
    </Router>
  );
};

export default MainRouter;
