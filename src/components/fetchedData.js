import React, { useEffect } from "react";

// function ListItem(props) {
//   return <li>{props.value}</li>;
// }

function FetchedData({ data, type }) {
  const listItems2 = data.positions?.map((position) => (
    <li>
      latitude: {position.satlatitude}, longitude: {position.satlongitude},
      altitude:
      {position.sataltitude}, azimuth: {position.azimuth}, elevation:{" "}
      {position.elevation}, right ascension (degrees):
      {position.ra}, declination (degrees): {position.dec}, Unix time for this
      position (seconds): {position.timestamp},
    </li>
  ));

  const listItems3 = data.passes?.map((pass) => (
    <li>
      azimuth for the start of this pass (relative to the observer, in degrees):
      {pass.startAz}, azimuth for the start of this pass (relative to the
      observer). Possible values: N, NE, E, SE, S, SW, W, NW:{" "}
      {pass.startAzCompass}, elevation for the start of this pass (relative to
      the observer, in degrees): {pass.startEl}, Unix time for the start of this
      pass. You should convert this UTC value to observer's time zone:{" "}
      {pass.startUTC}, azimuth for the max elevation of this pass (relative to
      the observer, in degrees): {pass.maxAz}, azimuth for the max elevation of
      this pass (relative to the observer): {pass.maxAzCompass}, max elevation
      for this pass (relative to the observer, in degrees): {pass.maxEl}, Unix
      time for the max elevation of this pass. You should convert this UTC value
      to observer's time zone: {pass.maxUTC}, azimuth for the end of this pass
      (relative to the observer, in degrees): {pass.endAz}, azimuth for the end
      of this pass (relative to the observer): {pass.endAzCompass}, elevation
      for the end of this pass (relative to the observer, in degrees):{" "}
      {pass.endEl}, Unix time for the end of this pass. You should convert this
      UTC value to observer's time zone: {pass.endUTC}, Max visual magnitude of
      the pass, same scale as star brightness. If magnitude cannot be
      determined, the value is 100000: {pass.mag}, Total visible duration of
      this pass (in seconds): {pass.duration},
    </li>
  ));

  const listItems4 = data.above?.map((sat) => (
    <li>
      satid: {sat.satid}, satname: {sat.satname}, international designator:{" "}
      {sat.intDesignator}, launch date: {sat.launchDate}, footprint latitude
      (decimal degrees format): {sat.satlat}, footprint longitude (decimal
      degrees format): {sat.satlng}, altitude (km): {sat.satalt},{" "}
    </li>
  ));

  if (type == 1) {
    return (
      <div>
        {/* {console.log(data)} */}
        <h1>Satellite TLE</h1>
        <h4>{data.tle}</h4>
      </div>
    );
  } else if (type == 2) {
    return (
      <div>
        {/* {console.log(data.positions)} */}
        <h1>Satellite Positions</h1>
        <ul>{listItems2}</ul>
      </div>
    );
  } else if (type == 3) {
    return (
      <div>
        {/* {console.log(data)} */}
        <h1>Satellite Passes</h1>
        <ul>{listItems3}</ul>
      </div>
    );
  } else if (type == 4) {
    return (
      <div>
        {/* {console.log(data)} */}
        <h1>Satellites Above you</h1>
        <ul>{listItems4}</ul>
      </div>
    );
  }

  // return (
  //   <div>
  //     {console.log(data)}
  //     <h1>Fetched Data Block</h1>
  //   </div>
  // );
}

export default FetchedData;
