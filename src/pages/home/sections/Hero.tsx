import {
  Box,
  Button,
  Flex,
  Highlight,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineFileSearch,
  AiOutlinePhone,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { BsFillPhoneLandscapeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BgImage from "../../../assets/bgImage.webp";
import breakPoints from "../../../utils/interfaces/Breakpoints";
import heroImage from "../../../assets/hero.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <Flex
      h="100vh"
      bgImage={BgImage}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      justifyContent="center"
      alignItems="center"
    >
      <Flex w={breakPoints} margin="auto">
        <VStack align="start" w="70%">
          <Text fontSize="5rem" fontWeight="black">
            <Highlight
              query="KOREAN"
              styles={{
                color: "palette.accent",
              }}
            >
              Save the taste of KOREAN food.
            </Highlight>
          </Text>
          <Text w="60%" fontSize="1.4rem" fontWeight="light" fontFamily="lato">
            Experience the perfect blend of sweet, salty, and spicy as you
            indulge in the deliciousness of Korean food.
          </Text>
          <HStack spacing="1rem" paddingTop="2.5rem">
            <Button
              p="1.8rem 3rem 1.8rem 1.8rem"
              bg="palette.accent"
              fontSize="1.1rem"
              fontWeight="bold"
              borderBottomRightRadius="5rem"
              leftIcon={<AiOutlineFileSearch fontSize="1.5rem" />}
              _hover={{ bg: "palette.accent_hover" }}
              onClick={() => navigate("/products")}
            >
              Order Now!
            </Button>
            <Button
              as="a"
              href="#promote"
              p="1.8rem 1.8rem 1.8rem 3rem"
              color="palette.secondary"
              bg="palette.primary"
              fontSize="1.1rem"
              fontWeight="bold"
              borderTopLeftRadius="5rem"
              rightIcon={<AiOutlinePlayCircle fontSize="1.5rem" />}
            >
              Promotional Video
            </Button>
          </HStack>
        </VStack>
        <Box>{/* <Image w="100%" src={heroImage} /> */}</Box>
      </Flex>
    </Flex>
  );
}

export default Hero;
