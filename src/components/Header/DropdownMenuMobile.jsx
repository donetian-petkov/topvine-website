import { useState } from 'react';
import { Box, VStack, HStack, Text, IconButton } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const categories = [
    {
        name: 'Category 1',
        subcategories: ['Subcategory 1.1', 'Subcategory 1.2'],
    },
    {
        name: 'Category 2',
        subcategories: ['Subcategory 2.1', 'Subcategory 2.2'],
    },
    // Add more categories as needed
];

export const DropdownMenuMobile = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleSubmenu = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    return (
        <VStack align="start" spacing={4}>
            {categories.map((category, index) => (
                <Box key={index} w="100%">
                    <HStack justify="space-between" w="100%">
                        <Text>{category.name}</Text>
                        <IconButton
                            icon={openCategory === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
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
    );
};
