import { useEffect } from "react";
import React, { useState } from "react";
import GetApi from "../getApi";

function SatCoordUrlGen({ location, noradid, seconds, type }) {
  const [url, setUrl] = useState("");

  // https://api.n2yo.com/rest/v1/satellite/positions/{id}/{observer_lat}/{observer_lng}/{observer_alt}/{seconds}/&apiKey={apiKey}

  useEffect(() => {
    // setUrl(
    //   // "https://api.n2yo.com/rest/v1/satellite/positions/" +
    //   "/positions/" +
    //     noradid +
    //     "/" +
    //     location.latitude +
    //     "/" +
    //     location.longitude +
    //     "/" +
    //     0 +
    //     "/" +
    //     seconds +
    //     "/" +
    //     "&apiKey=" +
    //     apiKey
    // );

    setUrl(
      // "https://api.n2yo.com/rest/v1/satellite/positions/" +
      "https://satmeupbackend.onrender.com/api/coord?norad=" +
        noradid +
        "&latitude=" +
        location.latitude +
        "&longitude=" +
        location.longitude +
        "&altitude=" +
        0 +
        "&seconds=" +
        seconds
    );
  }, []);

  return (
    <div>
      <GetApi url={url} type={type} />
    </div>
  );
}

export default SatCoordUrlGen;
