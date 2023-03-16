import {
  Box,
  Center,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillInstagram, AiFillMail, AiTwotonePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import BgImage from "../assets/bgImage.webp";
import breakPoints from "../utils/interfaces/Breakpoints";
import Logo from "../../public/logo.webp";

function Footer() {
  return (
    <Center
      p={{ base: "1.5rem", md: "4rem" }}
      w="100%"
      bgImage={BgImage}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Center gap="3rem" w={breakPoints} margin="auto" flexDir="column">
        <Stack
          direction={{ base: "column", md: "row" }}
          align="start"
          w="100%"
          justifyContent="space-between"
        >
          <VStack align={{ base: "center", md: "start" }} spacing="1.6rem">
            <Image width="7.5rem" borderRadius=".3rem" src={Logo} />
            <VStack align={{ base: "center", md: "start" }} spacing="1rem">
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
                  <Text>Tito Loreto</Text>
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
                    <AiFillMail />
                  </Box>
                  <Text>chefmatediner@gmail.com</Text>
                </HStack>
              </HStack>
            </VStack>
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
              <Text w="100%">
                251 General Yngente Avenue Brgy. Talolong, Lopez, Philippines
              </Text>
            </HStack>
          </VStack>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          fontFamily="inter"
          w="100%"
          align={{ base: "center", md: "start" }}
          justifyContent="space-between"
          fontSize=".9rem"
        >
          <Text>Copyright 2023 Chefmate Diner.</Text>
          <HStack>
            <Link color="palette.accent">Privacy Policy</Link>
            <Text>| All rights reserved.</Text>
          </HStack>
        </Stack>
      </Center>
    </Center>
  );
}

export default Footer;
