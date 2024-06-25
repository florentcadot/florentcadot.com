import FlorentImage from '../../assets/image/florent.jpg';

const TEXT_PRESENTATION = ` 
      I can help you to develop your SAAS. With dedication and passion. 
`;

export const HomeMainComponent = () => {
  return (
    <div className="home-main-container">
      <div className="home-main-content">
        <div>
          <img className="home-main-photo" src={FlorentImage} />
        </div>
        <div className="home-main-presentation-container">
          <div className="home-main-presentation-content">
            {TEXT_PRESENTATION}
          </div>
        </div>
      </div>
    </div>
  );
};
