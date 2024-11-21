import {Image, Heading, HStack, Text, Stack, VStack, useMediaQuery} from "@chakra-ui/react";

export const Footer = () => {

    const [isSmallerThan430] = useMediaQuery('(max-width: 430px)');


    return (
        <Stack direction={['column', 'column', 'row']}
               as="footer"
               bg="accentPrimary"
               p={['20px', '20px', '60px']}
               color="backgroundMain"
               justifyContent="space-between"
               borderTop="4px solid #FFAE00"
               alignItems="center"
               textAlign={['center', 'center', 'left']}
        >
            {isSmallerThan430 &&
                <>
                    <VStack pb={5}>
                        <Text fontSize="16px" opacity="75%">
                            For Customer Service Call
                        </Text>
                        <Heading fontSize="28px">888-551-0511</Heading>
                        <Text fontSize="18px">or send an email to: fpt@fluidtrol.com</Text>
                    </VStack>
                    <HStack pb={5}>
                        <Image pl="41px" src="/img/linkedin.png"/>
                        <Image pl="41px" src="/img/twitter.png"/>
                        <Image pl="41px" src="/img/facebook.png"/>
                    </HStack>
                </>

            }

            <Text color="backgroundPrimary" fontSize="14px">
                © 2023 Fluidtrol Process Technologies, Inc. {!isSmallerThan430 && <br/> }
                All Rights Reserved
            </Text>

            {!isSmallerThan430 &&
                <>
                    <VStack>
                        <Text fontSize="24px" opacity="75%">
                            For Customer Service Call
                        </Text>
                        <Heading fontSize="48px">888-551-0511</Heading>
                        <Text fontSize="18px">or send an email to: fpt@fluidtrol.com</Text>
                    </VStack>
                    <HStack>
                        <Image pl="41px" src="/img/linkedin.png"/>
                        <Image pl="41px" src="/img/twitter.png"/>
                        <Image pl="41px" src="/img/facebook.png"/>
                    </HStack>
                </>
            }
        </Stack>
    );
};
