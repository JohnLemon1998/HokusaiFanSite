// A page that describes who you are (or the person you creating a website for)
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
      
      <div className="header-container">
        
        <div className='header-icon'>
            <Link to="/">Kastushika Hokusai</Link>
        </div>

        <div className='header-list'>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
         </div>
        </div>
    );
  }
  
  export default Header;
  