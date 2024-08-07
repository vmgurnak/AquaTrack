import { useEffect, useState } from 'react';
import Container from '../../components/REUSABLE/Container/Container';
import Logo from '../../components/REUSABLE/Logo/Logo';
import SignUpForm from '../../components/Users/SignUpForm/SignUpForm';
import css from './SignUpPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

const SignUpPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1440);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container type="div" addClass={css.signUpPage}>
      {isMobile ? (
        <div className={css.signUpContainer}>
          <Logo />
          <SignUpForm />
        </div>
      ) : (
        <>
          <div className={css.signUpContainer}>
            <Logo />
            <SignUpForm />
          </div>
          <AdvantagesSection />
        </>
      )}
    </Container>
  );
};

export default SignUpPage;
