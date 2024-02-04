import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from '../src/Pages/Shop';
import ShopCategory from '../src/Pages/ShopCategory';
import Product from '../src/Pages/Product';
import Cart from '../src/Pages/Cart';
import LoginSignUp from '../src/Pages/LoginSignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/child" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/signup" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
