import { useEffect } from "react";
import React, { useState } from "react";
import GetApi from "../getApi";
import apikey from "../apikey";

function SatInfoUrlGen(props) {
  const apiKey = apikey();
  const [url, setUrl] = useState("");

  useEffect(() => {
    // console.log(props.url);
    setUrl(
      "https://api.n2yo.com/rest/v1/satellite/tle/" +
        props.noradid +
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

export default SatInfoUrlGen;
