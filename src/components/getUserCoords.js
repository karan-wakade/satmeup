import { useEffect } from "react";
import React, { useState } from "react";
import GetLocationUrlGen from "./whatsup/getLocationUrlGen";
import GetPassesUrlGen from "./getpasses/getPassesUrlGen";
import SatCoordUrlGen from "./getsatcoord/satCoordUrlGen";
import GetApiList from "./whatsup/getApiList";
import AboveUrlGen from "./whatsup/aboveUrlGen";

function GetUserCoords(props) {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords);
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
        {/* <GetLocationUrlGen location={location} {...props} /> */}
        <AboveUrlGen location={location} {...props} />
      </div>
    );
  }
}

export default GetUserCoords;
