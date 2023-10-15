import { useEffect } from "react";
import React, { useState } from "react";
import GetApi from "../getApi";
import apikey from "../apikey";

function GetPassesUrlGen({ location, noradid, days, minvisibility, type }) {
  const apiKey = apikey();
  const [url, setUrl] = useState("");

  // https://api.n2yo.com/rest/v1/satellite/visualpasses/{id}/{observer_lat}/{observer_lng}/{observer_alt}/{days}/{min_visibility}/&apiKey=589P8Q-SDRYX8-L842ZD-5Z9

  useEffect(() => {
    setUrl(
      "https://api.n2yo.com/rest/v1/satellite/visualpasses/" +
        noradid +
        "/" +
        location.latitude +
        "/" +
        location.longitude +
        "/" +
        0 +
        "/" +
        days +
        "/" +
        minvisibility +
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

export default GetPassesUrlGen;
