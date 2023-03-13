/* eslint-disable no-underscore-dangle */
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  HStack,
  Image,
  Skeleton,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductSectionTitle from "../components/ProductSectionTitle";

import KNamAddToCartModal from "../components/KNamAddToCartModal";
import { KNamProductModel } from "../../../utils/interfaces/AppInterfaces";
import useProductNavObserver from "../../../hooks/useProductNavObserver";
import useApp from "../../../hooks/useApp";
import client from "../../../client";

function KNamProducts() {
  const [selectedProduct, setSelectedProduct] = useState<KNamProductModel>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const appContext = useApp();

  const { ref } = useProductNavObserver("Ko-Nam");
  const getProducts = async () => {
    const data = await client.fetch(
      `*[_type == "konam"]{ 
        _id,
        product_name,
        product_description,
        product_5pcs_price,
        product_10pcs_price,
        product_image { asset -> {url} }
      }`
    );
    return data as KNamProductModel[];
  };

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["k-nam"],
    queryFn: getProducts,
  });

  return (
    <Box ref={ref} paddingTop="3rem">
      <ProductSectionTitle title="Ko-Nam" />
      <Wrap p="1rem" spacing="1.5rem" paddingTop="2rem" justify="center">
        {data?.map((item) => {
          return (
            <WrapItem key={item._id}>
              <Skeleton isLoaded={!isFetching && !isLoading}>
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
                      <Image
                        src={item.product_image.asset.url}
                        w="8rem"
                        h="6rem"
                        filter="drop-shadow(1px 1px 16px rgba(0, 0, 0, .3))"
                      />
                      <Text
                        fontWeight="bold"
                        textAlign="center"
                        fontSize="1.1rem"
                      >
                        {item.product_name}
                      </Text>
                      <Text
                        fontWeight="normal"
                        fontSize=".9rem"
                        fontFamily="inter"
                        textAlign="center"
                      >
                        {item.product_description}
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
                            ₱{item.product_5pcs_price}
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
                            ₱{item.product_10pcs_price}
                          </Text>
                        </VStack>
                      </HStack>

                      {appContext &&
                      appContext.cartItems.filter(
                        (cart) => cart._id === item._id
                      ).length > 0 ? (
                        <Text>Product already in cart</Text>
                      ) : (
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
                      )}
                    </Center>
                  </Flex>
                </Card>
              </Skeleton>
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
