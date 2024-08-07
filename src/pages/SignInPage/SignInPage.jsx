import { useEffect, useState } from 'react';
import Container from '../../components/REUSABLE/Container/Container';
import Logo from '../../components/REUSABLE/Logo/Logo';
import SignInForm from '../../components/Users/SignInForm/SignInForm';
import css from './SignInPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

const SignInPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1440);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container type="div" addClass={css.signInPage}>
      {isMobile ? (
        <div className={css.signInContainer}>
          <Logo />
          <SignInForm />
        </div>
      ) : (
        <>
          <div className={css.signInContainer}>
            <Logo />
            <SignInForm />
          </div>
          <AdvantagesSection />
        </>
      )}
    </Container>
  );
};

export default SignInPage;
