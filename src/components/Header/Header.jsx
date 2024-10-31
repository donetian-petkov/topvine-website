import {Container, Image, InputGroup, Input, InputRightElement, Button, Stack, Link} from "@chakra-ui/react";
import logo from "../../assets/img/logo.svg";
import basket from "../../assets/img/basket.svg";
import user from "../../assets/img/user.svg";
import plus from "../../assets/img/plus.svg";
import {SearchIcon} from "@chakra-ui/icons";


export const Header = () => {
    return (
        <Container maxW="100%"
                   bg="accentPrimary"
                   color="backgroundSecondary"
                   fontFamily="body"
                   h="150px"
                   justifyContent={"center"}
                   alignItems={"center"}
                   display={"flex"}
                   gap={"60px"}
        >
                <Image src={logo} alt="logo" w="399px" h="72px"/>
                <InputGroup w="351px" h="44px" color="textSecondary">
                    <Input
                        type='tel'
                        placeholder='Search product, model, sku, keyword…'
                        _placeholder={{color: 'textSecondary'}}
                        bg="backgroundSecondary"
                    />
                    <InputRightElement pointerEvents='none'>
                        <SearchIcon color='textSecondary'/>
                    </InputRightElement>
                </InputGroup>
                    <Link href='https://chakra-ui.com' isExternal>
                        <Image src={`${basket}`} alt="basket" w="31px" h="27px"/>
                        cart
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <Image src={`${user}`} alt="basket" w="31px" h="27px"/>
                        login
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        <Image src={`${plus}`} alt="basket" w="31px" h="27px"/>
                        menu
                    </Link>
        </Container>
    )
}
