import React, { useState } from "react";
import "./App.css";

function Temperatureconvertor() {
  const [temp, setTemp] = useState("");
  const [Ftemp, setFtemp] = useState("");

  const convert = () => {
    setFtemp((temp * 9) / 5 + 32);
  };
  
  return (
    <>
      <div className="container">
        <h1>Celsius to Fahrenheit</h1>
        <div className="inputField">
          <input
            type="number"
            className="input"
            onChange={(e) => {
              setTemp(e.target.value);
            }}
          />
          <label htmlFor="input">Degree Celsius</label>
        </div>

        <div className="inputField">
          <span className="output">{Ftemp} </span>
          <label htmlFor="input">Fahrenheit</label>
        </div>

        <button className="convert" onClick={convert}>Convert</button>
      </div>
        <footer>Design & Developed by Karan</footer>
    </>
  );
}

export default Temperatureconvertor;
