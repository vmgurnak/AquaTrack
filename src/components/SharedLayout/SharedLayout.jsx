import { Suspense } from 'react';

import Loader from '../REUSABLE/Loader/Loader';

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;
