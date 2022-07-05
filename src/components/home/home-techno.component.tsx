import React from 'react'
import { TooltipComponent } from 'components/common/tooltip.component'
import ReactImage from '../../assets/image/react.png'
import ReduxImage from '../../assets/image/redux.png'
import VueImage from '../../assets/image/vue.png'
import QuasarImage from '../../assets/image/quasar.png'
import JsImage from '../../assets/image/js.png'
import HtmlImage from '../../assets/image/html.png'
import SassImage from '../../assets/image/sass.png'
import CssImage from '../../assets/image/css.png'
import NodeImage from '../../assets/image/node.svg'
import NestImage from '../../assets/image/nest.png'
import PassportImage from '../../assets/image/passport.png'
import PostgresImage from '../../assets/image/postgres.png'
import MongoImage from '../../assets/image/mongo.png'
import MysqlImage from '../../assets/image/mysql.png'
import JestImage from '../../assets/image/jest.png'
import MochaImage from '../../assets/image/mocha.png'
import ChaiImage from '../../assets/image/chai.png'
import CypressImage from '../../assets/image/cypress.png'
import TypescriptImage from '../../assets/image/typescript.png'
import GraphqlImage from '../../assets/image/graphQL.png'
import GitImage from '../../assets/image/git.png'
import GitlabCiImage from '../../assets/image/gitlab-ci.png'
import GithubActions from '../../assets/image/github-actions.png'
import AwsImage from '../../assets/image/aws.png'
import WordpressImage from '../../assets/image/wordpress.jpg'

const CLEAN_ARCHITECTURE_URL =
    'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html'

const HomeTechnoComponent = () => {
  return (
      <div className="home-techno-container">

          <div className="title">Tech Stack</div>

          <div className="home-techno-content">
              <div className="home-techno-item-wrapper">
                  <div className="home-techno-item">
                      <div className="subtitle">Front-end</div>
                      <div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://reactjs.org/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="React.js"
                                      className="techno-image"
                                      src={ReactImage} />
                              </a>
                              <a
                                  target="_blank"
                                  href="https://redux.js.org/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Redux"
                                      className="techno-image"
                                      src={ReduxImage} />
                              </a>
                          </div>

                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://vuejs.org/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Vue.js + Vuex + Vue Router"
                                      className="techno-image"
                                      src={VueImage}
                                  />
                              </a>
                              <a
                                  target="_blank"
                                  href="https://quasar.dev/"
                                  rel="noreferrer">

                                  <img
                                      data-tip="Quasar framework"
                                      className="techno-image"
                                      src={QuasarImage} />
                              </a>
                          </div>

                          <div className="home-techno-subItem">
                              <img
                                  data-tip="Javascript"
                                  className="techno-image"
                                  src={JsImage} />
                              <img
                                  data-tip="HTML5"
                                  className="techno-image"
                                  src={HtmlImage} />
                              <a
                                  target="_blank"
                                  href="https://sass-lang.com/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="SASS"
                                      className="techno-image"
                                      src={SassImage} />
                              </a>
                              <img
                                  data-tip="CSS3"
                                  className="techno-image"
                                  src={CssImage} />
                          </div>
                      </div>
                  </div>
                  <div className="home-techno-item">
                      <div className="subtitle">Back-end</div>
                      <div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://nodejs.org/en/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Node.js"
                                      className="techno-image"
                                      src={NodeImage} />
                              </a>
                          </div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://nestjs.com/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Nest.js"
                                      className="techno-image"
                                      src={NestImage} />
                              </a>
                          </div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://www.passportjs.org/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Passport.js"
                                      className="techno-image"
                                      src={PassportImage} />
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="home-techno-item">
                      <div className="subtitle">Database</div>
                      <div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://www.postgresql.org/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="PostgreSQL"
                                      className="techno-image"
                                      src={PostgresImage} />
                              </a>
                          </div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://www.mongodb.com/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="MongoDB"
                                      className="techno-image"
                                      src={MongoImage} />
                              </a>
                          </div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://www.mysql.com/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="MySQL"
                                      className="techno-image"
                                      src={MysqlImage} />
                              </a>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="home-techno-item-wrapper">
                  <div className="home-techno-item">
                      <div className="subtitle">Testing</div>
                      <div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://jestjs.io/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Jest"
                                      className="techno-image"
                                      src={JestImage} />
                              </a>
                          </div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://mochajs.org/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Mocha"
                                      className="techno-image"
                                      src={MochaImage} />
                              </a>
                              <a
                                  target="_blank"
                                  href="https://www.chaijs.com/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Chai"
                                      className="techno-image"
                                      src={ChaiImage} />
                              </a>
                          </div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://www.cypress.io/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Cypress"
                                      className="techno-image"
                                      src={CypressImage} />
                              </a>
                          </div>
                          <div data-tip="Test Driven Development">TDD friendly</div>
                      </div>
                  </div>
                  <div className="home-techno-item">
                      <div className="subtitle">Workflow</div>
                      <div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://aws.amazon.com/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Amazon Web Services"
                                      className="techno-image"
                                      src={AwsImage} />
                              </a>
                          </div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://www.typescriptlang.org/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Typescript"
                                      className="techno-image"
                                      src={TypescriptImage} />
                              </a>
                              <a
                                  target="_blank"
                                  href="https://graphql.org/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="GraphQL"
                                      className="techno-image"
                                      src={GraphqlImage} />
                              </a>
                          </div>

                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://git-scm.com/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Git"
                                      className="techno-image"
                                      src={GitImage} />
                              </a>
                              <a
                                  target="_blank"
                                  href="https://docs.gitlab.com/ee/ci/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Gitlab CI/CD"
                                      className="techno-image"
                                      src={GitlabCiImage} />
                              </a>
                              <a
                                  target="_blank"
                                  href="https://github.com/features/actions"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Github actions"
                                      className="techno-image"
                                      src={GithubActions} />
                              </a>
                          </div>
                          <div>
                              <a
                                  target="_blank"
                                  href={CLEAN_ARCHITECTURE_URL}
                                  rel="noreferrer">Clean
                                  architecture
                              </a>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="home-techno-item-wrapper">
                  <div className="home-techno-item">
                      <div className="subtitle">CMS</div>
                      <div>
                          <div className="home-techno-subItem">
                              <a
                                  target="_blank"
                                  href="https://wordpress.org/"
                                  rel="noreferrer">
                                  <img
                                      data-tip="Wordpress"
                                      className="techno-image"
                                      src={WordpressImage} />
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <TooltipComponent />
      </div>
  )
}

export default HomeTechnoComponent
