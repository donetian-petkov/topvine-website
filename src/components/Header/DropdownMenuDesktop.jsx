import {Box, Container, Heading, Link} from "@chakra-ui/react";
import {useState} from "react";

export const DropdownMenuDesktop = ({
                                        categories,
                                        commonMenuStyles,
                                        openCategory,
                                        toggleSubmenu
                                    }) => {
    const [initialCategories, setInitialCategories] = useState(true);

    const toggleCategories = (index) => {

        toggleSubmenu(index);
        setInitialCategories(false);
    }

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
                        <Box id="category-title" _hover={{cursor: "pointer"}} onClick={() => toggleCategories(index)} w={200} fontSize="19px" color="accentSecondary" fontWeight="bold" fontFamily="heading"
                              href={"#"}>{category.name}</Box>
                        {initialCategories && category.subcategories.map((subcategory, subIndex) => (
                            <Link key={subIndex} href={`https://fluidtrol.com/${subcategory.toLowerCase().replaceAll(' ','-')}`}>{subcategory}</Link>
                        ))}
                        {openCategory === index && category.subcategories.map((subcategory, subIndex) => (
                            <Link key={subIndex} href={`https://fluidtrol.com/${subcategory.toLowerCase().replaceAll(' ','-')}`}>{subcategory}</Link>
                        ))}
                    </Box>
                ))}
            </Container>
        </Container>
    )
}
