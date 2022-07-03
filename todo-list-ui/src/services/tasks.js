import axios from 'axios';
import { GETTASKS, POSTTASK } from '../constants/index';

function getTasks(setStates) {
  return axios.get(GETTASKS).then((res) => {
    setStates(res.data);
  });
}

function postTask(states) {
  return axios.post(POSTTASK, states);
}

export {
  getTasks,
  postTask,
}