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
  return window.location.reload();
}

const deleteTask = (id) => {
  axios.delete(`http://localhost:8080/task/${id}`).then((res) => console.log(res));
  return window.location.reload();
}

const putTask = (id, task, status ) => {
  axios.put(`http://localhost:8080/task/${id}`, {
    task: task,
    status: status,
  }).then((res) => console.log(res));
  return window.location.reload();
}

export {
  getTasks,
  postTask,
  deleteTask,
  putTask,
}