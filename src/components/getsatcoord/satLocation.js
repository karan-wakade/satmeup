import React, { useState } from "react";
import GetUserCoords from "../getUserCoords";
import satellites from "../satellites";

function SatLocation({ type }) {
  const [next, setNext] = useState(false);
  // const [value, setValue] = useState("");
  const [noradid, setNoradid] = useState(25544);
  const [seconds, setSeconds] = useState(150); // 0-300

  // const handleChange = (event) => {
  //   const result = event.target.value.replace(/\D/g, "");
  //   setValue(result);
  //   setNoradid(parseInt(result));
  // };

  const handleSelect = (event) => {
    setNoradid(event.target.value);
  };

  if (!next) {
    return (
      <div>
        <h1>Get satellite location</h1>
        {/* <input
          type="text"
          placeholder="ENTER NORAD ID"
          value={value}
          onChange={handleChange}
        /> */}
        <h2>set time in seconds(1-300)</h2>
        <button
          onClick={() =>
            seconds > 1 ? setSeconds(seconds - 1) : setSeconds(seconds)
          }
        >
          -
        </button>
        <h3>{seconds}</h3>
        <button
          onClick={() =>
            seconds < 300 ? setSeconds(seconds + 1) : setSeconds(seconds)
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
        <GetUserCoords noradid={noradid} seconds={seconds} type={type} />
      </div>
    );
  }
}

export default SatLocation;
