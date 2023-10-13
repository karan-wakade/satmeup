import { useEffect } from "react";
import React, { useState } from "react";
import GetApi from "../../getApi";
import apikey from "../apikey";

function SatCoordUrlGen(props) {
  const apiKey = apikey();
  const [url, setUrl] = useState("");

  useEffect(() => {
    // console.log(props.url);
    //api.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=589P8Q-SDRYX8-L842ZD-5Z9
    https: setUrl(
      "https://api.n2yo.com/rest/v1/satellite/positions/" +
        props.noradid +
        "/" +
        props.location.latitude +
        "/" +
        props.location.longitude +
        "/" +
        0 +
        "/" +
        props.seconds +
        "/" +
        "&apiKey=" +
        apiKey
    );
  }, []);

  return (
    <div>
      <GetApi url={url} type={props.type} />
    </div>
  );
}

export default SatCoordUrlGen;
