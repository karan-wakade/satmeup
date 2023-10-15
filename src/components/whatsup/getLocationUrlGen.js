import { useEffect } from "react";
import React, { useState } from "react";
import GetApi from "../getApi";
import apikey from "../apikey";

function GetLocationUrlGen({ location, radius, alitutude, category, type }) {
  const [url, setUrl] = useState("");
  const apiKey = apikey();

  // https://api.n2yo.com/rest/v1/satellite/above/{observer_lat}/{observer_lng}/{observer_alt}/{search_radius}/{category_id}/&apiKey={apiKey}

  useEffect(() => {
    setUrl(
      "https://api.n2yo.com/rest/v1/satellite/above/" +
        location.latitude +
        "/" +
        location.longitude +
        "/" +
        alitutude +
        "/" +
        radius +
        "/" +
        category +
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

export default GetLocationUrlGen;
