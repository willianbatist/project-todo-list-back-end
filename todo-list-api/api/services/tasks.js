const { Tasks } = require('../models');

const getTasks = async () => {
  const tasks = await Tasks.findAll();
  return tasks;
}

const postTask = async (body) => {
  const task = await Tasks.create(body);
  return task;
}

module.exports = {
  getTasks,
  postTask,
}