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
    Box
} from "@chakra-ui/react";
import logo from "../../assets/img/logo.svg";
import { MenuIcon } from "../Icons/MenuIcon.jsx";
import { UserIcon } from "../Icons/UserIcon.jsx";
import { CartIcon } from "../Icons/CartIcon.jsx";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { DropdownMenu } from "./DropdownMenu.jsx";

export const Header = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

    const commonLinkStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        _hover: {
            color: "textSecondary",
            textDecoration: "none"
        }
    };

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
                <Link href="/">
                    <Image src={`${logo}`} alt="logo" w="399px" h="72px" />
                </Link>

                <InputGroup w="351px" h="44px" color="textSecondary">
                    <Input
                        type="tel"
                        placeholder="Search product, model, sku, keyword…"
                        _placeholder={{ color: "textSecondary" }}
                        bg="backgroundSecondary"
                        borderRadius="8px"
                        border="none"
                    />
                    <InputRightElement pointerEvents="none">
                        <SearchIcon color="textSecondary" />
                    </InputRightElement>
                </InputGroup>

                <HStack spacing="60px">
                    <Link href="/cart" {...commonLinkStyles}>
                        <CartIcon alt="cart" w="31px" h="27px" />
                        cart
                    </Link>

                    <Link href="/login" {...commonLinkStyles}>
                        <UserIcon alt="login" w="31px" h="27px" />
                        login
                    </Link>

                    <Button
                        variant="unstyled"
                        {...commonLinkStyles}
                        onClick={toggleDrawer}
                    >
                        {!isDrawerOpen ? (
                            <MenuIcon alt="menu" w="31px" h="27px" />
                        ) : (
                            <CloseIcon />
                        )}
                        menu
                    </Button>
                </HStack>
            </Flex>

            {isDrawerOpen && (
                <Box
                    position="absolute"
                    top="150px"  // Adjust to header height
                    left="0"
                    width="100%"
                    bg="#d7dde2"
                    boxShadow="md"
                    p={4}
                    zIndex="999"
                >
                    <DropdownMenu />
                </Box>
            )}
        </Container>
    );
};
