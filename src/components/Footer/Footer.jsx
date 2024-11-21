import { Image, Heading, HStack, Text, Stack, VStack } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Stack direction={['column', 'column', 'row']}
            as="footer"
            bg="accentPrimary"
            padding="60px"
            color="backgroundMain"
            justifyContent="space-between"
            borderTop = "4px solid #FFAE00"
        >
            <Text color="backgroundPrimary" fontSize="12px">
                © 2023 Fluidtrol Process Technologies, Inc. <br />
                All Rights Reserved
            </Text>
            <VStack>
                <Text fontSize="24px" opacity="75%">
                    For Customer Service Call
                </Text>
                <Heading fontSize="48px">888-551-0511</Heading>
                <Text fontSize="18px">or send an email to: fpt@fluidtrol.com</Text>
            </VStack>
            <HStack>
                <Image pl="41px" src="/img/linkedin.png" />
                <Image pl="41px" src="/img/twitter.png" />
                <Image pl="41px" src="/img/facebook.png" />
            </HStack>
        </Stack>
    );
};
