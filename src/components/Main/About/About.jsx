import {Container, Heading, Text, Image, HStack, VStack} from "@chakra-ui/react";

export const About = () => {
    return (
        <Container w="1200px" h="760px">
            <Heading>
                Why Trust Fluidtrol?
            </Heading>
            <HStack>
                <VStack textAlign="left" w="330px">
                    <Text>ISO 9001:2008 Certified </Text>
                    <Text> Our quality system certification ensures the highest manufacturing standards. </Text>
                    <Text>Expert Customization </Text>
                    <Text>We work with your design engineers to meet your exact requirements. </Text>
                    <Text>99% On-Time Delivery </Text>
                    <Text> We consider timely delivery a crucial part of our service to our customers. </Text>
                    <Text> Warehousing Inventory </Text>
                    <Text> is managed on-site to reduce lead times and keep costs low.</Text>
                </VStack>
                <VStack textAlign="left" w="330px">
                    <Text>ISO 9001:2008 Certified </Text>
                    <Text> Our quality system certification ensures the highest manufacturing standards. </Text>
                    <Text>Expert Customization </Text>
                    <Text>We work with your design engineers to meet your exact requirements. </Text>
                    <Text>99% On-Time Delivery </Text>
                    <Text> We consider timely delivery a crucial part of our service to our customers. </Text>
                    <Text> Warehousing Inventory </Text>
                    <Text> is managed on-site to reduce lead times and keep costs low.</Text>
                </VStack>
                <Image src="/img/about.png"/>
            </HStack>
        </Container>
    )
}
