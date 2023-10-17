import React, { useState } from "react";
import AboutSatUrlGen from "./aboutSatUrlGen";
import satellites from "../satellites";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function AboutSat({ type }) {
  const [next, setNext] = useState(false);
  const [noradid, setNoradid] = useState();

  const handleSelect = (event) => {
    setNoradid(event.target.value);
  };

  if (!next) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Get details of specific satellite</h1>
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

            <h4></h4>
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
        <AboutSatUrlGen noradid={noradid} type={type} />
      </div>
    );
  }
}

export default AboutSat;
