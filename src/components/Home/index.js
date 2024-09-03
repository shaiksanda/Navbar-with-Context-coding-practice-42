// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return isDarkTheme ? (
        <div>
          <Navbar />
          <div className="container-dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
              className="image"
            />
            <h1 className="sub-heading">Home</h1>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              className="image"
            />
            <h1>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
