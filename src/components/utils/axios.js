import axios from 'axios';
import CONSTANTS from '../../components/Constants/constants.js';

const AxiosWithCredentials = axios.create({
  //   baseURL: CONSTANTS.DOMAINS.SERVER_LOCALHOST,
  baseURL: CONSTANTS.DOMAINS.SERVER_DEPLOY,
  withCredentials: true,
});

export default AxiosWithCredentials;
