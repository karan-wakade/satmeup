const express = require("express");
require("dotenv").config();

const router = express.Router();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.get("/tle", async (req, res) => {
  // "https://api.n2yo.com/rest/v1/satellite/tle/25544&apiKey=589P8Q-SDRYX8-L842ZD-5Z9"
  const url =
    "https://api.n2yo.com/rest/v1/satellite/tle/" +
    req.query.norad +
    "&apiKey=" +
    process.env.API_KEY;

  const response = await fetch(url).then((res) => res.json());
  return res.json(response);
});

router.get("/coord", async (req, res) => {
  // https://api.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=589P8Q-SDRYX8-L842ZD-5Z9
  const url =
    "https://api.n2yo.com/rest/v1/satellite/positions/" +
    req.query.norad +
    "/" +
    req.query.latitude +
    "/" +
    req.query.longitude +
    "/" +
    req.query.altitude +
    "/" +
    req.query.seconds +
    "/" +
    "&apiKey=" +
    process.env.API_KEY;

  const response = await fetch(url).then((res) => res.json());
  return res.json(response);
});

router.get("/passes", async (req, res) => {
  // https://api.n2yo.com/rest/v1/satellite/visualpasses/25544/41.702/-76.014/0/2/300/&apiKey=589P8Q-SDRYX8-L842ZD-5Z9
  const url =
    "https://api.n2yo.com/rest/v1/satellite/visualpasses/" +
    req.query.norad +
    "/" +
    req.query.latitude +
    "/" +
    req.query.longitude +
    "/" +
    req.query.altitude +
    "/" +
    req.query.days +
    "/" +
    req.query.minvisibility +
    "/" +
    "&apiKey=" +
    process.env.API_KEY;

  const response = await fetch(url).then((res) => res.json());
  return res.json(response);
});

router.get("/above", async (req, res) => {
  // https://api.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/70/18/&apiKey=589P8Q-SDRYX8-L842ZD-5Z9
  const url =
    "https://api.n2yo.com/rest/v1/satellite/above/" +
    req.query.latitude +
    "/" +
    req.query.longitude +
    "/" +
    req.query.altitude +
    "/" +
    req.query.radius +
    "/" +
    req.query.category +
    "/" +
    "&apiKey=" +
    process.env.API_KEY;

  const response = await fetch(url).then((res) => res.json());
  return res.json(response);
});

module.exports = router;
