import { useEffect } from "react";
import React, { useState } from "react";
import GetApi from "../getApi";
import apikey from "../apikey";

function GetLocationUrlGen(props) {
  const [location, setLocation] = useState(props.location);
  const [url, setUrl] = useState("");
  const apiKey = apikey();

  useEffect(() => {
    setUrl(
      "https://api.n2yo.com/rest/v1/satellite/above/" +
        location.latitude +
        "/" +
        location.longitude +
        "/" +
        props.alitutude +
        "/" +
        props.radius +
        "/" +
        props.category +
        "/" +
        "&apiKey=" +
        apiKey
    );
  }, []);

  //   const tempUrl = "https://api.n2yo.com/rest/v1/satellite/tle/25544&apiKey=" + apiKey;
  return (
    <div>
      {url}
      <GetApi url={url} type={props.type} />
    </div>
  );
}

export default GetLocationUrlGen;
