import css from './WelcomeSection.module.css';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import Logo from '../REUSABLE/Logo/Logo.jsx';
import clsx from 'clsx';
import Container from '../REUSABLE/Container/Container.jsx';
// import { useDispatch } from 'react-redux';
// import { signUp } from 'src/redux/users/operations.js';

const WelcomeSection = () => {
  // const dispatch = useDispatch();
  return (
    <Container type="section" addClass={css.WelcomeSection}>
      <Container type="div" addClass={css.container}>
        <Logo />
        <div className={css.content}>
          <p className={css.text}>Record daily water intake and track</p>
          <h1 className={css.title}>Water consumption tracker</h1>
          <ul className={css.list}>
            <li className={css.item}>
              <CustomNavLink addClass={css.linkSignup} to="/signup">
                Try tracker
              </CustomNavLink>
            </li>
            <li className={css.item}>
              <CustomNavLink addClass={css.linkSignin} to="/signin">
                Sign In
              </CustomNavLink>
            </li>
            {/* <li className={css.item}>
              <CustomNavLink addClass={css.linkSignin} to="/tracker">
                Tracker Page
              </CustomNavLink>
            </li> */}
          </ul>
        </div>
      </Container>
    </Container>
  );
};

export default WelcomeSection;
