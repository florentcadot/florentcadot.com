import { HeaderComponent } from '../components/header/header.component.tsx';
import { Outlet } from 'react-router-dom';
import { FooterComponent } from '../components/footer/footer.component.tsx';

export const MainLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};
