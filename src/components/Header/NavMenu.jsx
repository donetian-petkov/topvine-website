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
    )
}
