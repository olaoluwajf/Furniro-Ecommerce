import Home from "./Components/Home";
import Footer from './Components/Footer'
import Header from './Components/Header'
import Room from "./Components/Room";

function App() {

  return (
    <>
        <Header/>
        <Home/>
        <div className="flex flex-row text-center justify-center px-4 py-4 ">
          <Room name="Dining" />
          <Room name="Living"/>
          <Room name="Bedroom"/>
        </div>
        <Footer/>
    </>
  )
}

export default App
