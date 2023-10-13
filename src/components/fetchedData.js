import React from "react";

function FetchedData({ data, type }) {
  return (
    <div>
      {console.log("Data: " + data)}
      {console.log("Type: " + type)}
      <h1>Fetched Data Block</h1>
    </div>
  );
}

export default FetchedData;
