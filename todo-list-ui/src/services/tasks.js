import axios from 'axios';
import { GETTASKS } from '../constants/index';

function getTasks(setStates) {
  return axios.get(GETTASKS).then((res) => {
    setStates(res.data);
  });
}

export {
  getTasks,
}