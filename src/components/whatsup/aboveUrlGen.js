import { useEffect } from "react";
import React, { useState } from "react";
import apikey from "../apikey";
import categories from "../categories";
import GetApiList from "./getApiList";

function AboveUrlGen({ location, radius, alitutude, category, type }) {
  const [urlList, setUrlList] = useState([]);
  const apiKey = apikey();
  const latitude = location.latitude;
  const longitude = location.longitude;

  // https://api.n2yo.com/rest/v1/satellite/above/{observer_lat}/{observer_lng}/{observer_alt}/{search_radius}/{category_id}/&apiKey={apiKey}

  useEffect(() => {
    for (let i in categories) {
      setUrlList((urls) => [
        ...urls,
        "https://api.n2yo.com/rest/v1/satellite/above/" +
          latitude +
          "/" +
          longitude +
          "/" +
          alitutude +
          "/" +
          radius +
          "/" +
          categories[i].category +
          "/" +
          "&apiKey=" +
          apiKey,
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
