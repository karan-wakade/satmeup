import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function GetTleRender({ data }) {
  if (data.tle == []) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellite info</h1>
            <h3>satellites data not reachable</h3>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellite info</h1>
            <h4>{data.tle}</h4>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GetTleRender;
