import React from 'react';
import './Footer.css';

import footer_logo from '../Assets/UserAssets/logo_big.png';
import instagram_icon from '../Assets/UserAssets/instagram_icon.png';

import pintester_icon from '../Assets/UserAssets/pintester_icon.png';
import whatsapp_icon from '../Assets/UserAssets/whatsapp_icon.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer_logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="instagram_icon" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="pintester_icon" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2023 - all right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
