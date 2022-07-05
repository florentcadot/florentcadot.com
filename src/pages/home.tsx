import React from 'react'
import HomeMainComponent from 'components/home/home-main.component'
import HomeTechnoComponent from 'components/home/home-techno.component'
import HomeContactComponent from 'components/home/home-contact.component'
import { Element } from 'react-scroll'

const Home = () => {
  return (
      <div>
          <Element name="HomeMain">
              <HomeMainComponent />
          </Element>
          <Element name="HomeTechno">
              <HomeTechnoComponent />
          </Element>
          <Element name="HomeContact">
              <HomeContactComponent />
          </Element>
      </div>
  )
}

export default Home
