import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProductSectionTitle from "../components/ProductSectionTitle";
import CheeseCake from "../../../assets/ktea/Cheesecake__1_-removebg-preview.webp";
import ChocoCheesCake from "../../../assets/ktea/Choco___Choco_Cheesecake-removebg-preview.webp";
import Hokkaido from "../../../assets/ktea/Hokkaido-removebg-preview.webp";
import Macha from "../../../assets/ktea/Macha-removebg-preview.webp";
import Okinawa from "../../../assets/ktea/Okinawa-removebg-preview.webp";
import OreoCheeseCake from "../../../assets/ktea/Oreo_Cheesecake-removebg-preview.webp";
import OreoMatcha from "../../../assets/ktea/Oreo_Matcha-removebg-preview.webp";
import RedVelvet from "../../../assets/ktea/Red_Velvet_Cheesecake-removebg-preview.webp";
import WinterMelon from "../../../assets/ktea/WinterMelon-removebg-preview.webp";
import { KTeaProductModel } from "../../../utils/interfaces/AppInterfaces";
import KTeaAddToCartModal from "../components/KTeaAddToCartModal";

function KTeaProducts() {
  const KTeaProducts = [
    {
      image: CheeseCake,
      productName: "Cheese Cake",
      mediumPrice: 94,
      largePrice: 104,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: Macha,
      productName: "Macha",
      mediumPrice: 94,
      largePrice: 104,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: ChocoCheesCake,
      productName: "Choco Cheese Cake",
      mediumPrice: 94,
      largePrice: 104,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: Hokkaido,
      productName: "Hokkaido",
      mediumPrice: 94,
      largePrice: 104,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: Okinawa,
      productName: "Okinawa",
      mediumPrice: 94,
      largePrice: 104,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: OreoCheeseCake,
      productName: "Oreo Cheese Cake",
      mediumPrice: 94,
      largePrice: 104,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: OreoMatcha,
      productName: "Oreo Matcha",
      mediumPrice: 94,
      largePrice: 104,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: RedVelvet,
      productName: "Red Velvet",
      mediumPrice: 94,
      largePrice: 104,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: WinterMelon,
      productName: "Winter Melon",
      mediumPrice: 94,
      largePrice: 104,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<KTeaProductModel>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box paddingTop="3rem">
      <ProductSectionTitle title="Ko-Tea" />
      <Wrap p="1rem" spacing="1.5rem" paddingTop="2rem" justify="center">
        {KTeaProducts.map((item) => {
          return (
            <WrapItem key={item.productName}>
              <Card w="21rem" bg="#ECECEC">
                <Flex flexDir="column">
                  <VStack
                    w="100%"
                    p="1.5rem"
                    justify="center"
                    flex={1}
                    align="center"
                  >
                    <Image src={item.image} w="5rem" h="8rem" />
                    <Text
                      fontWeight="bold"
                      textAlign="center"
                      fontSize="1.1rem"
                    >
                      {item.productName}
                    </Text>
                    <Text
                      fontWeight="normal"
                      fontSize=".9rem"
                      fontFamily="inter"
                      textAlign="center"
                    >
                      {item.description}
                    </Text>
                  </VStack>

                  <Center
                    borderBottomRadius=".3rem"
                    p="1.2rem"
                    bg="palette.accent"
                    flex={1.5}
                    flexDir="column"
                    gap="1.2rem"
                  >
                    <HStack color="palette.primary" spacing="2rem">
                      <VStack>
                        <Text
                          fontSize=".8rem"
                          fontWeight="normal"
                          fontFamily="inter"
                        >
                          12oz
                        </Text>
                        <Text fontWeight="bold" fontSize="1.5rem">
                          ₱{item.mediumPrice}
                        </Text>
                      </VStack>
                      <Box w=".1rem" bg="white" h="4rem" />
                      <VStack>
                        <Text
                          fontSize=".8rem"
                          fontWeight="normal"
                          fontFamily="inter"
                        >
                          16oz
                        </Text>
                        <Text fontWeight="bold" fontSize="1.5rem">
                          ₱{item.largePrice}
                        </Text>
                      </VStack>
                    </HStack>

                    <Button
                      onClick={() => {
                        setSelectedProduct(item);
                        onOpen();
                      }}
                    >
                      Add to cart
                    </Button>
                  </Center>
                </Flex>
              </Card>
            </WrapItem>
          );
        })}
      </Wrap>
      {selectedProduct && isOpen ? (
        <KTeaAddToCartModal
          isOpen={isOpen}
          onClose={onClose}
          productInfo={selectedProduct}
        />
      ) : null}
    </Box>
  );
}

export default KTeaProducts;
