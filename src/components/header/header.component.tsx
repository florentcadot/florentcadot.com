import { useNavigate } from 'react-router-dom';

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
        <div className="header-menu-item">
          <a onClick={() => goHomeAndScrollTo('home-main')}>Home</a>
        </div>
        <div className="header-menu-item">
          <a onClick={() => goHomeAndScrollTo('home-techno')}>Tech Stack</a>
        </div>
        <div className="header-menu-item">
          <a onClick={() => goHomeAndScrollTo('home-contact')}>Contact</a>
        </div>
        <div className="header-menu-item">
          <a href={'/about'}>About</a>
        </div>
      </div>
    </div>
  );
};
