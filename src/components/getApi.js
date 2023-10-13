import { useEffect } from "react";
import React, { useState } from "react";
import FetchedData from "./fetchedData";

function GetApi({ url, type }) {
  const [data, setData] = useState({});

  useEffect(() => {
    // console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((obj) => {
        console.log("url: " + url);
        setData(obj);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {/* {console.log(data)} */}
      <FetchedData data={data} type={type} />
    </div>
  );
}

export default GetApi;
