import React from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function SatPassesRender({ data }) {
  const listItems = data.passes?.map((pass) => (
    // <li>
    //   azimuth for the start of this pass (relative to the observer, in degrees):
    //   {pass.startAz}, azimuth for the start of this pass (relative to the
    //   observer). Possible values: N, NE, E, SE, S, SW, W, NW: {pass.startAzCompass}, elevation for the start of this pass (relative to
    //   the observer, in degrees): {pass.startEl}, Unix time for the start of this
    //   pass. You should convert this UTC value to observer's time zone:{pass.startUTC}, azimuth for the max elevation of this pass (relative to
    //   the observer, in degrees): {pass.maxAz}, azimuth for the max elevation of
    //   this pass (relative to the observer): {pass.maxAzCompass}, max elevation
    //   for this pass (relative to the observer, in degrees): {pass.maxEl}, Unix
    //   time for the max elevation of this pass. You should convert this UTC value
    //   to observer's time zone: {pass.maxUTC}, azimuth for the end of this pass
    //   (relative to the observer, in degrees): {pass.endAz}, azimuth for the end
    //   of this pass (relative to the observer): {pass.endAzCompass}, elevation
    //   for the end of this pass (relative to the observer, in degrees): {pass.endEl}, Unix time for the end of this pass. You should convert this
    //   UTC value to observer's time zone: {pass.endUTC}, Max visual magnitude of
    //   the pass, same scale as star brightness. If magnitude cannot be
    //   determined, the value is 100000: {pass.mag}, Total visible duration of
    //   this pass (in seconds): {pass.duration},
    // </li>

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

  if (data.passes == []) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellite Passes</h1>
            <h3>Passes not traceable</h3>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellite Passes</h1>
            {/* <ul>{listItems}</ul> */}

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>azimuth(degrees)</th>
                  <th>azimuth(relative)</th>
                  <th>elevation</th>
                  <th>Unix time</th>
                  <th>azimuth(max elevation-degrees)</th>
                  <th>azimuth(max elevation-relative)</th>
                  <th>max elevation(degrees)</th>
                  <th>Unix time(max elevation)</th>
                  <th>azimuth for the end of this pass(degrees)</th>
                  <th>azimuth for the end of this pass(relative)</th>
                  <th>elevation for the end of this pass(degrees)</th>
                  <th>Unix time for the end of this pass</th>
                  <th>Max visual magnitude of the pass</th>
                  <th>Total visible duration of this pass (in seconds)</th>
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

export default SatPassesRender;
