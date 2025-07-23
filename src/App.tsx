import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import './App.scss';

import RootLayout from '@components/layouts/RootLayout/RootLayout';
import HoroscopeRootLayout from '@components/layouts/HoroscopeRootLayout/HoroscopeRootLayout';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import HomePage from '@pages/HomePage/HomePage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import ContactUsPage from '@pages/ContactUsPage/ContactUsPage';
import HoroscopeDetailsPage from '@pages/HoroscopeDetailsPage/HoroscopeDetailsPage';
import HoroscopesPage from '@pages/HoroscopesPage/HoroscopesPage';

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
