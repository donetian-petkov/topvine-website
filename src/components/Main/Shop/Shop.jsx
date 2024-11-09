import {Text, Box, Container, Button, Heading} from "@chakra-ui/react";

function Product() {
    return null;
}

export const Shop = () => {
    return (
       <Container>
           <Box textAlign="center" m="52px">
               <Heading fontSize="48px" p="22px" >Shop Fluidtrol</Heading>
               <Button bg="accentSecondary" color="backgroundMain" borderRadius="22px"> View All Products</Button>
           </Box>
           <Box>
               <Text></Text>
               <Product></Product>
               <Product></Product>
               <Product></Product>
           </Box>
           <Box>
               <Text></Text>
               <Product></Product>
               <Product></Product>
               <Product></Product>
           </Box>
       </Container>
    )
}
