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
        }
    };

    return (
        <HStack id="nav-menu" spacing="60px">

            <Link id="cart" href="/cart" {...commonLinkStyles}>
                <CartIcon alt="cart" w="31px" h="27px"/>
                cart
            </Link>

            <Link id="login" href="/login" {...commonLinkStyles}>
                <UserIcon alt="login" w="31px" h="27px"/>
                login
            </Link>

            <Button
                id="menu"
                variant="unstyled"
                {...commonLinkStyles}
                onClick={toggleDrawer}
            >
                {!isDrawerOpen ? (
                    <MenuIcon id="open-button" alt="menu" w="31px" h="27px"/>
                ) : (
                    <CloseIcon id="close-button"/>
                )}
                menu
            </Button>
        </HStack>
    )
}
