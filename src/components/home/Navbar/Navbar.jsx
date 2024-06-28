import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../../../assets/css/home/navbar.css';
import logoLight from '../../../assets/images/logo-black.png';
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';

export function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <NavLink to='/home'>
          <img src={logoLight} alt="Logo" className='logo' />
        </NavLink>
      </div>
      <ul className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--active' : ''}`}>
        <li className='navbar__menu-item'>
          <NavLink to="/" onClick={toggleMobileMenu} className='navbar__menu-link' activeClassName="active">Home</NavLink>
        </li>
        <li className='navbar__menu-item'>
          <NavLink to="/course" onClick={toggleMobileMenu} className='navbar__menu-link' activeClassName="active">Courses</NavLink>
        </li>
        <li className='navbar__menu-item'>
          <NavLink to="/about" onClick={toggleMobileMenu} className='navbar__menu-link' activeClassName="active">About</NavLink>
        </li>
        <li className='navbar__menu-item'>
          <NavLink to="/3" onClick={toggleMobileMenu} className='navbar__menu-link' activeClassName="active">Services</NavLink>
        </li>
        <li className='navbar__menu-item'>
          <NavLink to="/4" onClick={toggleMobileMenu} className='navbar__menu-link' activeClassName="active">Contact</NavLink>
        </li>
      </ul>
      <div className='navbar__searchbox'>
        <input type="text" placeholder='Search' />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='navbar__login'>
        <NavLink to="/login">
          <button className='navbar__login-button'>Login</button>
        </NavLink>
      </div>
      <div className='navbar__icons'>
        <div className='navbar__message'>
          <NavLink to="/messenger">
            <FaEnvelope className='navbar__message-icon' />
          </NavLink>
        </div>
      </div>

      <div className='navbar__mobile-menu-icon' onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
