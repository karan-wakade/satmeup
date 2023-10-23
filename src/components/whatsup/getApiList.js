import { useEffect } from "react";
import React, { useState } from "react";
import FetchedApiList from "./fetchedApiList";

function GetApiList({ urlList }) {
  const [data, setData] = useState([]);
  //   const tempUrl = "https://api.n2yo.com/rest/v1/satellite/tle/25544&apiKey=4AKCEP-GHVUGN-88RC4Y-53E5";

  useEffect(() => {
    for (let i in urlList) {
      fetch(urlList[i])
        .then((response) => response.json())
        .then((obj) => {
          if (obj) {
            if (obj == data[0]) {
              return;
            }
            setData((data) => [...data, obj]);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [urlList]);

  return (
    <div>
      <FetchedApiList dataList={data} />
    </div>
  );
}

export default GetApiList;
