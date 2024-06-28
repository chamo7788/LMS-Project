import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../../assets/css/home/navbar.css'
import logoLight from '../../../assets/images/logo-black.png'
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';

export function Navbar(){

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/home'>
        <img src={logoLight} alt="Logo" className='logo' />
        </Link>
      </div>
      <ul className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--active' : ''}`}>
        <li className='navbar__menu-item'><Link to="/home" onClick={toggleMobileMenu} className='navbar__menu-link'>Home</Link></li>
        <li className='navbar__menu-item'><Link to="/messenger" onClick={toggleMobileMenu} className='navbar__menu-link'>Messenger</Link></li>
        <li className='navbar__menu-item'><Link to="/" onClick={toggleMobileMenu} className='navbar__menu-link'>About</Link></li>
        <li className='navbar__menu-item'><Link to="/3" onClick={toggleMobileMenu} className='navbar__menu-link'>Services</Link></li>
        <li className='navbar__menu-item'><Link to="/4" onClick={toggleMobileMenu} className='navbar__menu-link'>Contact</Link></li>
      </ul>
      <div className='navbar__searchbox'>
        <input type="text" placeholder='Search' />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='navbar__login'>
      <Link to="/login">
        <button className='navbar__login-button'>Login</button>
        </Link>
      </div>
      <div className='navbar__icons'>
        <div className='navbar__message'>
          <Link to="/messenger">
            <FaEnvelope className='navbar__message-icon' />
          </Link>
        </div>
      </div>  
      
      <div className='navbar__mobile-menu-icon' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
