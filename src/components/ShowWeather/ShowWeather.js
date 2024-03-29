import React from "react";
import "./ShowWeather.css";

const ShowWeather = (props) => {
  return (
    <div className="container text-light">
      <div className="cards">
        <h1>{props.city}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`}></i>
        </h5>
        {props.temp_fahrenheit ? (
          <h1 className="py-2">{props.temp_fahrenheit}&deg;</h1>
        ) : null}

        {/*shows min and max temps*/}
        {minmaxTemp(props.temp_min, props.temp_max)}

        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}

export default ShowWeather;
