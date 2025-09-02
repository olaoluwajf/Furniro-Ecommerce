import { Routes, Route } from "react-router-dom";
import { CartProvider } from './Components/CartContext';
import Home from "./Components/Home";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from "./Components/Products";
import ShopHero from "./Components/ShopHero";
import ProductDetail from "./Components/ProductDetail";
import Comparison from "./Components/Comparison";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Blog from "./Components/Blog";


function App() {
  return (
    <>
    <CartProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<ShopHero/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/Comparison" element={<Comparison/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/Blog" element={<Blog/>} />
      </Routes>
      <Footer/>
      </CartProvider>
    </>
  );
}

export default App;