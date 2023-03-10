import {
  Box,
  Button,
  Card,
  Center,
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
import HikoryBBQ from "../../../assets/knam/HIKORY_BBQ.webp";
import HoneySriracha from "../../../assets/knam/HONEY_SRIRACHA.webp";
import SoyGarlic from "../../../assets/knam/SOY_GARLIC.webp";
import SpicyBBQ from "../../../assets/knam/SPICY_BBQ.webp";
import SpicyKorean from "../../../assets/knam/SPICY_KOREAN.webp";
import KNamAddToCartModal from "../components/KNamAddToCartModal";
import { KNamProductModel } from "../../../utils/interfaces/AppInterfaces";

function KNamProducts() {
  const KNamProducts = [
    {
      image: HikoryBBQ,
      productName: "Hikory BBQ",
      fivePieces: 154,
      tenPieces: 290,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: HoneySriracha,
      productName: "Honey Sriracha",
      fivePieces: 154,
      tenPieces: 290,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: SpicyKorean,
      productName: "Spicy Korean",
      fivePieces: 154,
      tenPieces: 290,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: SoyGarlic,
      productName: "Spy Garlic",
      fivePieces: 154,
      tenPieces: 290,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: SpicyBBQ,
      productName: "Spicy BBQ",
      fivePieces: 154,
      tenPieces: 290,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<KNamProductModel>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box paddingTop="3rem">
      <ProductSectionTitle title="Ko-Nam" />
      <Wrap p="1rem" spacing="1.5rem" paddingTop="2rem" justify="center">
        {KNamProducts.map((item) => {
          return (
            <WrapItem key={item.productName}>
              <Card w="21rem" bg="palette.accent">
                <Flex flexDir="column">
                  <VStack
                    w="100%"
                    p="1.5rem"
                    justify="center"
                    flex={1}
                    color="palette.primary"
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
                    bg="#ECECEC"
                    borderBottomRadius=".3rem"
                    p="1.2rem"
                    flex={1.5}
                    flexDir="column"
                    gap="1.2rem"
                  >
                    <HStack color="palette.secondary" spacing="2rem">
                      <VStack>
                        <Text
                          fontSize=".8rem"
                          fontWeight="normal"
                          fontFamily="inter"
                        >
                          5pcs
                        </Text>
                        <Text fontWeight="bold" fontSize="1.5rem">
                          ₱{item.fivePieces}
                        </Text>
                      </VStack>
                      <Box w=".1rem" bg="white" h="4rem" />
                      <VStack>
                        <Text
                          fontSize=".8rem"
                          fontWeight="normal"
                          fontFamily="inter"
                        >
                          10pcs.
                        </Text>
                        <Text fontWeight="bold" fontSize="1.5rem">
                          ₱{item.tenPieces}
                        </Text>
                      </VStack>
                    </HStack>

                    <Button
                      _hover={{ opacity: ".9" }}
                      bg="palette.accent"
                      color="palette.primary"
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
        <KNamAddToCartModal
          isOpen={isOpen}
          onClose={onClose}
          productInfo={selectedProduct}
        />
      ) : null}
    </Box>
  );
}

export default KNamProducts;
