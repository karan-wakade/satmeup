import React from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function AboveListRender({ data }) {
  const listItems2 = data?.map((cat) => (
    <tr>
      {cat.above?.map((sat) => (
        <tr>
          <td>{sat.satid}</td>
          <td>{sat.satname}</td>
          <td>{sat.intDesignator}</td>
          <td>{sat.launchDate}</td>
          <td>{sat.satlat}</td>
          <td>{sat.satlng}</td>
          <td>{sat.satalt}</td>
        </tr>
      ))}
    </tr>
  ));

  function reload() {
    window.location.reload(false);
  }

  if (data) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellites above you</h1>
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
                    <th>Satid</th>
                    <th>Satname</th>
                    <th>International Designator</th>
                    <th>Launch Date</th>
                    <th>Footprint latitude(degrees)</th>
                    <th>Footprint longitude(degrees)</th>
                    <th>Altitude(km)</th>
                  </tr>
                </thead>
                <tbody>{listItems2}</tbody>
              </Table>
            </div>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellites above you</h1>
            <h2></h2>
            <hr class="hr" />
            <h3>satellites not traceable</h3>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboveListRender;
