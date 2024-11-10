import {Text, Box, Container, Button, Heading, HStack} from "@chakra-ui/react";
import {Product} from "./Product/Product.jsx";

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
            <Text alignContent="center" bg="accentPrimary" w="100%" textAlign="left" color="backgroundMain" borderRadius="8px" h="44px">Product Categories</Text>
            <HStack>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </HStack>
            <Text alignContent="center" bg="accentPrimary" w="100%" textAlign="left" color="backgroundMain" borderRadius="8px" h="44px">Product Categories</Text>
            <HStack>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </HStack>
        </>
    )
}
