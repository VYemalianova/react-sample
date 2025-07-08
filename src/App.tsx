import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import './App.scss';

import RootLayout from '@components/layouts/RootLayout/RootLayout';
import HoroscopeRootLayout from '@components/layouts/HoroscopeRootLayout/HoroscopeRootLayout';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import HomePage from '@pages/HomePage/HomePage';
import DailyHoroscopePage from '@pages/DailyHoroscopePage/DailyHoroscopePage';
import LoveHoroscopePage from '@pages/LoveHoroscopePage/LoveHoroscopePage';
import AboutUsPage from '@pages/AboutUsPage/AboutUsPage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import ContactUsPage from '@pages/ContactUsPage/ContactUsPage';
import HoroscopeDetailsPage from '@pages/HoroscopeDetailsPage/HoroscopeDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: 'home', element: <HomePage /> },
      { path: 'about-us', element: <AboutUsPage /> },
      { path: 'contact-us', element: <ContactUsPage /> },
      {
        path: 'daily-horoscope',
        element: <HoroscopeRootLayout />,
        children: [
          { index: true, element: <DailyHoroscopePage /> },
          { path: ':sign', element: <HoroscopeDetailsPage /> },
        ],
      },
      {
        path: 'love-horoscope',
        element: <HoroscopeRootLayout />,
        children: [
          { index: true, element: <LoveHoroscopePage /> },
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
