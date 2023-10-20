import { useEffect } from "react";
import React, { useState } from "react";
import GetApi from "../getApi";
import apikey from "../apikey";

function SatCoordUrlGen({ location, noradid, seconds, type }) {
  const apiKey = apikey();
  const [url, setUrl] = useState("");

  // https://api.n2yo.com/rest/v1/satellite/positions/{id}/{observer_lat}/{observer_lng}/{observer_alt}/{seconds}/&apiKey={apiKey}

  useEffect(() => {
    setUrl(
      // "https://api.n2yo.com/rest/v1/satellite/positions/" +
      "/positions/" +
        noradid +
        "/" +
        location.latitude +
        "/" +
        location.longitude +
        "/" +
        0 +
        "/" +
        seconds +
        "/" +
        "&apiKey=" +
        apiKey
    );
  }, []);

  return (
    <div>
      <GetApi url={url} type={type} />
    </div>
  );
}

export default SatCoordUrlGen;
