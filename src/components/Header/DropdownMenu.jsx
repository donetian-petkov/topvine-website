import {
    Container, Box, Link, Heading, useMediaQuery, VStack, HStack, Text, IconButton,
} from '@chakra-ui/react';
import {ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons';
import {useState} from 'react';

export const DropdownMenu = () => {
    const commonMenuStyles = {
        display: "flex",
        flexDirection: "column",
        p: "10px",
        fontSize: "16px",
        fontFamily: "body",
    };

    const categories = [
        {
            name: 'Products',
            subcategories: [
                'Basket Strainers',
                'Commercial Reducers',
                'Modulating Float Valves',
                'Specialty Filters',
                'Sand Filters',
                'Spare Parts',
            ],
        },
        {
            name: 'Solutions',
            subcategories: [
                'Aquatic',
                'General Water',
                'Industrial',
            ],
        },
        {
            name: 'Design',
            subcategories: [
                'Strainer Basket Details',
                'Quality Control',
                'Our Design Process',
                'White Papers',
            ],
        },
        {
            name: 'Resources',
            subcategories: [
                'Blog',
            ],
        },
        {
            name: 'Company',
            subcategories: [
                'About Us',
                'Job Openings',
                'Contact Us',
                'Privacy Policy',
            ],
        },
    ];

    const [isSmallerThan430] = useMediaQuery('(max-width: 430px)');
    const [openCategory, setOpenCategory] = useState(null);

    const toggleSubmenu = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    return (
        !isSmallerThan430 ? (
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
        ) : (
            <VStack id="dropdown-menu" align="center" spacing={4}>
                {categories.map((category, index) => (
                    <Box key={index} w="90%">
                        <HStack justify="space-between" id="category-menu" borderBottom="2px solid #52A6D7" w="100%">
                            <Text color="accentSecondary" id="category-text" fontWeight="bold">{category.name}</Text>
                            <IconButton id="category-button"
                                icon={openCategory === index ?
                                    <ChevronUpIcon id="category-arrow-icon" color="accentSecondary"/> :
                                    <ChevronDownIcon id="category-arrow-icon" color="accentSecondary"/>}
                                onClick={() => toggleSubmenu(index)}
                                variant="ghost"
                                size="sm"
                            />
                        </HStack>
                        {openCategory === index && (
                            <VStack align="start" pl={4} spacing={2}>
                                {category.subcategories.map((subcategory, subIndex) => (
                                    <Text key={subIndex}>{subcategory}</Text>
                                ))}
                            </VStack>
                        )}
                    </Box>
                ))}
            </VStack>
        )
    );
};
