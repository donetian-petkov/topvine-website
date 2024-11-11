import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Link,
    Text
} from "@chakra-ui/react";

export const Product = ({
                            category = "Aquatic",
                            productImg = "aquatic.png",
                        }) => {
    return (
        <Card w="100%" alignItems="center" variant="unstyled">
            <CardBody border="none" textAlign="center">
                <Heading fontSize="24px">{category}</Heading>
                <Text fontSize="24px">Basket Strainers</Text>
                <Link href={`/product-category/fluidtrol/${category.toLowerCase()}`}>
                    <Image
                        src={`/img/${productImg}`}
                        alt="Green double couch with wooden legs"
                    />
                </Link>
            </CardBody>
            <CardFooter>
                <Link href={`/product-category/fluidtrol/${category.toLowerCase()}`}>
                    <Button
                        bg="backgroundMain"
                        color="accentSecondary"
                        border="1px solid"
                        borderColor="accentSecondary"
                        borderRadius="22px"
                        w="330px"
                        _hover={{bg: "accentSecondary", color: "backgroundMain"}}
                    >
                        View {category} Strainers
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};
