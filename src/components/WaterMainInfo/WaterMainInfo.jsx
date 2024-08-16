import Container from '../REUSABLE/Container/Container';
import Logo from '../REUSABLE/Logo/Logo.jsx';
import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  return (
    <Container type="section" addClass={css.WaterMainInfoSection}>
      <Container type="div" addClass={css.container}>
        <Logo />
      </Container>
    </Container>
  );
};

export default WaterMainInfo;
