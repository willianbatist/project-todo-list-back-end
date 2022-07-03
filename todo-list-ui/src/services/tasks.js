import axios from 'axios';
import { GETTASKS, POSTTASK } from '../constants/index';

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

const deleteTask = (id) => {
  axios.delete(`http://localhost:8080/task/${id}`).then((res) => console.log(res));
}

export {
  getTasks,
  postTask,
  deleteTask,
}