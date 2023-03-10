import {
  Box,
  Center,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillInstagram, AiFillYahoo, AiTwotonePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import BgImage from "../assets/bgImage.webp";
import breakPoints from "../utils/interfaces/Breakpoints";
import Logo from "../assets/logo.svg";

function Footer() {
  return (
    <Center
      p="4rem"
      w="100%"
      bgImage={BgImage}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Center gap="3rem" w={breakPoints} margin="auto" flexDir="column">
        <HStack align="start" w="100%" justifyContent="space-between">
          <VStack align="start">
            <Image src={Logo} />
            <Text opacity=".6" fontFamily="inter" fontSize=".9rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </VStack>
          <VStack align="start" spacing="1rem">
            <Text>Contact Us.</Text>
            <HStack
              spacing="2rem"
              fontFamily="inter"
              fontSize=".9rem"
              opacity=".8"
            >
              <HStack>
                <Box color="palette.accent">
                  <AiTwotonePhone />
                </Box>
                <Text>0994 575 4100</Text>
              </HStack>
              <HStack>
                <Box color="palette.accent">
                  <AiFillInstagram />
                </Box>
                <Text>Tito Loresto</Text>
              </HStack>
            </HStack>
            <HStack
              fontFamily="inter"
              spacing="2rem"
              fontSize=".9rem"
              opacity=".8"
            >
              <HStack>
                <Box color="palette.accent">
                  <BsFacebook />
                </Box>
                <Text>ChefMate Diner</Text>
              </HStack>
              <HStack>
                <Box color="palette.accent">
                  <AiFillYahoo />
                </Box>
                <Text>xzljet@yahoo.com </Text>
              </HStack>
            </HStack>
          </VStack>
          <VStack>
            <HStack
              fontFamily="inter"
              spacing="2rem"
              fontSize=".9rem"
              opacity=".8"
            >
              <Box color="palette.accent">
                <HiLocationMarker />
              </Box>
              <Text w="15rem">
                251 General Yngente Avenue Brgy. Talolong, Lopez, Philippines
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <HStack
          fontFamily="inter"
          w="100%"
          justifyContent="space-between"
          fontSize=".9rem"
        >
          <Text>Copyright 2023 Chefmate Diner.</Text>
          <HStack>
            <Link color="palette.accent">Privacy Policy</Link>
            <Text>| All rights reserved.</Text>
          </HStack>
        </HStack>
      </Center>
    </Center>
  );
}

export default Footer;
