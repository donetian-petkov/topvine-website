import {
    Container, Box, Link, Heading, useMediaQuery, VStack, HStack, Text, IconButton,
} from '@chakra-ui/react';
import {ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons';
import {useState} from 'react';
import {DropdownMenuDesktop} from "./DropdownMenuDesktop.jsx";
import {DropdownMenuMobile} from "./DropdownMenuMobile.jsx";

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
            <DropdownMenuDesktop categories={categories} commonMenuStyles={commonMenuStyles}/>
        ) : (
            <DropdownMenuMobile categories={categories} openCategory={openCategory} toggleSubmenu={toggleSubmenu}/>
        )
    );
};
