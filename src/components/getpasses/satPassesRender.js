import React from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function SatPassesRender({ data }) {
  const listItems = data.passes?.map((pass) => (
    <tr>
      <td>{pass.startAz}</td>
      <td>{pass.startAzCompass}</td>
      <td>{pass.startEl}</td>
      <td>{pass.startUTC}</td>
      <td>{pass.maxAz}</td>
      <td>{pass.maxAzCompass}</td>
      <td>{pass.maxEl}</td>
      <td>{pass.maxUTC}</td>
      <td>{pass.endAz}</td>
      <td>{pass.endAzCompass}</td>
      <td>{pass.endEl}</td>
      <td>{pass.endUTC}</td>
      <td>{pass.mag}</td>
      <td>{pass.duration}</td>
    </tr>
  ));

  function reload() {
    window.location.reload(false);
  }

  if (data) {
    return (
      <div className="m-4">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellite Passes</h1>
            <h2></h2>
            <hr class="hr" />

            <h4></h4>
            <Button variant="secondary" onClick={reload}>
              RESET
            </Button>
            <h2></h2>
            <hr class="hr" />

            <div class="overflow-auto">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Azimuth(degrees)</th>
                    <th>Azimuth(relative)</th>
                    <th>Elevation</th>
                    <th>Unix Time</th>
                    <th>Azimuth(max elevation(degrees))</th>
                    <th>Azimuth(max elevation(relative))</th>
                    <th>Max elevation(degrees)</th>
                    <th>Unix time(max elevation)</th>
                    <th>Azimuth(end of pass(degrees))</th>
                    <th>Azimuth(end of pass(relative))</th>
                    <th>Elevation(end of pass(degrees))</th>
                    <th>Unix time(end of pass)</th>
                    <th>Max visual magnitude of the pass</th>
                    <th>Visible duration of this pass (in seconds)</th>
                  </tr>
                </thead>
                <tbody>{listItems}</tbody>
              </Table>
            </div>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="m-4">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellite Passes</h1>
            <h2></h2>
            <hr class="hr" />
            <h3>Passes not traceable</h3>

            <h4></h4>
            <Button variant="secondary" onClick={reload}>
              RESET
            </Button>
            <h2></h2>
            <hr class="hr" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default SatPassesRender;
