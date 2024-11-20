import { Box, Image, Text } from "@chakra-ui/react";

export const HeroSection = () => {
    return (
        <Box fontFamily="heading" lineHeight="52px" color="accentPrimary" pos={['relative','relative','auto']}>
            <Image src="/img/hero.png" />
            <Text
                pos="absolute"
                letterSpacing="0.67px"
                top={["20px","20px","50px"]}
                left={["150","150","460"]}
                width={["250px", "250px", "700px"]}
                height="124px"
                lineHeight={["20px", "20px", "52px"]}
                fontSize={[16, 16, 49]}
                fontWeight="bold"
                textAlign="right"
            >
                The Aquatic Professionals Number One Choice
            </Text>
            <Text
                pos="absolute"
                letterSpacing="-0.01px"
                top={["40px","40px","140px"]}
                left={["240px","240px","680"]}
                width="500"
                height="43px"

                fontSize={[9, 9, 28]}
                fontWeight="light"
            >
                For Strainers, Reducers & Float Valves
            </Text>
        </Box>
    );
};
