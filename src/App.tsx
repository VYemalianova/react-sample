import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

import RootLayout from '@components/layouts/RootLayout/RootLayout';
import ErrorPage from '@pages/ErrorPage/ErrorPage';

const HoroscopeRootLayout = lazy(
  () => import('@components/layouts/HoroscopeRootLayout/HoroscopeRootLayout')
);
const HomePage = lazy(() => import('@pages/HomePage/HomePage'));
const ContactUsPage = lazy(() => import('@pages/ContactUsPage/ContactUsPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage/NotFoundPage'));
const HoroscopesPage = lazy(() => import('@pages/HoroscopesPage/HoroscopesPage'));
const HoroscopeDetailsPage = lazy(() => import('@pages/HoroscopeDetailsPage/HoroscopeDetailsPage'));

import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: 'home', element: <HomePage /> },
      { path: 'contact-us', element: <ContactUsPage /> },
      {
        path: 'horoscope/:type',
        element: <HoroscopeRootLayout />,
        children: [
          { index: true, element: <HoroscopesPage /> },
          { path: ':sign', element: <HoroscopeDetailsPage /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
