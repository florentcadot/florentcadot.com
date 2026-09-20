import { Frame, Window, WindowContent } from 'react95';
import FlorentImage from '../../assets/image/florent.jpg';

const TEXT_PRESENTATION = ` 
Hi! I’m a Senior Full-Stack Engineer building robust, scalable SaaS products with a pragmatic, quality-first approach.
`;

export const HomeMainComponent = () => {
  return (
    <div className="home-main-container">
      <div className="home-main-content">
        <Frame variant="well" className="home-main-photo-frame">
          <img className="home-main-photo" src={FlorentImage} />
        </Frame>
        <Window className="home-main-window">
          <WindowContent>
            <div className="home-main-presentation-content">
              {TEXT_PRESENTATION}
            </div>
          </WindowContent>
        </Window>
      </div>
    </div>
  );
};
