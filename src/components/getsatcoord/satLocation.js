import React, { useState } from "react";
import GetUserCoords from "../getUserCoords";
import satellites from "../satellites";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function SatLocation({ type }) {
  const [next, setNext] = useState(false);
  const [noradid, setNoradid] = useState(25544);
  const [seconds, setSeconds] = useState(50);

  const handleSelect = (event) => {
    setNoradid(event.target.value);
  };

  const handleChange = (event) => {
    setSeconds(event.target.value);
  };

  function reload() {
    window.location.reload(false);
  }

  if (!next) {
    return (
      <div className="m-4">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Get Satellite Location</h1>
            <h2></h2>
            <hr class="hr" />

            {/* time max = 300s */}
            <h3>Set Time(1-100s)</h3>
            <h3>{seconds}</h3>
            <Form.Range min="0" max="100" step="1" onChange={handleChange} />

            <h2></h2>
            <hr class="hr" />

            <h3>Select Satellite</h3>
            <Form.Select
              aria-label="Default select example"
              onChange={handleSelect}
            >
              {satellites.map((sat, index) => (
                <option key={index} value={sat.noradid}>
                  {sat.name}
                </option>
              ))}
            </Form.Select>

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
        <GetUserCoords noradid={noradid} seconds={seconds} type={type} />
      </div>
    );
  }
}

export default SatLocation;
