import CONSTANTS from '../Constants/constants.js';
import AxiosWithCredentials from '../utils/axios.js';

export const requestTotalUsers = async () => {
  const {
    data: {
      data: { totalUsers },
    },
  } = await AxiosWithCredentials.get(CONSTANTS.USERS_ENDPOINTS.totalUsers);
  return totalUsers;
};
