const Tasks = require('../services/tasks');

const getTasks = async (_req, res) => {
  try {
    const tasks = await Tasks.getTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};  

module.exports = {
  getTasks
}