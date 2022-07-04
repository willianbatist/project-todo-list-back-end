const express = require("express");
const Tasks = require("./controllers/tasks");
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());

app.get('/tasks', Tasks.getTasks);
app.post('/task', Tasks.postTask);
app.delete('/task/:id', Tasks.deleteTask);
app.put('/task/:id', Tasks.updateTask);
app.get('/user', (_req, res) => {
  return res.status(200).json({ name: "WIllian" })
});

module.exports = app;
