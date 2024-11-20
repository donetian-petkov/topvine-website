import {Box, Container, Heading, Link} from "@chakra-ui/react";

export const DropdownMenuDesktop = ({
                                        categories,
                                        commonMenuStyles
                                    }) => {
    return (
        <Container maxW="100%" justifyContent="center">
            <Heading id="menu-title" fontSize={"1.752rem"} m={5}>Menu</Heading>
            <Container display={"flex"}
                       flexDirection={"row"}
                       justifyContent={"space-around"}
                       m={5}
                       p={0}>
                {categories.map((category, index) => (
                    <Box key={index} id="category-menu" {...commonMenuStyles} p={0}>
                        <Link w={200} fontSize="19px" color="accentSecondary" fontWeight="bold" fontFamily="heading"
                              href="/">{category.name}</Link>
                        {category.subcategories.map((subcategory, subIndex) => (
                            <Link key={subIndex} href="/">{subcategory}</Link>
                        ))}
                    </Box>
                ))}
            </Container>
        </Container>
    )
}
