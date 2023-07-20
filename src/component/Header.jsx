import { useState } from 'react';
import r_icon from '../images/r_icon.png';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/header.css';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  // Function to handle the click event on the menu icon
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={r_icon} width='95px' alt="" /> {/* Logo image */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon /> {/* Menu icon */}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="*">Resume Template</NavLink> {/* Link to the "Resume Template" page */}
            </li>
            <li>
              <NavLink to="/myresume">My Resume</NavLink> {/* Link to the "My Resume" page */}
            </li>
            <li>
              <NavLink to="/about">About</NavLink> {/* Link to the "About" page */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
