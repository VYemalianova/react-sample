import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@styles/global.scss';
import './App.scss';

import Layout from './components/Layout/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import DailyHoroscopePage from './pages/DailyHoroscopePage/DailyHoroscopePage';
import LoveHoroscopePage from './pages/LoveHoroscopePage/LoveHoroscopePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about-us', element: <AboutUsPage /> },
      {
        path: 'daily-horoscope',
        element: <DailyHoroscopePage />,
        children: [{ path: ':sign' }],
      },
      {
        path: 'love-horoscope',
        element: <LoveHoroscopePage />,
        children: [{ path: ':sign' }],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
