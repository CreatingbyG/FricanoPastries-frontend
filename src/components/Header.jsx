import React from "react";
import {useNavigate} from "react-router-dom"
import logo from "../assets/fricanologo1.svg";
import navlogo from "../assets/fricanopastriesnavllogo.svg";
import "bootstrap-icons/font/bootstrap-icons.css";


function Header({ onLogoHover, onLogoLeave, animate, cartItems, isOrderActive, setIsOrderActive, removeFromCart}) {

  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    navigate("checkout");
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
                    <img src={cake.imageUrl} alt={cake.name} />
                    <div>
                      <p>{cake.name}</p>
                      <p>Quantity: {cake.quantity}</p>
                      <p>Price: ${cake.price}</p>
                      <button className="remove-item-button" onClick={() => handleRemoveItem(cake.id)}>-</button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="cart-empty">Tu carrito está vacío.</p>
              )}
              {cartItems.length > 0 && (
                <button onClick={handleCheckout} className="checkout-button">Checkout</button>
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
