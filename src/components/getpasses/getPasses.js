import React, { useState } from "react";
import GetUserCoords from "../getUserCoords";
import satellites from "../satellites";

function GetPasses({ type }) {
  const [next, setNext] = useState(false);
  const [noradid, setNoradid] = useState(25544);
  const [days, setDays] = useState(5); // 0-10
  const [minvisibility, setMinvisibility] = useState(200);

  const handleSelect = (event) => {
    setNoradid(event.target.value);
  };

  if (!next) {
    return (
      <div>
        <h1>Get satellite location</h1>

        <h2>set number of days(1-10)</h2>
        <button onClick={() => (days > 1 ? setDays(days - 1) : setDays(days))}>
          -
        </button>
        <h3>{days}</h3>
        <button onClick={() => (days < 10 ? setDays(days + 1) : setDays(days))}>
          +
        </button>

        <h2>
          Minimum number of seconds the satellite should be considered optically
          visible during the pass(1-300)
        </h2>
        <button
          onClick={() =>
            minvisibility > 1
              ? setMinvisibility(minvisibility - 1)
              : setMinvisibility(minvisibility)
          }
        >
          -
        </button>
        <h3>{minvisibility}</h3>
        <button
          onClick={() =>
            minvisibility < 300
              ? setMinvisibility(minvisibility + 1)
              : setMinvisibility(minvisibility)
          }
        >
          +
        </button>

        <h2>select satellite</h2>
        <select onChange={handleSelect}>
          {satellites.map((sat, index) => (
            <option key={index} value={sat.noradid}>
              {sat.name}
            </option>
          ))}
        </select>

        <button onClick={() => setNext(!next)}>NEXT</button>
      </div>
    );
  } else {
    return (
      <div>
        <GetUserCoords
          noradid={noradid}
          days={days}
          minvisibility={minvisibility}
          type={type}
        />
      </div>
    );
  }
}

export default GetPasses;
