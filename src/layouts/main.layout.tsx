import { HeaderComponent } from '../components/header/header.component.tsx';
import { Outlet } from 'react-router-dom';
import { FooterComponent } from '../components/footer/footer.component.tsx';

export const MainLayout = () => {
  return (
    <div className="layout">
      <HeaderComponent />
      <main className="content">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};
