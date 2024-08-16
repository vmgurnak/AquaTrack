import Container from '../REUSABLE/Container/Container';
import Logo from '../REUSABLE/Logo/Logo.jsx';
import css from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = () => {
  return (
    <Container type="section" addClass={css.WaterDetailedInfo}>
      <Container type="div" addClass={css.container}></Container>
    </Container>
  );
};

export default WaterDetailedInfo;
