import React, { useState } from "react";
import GetUserCoords from "../getUserCoords";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Above({ type }) {
  const [next, setNext] = useState(false);
  const [radius, setRadius] = useState(20);
  const [alitutude, setAltitude] = useState(0);

  // const handleAlt = (event) => {
  //   setAltitude(event.target.value);
  // };

  const handleRad = (event) => {
    setRadius(event.target.value);
  };

  function reload() {
    window.location.reload(false);
  }

  if (!next) {
    return (
      <div className="m-4">
        <Container>
          <Row className="justify-content-md-center">
            <h1>See what's above you</h1>
            <h2></h2>
            <hr class="hr" />
            {/* 
            <h3>Set Altitude(0-1000m)</h3>
            <h3>{alitutude}</h3>
            <Form.Range min="0" max="1000" step="1" onChange={handleAlt} />

            <h2></h2>
            <hr class="hr" /> */}

            {/* radius max = 90 */}
            <h3>Set Radius(1-30km)</h3>
            <h3>{radius}</h3>
            <Form.Range min="0" max="30" step="1" onChange={handleRad} />
            <h4></h4>
            <Button variant="light" onClick={() => setNext(!next)}>
              NEXT
            </Button>
            <h4></h4>
            <Button variant="secondary" onClick={reload}>
              RESET
            </Button>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <GetUserCoords radius={radius} alitutude={alitutude} type={type} />
      </div>
    );
  }
}

export default Above;
