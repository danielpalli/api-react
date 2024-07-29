import { createBrowserRouter, Navigate } from 'react-router-dom';
import { CryptoComparePage, WeatherPage } from '../pages';
import { UiLayout } from '../layouts/UiLayout';

export const menuRoutes = [
  {
    to: '/weather',
    icon: 'fa-solid fa-spell-check',
    title: 'Weather',
    description: 'Weather forecast',
    component: <WeatherPage />,
  },
  {
    to: '/crypto-compare',
    icon: 'fa-solid fa-code-compare',
    title: 'Crypto Compare',
    description: 'Cryptocurrency comparison',
    component: <CryptoComparePage />,
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UiLayout />,
    children: [
      ...menuRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: '*',
        element: <Navigate to={menuRoutes[0].to} />,
      },
      {
        path: '',
        element:  <Navigate to={menuRoutes[0].to} />,
      }
    ],
  },
]);
