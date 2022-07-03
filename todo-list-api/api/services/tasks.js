const { Tasks } = require('../models');

const getTasks = async () => {
  const tasks = await Tasks.findAll();
  return tasks;
}

const postTask = async (body) => {
  const task = await Tasks.create(body);
  return task;
}

const deleteTask = async (body) => {
  const delTask = await Tasks.destroy({
    where: { task: body.task },
  });
  return delTask;
};

module.exports = {
  getTasks,
  postTask,
  deleteTask,
}