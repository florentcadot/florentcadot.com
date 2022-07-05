import React from 'react'
import { Link } from 'react-scroll'

const HeaderComponent = () => {
  return (
      <div className="header-container">
          <div className="header-image-container">
              <div className="header-image-content"></div>
          </div>
          <div className="header-menu">
              <div className="header-menu-item">
                  <Link
                      activeClass="active"
                      to="HomeMain"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      Home
                  </Link>
              </div>
              <div className="header-menu-item">
                  <Link
                      activeClass="active"
                      to="HomeTechno"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      Tech Stack
                  </Link>
              </div>
              <div className="header-menu-item">
                  <Link
                      activeClass="active"
                      to="HomeContact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      Contact
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default HeaderComponent
