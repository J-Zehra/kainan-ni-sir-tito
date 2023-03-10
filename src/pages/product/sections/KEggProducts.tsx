import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Image,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { useState } from "react";
import ProductSectionTitle from "../components/ProductSectionTitle";
import KEggSpam from "../../../assets/kegg/K-EGG_SPAM.webp";
import PremiumBulgogi from "../../../assets/kegg/K-EGG_PREMIUM_BULGOG.webp";
import Bacon from "../../../assets/kegg/K-EGG_BACON.webp";
import ClassicToast from "../../../assets/kegg/K-EGG_CLASSIC_TOAST.webp";
import Ham from "../../../assets/kegg/K-EGG_HAM.webp";

import ClassicCorndog from "../../../assets/corndog/CLASSIC_CORNDOG.webp";
import Potato from "../../../assets/corndog/POTATO_CORNDOG.webp";
import Rameon from "../../../assets/corndog/RAMYEON_CORNDOG.webp";
import MozzaDog from "../../../assets/corndog/MOZZADOG.webp";
import ChickenPork from "../../../assets/corndog/CHICKEN_PORK_FLOSS_CORNDOG.webp";
import { KEggProductModel } from "../../../utils/interfaces/AppInterfaces";
import KEggAddToCartModal from "../components/KEggAddToCartModal";

function KEggProducts() {
  const KEggProducts = [
    {
      image: KEggSpam,
      productName: "K-Egg Spam",
      price: 158,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: PremiumBulgogi,
      productName: "K-Egg Premium Bulgogi",
      price: 168,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: Bacon,
      productName: "K-Egg Bacon",
      price: 157,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: ClassicToast,
      productName: "K-Egg Classic Toast",
      price: 148,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: Ham,
      productName: "K-Egg Ham",
      price: 157,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: ClassicCorndog,
      productName: "Classic Corndog",
      price: 84,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: Potato,
      productName: "Potato Corndog",
      price: 94,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: Rameon,
      productName: "Ramyeon Corndog",
      price: 96,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: MozzaDog,
      productName: "Mozzadog",
      price: 104,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
    {
      image: ChickenPork,
      productName: "Chicken/Pork Floss Corndog",
      price: 96,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<KEggProductModel>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box paddingTop="3rem">
      <ProductSectionTitle title="K-Egg" />
      <Wrap p="1rem" spacing="1.5rem" paddingTop="2rem" justify="center">
        {KEggProducts.map((item, index) => {
          return (
            <WrapItem key={item.productName}>
              <Card w="21rem" bg={index < 5 ? "#ECECEC" : "palette.accent"}>
                <Flex flexDir="column">
                  <VStack
                    w="100%"
                    p="1.5rem"
                    justify="center"
                    flex={1}
                    color={index < 5 ? "palette.secondary" : "palette.primary"}
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
                    bg={index < 5 ? "palette.accent" : "#ECECEC"}
                    color={index < 5 ? "palette.primary" : "palette.accent"}
                    borderBottomRadius=".3rem"
                    p="1.2rem"
                    flex={1.5}
                    flexDir="column"
                    gap="1.2rem"
                  >
                    <Text fontWeight="bold" fontSize="1.5rem">
                      ₱{item.price}
                    </Text>

                    <Button
                      _hover={{ opacity: ".9" }}
                      bg={index < 5 ? "palette.primary" : "palette.accent"}
                      color={index < 5 ? "palette.accent" : "palette.primary"}
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
      {selectedProduct ? (
        <KEggAddToCartModal
          isOpen={isOpen}
          onClose={onClose}
          productInfo={selectedProduct}
        />
      ) : null}
    </Box>
  );
}

export default KEggProducts;
