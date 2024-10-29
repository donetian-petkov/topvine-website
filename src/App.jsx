import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {HeroSection} from "./components/HeroSection/HeroSection.jsx";
import {Shop} from "./components/Shop/Shop.jsx";
import {About} from "./components/About/About.jsx";
import {Footer} from "./components/Footer/Footer.jsx";

function App() {

  return (
    <>
        <Header/>
        <HeroSection/>
        <Shop/>
        <About/>
        <Footer/>
    </>
  )
}

export default App
