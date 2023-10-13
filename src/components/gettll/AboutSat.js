import { useEffect } from "react";
import React, { useState } from "react";
import SatInfo from "./satInfoUrlGen";

function AboutSat() {
  const [next, setNext] = useState(false);
  // const [value, setValue] = useState("");
  const [noradid, setNoradid] = useState(25544);

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(result);
    setNoradid(parseInt(result));
  };

  if (!next) {
    return (
      <div>
        <h1>Get details of specific satellite</h1>
        <input
          type="text"
          placeholder="ENTER NORAD ID"
          value={value}
          onChange={handleChange}
        />
        <button onClick={() => setNext(!next)}>NEXT</button>
      </div>
    );
  } else {
    return (
      <div>
        <SatInfo noradid={noradid} />
      </div>
    );
  }
}

export default AboutSat;
