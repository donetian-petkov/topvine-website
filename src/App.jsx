import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {HeroSection} from "./components/HeroSection/HeroSection.jsx";
import {Shop} from "./components/Shop/Shop.jsx";
import {About} from "./components/About/About.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {useEffect, useState} from "react";

function App() {

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const handleClick = (event) => {
        console.log(event.target)
        console.log(event.target.id)
        if (!['plus','menu','dropdown-menu','open-button','close-button','products-menu','resources-menu','menu-title','design-menu','company-menu'].includes(event.target.id)) {
            setDrawerOpen(false);
        }
    };

    return (
        <>
            <Header
                isDrawerOpen={isDrawerOpen}
                setDrawerOpen={setDrawerOpen}
                toggleDrawer={toggleDrawer}
            />
            <HeroSection/>
            <Shop/>
            <About/>
            <Footer/>
        </>
    )
}

export default App
