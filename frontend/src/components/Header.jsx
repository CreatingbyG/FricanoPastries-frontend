import React from "react";
import logo from "../assets/fricanologo1.svg";
import navlogo from "../assets/fricanopastriesnavllogo.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import PayButton from "./PayButton";


function Header({ onLogoHover, onLogoLeave, animate, cartItems, isOrderActive, setIsOrderActive, removeFromCart}) {

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };


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
            <a href="/" className="nav__links-custom">
              <i className="bi bi-house-heart" style={{ fontSize: "24px" }}></i>
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
          <a href="#" className={`nav__links-custom ${animate ? 'animate' : ' '}`} onClick={() => setIsOrderActive(!isOrderActive)}>
          <i className="bi bi-bag" style={{ fontSize: "24px" }}></i>Orders
            </a>
            <div className="cart__dropdown" style={{ display: isOrderActive ? 'block' : 'none' }}>
              {cartItems.length > 0 ? (
                cartItems.map(cake => (
                  <div key={cake.id} className="cart-item">
                    <img name="image" src={cake.imageUrl} alt={cake.name} />
                    <div className="cart-item-products">
                      <p name="name">{cake.name}</p>
                      <p name="quantity">Quantity: {cake.quantity}</p>
                      <p name="price">Price: ${cake.price}</p>
                    </div>
                    <button className="remove-item-button" onClick={() => handleRemoveItem(cake.id)}>-</button>
                  </div>
                ))
              ) : (
                <p className="cart-empty">Tu carrito está vacío.</p>
              )}
              {cartItems.length > 0 && (
                <PayButton cartItems={cartItems}/>
              )}
            </div>
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
