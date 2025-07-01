import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from "./Components/Products";
import ShopHero from "./Components/ShopHero";
import ProductDetail from "./Components/ProductDetail";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ShopHero" element={<ShopHero/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/shop" element={<Products/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;