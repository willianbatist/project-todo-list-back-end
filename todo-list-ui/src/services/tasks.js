import axios from 'axios';
import { GETTASKS, POSTTASK } from '../constants/index';

function getTasks(setStates) {
  return axios.get(GETTASKS).then((res) => {
    setStates(res.data);
  });
}

function postTask(states) {
  axios.post(POSTTASK, {
    task: states.task,
    status: states.status,
  }).then((res) => console.log(res));
}

export {
  getTasks,
  postTask,
}