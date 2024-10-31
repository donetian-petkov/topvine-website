import {
    Image,
    InputGroup,
    Input,
    InputRightElement,
    Link,
    Flex,
    Button,
    HStack,
    Icon,
    Container, Box
} from "@chakra-ui/react";
import logo from "../../assets/img/logo.svg";
import {MenuIcon} from "../Icons/MenuIcon.jsx";
import {UserIcon} from "../Icons/UserIcon.jsx";
import {CartIcon} from "../Icons/CartIcon.jsx";
import {SearchIcon} from "@chakra-ui/icons";
import {useState} from "react";

export const Header = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

    return (
        <>
        <Flex as="nav"
              maxW="100%"
              bg="accentPrimary"
              color="backgroundSecondary"
              fontFamily="body"
              h="150px"
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              gap={"60px"}
        >
            <Link href='https://chakra-ui.com' isExternal>
                <Image
                    src={`${logo}`}
                    alt="logo"
                    w="399px"
                    h="72px"/>
            </Link>
            <InputGroup w="351px" h="44px" color="textSecondary">
                <Input
                    type='tel'
                    placeholder='Search product, model, sku, keyword…'
                    _placeholder={{color: 'textSecondary'}}
                    bg="backgroundSecondary"
                    borderRadius={"8px"}
                    border="none"
                />
                <InputRightElement pointerEvents='none'>
                    <SearchIcon color='textSecondary'/>
                </InputRightElement>
            </InputGroup>
            <HStack
                spacing={"60px"}
            >
                <Link
                    href='/cart'
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    _hover={{
                        color: "textSecondary",
                        textDecoration: "none"
                    }}
                >
                    <CartIcon
                        alt="cart"
                        w="31px"
                        h="27px"
                    />
                    cart
                </Link>
                <Link
                    href='/login'
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    _hover={{
                        color: "textSecondary",
                        textDecoration: "none"
                    }}
                >
                    <UserIcon
                        alt="login"
                        w="31px"
                        h="27px"
                    />
                    login
                </Link>
                <Button
                    variant="unstyled"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    _hover={{
                        color: "textSecondary",
                        textDecoration: "none",
                    }}
                    onClick={toggleDrawer}
                >
                    <MenuIcon
                        alt="menu"
                        w="31px"
                        h="27px"
                    />
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
            bg="gray.100"
            boxShadow="md"
            p={4}
            zIndex="999"
        >
            <Button w="full" mb={2}>Option 1</Button>
            <Button w="full" mb={2}>Option 2</Button>
            <Button w="full">Option 3</Button>
        </Box>
    )}
        </>
    )
}
