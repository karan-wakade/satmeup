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
  const [seconds, setSeconds] = useState(150);

  const handleSelect = (event) => {
    setNoradid(event.target.value);
  };

  const handleChange = (event) => {
    setSeconds(event.target.value);
  };

  if (!next) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Get satellite location</h1>
            {/* <h2>set time in seconds(1-300)</h2>
        <button
          onClick={() =>
            seconds > 1 ? setSeconds(seconds - 1) : setSeconds(seconds)
          }
        >
          -
        </button>
        <h3>{seconds}</h3>
        <button
          onClick={() =>
            seconds < 300 ? setSeconds(seconds + 1) : setSeconds(seconds)
          }
        >
          +
        </button> */}

            <h2>set time in seconds(1-300)</h2>
            <h3>{seconds}</h3>
            <Form.Range min="0" max="300" step="1" onChange={handleChange} />

            <h2>select satellite</h2>
            {/* <select onChange={handleSelect}>
          {satellites.map((sat, index) => (
            <option key={index} value={sat.noradid}>
              {sat.name}
            </option>
          ))}
        </select> */}

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

            <Button variant="outline-secondary" onClick={() => setNext(!next)}>
              NEXT
            </Button>
            {/* <button onClick={() => setNext(!next)}>NEXT</button> */}
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
