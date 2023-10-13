import { useEffect } from "react";
import React, { useState } from "react";
import SatInfo from "./satInfoUrlGen";

function GetPasses() {
  const [next, setNext] = useState(false);
  //   const [value, setValue] = useState("");
  const [noradid, setNoradid] = useState(25544);
  const [days, setDays] = useState(5); // 0-10
  const [minvisibility, setMinvisibility] = useState(200);

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

        <h2>set number of days(0-10)</h2>
        <button onClick={() => setDays(days - 1)}>-</button>
        <h3>{days}</h3>
        <button onClick={() => setDays(days + 1)}>+</button>

        <h2>
          Minimum number of seconds the satellite should be considered optically
          visible during the pass
        </h2>
        <button onClick={() => setMinvisibility(minvisibility - 1)}>-</button>
        <h3>{minvisibility}</h3>
        <button onClick={() => setMinvisibility(minvisibility + 1)}>+</button>

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
          type={3}
        />
      </div>
    );
  }
}

export default GetPasses;
