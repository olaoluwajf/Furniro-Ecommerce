import Home from "./Components/Home";
import Footer from './Components/Footer'
import Header from './Components/Header'
import Room from "./Components/Room";
import Products from "./Components/Products";
import RoomInspiration from "./Components/RoomInspiration";
import GalleryImages from "./Components/GalleryImage";
import Shop from "./Components/Shop";
import ShopHero from "./Components/ShopHero";
import {Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";

function App() {

  return (
    <>
      <Header/>
      <Routes>
              <Route path="/" element={<Home/>}>  </Route>
              <Route path="/ShopHero" element={<ShopHero/>}></Route>
              <Route path="/ProductDetail" element={<ProductDetail/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
