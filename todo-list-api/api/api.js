const express = require("express");
const Tasks = require("./controllers/tasks");

const app = express();

app.use(express.json());

app.get('/tasks', Tasks.getTasks)

app.get('/user', (_req, res) => {
  return res.status(200).json({ name: "WIllian" })
});

module.exports = app;
