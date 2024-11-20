import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {useEffect, useState} from "react";
import {Main} from "./components/Main/Main.jsx";
import {Box} from "@chakra-ui/react";

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
        if (!['plus',
            'menu',
            'dropdown-menu',
            'open-button',
            'close-button',
            'products-menu',
            'resources-menu',
            'menu-title',
            'design-menu',
            'company-menu'].includes(event.target.id)) {
            setDrawerOpen(false);
        }
    };

    return (
        <Box maxW={['0','430px','768px','992px','1200px']}>
            <Header
                isDrawerOpen={isDrawerOpen}
                setDrawerOpen={setDrawerOpen}
                toggleDrawer={toggleDrawer}
            />
            <Main/>
            <Footer/>
        </Box>
    )
}

export default App
