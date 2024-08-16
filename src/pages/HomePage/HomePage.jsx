// import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import Container from '../../components/REUSABLE/Container/Container';

const HomePage = () => {
  return (
    <Container type="main" addClass={css.homePage}>
      <WelcomeSection />
      <AdvantagesSection />
    </Container>
  );
};

export default HomePage;
