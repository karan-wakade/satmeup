import { useEffect } from "react";
import React, { useState } from "react";
import FetchedData from "./fetchedData";

function GetApi({ url, type }) {
  const [data, setData] = useState({});
  const tempUrl =
    "https://api.n2yo.com/rest/v1/satellite/tle/25544&apiKey=4AKCEP-GHVUGN-88RC4Y-53E5";

  let k;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((obj) => {
        setData(obj);
      });
    // .catch((error) => console.log(error));
  }, [url]);

  return (
    <div>
      <FetchedData data={data} type={type} />
    </div>
  );
}

export default GetApi;
