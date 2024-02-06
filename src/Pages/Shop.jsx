import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/popular/Popular';
import Offer from '../Components/offers/Offers';
import NewCollection from '../Components/NewCollection/NewCollection';
import NewsLetter from '../Components/newsLetter/NewsLetter';

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  );
}

export default Shop;
