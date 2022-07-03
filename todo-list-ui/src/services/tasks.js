import axios from 'axios';
import { GETTASKS, POSTTASK, DELETETASK } from '../constants/index';

const getTasks = (setStates) => {
  return axios.get(GETTASKS).then((res) => {
    setStates(res.data);
  });
}

const postTask = (states) => {
  axios.post(POSTTASK, {
    task: states.task,
    status: states.status,
  }).then((res) => console.log(res));
}

const deleteTask = (task) => {
  axios.delete(DELETETASK, {
    task
  }).then((res) => console.log(res));
}

export {
  getTasks,
  postTask,
  deleteTask,
}