const { Tasks } = require('../models');

const getTasks = async () => {
  const tasks = await Tasks.findAll();
  return tasks;
}

const postTask = async (body) => {
  const task = await Tasks.create(body);
  return task;
}

const deleteTask = async (id) => {
  const delTask = await Tasks.destroy({
    where: { id: id },
  });
  return delTask;
};

const updateTask = async (id, task, status) => {
  const updateTask = await Tasks.update({ task, status }, { where: { id } });
  return updateTask;
};

module.exports = {
  getTasks,
  postTask,
  deleteTask,
  updateTask,
}