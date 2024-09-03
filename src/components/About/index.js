// Write your code here
// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div>
          <Navbar />
          <div className="container-dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
              className="image"
            />
            <h1 className="sub-heading">About</h1>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
              className="image"
            />
            <h1>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
