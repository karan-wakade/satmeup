import React, { useState } from "react";
import AboutSatUrlGen from "./aboutSatUrlGen";
import satellites from "../satellites";

function AboutSat({ type }) {
  const [next, setNext] = useState(false);
  const [noradid, setNoradid] = useState();

  const handleSelect = (event) => {
    setNoradid(event.target.value);
  };

  if (!next) {
    return (
      <div>
        <h1>Get details of specific satellite</h1>
        <h2>select satellite</h2>
        <select onChange={handleSelect}>
          {satellites.map((sat, index) => (
            <option key={index} value={sat.noradid}>
              {sat.name}
            </option>
          ))}
        </select>
        <h4></h4>
        <button onClick={() => setNext(!next)}>NEXT</button>
      </div>
    );
  } else {
    return (
      <div>
        <AboutSatUrlGen noradid={noradid} type={type} />
      </div>
    );
  }
}

export default AboutSat;
