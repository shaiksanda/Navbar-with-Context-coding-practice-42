// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const handleTheme = () => {
        toggleTheme(!isDarkTheme)
      }

      return isDarkTheme ? (
        <div className="navbar-container-dark">
          <div>
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            </Link>
          </div>
          <div style={{display: 'flex', gap: '10px'}}>
            <Link to="/" className="nav-link">
              <h1 className="heading-dark">Home</h1>
            </Link>
            <Link to="/about" className="nav-link">
              <h1 className="heading-dark">About</h1>
            </Link>
          </div>
          <div>
            <button type="button" data-testid="theme" onClick={handleTheme}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="website-logo"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="navbar-container">
          <div>
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            </Link>
          </div>
          <div style={{display: 'flex', gap: '10px'}}>
            <Link to="/" className="nav-link">
              <h1 className="heading">Home</h1>
            </Link>
            <Link to="/about" className="nav-link">
              <h1 className="heading">About</h1>
            </Link>
          </div>
          <div>
            <button type="button" data-testid="theme" onClick={handleTheme}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="website-logo"
              />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
