import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { shopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/UserAssets/dropdown_icon.png';
import Item from '../Components/item/Item';

function ShopCategory(props) {
  const { all_product } = useContext(shopContext);
  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexShot">
        <p>
          <span>showing 1 - 12</span>out of 36 products
        </p>
        <div className="shopCategory-sort">
          sort by
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopCategory-loadmore">Explore more</div>
    </div>
  );
}

export default ShopCategory;
