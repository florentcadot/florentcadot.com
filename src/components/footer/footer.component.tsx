import { useNavigate } from 'react-router-dom';

export const FooterComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-menu">
        © Florent Cadot • 2024 •
        <span onClick={() => navigate('/about')}>
          <a className="footer-link">&nbsp;About</a>
        </span>
      </div>
    </div>
  );
};
