import React, { useState } from "react";
import GetUserCoords from "../getUserCoords";
import categories from "../categories";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Above({ type }) {
  const [next, setNext] = useState(false);
  const [radius, setRadius] = useState(25);
  const [alitutude, setAltitude] = useState(0);
  const [category, setCategory] = useState(10);

  const handleSelect = (event) => {
    setCategory(event.target.value);
  };

  const handleAlt = (event) => {
    setAltitude(event.target.value);
  };

  const handleRad = (event) => {
    setRadius(event.target.value);
  };

  function reload() {
    window.location.reload(false);
  }

  if (!next) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>See what's above you</h1>
            <h2></h2>
            <hr class="hr" />

            <h3>Set Altitude(0-1000m)</h3>
            <h3>{alitutude}</h3>
            <Form.Range min="0" max="1000" step="1" onChange={handleAlt} />

            <h2></h2>
            <hr class="hr" />

            <h3>Set Radius(1-90km)</h3>
            <h3>{radius}</h3>
            <Form.Range min="0" max="1000" step="1" onChange={handleRad} />

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
        <GetUserCoords
          radius={radius}
          alitutude={alitutude}
          category={category}
          type={type}
        />
      </div>
    );
  }
}

export default Above;
