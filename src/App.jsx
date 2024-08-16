import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
import TrackerPage from './pages/TrackerPage/TrackerPage';

import css from './App.module.css';

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
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
