import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from "./Components/Products";
import ShopHero from "./Components/ShopHero";
import ProductDetail from "./Components/ProductDetail";
import Comparison from "./Components/Comparison";
import Contact from "./Components/Contact";
import About from './Components/About'
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/ShopHero" element={<ShopHero/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/shop" element={<Products/>} />
        <Route path="/Comparison" element={<Comparison/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Checkout" element={<Checkout/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;