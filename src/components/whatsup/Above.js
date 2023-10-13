// import { useEffect } from "react";
import React, { useState } from "react";
import GetLocation from "./getLocationUrlGen";
import GetUserCoords from "../getUserCoords";

function Above() {
  const [next, setNext] = useState(false);
  const [radius, setRadius] = useState(25);
  const [alitutude, setAltitude] = useState(0);
  const [category, setCategory] = useState(10);

  //   useEffect(() => {}, [next]);

  //   function togggleClick() {
  //     setNext(!next);
  //   }

  if (!next) {
    return (
      <div>
        <h1>See what's above you</h1>
        <h2>set altitude</h2>
        <button onClick={() => setAltitude(alitutude - 1)}>-</button>
        <h3>{alitutude}</h3>
        <button onClick={() => setAltitude(alitutude + 1)}>+</button>
        <h2>set radius(0-90)</h2>
        <button onClick={() => setRadius(radius - 1)}>-</button>
        <h3>{radius}</h3>
        <button onClick={() => setRadius(radius + 1)}>+</button>
        <h2>set category</h2>
        <button onClick={() => setCategory(category - 1)}>-</button>
        <h3>{category}</h3>
        <button onClick={() => setCategory(category + 1)}>+</button>
        <h2>next</h2>
        <button onClick={() => setNext(!next)}>NEXT</button>
      </div>
    );
  } else {
    return (
      <div>
        {/* <GetApi url={url} /> */}
        {/* <GetLocationUrlGen
          radius={radius}
          alitutude={alitutude}
          category={category}
        /> */}
        <GetUserCoords
          radius={radius}
          alitutude={alitutude}
          category={category}
          type={4}
        />
      </div>
    );
  }
}

export default Above;
