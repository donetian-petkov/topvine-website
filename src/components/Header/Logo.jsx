import {Image, Link} from "@chakra-ui/react";

export const Logo = () => {
    return (
        <Link id="logo" href="/">
            <Image src="/img/logo.svg" alt="logo" w="399px" h="72px" />
        </Link>
    )
}
