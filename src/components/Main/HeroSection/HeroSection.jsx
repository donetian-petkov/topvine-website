import { Box, Image, Text } from "@chakra-ui/react";

export const HeroSection = () => {
    return (
        <Box fontFamily="heading" lineHeight="52px" color="accentPrimary">
            <Image src="/img/hero.png" />
            <Text
                pos="absolute"
                letterSpacing="0.67px"
                top="198px"
                left="450"
                width={["400px", "500px", "700px"]}
                height="124px"
                fontSize={[24, 30, 49]}
                fontWeight="bold"
                textAlign="right"
            >
                The Aquatic Professionals Number One Choice
            </Text>
            <Text
                pos="absolute"
                letterSpacing="-0.01px"
                top="290px"
                left="670"
                width="500"
                height="43px"
                fontSize={[16, 16, 28]}
                fontWeight="light"
            >
                For Strainers, Reducers & Float Valves
            </Text>
        </Box>
    );
};
