import { useEffect } from "react";
import React, { useState } from "react";
import GetApi from "../getApi";

function GetPassesUrlGen({ location, noradid, days, minvisibility, type }) {
  const [url, setUrl] = useState("");

  // https://api.n2yo.com/rest/v1/satellite/visualpasses/{id}/{observer_lat}/{observer_lng}/{observer_alt}/{days}/{min_visibility}/&apiKey=589P8Q-SDRYX8-L842ZD-5Z9

  useEffect(() => {
    // setUrl(
    //   // "https://api.n2yo.com/rest/v1/satellite/visualpasses/" +
    //   "/visualpasses/" +
    //     noradid +
    //     "/" +
    //     location.latitude +
    //     "/" +
    //     location.longitude +
    //     "/" +
    //     0 +
    //     "/" +
    //     days +
    //     "/" +
    //     minvisibility +
    //     "/" +
    //     "&apiKey=" +
    //     apiKey
    // );

    setUrl(
      // "https://api.n2yo.com/rest/v1/satellite/visualpasses/" +
      "https://satmeupbackend.onrender.com/api/passes?norad=" +
        noradid +
        "&latitude=" +
        location.latitude +
        "&longitude=" +
        location.longitude +
        "&altitude=" +
        0 +
        "&days=" +
        days +
        "&minvisibility=" +
        minvisibility
    );
  }, []);

  return (
    <div>
      <GetApi url={url} type={type} />
    </div>
  );
}

export default GetPassesUrlGen;
