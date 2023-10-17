import React from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function SatLocationRender({ data }) {
  const listItems = data.positions?.map((position) => (
    // <li>
    //   latitude: {position.satlatitude}, longitude: {position.satlongitude},
    //   altitude:
    //   {position.sataltitude}, azimuth: {position.azimuth}, elevation: {position.elevation}, right ascension (degrees):
    //   {position.ra}, declination (degrees): {position.dec}, Unix time for this
    //   position (seconds): {position.timestamp},
    // </li>

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

  if (data.positions == []) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellite Positions</h1>
            <h3>Satellite not traceable</h3>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellite Positions</h1>
            {/* <ul>{listItems}</ul> */}

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>latitude</th>
                  <th>longitude</th>
                  <th>altitude</th>
                  <th>azimuth</th>
                  <th>elevation</th>
                  <th>right ascension</th>
                  <th>declination</th>
                  <th>Unix time</th>
                </tr>
              </thead>
              <tbody>{listItems}</tbody>
            </Table>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SatLocationRender;
