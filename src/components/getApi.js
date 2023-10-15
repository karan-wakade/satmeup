import { useEffect } from "react";
import React, { useState } from "react";
import FetchedData from "./fetchedData";
import Error from "./error";

function GetApi({ url, type }) {
  const [data, setData] = useState({});
  // const [status, setStatus] = useState(false);
  const tempUrl =
    "https://api.n2yo.com/rest/v1/satellite/tle/25544&apiKey=4AKCEP-GHVUGN-88RC4Y-53E5";

  let k;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((obj) => {
        // setStatus(!status);
        // k = obj;
        // console.log(obj);
        // setData(k);
        setData(obj);
      });
    // .catch((error) => console.log(error));
  }, [url]);

  // if (!status) {
  //   return (
  //     <div>
  //       <Error />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <FetchedData data={data} type={type} />
  //     </div>
  //   );
  // }

  // if (data) {
  //   return (
  //     <div>
  //       {console.log("data" + data)}
  //       <FetchedData data={data} type={type} />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>lol</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      {/* {console.log(data)} */}
      <FetchedData data={data} type={type} />
    </div>
  );
}

export default GetApi;
