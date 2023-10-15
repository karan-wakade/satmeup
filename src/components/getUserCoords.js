import { useEffect } from "react";
import React, { useState } from "react";
import GetLocationUrlGen from "./whatsup/getLocationUrlGen";
import GetPassesUrlGen from "./getpasses/getPassesUrlGen";
import SatCoordUrlGen from "./getsatcoord/satCoordUrlGen";

function GetUserCoords(props) {
  const [location, setLocation] = useState({});

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
