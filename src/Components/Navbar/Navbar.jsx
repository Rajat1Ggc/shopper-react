import React, { useState } from 'react';
import './Navbar.css';

import logo from '../Assets/UserAssets/logo.png';
import cart_icon from '../Assets/UserAssets/cart_icon.png';
import { Link } from 'react-router-dom';
function Navbar() {
  const [menu, setMenu] = useState('shop');
  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>shopper</p>
        </div>
      </Link>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu('shop');
          }}
        >
          <Link to="/">shop </Link>
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('menu')}>
          <Link to="/men"> mens </Link>
          {menu === 'menu' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('women')}>
          <Link to="/women">women </Link>
          {menu === 'women' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link to="/child">kids </Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
