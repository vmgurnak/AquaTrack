import { Suspense } from 'react';
import css from './sharedLayout.module.css';

import Loader from '../REUSABLE/Loader/Loader';

const SharedLayout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;
