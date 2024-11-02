import {Box, Image, Text} from "@chakra-ui/react";

export const HeroSection = () => {
    return (
        <Box pos="relative">
            <Image src="/img/hero.png"/>
            <Text pos="absolute" top="198px" left="534px" width="604px" height="124x" color="red" transform="translate(-50%,-50%)">
                This text is centered on the image
            </Text>
        </Box>
    )
}
