import { useEffect } from "react";
import React, { useState } from "react";
import FetchedData from "./fetchedData";

function GetApi({ url, type }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((obj) => {
        setData(obj);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <div>
      <FetchedData data={data} type={type} />
    </div>
  );
}

export default GetApi;
