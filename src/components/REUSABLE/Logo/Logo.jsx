import CustomNavLink from '../CustomNavLink/CustomNavLink';
import css from './logo.module.css';

const Logo = () => {
  return (
    <CustomNavLink className={css.logo} to="/">
      AquaTrack
    </CustomNavLink>
  );
};

export default Logo;
