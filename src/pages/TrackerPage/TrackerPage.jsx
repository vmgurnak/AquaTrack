import Container from '../../components/REUSABLE/Container/Container';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';

import css from './TrackerPage.module.css';

const TrackerPage = () => {
  return (
    <Container type="main" addClass={css.trackerPage}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </Container>
  );
};

export default TrackerPage;
