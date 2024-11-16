import {Image, Heading, HStack, Text, VStack} from "@chakra-ui/react";

export const Footer = () => {
    return (
        <HStack bg="accentPrimary" p="50px" color="backgroundMain">
            <Text color="backgroundPrimary">© 2023 Fluidtrol Process Technologies, Inc. All Rights Reserved</Text>
            <VStack>
                <Text>For Customer Service Call</Text>
                <Heading>888-551-0511</Heading>
                <Text>or send an email to: fpt@fluidtrol.com</Text>
            </VStack>
            <HStack><Image src="/img/linkedin.png"/>
                <Image src="/img/twitter.png"/>
                <Image src="/img/facebook.png"/></HStack>
        </HStack>
    )
}
