/* eslint-disable no-underscore-dangle */
import {
  Box,
  Button,
  Card,
  Center,
  Divider,
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
import { KTeaProductModel } from "../../../utils/interfaces/AppInterfaces";
import KTeaAddToCartModal from "../components/KTeaAddToCartModal";
import useProductNavObserver from "../../../hooks/useProductNavObserver";
import useApp from "../../../hooks/useApp";
import client from "../../../client";

function KTeaProducts() {
  const [selectedProduct, setSelectedProduct] = useState<KTeaProductModel>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { ref } = useProductNavObserver("Ko-Tea");
  const appContext = useApp();

  const getProducts = async () => {
    const data = await client.fetch(
      `*[_type == "kotea"]{ 
        _id,
        product_name,
        product_description,
        product_medium_price,
        product_large_price,
        product_image { asset -> {url} }
      }`
    );
    return data as KTeaProductModel[];
  };

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["k-tea"],
    queryFn: getProducts,
  });

  console.log(data);

  return (
    <Box ref={ref} paddingTop="3rem">
      <ProductSectionTitle title="Ko-Tea" />
      <Wrap p="1rem" spacing="1.5rem" paddingTop="2rem" justify="center">
        {data?.map((item) => {
          return (
            <WrapItem key={item._id}>
              <Skeleton isLoaded={!isFetching && !isLoading}>
                <Card w="21rem" bg="#ECECEC">
                  <Flex flexDir="column">
                    <VStack
                      w="100%"
                      p="1.5rem"
                      justify="center"
                      flex={1}
                      align="center"
                    >
                      <Image
                        src={item.product_image.asset.url}
                        w="5rem"
                        h="8rem"
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
                            ₱{item.product_medium_price}
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
                            ₱{item.product_large_price}
                          </Text>
                        </VStack>
                      </HStack>

                      {appContext &&
                      appContext.cartItems.filter(
                        (cart) => cart._id === item._id
                      ).length > 0 ? (
                        <Text color="palette.primary">
                          Product already in cart
                        </Text>
                      ) : (
                        <Button
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
