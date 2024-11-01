import {Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

export const SearchInput = () => {
    return (
        <InputGroup id="search-input" w="351px" h="44px" color="textSecondary">
            <Input
                type="tel"
                placeholder="Search product, model, sku, keyword…"
                _placeholder={{ color: "textSecondary" }}
                bg="backgroundSecondary"
                borderRadius="8px"
                border="none"
            />
            <InputRightElement pointerEvents="none">
                <SearchIcon color="textSecondary" />
            </InputRightElement>
        </InputGroup>
    )
}
