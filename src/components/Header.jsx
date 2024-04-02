import React from "react";
import logo from "../assets/fricanologo1.svg";
import navlogo from "../assets/fricanopastriesnavllogo.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header({ onLogoHover, onLogoLeave }) {
  return (
    <div className="header">
      <div className="header__container">
        <nav className="sidebar">
          <div className="sidebar__logo">
           <img className="sidebar__logo-image" src={navlogo} alt="Menu Logo"                      onMouseEnter={onLogoHover} 
              onMouseLeave={onLogoLeave} />
          </div>
        </nav>
        <div className="logo__container">
          <img className="logo" src={logo} alt="Logo" />   
        </div>
        <ul className="nav__links">
          <li>
            <a href="#" class="nav__links-custom">
              <i className="bi bi-cake-fill" style={{ fontSize: "24px" }}></i>
              Home
            </a>
          </li>
          {/* <li>
            <a href="#" class="nav__links-custom">
              <i className="bi bi-people" style={{ fontSize: "24px" }}></i>
              Customers
            </a>
          </li> */}
          <li>
            <a href="#" class="nav__links-custom">
            <i class="bi bi-cart-fill" style={{ fontSize: "24px" }}></i>Orders
            </a>
          </li>
          {/* <li>
            <a href="#" class="nav__links-custom">
              <i className="bi bi-grid" style={{ fontSize: "24px" }}></i>
              Products
            </a>
          </li> */}
        </ul>
        {/* <div className="login-signup">
          <button>Login</button>
          <button className="signup-btn">Sign-up</button>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
