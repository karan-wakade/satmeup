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
  const [days, setDays] = useState(5);
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

  function reload() {
    window.location.reload(false);
  }

  if (!next) {
    return (
      <div className="m-4">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Get satellite location</h1>
            <hr class="hr" />
            <h3>Days to Track(1-10)</h3>

            <h3>{days}</h3>
            <Form.Range min="0" max="10" step="1" onChange={handleDays} />

            <h2></h2>
            <hr class="hr" />

            <h3>Minimum Visibility(1-300s)</h3>
            <h7>
              Minimum time the satellite should be considered optically visible
              during the pass
            </h7>

            <h3>{minvisibility}</h3>
            <Form.Range min="0" max="300" step="1" onChange={handleVis} />

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
