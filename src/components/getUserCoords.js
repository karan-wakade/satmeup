import { useEffect } from "react";
import React, { useState } from "react";
import GetPassesUrlGen from "./getpasses/getPassesUrlGen";
import SatCoordUrlGen from "./getsatcoord/satCoordUrlGen";
import AboveUrlGen from "./whatsup/aboveUrlGen";
import Loading from "./loading";

function GetUserCoords(props) {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords);
    });
  }, []);

  if (location == {}) {
    return (
      <div>
        <Loading msg={"Allow browser to use your location"} />
      </div>
    );
  } else {
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
          <AboveUrlGen location={location} {...props} />
        </div>
      );
    }
  }
}

export default GetUserCoords;
