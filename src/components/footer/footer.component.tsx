import { useNavigate } from 'react-router-dom';
import { Anchor, Frame } from 'react95';

export const FooterComponent = () => {
  const navigate = useNavigate();
  return (
    <Frame variant="status" className="footer-container">
      © Florent Cadot • 2026 •
      <span onClick={() => navigate('/about')}>
        <Anchor className="footer-link">&nbsp;About</Anchor>
      </span>
    </Frame>
  );
};
