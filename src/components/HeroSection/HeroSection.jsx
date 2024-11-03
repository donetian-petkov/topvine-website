import {Box, Image, Text} from "@chakra-ui/react";

export const HeroSection = () => {
    return (
        <Box fontFamily="title" letterSpacing="0.67px" lineHeight="52px">
            <Image src="/img/hero.png"/>
            <Text pos="absolute" top="198px" left="534px" width="604px" height="124x" color="accentPrimary" fontSize="40" fontWeight="bold" textAlign="right">
                The Aquatic Professionals Number One Choice
            </Text>
            <Text pos="absolute" top="314px" left="675px" width="463px" height="43px" color="red" fontSize="28px">
                For Strainers, Reducers & Float Valves
            </Text>
        </Box>
    )
}
