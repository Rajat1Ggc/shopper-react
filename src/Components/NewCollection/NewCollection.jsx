import React from 'react';
import './NewCollection.css';

import new_collections from '../Assets/UserAssets/new_collections';
import Item from '../item/Item';

function NewCollection() {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collection">
        {new_collections.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
