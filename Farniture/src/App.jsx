import Home from "./Components/Home";
import Footer from './Components/Footer'
import Header from './Components/Header'
import Room from "./Components/Room";
import Products from "./Components/Products";
import RoomInspiration from "./Components/RoomInspiration";
import GalleryImages from "./Components/GalleryImage";

function App() {

  return (
    <>
        <Header/>
        <Home/>
        <div className="flex flex-row text-center justify-center px-4 py-4 ">
           <Room />
        </div>
        <div>
          <Products/>
        </div>
        <RoomInspiration/>
        <GalleryImages/>
        <Footer/>
    </>
  )
}

export default App
