import React, { useState } from "react";
import GetUserCoords from "../getUserCoords";
import categories from "../categories";

function Above({ type }) {
  const [next, setNext] = useState(false);
  const [radius, setRadius] = useState(25);
  const [alitutude, setAltitude] = useState(0);
  const [category, setCategory] = useState(10);

  const handleSelect = (event) => {
    setCategory(event.target.value);
  };

  if (!next) {
    return (
      <div>
        <h1>See what's above you</h1>

        <h2>set altitude(0-1000)</h2>
        <button
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
        </button>

        <h2>set radius(1-90)</h2>
        <button
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
        </button>

        <h2>select category</h2>
        <select onChange={handleSelect}>
          {categories.map((cat, index) => (
            <option key={index} value={cat.category}>
              {cat.name}
            </option>
          ))}
        </select>

        <button onClick={() => setNext(!next)}>NEXT</button>
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
