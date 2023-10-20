import { useEffect } from "react";
import React, { useState } from "react";
import GetApi from "../getApi";

function AboutSatUrlGen({ noradid, type }) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [url, setUrl] = useState("");

  // https://api.n2yo.com/rest/v1/satellite/tle/{noradid}&apiKey={apikey}

  useEffect(() => {
    setUrl(
      // "https://api.n2yo.com/rest/v1/satellite/tle/" +
      "/tle/" + noradid + "&apiKey=" + apiKey
    );
  }, []);

  return (
    <div>
      <GetApi url={url} type={type} />
    </div>
  );
}

export default AboutSatUrlGen;
