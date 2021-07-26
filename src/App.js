import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import MainRouter from "./MainRouter";
import setAxiosAuthToken from "./components/utils/setAxiosAuthToken";
import "./App.css";
const API_KEY = process.env.REACT_APP_WEATHER_API;

export class App extends Component {
  render() {
    return (
      <>
        <ToastContainer position="top-center" />
        <MainRouter />
      </>
    );
  }
}

export default App;
