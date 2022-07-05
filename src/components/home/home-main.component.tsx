import React from 'react'
import FlorentImage from '../../assets/image/florent.jpg'

const TEXT_PRESENTATION = `
      I'm Florent. I develop features for your existing web applications and/or 
      help you to build your POC, MVP, SAAS from scratch.
`

const HomeMainComponent = () => {
  return (
      <div className="home-main-container">
          <div className="home-main-content">
              <div>
                  <img
                      className="home-main-photo"
                      src={FlorentImage} />
              </div>
              <div className="home-main-presentation-container">
                  <div className="home-main-presentation-content">
                      { TEXT_PRESENTATION }
                  </div>
              </div>
          </div>
      </div>
  )
}

export default HomeMainComponent
