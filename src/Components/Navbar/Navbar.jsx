import React from 'react';
import './Navbar.css';

import logo from '../Assets/UserAssets/logo.png';
import cart_icon from '../Assets/UserAssets/cart_icon.png';
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>shopper</p>
      </div>
      <ul className="nav-menu">
        <li>
          shop <hr />
        </li>
        <li>men</li> <li>women</li> <li>kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
