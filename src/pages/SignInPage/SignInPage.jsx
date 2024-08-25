import { useWindowSize } from 'react-use';

import Container from '../../components/REUSABLE/Container/Container';
import Logo from '../../components/REUSABLE/Logo/Logo';
import SignInForm from '../../components/Users/SignInForm/SignInForm';
import css from './SignInPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import CustomNavLink from '../../components/REUSABLE/CustomNavLink/CustomNavLink';

const SignInPage = () => {
  const { width } = useWindowSize();

  return (
    <Container type="main" addClass={css.signInPage}>
      <Container type="section" addClass={css.signInSection}>
        <Container type="div" addClass={css.container}>
          <Logo />
          <SignInForm />
          <p className={css.text}>
            Don’t have an account?{' '}
            <CustomNavLink addClass={css.link} to="/signup">
              Sign Up
            </CustomNavLink>
          </p>
        </Container>
      </Container>
      {width >= 1440 ? <AdvantagesSection /> : null}
    </Container>
  );
};

export default SignInPage;
