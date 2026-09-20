import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar, Button, Frame, Toolbar } from 'react95';

const LogoText = styled(Frame)`
  padding: 6px 14px;
  cursor: pointer;
  background: ${({ theme }) => theme.headerBackground};
  color: ${({ theme }) => theme.headerText};
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1px;
  user-select: none;
`;

interface HeaderMenuItemProps {
  label: string;
  to: string;
  handleNavigate: (to: string) => void;
}

const HeaderMenuItem = ({ label, to, handleNavigate }: HeaderMenuItemProps) => {
  return (
    <Button variant="menu" onClick={() => handleNavigate(to)}>
      {label}
    </Button>
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
    <AppBar position="sticky" className="header-container">
      <Toolbar className="header-toolbar">
        <LogoText variant="well" onClick={() => goHomeAndScrollTo('home-main')}>
          florentcadot.com
        </LogoText>
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
          <Button variant="menu" onClick={() => navigate('/about')}>
            About
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
