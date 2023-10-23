import { useEffect } from "react";
import React, { useState } from "react";
import categories from "../categories";
import GetApiList from "./getApiList";

function AboveUrlGen({ location, radius, alitutude }) {
  const [urlList, setUrlList] = useState([]);
  const latitude = location.latitude;
  const longitude = location.longitude;

  // https://api.n2yo.com/rest/v1/satellite/above/{observer_lat}/{observer_lng}/{observer_alt}/{search_radius}/{category_id}/&apiKey={apiKey}

  useEffect(() => {
    for (let i in categories) {
      // setUrlList((urls) => [
      //   ...urls,
      //   // "https://api.n2yo.com/rest/v1/satellite/above/" +
      //   "/above/" +
      //     latitude +
      //     "/" +
      //     longitude +
      //     "/" +
      //     alitutude +
      //     "/" +
      //     radius +
      //     "/" +
      //     categories[i].category +
      //     "/" +
      //     "&apiKey=" +
      //     apiKey,
      // ]);

      setUrlList((urls) => [
        ...urls,
        // "https://api.n2yo.com/rest/v1/satellite/above/" +
        "https://satmeupbackend.onrender.com/api/above?latitude=" +
          latitude +
          "&longitude=" +
          longitude +
          "&altitude=" +
          alitutude +
          "&radius=" +
          radius +
          "&category=" +
          categories[i].category,
      ]);
    }
  }, []);

  return (
    <div>
      <GetApiList urlList={urlList} />
    </div>
  );
}

export default AboveUrlGen;
