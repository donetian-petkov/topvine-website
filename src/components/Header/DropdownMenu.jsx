import {
    Container, Box, Link, Heading,
} from '@chakra-ui/react'

export const DropdownMenu = () => {

    const commonMenuStyles = {
        display: "flex",
        flexDirection: "column",
        p: "10px",
        fontSize: "16px",
        fontFamily: "title",
    }


    return (
        <Container maxW="100%">
            <Heading id="menu-title" fontSize={"1.752rem"}>Menu</Heading>
            <Container display={"flex"}
                       flexDirection={"row"}
                       justifyContent={"space-around"}
                       m={0}
                       p={0}>
                <Box id="products-menu" {...commonMenuStyles}>
                    <Link w={200} fontSize="19px" href="/">Products</Link>
                    <Link href="/">Basket Strainers</Link>
                    <Link href="/">Commercial Reducers</Link>
                    <Link href="/">Modulating Float Valves</Link>
                    <Link href="/">Specialty Filters</Link>
                    <Link href="/">Sand Filters</Link>
                    <Link href="/">Spare Parts</Link>
                </Box>
                <Box id="solutions-menu" {...commonMenuStyles}>
                    <Link w={200} fontSize="19px" href="/">Solutions</Link>
                    <Link href="/">Aquatic</Link>
                    <Link href="/">General Water</Link>
                    <Link href="/">Industrial</Link>
                </Box>
                <Box id="design-menu" {...commonMenuStyles}>
                    <Link w={200} fontSize="19px" href="/">Design</Link>
                    <Link href="/">Strainer Basket Details</Link>
                    <Link href="/">Quality Control</Link>
                    <Link href="/">Our Design Process</Link>
                    <Link href="/">White Papers</Link>
                </Box>
                <Box id="resources-menu" {...commonMenuStyles}>
                    <Link w={200} fontSize="19px" href="/">Resources</Link>
                    <Link href="/">Blog</Link>

                </Box>
                <Box id="company-menu" {...commonMenuStyles}>
                    <Link w={200} fontSize="19px" href="/">Company</Link>
                    <Link href="/"> About Us</Link>
                    <Link href="/">Job Openings</Link>
                    <Link href="/">Contact Us</Link>
                    <Link href="/">Privacy Policy</Link>
                </Box>
            </Container>
        </Container>

    )

}
