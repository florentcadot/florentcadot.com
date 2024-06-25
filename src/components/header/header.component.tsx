import { useNavigate } from 'react-router-dom';

interface HeaderMenuItemProps {
  label: string;
  to: string;
  handleNavigate: (to: string) => void;
}

const HeaderMenuItem = ({ label, to, handleNavigate }: HeaderMenuItemProps) => {
  return (
    <div className="header-menu-item" onClick={() => handleNavigate(to)}>
      <a>{label}</a>
    </div>
  );
};

export const HeaderComponent = () => {
  const navigate = useNavigate();
  const goHomeAndScrollTo = (elementName: string) => {
    navigate('/', {
      state: { elementName },
    });
  };
  return (
    <div className="header-container">
      <div
        className="header-image-container"
        onClick={() => goHomeAndScrollTo('home-main')}
      >
        <div className="header-image-content"></div>
      </div>
      <div className="header-menu">
        <HeaderMenuItem
          label={'Home'}
          to={'home-main'}
          handleNavigate={goHomeAndScrollTo}
        />
        <HeaderMenuItem
          label={'Tech Stack'}
          to={'home-techno'}
          handleNavigate={goHomeAndScrollTo}
        />
        <HeaderMenuItem
          label={'Contact'}
          to={'home-contact'}
          handleNavigate={goHomeAndScrollTo}
        />
        <div className="header-menu-item" onClick={() => navigate('/about')}>
          <a>About</a>
        </div>
      </div>
    </div>
  );
};
