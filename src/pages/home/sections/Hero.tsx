import {
  AspectRatio,
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Highlight,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineFileSearch, AiOutlinePlayCircle } from "react-icons/ai";
import { BsFillPhoneLandscapeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";
import BgImage from "../../../assets/bgImage.webp";
import breakPoints from "../../../utils/interfaces/Breakpoints";

import "swiper/css";
import "swiper/css/effect-cards";

import KTea from "../../../assets/categories/3.svg";
import KNam from "../../../assets/categories/2.svg";
import KEgg from "../../../assets/categories/1.svg";

import Tea1 from "../../../assets/ktea/Cheesecake__1_-removebg-preview.webp";
import Tea2 from "../../../assets/ktea/Choco___Choco_Cheesecake-removebg-preview.webp";
import Tea3 from "../../../assets/ktea/Hokkaido-removebg-preview.webp";
import Tea4 from "../../../assets/ktea/Macha-removebg-preview.webp";
import Tea5 from "../../../assets/ktea/Okinawa-removebg-preview.webp";
import Tea6 from "../../../assets/ktea/Oreo_Cheesecake-removebg-preview.webp";
import Tea7 from "../../../assets/ktea/Oreo_Matcha-removebg-preview.webp";
import Tea8 from "../../../assets/ktea/Red_Velvet_Cheesecake-removebg-preview.webp";
import Tea9 from "../../../assets/ktea/WinterMelon-removebg-preview.webp";

import Nam1 from "../../../assets/knam/HIKORY_BBQ.webp";
import Nam2 from "../../../assets/knam/HONEY_SRIRACHA.webp";
import Nam3 from "../../../assets/knam/SOY_GARLIC.webp";
import Nam4 from "../../../assets/knam/SPICY_BBQ.webp";
import Nam5 from "../../../assets/knam/SPICY_KOREAN.webp";

import Egg1 from "../../../assets/kegg/K-EGG_BACON.webp";
import Egg2 from "../../../assets/kegg/K-EGG_CLASSIC_TOAST.webp";
import Egg3 from "../../../assets/kegg/K-EGG_HAM.webp";
import Egg4 from "../../../assets/kegg/K-EGG_PREMIUM_BULGOG.webp";
import Egg5 from "../../../assets/corndog/CHICKEN_PORK_FLOSS_CORNDOG.webp";
import Egg6 from "../../../assets/corndog/CLASSIC_CORNDOG.webp";
import Egg7 from "../../../assets/corndog/MOZZADOG.webp";
import Egg8 from "../../../assets/corndog/POTATO_CORNDOG.webp";
import Egg9 from "../../../assets/corndog/RAMYEON_CORNDOG.webp";

function Hero() {
  const navigate = useNavigate();

  const items = [
    {
      title: "Ko-Tea",
      image: KTea,
      products: [Tea1, Tea2, Tea3, Tea4, Tea5, Tea6, Tea7, Tea8, Tea9],
    },
    {
      title: "Ko-Nam",
      image: KNam,
      products: [Nam1, Nam2, Nam3, Nam4, Nam5],
    },
    {
      title: "K-Egg",
      image: KEgg,
      products: [Egg1, Egg2, Egg3, Egg4, Egg5, Egg6, Egg7, Egg8, Egg9],
    },
  ];

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
      <Flex
        w={breakPoints}
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        pos="relative"
      >
        <VStack align="start" w={{ base: "100%", md: "55%" }}>
          <Text fontSize={{ base: "3rem", md: "4rem" }} fontWeight="black">
            <Highlight
              query="KOREAN"
              styles={{
                color: "palette.accent",
              }}
            >
              Save the taste of KOREAN food.
            </Highlight>
          </Text>
          <Text
            w={{ base: "100%", md: "60%" }}
            fontSize={{ base: "1.2rem", md: "1.4rem" }}
            fontWeight="light"
            fontFamily="lato"
          >
            Experience the perfect blend of sweet, salty, and spicy as you
            indulge in the deliciousness of Korean food.
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="1rem"
            paddingTop="2.5rem"
          >
            <Button
              p="1.8em 3em 1.8em 1.8em"
              bg="palette.accent"
              fontSize={{ base: ".9rem", md: "1.1rem" }}
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
              fontSize={{ base: ".9rem", md: "1.1rem" }}
              p="1.8em 1.8em 1.8em 3em"
              color="palette.secondary"
              bg="palette.primary"
              fontWeight="bold"
              borderTopLeftRadius="5rem"
              rightIcon={<AiOutlinePlayCircle fontSize="1.5rem" />}
            >
              Promotional Video
            </Button>
          </Stack>
        </VStack>

        <Box
          display={{ base: "none", lg: "block" }}
          p="2rem"
          w="30rem"
          h="40rem"
          pos="absolute"
          top="50%"
          left="100%"
          transform="translate(-100%, -40%) rotate(6deg)"
          zIndex={5}
        >
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loopPreventsSliding
            // loopedSlides={2}
            effect="cards"
            grabCursor
            modules={[EffectCards, Autoplay]}
            style={{ padding: "1rem" }}
          >
            {items?.map((item) => {
              return (
                <SwiperSlide key={item.title}>
                  <Card
                    w="22rem"
                    borderRadius="1rem"
                    boxShadow="1px 1px 16px rgba(0, 0, 0, 1)"
                    bg="palette.accent"
                    h="30rem"
                    p=".6rem"
                    as={Flex}
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Center bg="#DFDFDF" w="100%" borderRadius=".9rem" flex={1}>
                      <Image
                        borderRadius="1rem"
                        objectFit="cover"
                        w={item.title === "Ko-Tea" ? "5rem" : "10rem"}
                        objectPosition="center"
                        src={item.image}
                      />
                    </Center>
                    <Divider opacity=".1" borderColor="palette.primary" />
                    <Wrap
                      as={Center}
                      justify="center"
                      align="center"
                      flex={2.5}
                      p="1rem"
                      h="100%"
                      spacing="1rem"
                    >
                      {item.products.map((image) => {
                        return (
                          <WrapItem key={image}>
                            <Image
                              borderRadius=".5rem"
                              objectFit="cover"
                              w={item.title === "Ko-Tea" ? "3.5rem" : "5rem"}
                              filter="drop-shadow(1px 1px 16px rgba(0, 0, 0, .5))"
                              objectPosition="center"
                              src={image}
                            />
                          </WrapItem>
                        );
                      })}
                    </Wrap>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Hero;
