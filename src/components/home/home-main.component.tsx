import FlorentImage from '../../assets/image/florent.jpg';

const TEXT_PRESENTATION = ` 
      Hey ! I'm a Full-Stack developer and I can help you develop your SAAS. (with passion and efficiency) 
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
