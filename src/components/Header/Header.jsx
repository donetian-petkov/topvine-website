import {Container, Image, InputGroup, InputLeftElement, Input, InputRightElement} from "@chakra-ui/react";
import logo from "../../assets/img/logo.svg";
import {SearchIcon} from "@chakra-ui/icons";


export const Header = () => {
    return (
        <Container maxW="100%" bg="accentPrimary" color="backgroundSecondary" fontFamily="body">
            <Image src={logo} alt="logo"/>
            <InputGroup w="351px" h="44px" color="textSecondary" bg="">
                <Input type='tel' placeholder='Search product, model, sku, keyword…'/>
                <InputRightElement pointerEvents='none'>
                    <SearchIcon color='gray.300'/>
                </InputRightElement>
            </InputGroup>
        </Container>
    )
}
