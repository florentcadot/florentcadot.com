import { RouterProvider } from 'react-router-dom';
import { router } from './routes.tsx';

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
