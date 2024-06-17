import React from 'react'
import GmailImage from '../../assets/image/gmail.png'
import LinkedinImage from '../../assets/image/linkedin.png'
import MaltImage from '../../assets/image/malt.png'
import GithubImage from '../../assets/image/github.svg'

const HomeContactComponent = () => {
  return (
      <div className="home-contact-container">
          <div className="title-container">
              <p className="title">Contact</p>
          </div>

          <div className="home-contact-content">
              <div>
                  <div className="home-contact-item">
                      <img
                          className="contact-image"
                          src={GmailImage} />
                      <a href="mailto:florentcadot.dev@gmail.com"> florentcadot.dev@gmail.com</a>
                  </div>
                  <div className="home-contact-item">
                      <img
                          className="contact-image"
                          src={LinkedinImage} />
                      <a
                          target="_blank"
                          href="https://www.linkedin.com/in/florent-cadot"
                          rel="noreferrer">Linkedin</a>
                  </div>
                  <div className="home-contact-item">
                      <img
                          className="contact-image"
                          src={MaltImage} />
                      <a
                          target="_blank"
                          href="https://www.malt.fr/profile/florentcadot"
                          rel="noreferrer">Malt freelance</a>
                  </div>
                  <div className="home-contact-item">
                      <img
                          className="contact-image"
                          src={GithubImage} />
                      <a
                          target="_blank"
                          href="https://github.com/florentcadot"
                          rel="noreferrer">Github</a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default HomeContactComponent
