import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function AbovePassesRender({ data }) {
  // const [aboveData, setAboveData] = useState([]);

  // useEffect(() => {
  //   setAboveData(data.above);
  // }, [data]);

  const listItems = data.above?.map((sat) => (
    // <li>
    //   satid: {sat.satid}, satname: {sat.satname}, international designator: {sat.intDesignator}, launch date: {sat.launchDate}, footprint latitude
    //   (decimal degrees format): {sat.satlat}, footprint longitude (decimal
    //   degrees format): {sat.satlng}, altitude (km): {sat.satalt},
    // </li>

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

  // if (aboveData == []) {
  //   return (
  //     <div className="mt-5">
  //       <Container>
  //         <Row className="justify-content-md-center">
  //           <h1>Satellites above you</h1>
  //           <h3>satellites not traceable</h3>
  //         </Row>
  //       </Container>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="mt-5">
  //       <Container>
  //         <Row className="justify-content-md-center">
  //           <h1>Satellites above you</h1>
  //           {/* <ul>{listItems}</ul> */}

  //           <Table striped bordered hover>
  //             <thead>
  //               <tr>
  //                 <th>satid</th>
  //                 <th>satname</th>
  //                 <th>international designator</th>
  //                 <th>launch date</th>
  //                 <th>footprint latitude(decimal degrees)</th>
  //                 <th>footprint longitude(decimal degrees)</th>
  //                 <th>altitude (km)</th>
  //               </tr>
  //             </thead>
  //             <tbody>{listItems}</tbody>
  //           </Table>
  //         </Row>
  //       </Container>
  //     </div>
  //   );
  // }

  if (data.above) {
    return (
      <div className="mt-5">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Satellites above you</h1>
            {/* <ul>{listItems}</ul> */}

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
              <tbody>{listItems}</tbody>
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

export default AbovePassesRender;
