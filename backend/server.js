require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const endpoints = require("./routes/endpoints");

app.use("/api", endpoints);

app.get("/apitest", async (req, res) => {
  const uri =
    "https://api.n2yo.com/rest/v1/satellite/tle/20580&apiKey=4AKCEP-GHVUGN-88RC4Y-53E5";

  fetch(uri)
    .then((res) => res.json())
    .then((data) => {
      res.json(data);
    });
});

app.listen(process.env.PORT, () => {
  console.log("backend server listening ");
});
