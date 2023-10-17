import React, { useState } from "react";
import GetUserCoords from "../getUserCoords";
import satellites from "../satellites";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function GetPasses({ type }) {
  const [next, setNext] = useState(false);
  const [noradid, setNoradid] = useState(25544);
  const [days, setDays] = useState(5); // 0-10
  const [minvisibility, setMinvisibility] = useState(200);

  const handleSelect = (event) => {
    setNoradid(event.target.value);
  };

  const handleDays = (event) => {
    setDays(event.target.value);
  };

  const handleVis = (event) => {
    setMinvisibility(event.target.value);
  };

  if (!next) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Get satellite location</h1>

            <h2>set number of days(1-10)</h2>
            {/* <button onClick={() => (days > 1 ? setDays(days - 1) : setDays(days))}>
          -
        </button>
        <h3>{days}</h3>
        <button onClick={() => (days < 10 ? setDays(days + 1) : setDays(days))}>
          +
        </button> */}

            <h3>{days}</h3>
            <Form.Range min="0" max="10" step="1" onChange={handleDays} />

            <h2>
              Minimum number of seconds the satellite should be considered
              optically visible during the pass(1-300)
            </h2>
            {/* <button
          onClick={() =>
            minvisibility > 1
              ? setMinvisibility(minvisibility - 1)
              : setMinvisibility(minvisibility)
          }
        >
          -
        </button>
        <h3>{minvisibility}</h3>
        <button
          onClick={() =>
            minvisibility < 300
              ? setMinvisibility(minvisibility + 1)
              : setMinvisibility(minvisibility)
          }
        >
          +
        </button> */}

            <h3>{minvisibility}</h3>
            <Form.Range min="0" max="300" step="1" onChange={handleVis} />

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
        <GetUserCoords
          noradid={noradid}
          days={days}
          minvisibility={minvisibility}
          type={type}
        />
      </div>
    );
  }
}

export default GetPasses;
