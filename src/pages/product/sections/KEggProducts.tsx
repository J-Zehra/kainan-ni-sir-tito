/* eslint-disable no-underscore-dangle */
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Image,
  Skeleton,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductSectionTitle from "../components/ProductSectionTitle";
import { KEggProductModel } from "../../../utils/interfaces/AppInterfaces";
import KEggAddToCartModal from "../components/KEggAddToCartModal";
import useProductNavObserver from "../../../hooks/useProductNavObserver";
import useApp from "../../../hooks/useApp";
import client from "../../../client";

function KEggProducts() {
  const [selectedProduct, setSelectedProduct] = useState<KEggProductModel>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const appContext = useApp();

  const { ref } = useProductNavObserver("K-Egg");

  const getProducts = async () => {
    const data = await client.fetch(
      `*[_type == "kegg"]{
        _id,
        product_name,
        product_description,
        product_price,
        product_image { asset -> {url} }
      }`
    );
    return data as KEggProductModel[];
  };

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["k-egg"],
    queryFn: getProducts,
  });

  return (
    <Box ref={ref} paddingTop="3rem">
      {/* <SingleOrderTemplate /> */}
      <ProductSectionTitle title="K-Egg" />
      <Wrap p="1rem" spacing="1.5rem" paddingTop="2rem" justify="center">
        {data?.map((item, index) => {
          return (
            <WrapItem key={item._id}>
              <Skeleton isLoaded={!isFetching && !isLoading}>
                <Card
                  w="21rem"
                  h="26rem"
                  bg={index < 5 ? "#ECECEC" : "palette.accent"}
                >
                  <Flex flexDir="column" h="100%">
                    <VStack
                      w="100%"
                      p="1.5rem"
                      justify="center"
                      flex={1}
                      color={
                        index < 5 ? "palette.secondary" : "palette.primary"
                      }
                      align="center"
                    >
                      <Image
                        src={item.product_image.asset.url}
                        w="8rem"
                        h="7rem"
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
                      bg={index < 5 ? "palette.accent" : "#ECECEC"}
                      color={index < 5 ? "palette.primary" : "palette.accent"}
                      borderBottomRadius=".3rem"
                      p="1.2rem"
                      flex={1.5}
                      flexDir="column"
                      gap="1.2rem"
                    >
                      <Text fontWeight="bold" fontSize="1.5rem">
                        ₱{item.product_price}
                      </Text>

                      {appContext &&
                      appContext.cartItems.filter(
                        (cart) => cart._id === item._id
                      ).length > 0 ? (
                        <Text>Product already in cart</Text>
                      ) : (
                        <Button
                          _hover={{ opacity: ".9" }}
                          bg={index < 5 ? "palette.primary" : "palette.accent"}
                          color={
                            index < 5 ? "palette.accent" : "palette.primary"
                          }
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
