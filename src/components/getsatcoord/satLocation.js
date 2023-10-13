import { useEffect } from "react";
import React, { useState } from "react";
import SatInfo from "./satInfoUrlGen";

function SatLocation() {
  const [next, setNext] = useState(false);
  //   const [value, setValue] = useState("");
  const [noradid, setNoradid] = useState(25544);
  const [seconds, setSeconds] = useState(150); // 0-300

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    // setValue(result);
    setNoradid(parseInt(result));
  };

  if (!next) {
    return (
      <div>
        <h1>Get satellite location</h1>
        <input
          type="text"
          placeholder="ENTER NORAD ID"
          value={value}
          onChange={handleChange}
        />
        <h2>set time in seconds(0-300)</h2>
        <button onClick={() => setSeconds(seconds - 1)}>-</button>
        <h3>{seconds}</h3>
        <button onClick={() => setSeconds(seconds + 1)}>+</button>
        <button onClick={() => setNext(!next)}>NEXT</button>
      </div>
    );
  } else {
    return (
      <div>
        <GetUserCoords noradid={noradid} seconds={seconds} type={2} />
      </div>
    );
  }
}

export default SatLocation;
