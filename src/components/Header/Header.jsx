import {
    Flex,
    Container,
    Box,
} from "@chakra-ui/react";
import {DropdownMenu} from "./DropdownMenu.jsx";
import {Logo} from "./Logo.jsx";
import {SearchInput} from "./SearchInput.jsx";
import {NavMenu} from "./NavMenu.jsx";

export const Header = (
    {
        isDrawerOpen,
        setDrawerOpen,
        toggleDrawer
    }
) => {


    return (
        <Container as="header" id="header" maxW="100%" p="0" m="0" zIndex="9999" position="sticky" top={0}>
            <Flex
                id="nav-bar"
                as="nav"
                maxW="100%"
                bg="accentPrimary"
                color="backgroundSecondary"
                fontFamily="heading"
                h={["150px"]}
                justifyContent="center"
                alignItems="center"
                direction={['column', 'column', 'column', 'row']}
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
                <Box id="dropdown-menu"
                     position="absolute"
                     top="150px"
                     left="0"
                     width="100%"
                     bg="#d7dde2"
                     boxShadow="md"
                     p={4}
                     zIndex="999"
                >
                    {<DropdownMenu/>
                    }

                </Box>
            )}
        </Container>
    );
};
