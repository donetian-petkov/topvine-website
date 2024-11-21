import {Text, Box, Container, Button, Heading, HStack, VStack, Stack} from "@chakra-ui/react";
import { Product } from "./Product/Product.jsx";

export const Shop = () => {
    return (
        <>
            <VStack textAlign="center" m="44px">
                <Heading fontSize="48px" p="22px" color="accentPrimary">
                    Shop Fluidtrol
                </Heading>
                <Button
                    bg="accentSecondary"
                    color="backgroundMain"
                    borderRadius="22px"
                    w="330px"
                >
                    View All Products
                </Button>
            </VStack>
            <Text
                alignContent="center"
                bg="accentPrimary"
                w="100%"
                textAlign="left"
                color="backgroundMain"
                borderRadius="8px"
                h="44px"
                pl="5"
            >
                Product Categories
            </Text>
            <Stack mt="47px" mb="278px" direction={['column', 'column', 'row']}>
                <Product category="Aquatic" productImg="aquatic.png" />
                <Product category="General Water" productImg="generalWater.png" />
                <Product category="Industrial" productImg="industrial.png" />
            </Stack>
            <Text
                alignContent="center"
                bg="accentPrimary"
                w="100%"
                textAlign="left"
                color="backgroundMain"
                borderRadius="8px"
                h="44px"
                pl="5"
            >
                Solutions
            </Text>
            <Stack mt="47px" direction={['column', 'column', 'row']}>
                <Product category="Aquatic" productImg="aquatic.png" />
                <Product category="General Water" productImg="generalWater.png" />
                <Product category="Industrial" productImg="industrial.png" />
            </Stack>
        </>
    );
};
