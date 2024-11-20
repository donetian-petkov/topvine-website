import {Box, HStack, IconButton, Text, VStack} from "@chakra-ui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";

export const DropdownMenuMobile = ({
                                       categories,
                                       openCategory,
                                       toggleSubmenu
                                   }) => {
    return (
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
}
