import {Button, HStack, Link} from "@chakra-ui/react";
import {CartIcon} from "../Icons/CartIcon.jsx";
import {UserIcon} from "../Icons/UserIcon.jsx";
import {MenuIcon} from "../Icons/MenuIcon.jsx";
import {CloseIcon} from "@chakra-ui/icons";

export const NavMenu = ({
                            isDrawerOpen,
                            toggleDrawer
                        }) => {

    const commonLinkStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        _hover: {
            color: "textSecondary",
            textDecoration: "none"
        },
        w: [{base:"20px"},{sm:"20px"},{lg:"31px"}],
    };

    return (
        <HStack id="nav-menu" spacing={["20px","20px","60px"]} top={[5,5,"auto"]} position={["absolute","absolute","relative"]} left={[280,280,"auto"]}>

            <Link id="cart" href="/cart" {...commonLinkStyles}>
                <CartIcon alt="cart" w="100%" h="27px"/>
                cart
            </Link>

            <Link id="login" href="/login" {...commonLinkStyles}>
                <UserIcon alt="login" w="100%" h="27px"/>
                login
            </Link>

            <Button
                id="menu"
                variant="unstyled"
                {...commonLinkStyles}
                onClick={toggleDrawer}
            >
                {!isDrawerOpen ? (
                    <MenuIcon id="open-button" alt="menu" w="100%" h="27px"/>
                ) : (
                    <CloseIcon id="close-button"/>
                )}
                menu
            </Button>
        </HStack>
    )
}
