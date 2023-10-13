// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Above from "./components/whatsup/Above";
import AboutSat from "./components/gettll/AboutSat";
import SatLocation from "./components/getsatcoord/satLocation";
import GetPasses from "./components/getpasses/getPasses";

// function App() {
//   return (
//     <div className="App">
//       {/* <FuncComp /> */}
//       {/* <Above /> */}
//     </div>
//   );
// }

function App() {
  // const [clicked, setClicked] = useState(false);
  const [type, setType] = useState(0);

  if (type == 0) {
    return (
      <div className="App">
        <button onClick={() => setType(1)}>Get TLL</button>
        <button onClick={() => setType(2)}>Get satellite coordinates</button>
        <button onClick={() => setType(3)}>Get satellite passes</button>
        <button onClick={() => setType(4)}>See what's up</button>
      </div>
    );
  } else {
    if (type == 1) {
      return (
        <div className="App">
          <AboutSat />
        </div>
      );
    } else if (type == 2) {
      return (
        <div className="App">
          <SatLocation />
        </div>
      );
    } else if (type == 3) {
      return (
        <div className="App">
          <GetPasses />
        </div>
      );
    } else if (type == 4) {
      return (
        <div className="App">
          <Above />
        </div>
      );
    }
  }
}

export default App;
