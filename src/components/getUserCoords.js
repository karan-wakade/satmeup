import { useEffect } from "react";
import React, { useState } from "react";
// import GetApi from "./getApi";
// import apikey from "./apikey";
import GetLocationUrlGen from "./whatsup/getLocationUrlGen";
import GetPassesUrlGen from "./getpasses/getPassesUrlGen";
import SatCoordUrlGen from "./getsatcoord/satCoordUrlGen";

function GetUserCoords(props) {
  // const [url, setUrl] = useState("");
  // const apiKey = apikey();
  const [location, setLocation] = useState({});
  // const [type, setType] = useState(props.type);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords);
      console.log("navigator called");
    });
  }, []);

  if (props.type == 2) {
    return (
      <div>
        <SatCoordUrlGen location={location} {...props} />
      </div>
    );
  } else if (props.type == 3) {
    return (
      <div>
        <GetPassesUrlGen location={location} {...props} />
      </div>
    );
  } else if (props.type == 4) {
    return (
      <div>
        <GetLocationUrlGen location={location} {...props} />
      </div>
    );
  }
}

export default GetUserCoords;
