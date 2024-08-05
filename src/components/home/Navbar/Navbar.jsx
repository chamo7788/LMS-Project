import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../../assets/css/home/navbar.css";
import logoLight from "../../../assets/images/logo-black.png";
import { FaBars, FaTimes, FaEnvelope, FaGlobe } from "react-icons/fa";
import imagesData from "../../../data/student_Images.json";
import { login, logout } from "../../../actions/authActions";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLogoutVisibility = () => {
    setIsLogoutVisible(!isLogoutVisible);
  };

  useEffect(() => {
    const image = imagesData.images.find((img) => img.id === "1");
    if (image) {
      import(`../../../${image.url}`)
        .then((imageModule) => {
          setSelectedImage({
            ...image,
            url: imageModule.default,
          });
        })
        .catch((err) => console.error("Failed to load image:", err));
    }
  }, []);

  const handleLogin = () => {
    dispatch(login({ id: 1, name: "John Doe" })); // Example login
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/home">
          <img src={logoLight} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <ul
        className={`navbar__menu ${
          isMobileMenuOpen ? "navbar__menu--active" : ""
        }`}
      >
        <li className="navbar__menu-item">
          <NavLink
            to="/"
            onClick={toggleMobileMenu}
            className="navbar__menu-link"
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink
            to="/courses"
            onClick={toggleMobileMenu}
            className="navbar__menu-link"
            activeClassName="active"
          >
            Courses
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink
            to="/about"
            onClick={toggleMobileMenu}
            className="navbar__menu-link"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink
            to="/services"
            onClick={toggleMobileMenu}
            className="navbar__menu-link"
            activeClassName="active"
          >
            Services
          </NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink
            to="/contact"
            onClick={toggleMobileMenu}
            className="navbar__menu-link"
            activeClassName="active"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar__searchbox">
        <input type="text" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="navbar__icons">
        <div className="navbar__message">
          <NavLink to="/messenger">
            <FaEnvelope className="navbar__message-icon" />
          </NavLink>
        </div>
      </div>
      <div className="navbar__icons">
        <div className="navbar__social-media">
          <NavLink to="/socialmedia">
            <FaGlobe className="navbar__social-icon" />
          </NavLink>
        </div>
      </div>
      <div className="navbar__login">
        {!isLoggedIn ? (
          <button onClick={handleLogin} className={"navbar__login-button"}>
            Login
          </button>
        ) : (
          <div>
            {selectedImage && (
              <NavLink className="userDetails_pic" onClick={toggleLogoutVisibility}>
                <img
                  src={selectedImage.url}
                  alt="User"
                  className={"Login_pic"}
                />
              </NavLink>
            )}
            {isLogoutVisible && (
              <button onClick={handleLogout} className={"navbar__logout-button"}>
                Logout
              </button>
            )}
          </div>
        )}
      </div>
      <div className="navbar__mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}