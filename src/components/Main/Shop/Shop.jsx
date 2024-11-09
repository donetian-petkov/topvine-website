import {Text, Box, Container, Button, Heading} from "@chakra-ui/react";

function Product() {
    return null;
}

export const Shop = () => {
    return (
        <>
            <Container>
                <Container textAlign="center" m="44px">
                    <Heading fontSize="48px" p="22px" color="accentPrimary">Shop Fluidtrol</Heading>
                    <Button bg="accentSecondary" color="backgroundMain" borderRadius="22px" w="330px"> View All
                        Products</Button>
                </Container>
            </Container>
            <Text bg="acentPrimary" w="100%" textAlign="left">Product Categories</Text>
            <Container>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </Container>
            <Text>Product Categories</Text>
            <Container>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </Container>
        </>
    )
}
