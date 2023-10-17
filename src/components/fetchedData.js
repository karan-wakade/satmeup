import React, { useState } from "react";
import { useEffect } from "react";
import SatLocationRender from "./getsatcoord/satLocationRender";
import SatPassesRender from "./getpasses/getPassesRender";
import AbovePassesRender from "./whatsup/aboveRender";
import GetTleRender from "./gettle/getTleRender";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

function FetchedData({ data, type }) {
  // if (type == 1) {
  //   return (
  //     <div>
  //       <GetTleRender data={data} />
  //     </div>
  //   );
  // } else if (type == 2) {
  //   return (
  //     <div>
  //       <SatLocationRender data={data} />
  //     </div>
  //   );
  // } else if (type == 3) {
  //   return (
  //     <div>
  //       <SatPassesRender data={data} />
  //     </div>
  //   );
  // } else if (type == 4) {
  //   return (
  //     <div>
  //       <AbovePassesRender data={data} />
  //     </div>
  //   );
  // }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

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
