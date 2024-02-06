import React, { createContext } from 'react';
import all_product from '../Components/Assets/UserAssets/all_product';

export const shopContext = createContext(null);
const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  return (
    <shopContext.Provider value={contextValue}>
      {props.Children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
