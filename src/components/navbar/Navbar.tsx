import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { ReactElement, useEffect } from "react";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import useApp from "../../hooks/useApp";
import { NavItems } from "../../utils/interfaces/AppInterfaces";
import breakPoints from "../../utils/interfaces/Breakpoints";
import SlideCartItem from "../SlideCartItem";
import NavLink from "./components/NavLink";
import cartAnimation from "../../assets/cart-animation.json";
import MobileMenu from "./MobileMenu";

function Navbar(props: NavItems): ReactElement {
  const { logo, navLinks } = props;
  const appContext = useApp();
  const { isOpen, onClose, onOpen } = useDisclosure();

  // TRACK SCREEN SIZE TO ADJUST THE NAV APPEARANCE
  const [isSmallerThan850] = useMediaQuery("(max-width: 48em)");

  return (
    <Box
      w="100%"
      pos="fixed"
      zIndex={999}
      transition="all .3s ease"
      bg={appContext?.scrolled ? "palette.secondary" : ""}
      h={appContext?.scrolled ? "4.5rem" : "6rem"}
      boxShadow={
        appContext?.scrolled ? "0 0 10px rgba(43, 39, 62, .5)" : "none"
      }
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        margin="auto"
        w={breakPoints}
      >
        {/* LOGO */}
        <Link to="/">
          <Image
            transition="all .3s ease"
            width="7rem"
            borderRadius=".3rem"
            src={logo}
          />
        </Link>
        {/* NAVIGATION LINKS */}
        {isSmallerThan850 ? (
          <HStack spacing=".1rem">
            <Box
              fontSize="1.5rem"
              color="palette.accent"
              transition="all .3s ease"
              _hover={{ transform: "scale(.9)" }}
              cursor="pointer"
              onClick={onOpen}
              pos="relative"
            >
              <Lottie
                loop
                animationData={cartAnimation}
                play
                style={{ width: 70, height: 70 }}
              />
              <Box pos="absolute" top="1rem" right="1rem">
                <Center
                  fontSize=".6rem"
                  fontFamily="inter"
                  fontWeight="medium"
                  bg="palette.accent"
                  w=".6rem"
                  p=".6rem"
                  h=".6rem"
                  borderRadius="10rem"
                  color="palette.primary"
                >
                  {appContext?.cartItems.length}
                </Center>
              </Box>
            </Box>
            <MobileMenu />
          </HStack>
        ) : (
          <HStack spacing="2rem">
            {navLinks.map((nav) => {
              return <NavLink nav={nav} key={nav} />;
            })}
          </HStack>
        )}
        <Box
          fontSize="1.5rem"
          color="palette.accent"
          transition="all .3s ease"
          _hover={{ transform: "scale(.9)" }}
          cursor="pointer"
          onClick={onOpen}
          pos="relative"
          display={{ base: "none", md: "block" }}
        >
          <Lottie
            loop
            animationData={cartAnimation}
            play
            style={{ width: 80, height: 80 }}
          />
          <Box pos="absolute" top="1rem" right="1rem">
            <Center
              fontSize=".6rem"
              fontFamily="inter"
              fontWeight="medium"
              bg="palette.accent"
              w="1rem"
              p=".7rem"
              h="1rem"
              borderRadius="10rem"
              color="palette.primary"
            >
              {appContext?.cartItems.length}
            </Center>
          </Box>
        </Box>
      </Flex>
      <SlideCartItem isOpen={isOpen} onDrawerClose={onClose} />
    </Box>
  );
}

export default Navbar;
