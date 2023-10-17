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

  if (!next) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>See what's above you</h1>

            <h2>set altitude(0-1000)</h2>
            {/* <button
          onClick={() =>
            alitutude > 0 ? setAltitude(alitutude - 1) : setAltitude(alitutude)
          }
        >
          -
        </button>
        <h3>{alitutude}</h3>
        <button
          onClick={() =>
            alitutude < 1000
              ? setAltitude(alitutude + 1)
              : setAltitude(alitutude)
          }
        >
          +
        </button> */}

            <h3>{alitutude}</h3>
            <Form.Range min="0" max="1000" step="1" onChange={handleAlt} />

            <h2>set radius(1-90)</h2>
            {/* <button
          onClick={() =>
            radius > 1 ? setRadius(radius - 1) : setRadius(radius)
          }
        >
          -
        </button>
        <h3>{radius}</h3>
        <button
          onClick={() =>
            radius < 90 ? setRadius(radius + 1) : setRadius(radius)
          }
        >
          +
        </button> */}

            <h3>{radius}</h3>
            <Form.Range min="0" max="1000" step="1" onChange={handleRad} />

            <h2>select category</h2>
            {/* <select onChange={handleSelect}>
          {categories.map((cat, index) => (
            <option key={index} value={cat.category}>
              {cat.name}
            </option>
          ))}
        </select> */}

            <Form.Select
              aria-label="Default select example"
              onChange={handleSelect}
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat.category}>
                  {cat.name}
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
