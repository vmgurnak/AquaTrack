import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import css from './App.module.css';
import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        {/* <Route path="*" element={<HomePage />} /> */}
      </Routes>
    </SharedLayout>
  );
}

export default App;
