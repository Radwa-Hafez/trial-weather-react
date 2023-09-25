import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="temperature mb-5 mt-4">
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="Clear"
            />
            <div>
              <strong>28</strong>
              <span>
                <a href="/">°C </a> |<a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 41%</li>
            <li>Wind: 4 km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
