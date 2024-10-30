import {Container, Image, InputGroup, Input, InputRightElement} from "@chakra-ui/react";
import logo from "../../assets/img/logo.svg";
import {SearchIcon} from "@chakra-ui/icons";


export const Header = () => {
    return (
        <Container maxW="100%" bg="accentPrimary" color="backgroundSecondary" fontFamily="body">
            <Image src={logo} alt="logo" w="399px" h="72px"/>
            <InputGroup w="351px" h="44px" color="textSecondary">
                <Input
                    type='tel'
                    placeholder='Search product, model, sku, keyword…'
                    _placeholder={{ color: 'textSecondary' }}
                    bg="backgroundSecondary"
                />
                <InputRightElement pointerEvents='none'>
                    <SearchIcon color='textSecondary'/>
                </InputRightElement>
            </InputGroup>

        </Container>
    )
}
