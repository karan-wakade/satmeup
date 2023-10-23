import React, { useState } from "react";
import { useEffect } from "react";
import SatLocationRender from "./getsatcoord/satLocationRender";
import SatPassesRender from "./getpasses/satPassesRender";
import AbovePassesRender from "./whatsup/aboveRender";
import GetTleRender from "./gettle/getTleRender";
import Loading from "./loading";

function FetchedData({ data, type }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading msg={"Fetching Data"} />;
  } else {
    if (type == 1) {
      return (
        <div>
          <GetTleRender data={data} />
        </div>
      );
    } else if (type == 2) {
      return (
        <div>
          <SatLocationRender data={data} />
        </div>
      );
    } else if (type == 3) {
      return (
        <div>
          <SatPassesRender data={data} />
        </div>
      );
    } else if (type == 4) {
      return (
        <div>
          <AbovePassesRender data={data} />
        </div>
      );
    }
  }
}

export default FetchedData;
