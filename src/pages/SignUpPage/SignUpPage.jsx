import { useWindowSize } from 'react-use';

import Container from '../../components/REUSABLE/Container/Container';
import Logo from '../../components/REUSABLE/Logo/Logo';
import SignUpForm from '../../components/Users/SignUpForm/SignUpForm';
import css from './SignUpPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

const SignUpPage = () => {
  const { width } = useWindowSize();

  return (
    <Container type="main" addClass={css.signUpPage}>
      <Container type="section" addClass={css.signUpSection}>
        <Container type="div" addClass={css.container}>
          <Logo />
          <SignUpForm />
        </Container>
      </Container>
      {width >= 1440 ? <AdvantagesSection /> : null}
    </Container>
  );
};

export default SignUpPage;
