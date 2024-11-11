import {Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text} from "@chakra-ui/react";

export const Product = ({
    category= "Aquatic",
    productImg = "aquatic.png",
}) => {
    return (
        <Card w='100%' alignItems="center" variant="filled" bg="backgroundMain">
            <CardBody border="none" textAlign="center">
                <Heading fontSize="24px">{category}</Heading>
                <Text fontSize='24px'>Basket Strainers</Text>
                <Image
                    src={`/img/${productImg}`}
                    alt='Green double couch with wooden legs'
                />
            </CardBody>
            <CardFooter>
                <Button bg="accentSecondary" color="backgroundMain" borderRadius="22px" w="330px">
                    View {category} Strainers
                </Button>
            </CardFooter>
        </Card>
    )
}
