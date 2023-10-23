import React, { useState } from "react";
import { useEffect } from "react";
import AboveRender from "./aboveRender";
import Loading from "../loading";

function FetchedApiList({ dataList }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, [dataList]);

  if (isLoading) {
    return <Loading msg={"Fetching Data"} />;
  } else {
    return (
      <div>
        <AboveRender dataList={dataList} />
      </div>
    );
  }
}

export default FetchedApiList;
