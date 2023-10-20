import React, { useState } from "react";
import "./App.css";
import Above from "./components/whatsup/Above";
import AboutSat from "./components/gettle/AboutSat";
import SatLocation from "./components/getsatcoord/satLocation";
import GetPasses from "./components/getpasses/getPasses";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function App() {
  const [type, setType] = useState(0);

  if (type == 0) {
    return (
      <div className="m-4">
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="light" onClick={() => setType(4)}>
            Satellites above you
          </Button>
          <Button variant="secondary" onClick={() => setType(3)}>
            Satellite Passes
          </Button>
          <Button variant="secondary" onClick={() => setType(2)}>
            Satellite Coordinates
          </Button>
          <Button variant="secondary" onClick={() => setType(1)}>
            Get satellite TLE
          </Button>
        </Stack>
      </div>
    );
  } else {
    if (type == 1) {
      return (
        <div className="App">
          <AboutSat type={type} />
        </div>
      );
    } else if (type == 2) {
      return (
        <div className="App">
          <SatLocation type={type} />
        </div>
      );
    } else if (type == 3) {
      return (
        <div className="App">
          <GetPasses type={type} />
        </div>
      );
    } else if (type == 4) {
      return (
        <div className="App">
          <Above type={type} />
        </div>
      );
    }
  }
}

export default App;
