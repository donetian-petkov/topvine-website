import {Image, Link} from "@chakra-ui/react";
import logo from "../../assets/img/logo.svg";

export const Logo = () => {
    return (
        <Link id="logo" href="/">
            <Image src={`${logo}`} alt="logo" w="399px" h="72px" />
        </Link>
    )
}
