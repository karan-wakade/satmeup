import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function GetTleRender({ data }) {
  function reload() {
    window.location.reload(false);
  }

  if (data) {
    return (
      <div className="m-4">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellite info</h1>
            <h2></h2>
            <hr class="hr" />
            <h4>{data.tle}</h4>

            <h4></h4>
            <Button variant="secondary" onClick={reload}>
              RESET
            </Button>
            <h2></h2>
            <hr class="hr" />
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="m-4">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellite info</h1>
            <h3>satellites data not reachable</h3>
            <h2></h2>
            <hr class="hr" />
            <Button variant="secondary" onClick={reload}>
              RESET
            </Button>
            <h2></h2>
            <hr class="hr" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default GetTleRender;
