import {
    Box,
    Heading,
    Text,
    Image,
    HStack,
    VStack,
    Button, Stack,
} from "@chakra-ui/react";

export const About = () => {
    return (
        <Box
            mt="50px"
            p="60px"
            bg="backgroundGray"
            textAlign="center"
            alignItems="center"
        >
            <Heading fontSize="26px" textAlign="start">
                Why Trust Fluidtrol?
            </Heading>
            <Stack textAlign="left" fontSize="16px" mt="50px" mb="50px" direction={['column','column','row']}>
                <VStack alignItems="baseline">
                    <Text fontWeight="bold">ISO 9001:2008 Certified</Text>
                    <Text>
                        Our quality system certification ensures the highest manufacturing
                        standards.
                    </Text>
                    <Text fontWeight="bold">Expert Customization</Text>
                    <Text>
                        We work with your design engineers to meet your exact requirements.
                    </Text>
                    <Text fontWeight="bold">99% On-Time Delivery</Text>
                    <Text>
                        We consider timely delivery a crucial part of our service to our
                        customers.
                    </Text>
                    <Text fontWeight="bold">Warehousing Inventory</Text>
                    <Text>
                        Inventory is managed on-site to reduce lead times and keep costs
                        low.
                    </Text>
                </VStack>
                <VStack alignItems="baseline">
                    <Text fontWeight="bold">Material Selection</Text>
                    <Text>
                        We use the highest quality PVC, CPVC, PP, PVDF, FRP, and Stainless
                        Steels.
                    </Text>
                    <Text fontWeight="bold">We Test Everything</Text>
                    <Text>
                        Every basket and Wye strainer is hydro tested before leaving our
                        facility.
                    </Text>
                    <Text fontWeight="bold">Long-Life Span</Text>
                    <Text>
                        We’ve been manufacturing innovative non-metallic strainers for over
                        20 years.
                    </Text>
                    <Text fontWeight="bold">Wide Range of Sizes</Text>
                    <Text>
                        There’s virtually no limit to our vertical and horizontal strainer
                        sizes.
                    </Text>
                </VStack>
                <Image src="/img/about.png"/>
            </Stack>
            <Heading
                fontSize="24px"
                textAlign="center"
                color="accentPrimary"
            >
                The Very Best in Customer Service, Customization, and Delivery
            </Heading>
            <Button
                bg="accentSecondary"
                color="backgroundMain"
                border="1px solid"
                borderColor="accentSecondary"
                borderRadius="22px"
                w="330px"
                mt="50px"
                mb="50px"
            >
                Contact Us
            </Button>
        </Box>
    );
};
