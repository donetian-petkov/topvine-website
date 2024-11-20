import {Image, Link} from "@chakra-ui/react";

export const Logo = () => {
    return (
        <Link id="logo" href="/" top={[5,5,"auto"]} right={[70,75,"auto"]} position={["absolute","relative","relative"]}>
            <Image src="/img/logo.svg" alt="logo" w={[206,206,399]} h="72px" />
        </Link>
    )
}
