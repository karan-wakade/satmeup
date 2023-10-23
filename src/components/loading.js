import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

function Loading({ msg }) {
  return (
    <div className="m-4">
      <h1>{msg}</h1>

      <div class="d-flex justify-content-center">
        <Container>
          <Row className="justify-content-md-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Loading;
