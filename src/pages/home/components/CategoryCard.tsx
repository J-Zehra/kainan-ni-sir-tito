import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

interface CategoryProps {
  items: string[];
  description: string;
  image: string;
  link: string;
}

function CategoryCard(props: CategoryProps) {
  const { items, link, description, image } = props;
  return (
    <WrapItem>
      <Flex
        h="30rem"
        w="23rem"
        bg="palette.accent"
        flexDir="column"
        borderRadius=".6rem"
        boxShadow="5px 8px 16px rgba(0, 0, 0, .15)"
      >
        <Center pos="relative" flex={1.2} bg="#ECECEC" borderTopRadius=".5rem">
          <Image src={image} />
          <HStack
            justifyContent="space-around"
            pos="absolute"
            w="90%"
            h="4rem"
            bottom="-3rem"
            bg="#F5F5F5"
            borderRadius=".3rem"
            boxShadow="5px 8px 16px rgba(0, 0, 0, .15)"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              loopPreventsSliding
              spaceBetween={30}
              slidesPerView={5}
              style={{ padding: "2rem" }}
            >
              {items?.map((item) => {
                return (
                  <SwiperSlide key={item}>
                    {/* <AspectRatio ratio={3 / 2}> */}
                    <Image
                      borderRadius=".5rem"
                      objectFit="cover"
                      w="25rem"
                      filter="drop-shadow(1px 1px 16px rgba(0, 0, 0, .5))"
                      objectPosition="center"
                      src={item}
                    />
                    {/* </AspectRatio> */}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </HStack>
        </Center>
        <Center flex={2} flexDir="column">
          <Center flex={2}>
            {/* <Text textAlign="justify" fontFamily="lato">
              {description}
            </Text> */}
          </Center>
          <Center flex={1}>
            <Button
              as={Link}
              to={link}
              bg="palette.primary"
              p="1.5rem"
              color="palette.accent"
            >
              See Category
            </Button>
          </Center>
        </Center>
      </Flex>
    </WrapItem>
  );
}

export default CategoryCard;
