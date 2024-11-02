import {HeroSection} from "../HeroSection/HeroSection.jsx";
import {Shop} from "../Shop/Shop.jsx";
import {About} from "../About/About.jsx";
import {Container} from "@chakra-ui/react";

export const Main = () => {
    return (
        <Container as="main" maxW="100%" m={0} p={0}>
            <HeroSection/>
            <Shop/>
            <About/>
        </Container>
    )
}
