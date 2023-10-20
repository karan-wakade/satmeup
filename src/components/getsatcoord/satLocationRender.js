import React from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function SatLocationRender({ data }) {
  const listItems = data.positions?.map((position) => (
    <tr>
      <td>{position.satlatitude}</td>
      <td>{position.satlongitude}</td>
      <td>{position.sataltitude}</td>
      <td>{position.azimuth}</td>
      <td>{position.elevation}</td>
      <td>{position.ra}</td>
      <td>{position.dec}</td>
      <td>{position.timestamp}</td>
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
            <h1>Satellite Positions</h1>
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
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Altitude</th>
                    <th>Azimuth</th>
                    <th>Elevation</th>
                    <th>Right Ascension</th>
                    <th>Declination</th>
                    <th>Unix Time</th>
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
            <h1>Satellite Positions</h1>
            <h2></h2>
            <hr class="hr" />
            <h3>Satellite not traceable</h3>

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

export default SatLocationRender;
