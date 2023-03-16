import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <Menu>
      <MenuButton>
        <Box fontSize="1.5rem">
          <AiOutlineMenuFold />
        </Box>
      </MenuButton>
      <MenuList bg="palette.primary" color="palette.secondary">
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/products">Products</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MobileMenu;
