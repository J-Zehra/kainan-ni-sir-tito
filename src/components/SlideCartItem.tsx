/* eslint-disable no-underscore-dangle */
import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Slide,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPatchCheckFill, BsFillTrashFill } from "react-icons/bs";
import Lottie from "react-lottie-player";
import empty from "../assets/empty.json";
import useApp from "../hooks/useApp";
import PlaceOrderModal from "../pages/product/components/PlaceOrderModal";
import PlaceOrderModalMulti from "../pages/product/components/PlaceOrderModalMulti";
import { CartItemModel } from "../utils/interfaces/AppInterfaces";

function SlideCartItem({
  isOpen,
  onDrawerClose,
}: {
  isOpen: boolean;
  onDrawerClose: () => void;
}) {
  const appContext = useApp();
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const removeItem = (id: string) => {
    if (appContext?.cartItems) {
      const updatedCartItems = appContext?.cartItems.filter(
        (cartItem) => cartItem._id !== id
      );
      appContext?.setCartItems(updatedCartItems);
    }
  };

  useEffect(() => {
    let total = 0;
    appContext?.cartItems.forEach((item) => {
      total += item.totalAmount;
    });
    setTotalAmount(total);
  }, [appContext?.cartItems]);

  const { isOpen: isPlaceOrderOpen, onClose, onOpen } = useDisclosure();
  console.log(appContext?.cartItems);

  return (
    <Drawer
      size="md"
      placement="right"
      preserveScrollBarGap
      onClose={onDrawerClose}
      isOpen={isOpen}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" pos="relative">
          {" "}
          <Text
            paddingInlineStart="1rem"
            textAlign="start"
            w="100%"
            color="palette.secondary"
            fontWeight="bold"
            fontSize="1.4rem"
            paddingBottom="1.2rem"
          >
            My Cart
          </Text>
          <Center
            pos="absolute"
            color="palette.secondary"
            top="1rem"
            onClick={onDrawerClose}
            cursor="pointer"
            right="1rem"
          >
            <AiOutlineClose />
          </Center>
        </DrawerHeader>
        <DrawerBody p="0">
          <VStack
            w="100%"
            h="100%"
            boxShadow="1px 1px 18px rgba(0, 0, 0, .3)"
            bg="#ECECEC"
          >
            <Flex flexDir="column" p="1rem" gap="1rem" w="100%" h="100%">
              <HStack
                w="100%"
                justifyContent="space-between"
                bg="palette.accent"
                borderRadius=".5rem"
                p=".6rem 1.2rem"
              >
                <HStack>
                  <Text fontSize=".8rem" fontFamily="inter">
                    Total Amount:
                  </Text>
                  <Text fontSize="1.3rem" fontWeight="bold">
                    ₱{totalAmount}
                  </Text>
                </HStack>

                <Button
                  border="1px solid"
                  borderColor="palette.primary"
                  _hover={{ opacity: ".9" }}
                  leftIcon={<BsFillPatchCheckFill />}
                  p="1.5rem"
                  onClick={() => {
                    if (
                      appContext?.cartItems &&
                      appContext.cartItems.length > 0
                    ) {
                      onOpen();
                    }
                  }}
                  bg="palette.accent"
                  color="palette.primary"
                >
                  Place Order
                </Button>
              </HStack>
              <VStack w="100%">
                {appContext?.cartItems && appContext?.cartItems?.length > 0 ? (
                  appContext?.cartItems.map((item: CartItemModel) => {
                    return (
                      <HStack
                        w="100%"
                        borderRadius=".5em"
                        p=".5rem 1rem"
                        justifyContent="space-between"
                        color="palette.secondary"
                        bg="white"
                        align="center"
                        key={item._id}
                      >
                        <HStack spacing="1rem">
                          <Box w="3rem">
                            <Image src={item.product_image.asset.url} />
                          </Box>
                          <VStack align="start" spacing=".1rem">
                            <Text fontWeight="semibold" fontSize="1.1rem">
                              {item.product_name}
                            </Text>
                            <HStack fontSize=".9rem">
                              <Text
                                fontWeight="normal"
                                fontFamily="inter"
                                fontSize=".8rem"
                              >
                                {item.quantity}
                              </Text>
                              <Text
                                fontWeight="normal"
                                fontFamily="inter"
                                fontSize=".8rem"
                              >
                                {item.size || item.pieces || ""}
                              </Text>
                            </HStack>
                          </VStack>
                        </HStack>
                        <Box
                          color="red"
                          fontSize="1.2rem"
                          opacity=".8"
                          cursor="pointer"
                          onClick={() => removeItem(item._id)}
                          _hover={{ opacity: "1" }}
                        >
                          <BsFillTrashFill />
                        </Box>
                      </HStack>
                    );
                  })
                ) : (
                  <Center flexDir="column">
                    <Lottie
                      loop
                      animationData={empty}
                      play
                      style={{ width: 250, height: 250 }}
                    />
                    <Text
                      color="palette.secondary"
                      fontFamily="lato"
                      opacity=".5"
                      fontSize="1rem"
                      fontWeight="semibold"
                    >
                      There are no items in the cart yet.
                    </Text>
                  </Center>
                )}
              </VStack>
            </Flex>
          </VStack>
        </DrawerBody>
      </DrawerContent>
      {isPlaceOrderOpen ? (
        <PlaceOrderModalMulti
          totalAmount={totalAmount}
          isOpen={isPlaceOrderOpen}
          onClose={onClose}
        />
      ) : null}
    </Drawer>
  );
}

export default SlideCartItem;
