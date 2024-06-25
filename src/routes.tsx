import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { MainLayout } from './layouts/main.layout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
    ],
  },
]);
