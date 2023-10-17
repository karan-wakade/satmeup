import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function AboveListRender({ data }) {
  //   const listItems = data.above?.map((sat) => (
  //     <tr>
  //       <td>{sat.satid}</td>
  //       <td>{sat.satname}</td>
  //       <td>{sat.intDesignator}</td>
  //       <td>{sat.launchDate}</td>
  //       <td>{sat.satlat}</td>
  //       <td>{sat.satlng}</td>
  //       <td>{sat.satalt}</td>
  //     </tr>
  //   ));

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

  if (data) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellites above you</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>satid</th>
                  <th>satname</th>
                  <th>international designator</th>
                  <th>launch date</th>
                  <th>footprint latitude(decimal degrees)</th>
                  <th>footprint longitude(decimal degrees)</th>
                  <th>altitude (km)</th>
                </tr>
              </thead>
              <tbody>{listItems2}</tbody>
            </Table>
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
            <h3>satellites not traceable</h3>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboveListRender;
