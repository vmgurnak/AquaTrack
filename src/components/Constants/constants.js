import firstUserMob1x from '../../assets/pictures/HomePage/user-first-mob.webp';
import firstUserMob2x from '../../assets/pictures/HomePage/user-first-mob@2x.webp';
import secondUserMob1x from '../../assets/pictures/HomePage/user-second-mob.webp';
import secondUserMob2x from '../../assets/pictures/HomePage/user-second-mob@2x.webp';
import thirdUserMob1x from '../../assets/pictures/HomePage/user-third-mob.webp';
import thirdUserMob2x from '../../assets/pictures/HomePage/user-third-mob@2x.webp';
import firstUser1x from '../../assets/pictures/HomePage/user-first.webp';
import firstUser2x from '../../assets/pictures/HomePage/user-first@2x.webp';
import secondUser1x from '../../assets/pictures/HomePage/user-second.webp';
import secondUser2x from '../../assets/pictures/HomePage/user-second@2x.webp';
import thirdUser1x from '../../assets/pictures/HomePage/user-third.webp';
import thirdUser2x from '../../assets/pictures/HomePage/user-third@2x.webp';

import icons from '../../assets/icons/sprite.svg';

const USERS_ENDPOINTS = {
  signUp: '/v1/users/register',
  signIn: '/v1/users/login',
  logout: '/v1/users/logout',
  refresh: '/v1/users/refresh',
  updateUser: '/v1/users/update',
  requestResetPassword: '/request-reset-password',
  resetPassword: '/reset-pwd',
  getGoogleUrl: '/get-oauth-url',
  confirmGoogleAuhorization: '/confirm-oauth',
  totalUsers: '/v1/users/amount',
};

export const IMAGES = {
  firstUserMob1x: firstUserMob1x,
  firstUserMob2x: firstUserMob2x,
  firstUser1x: firstUser1x,
  firstUser2x: firstUser2x,
  secondUserMob1x: secondUserMob1x,
  secondUserMob2x: secondUserMob2x,
  secondUser1x: secondUser1x,
  secondUser2x: secondUser2x,
  thirdUserMob1x: thirdUserMob1x,
  thirdUserMob2x: thirdUserMob2x,
  thirdUser1x: thirdUser1x,
  thirdUser2x: thirdUser2x,
};

export const ICONS = {
  icons: icons,
  eye: `${icons}#eye`,
  eyeOff: `${icons}#eye-off`,
  logOut: `${icons}#log-out`,
  chart: `${icons}#chart`,
  settings: `${icons}#settings`,
  trash: `${icons}#trash`,
  upload: `${icons}#upload`,
  x: `${icons}#x`,
  edit: `${icons}#edit`,
};

const DOMAINS = {
  SERVER_LOCALHOST: 'http://localhost:3000',
  SERVER_DEPLOY: 'https://aquabalance-backend.onrender.com',
};

const CONSTANTS = {
  USERS_ENDPOINTS,
  DOMAINS,
};

export default CONSTANTS;
