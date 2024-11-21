import {Image, Heading, HStack, Text, Stack, VStack, Link, useMediaQuery, Icon} from "@chakra-ui/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";


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
                        <Link
                            href="https://www.linkedin.com/company/fluidtrol-process-technologies-inc-/"
                            isExternal
                        >
                            <Icon
                                as={FontAwesomeIcon}
                                icon={faLinkedinIn}
                                bg="#8492A1"
                                color="#002345"
                                fontSize="24px"
                                borderRadius="5px"
                                p="5px"
                            />
                        </Link>
                        <Link href="https://x.com/fluidtrol" isExternal>
                            <Image pl="41px" src="/img/twitter.png" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/profile.php?id=100054308419009"
                            isExternal
                        >
                            <Image pl="41px" src="/img/facebook.png" />
                        </Link>
                    </HStack>

                </>

            }

            <Text color="backgroundPrimary" fontSize="14px">
                © 2023 Fluidtrol Process Technologies, Inc. {!isSmallerThan430 && <br/>}
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
                        <Link
                            href="https://www.linkedin.com/company/fluidtrol-process-technologies-inc-/"
                            isExternal
                        >
                            <Icon
                                as={FontAwesomeIcon}
                                icon={faLinkedinIn}
                                bg="#8492A1"
                                color="#002345"
                                fontSize="24px"
                                borderRadius="5px"
                                p="5px"
                            />
                        </Link>
                        <Link href="https://x.com/fluidtrol" isExternal>
                            <Image pl="41px" src="/img/twitter.png" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/profile.php?id=100054308419009"
                            isExternal
                        >
                            <Image pl="41px" src="/img/facebook.png" />
                        </Link>
                    </HStack>

                </>
            }
        </Stack>
    );
};
