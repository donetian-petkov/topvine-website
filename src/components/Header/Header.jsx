import {
    Image,
    InputGroup,
    Input,
    InputRightElement,
    Link,
    Flex,
    Button,
    HStack,
    Container,
    Box, Menu
} from "@chakra-ui/react";
import logo from "../../assets/img/logo.svg";
import {MenuIcon} from "../Icons/MenuIcon.jsx";
import {UserIcon} from "../Icons/UserIcon.jsx";
import {CartIcon} from "../Icons/CartIcon.jsx";
import {CloseIcon, SearchIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {DropdownMenu} from "./DropdownMenu.jsx";
import {Logo} from "./Logo.jsx";
import {SearchInput} from "./SearchInput.jsx";
import {NavMenu} from "./NavMenu.jsx";

export const Header = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

    return (
        <Container maxW="100%" p="0" m="0">
            <Flex
                as="nav"
                maxW="100%"
                bg="accentPrimary"
                color="backgroundSecondary"
                fontFamily="content"
                h="150px"
                justifyContent="center"
                alignItems="center"
                gap="60px"
            >
                <Logo/>
                <SearchInput/>

                <NavMenu
                    toggleDrawer={toggleDrawer}
                    isDrawerOpen={isDrawerOpen}
                />

            </Flex>

            {isDrawerOpen && (
                <Box
                    position="absolute"
                    top="150px"
                    left="0"
                    width="100%"
                    bg="#d7dde2"
                    boxShadow="md"
                    p={4}
                    zIndex="999"
                >
                    <DropdownMenu/>
                </Box>
            )}
        </Container>
    );
};
