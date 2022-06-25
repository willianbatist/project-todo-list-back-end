const express = require("express");

const app = express();

app.use(express.json());

app.get('/user', (_req, res) => {
  return res.status(200).json({ name: "WIllian" })
});

module.exports = app;

