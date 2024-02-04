import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/UserAssets/exclusive_image.png';

function Offer() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img alt="" src={exclusive_image} />
      </div>
    </div>
  );
}

export default Offer;
