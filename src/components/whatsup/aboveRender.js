import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function AbovePassesRender({ dataList }) {
  function List({ data }) {
    if (data) {
      const list = data.above?.map((sat) => (
        <tr>
          <td>{sat.satid}</td>
          <td>{sat.satname}</td>
          <td>{sat.intDesignator}</td>
          <td>{sat.launchDate}</td>
          <td>{sat.satlat}</td>
          <td>{sat.satlng}</td>
          <td>{sat.satalt}</td>
        </tr>
      ));
      return list;
    }
  }

  function reload() {
    window.location.reload(false);
  }

  function ListFunc({ data }) {
    if (data) {
      const list = (
        <div>
          <h3>{data.info.category}</h3>
          <h2></h2>
          <hr class="hr" />

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Satid</th>
                <th>Satname</th>
                <th>International designator</th>
                <th>Launch date</th>
                <th>Footprint latitude(degrees)</th>
                <th>Footprint longitude(degrees)</th>
                <th>Altitude(km)</th>
              </tr>
            </thead>
            <tbody>
              <List data={data} />
            </tbody>
          </Table>
        </div>
      );
      return list;
    }
  }

  if (dataList) {
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

            {dataList.map((data) => (
              <div>
                <ListFunc data={data} />
              </div>
            ))}
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

export default AbovePassesRender;
