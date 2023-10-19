import React, { useState } from "react";
import { useEffect } from "react";
// import SatLocationRender from "./getsatcoord/satLocationRender";
// import SatPassesRender from "./getpasses/getPassesRender";
// import AbovePassesRender from "./whatsup/aboveRender";
import AbovePassesRender from "./aboveRender";
// import GetTleRender from "./gettle/getTleRender";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

function FetchedApiList({ dataList }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    // console.log(dataList);
  }, [dataList]);

  if (isLoading) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <AbovePassesRender dataList={dataList} />
      </div>
    );
  }
}

export default FetchedApiList;
