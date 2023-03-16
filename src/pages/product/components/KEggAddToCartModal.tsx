/* eslint-disable no-underscore-dangle */
import {
  Box,
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsCartPlus, BsFillPatchCheckFill } from "react-icons/bs";
import useApp from "../../../hooks/useApp";
import {
  CartItemModel,
  KEggProductModel,
} from "../../../utils/interfaces/AppInterfaces";
// eslint-disable-next-line import/no-cycle
import PlaceOrderModal from "./PlaceOrderModal";

function KEggAddToCartModal({
  isOpen,
  onClose,
  productInfo,
}: {
  isOpen: boolean;
  onClose: () => void;
  productInfo: KEggProductModel;
}) {
  const GarlicButter = 12;
  const MapleButter = 15;

  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [garlicButterQuantity, setGarlicButterQuantity] = useState<number>(0);
  const [mapleButterQuantity, setMapleButterQuantity] = useState<number>(0);
  const appContext = useApp();
  const toast = useToast();

  useEffect(() => {
    if (garlicButterQuantity > 0 && mapleButterQuantity > 0) {
      setTotalAmount(
        productInfo.product_price * quantity +
          GarlicButter * garlicButterQuantity +
          MapleButter * mapleButterQuantity
      );
    } else if (garlicButterQuantity > 0 && mapleButterQuantity === 0) {
      setTotalAmount(
        productInfo.product_price * quantity +
          GarlicButter * garlicButterQuantity
      );
    } else if (garlicButterQuantity === 0 && mapleButterQuantity > 0) {
      setTotalAmount(
        productInfo.product_price * quantity + MapleButter * mapleButterQuantity
      );
    } else {
      setTotalAmount(productInfo.product_price * quantity);
    }
  }, [
    garlicButterQuantity,
    mapleButterQuantity,
    productInfo.product_price,
    quantity,
  ]);

  const addToCart = () => {
    const orderData: CartItemModel = {
      _id: productInfo._id,
      product_name: productInfo.product_name,
      price: productInfo.product_price,
      quantity,
      product_image: productInfo.product_image,
      totalAmount,
      addOn: [
        { name: "Garlic Butter", quantity: garlicButterQuantity },
        { name: "Maple Butter", quantity: mapleButterQuantity },
      ],
    };

    appContext?.setCartItems((prev) => [...prev, orderData]);
    toast({
      title: "Item Added!",
      description: "We've added the item you cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
    setTotalAmount(0);
    setQuantity(1);
    setGarlicButterQuantity(0);
    setMapleButterQuantity(0);
    onClose();
  };

  const {
    isOpen: isPlaceOrderModalOpen,
    onOpen: onPlaceOrderModalOpen,
    onClose: onPlaceOrderModalClose,
  } = useDisclosure();

  return (
    <Modal isOpen={isOpen} isCentered preserveScrollBarGap onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="palette.secondary">
        <ModalHeader color="palette.secondary">
          <Text> {productInfo.product_name}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack gap="1.5rem">
            <HStack w="100%" justifyContent="space-between">
              <VStack spacing={0}>
                <Text fontSize=".6rem" fontFamily="inter">
                  Total Amount
                </Text>
                <Text color="palette.accent" fontSize="2rem" fontWeight="bold">
                  ₱{totalAmount}
                </Text>
              </VStack>
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <VStack align="start" gap=".1rem">
                <Text fontSize="1rem" fontWeight="semibold">
                  Quantity
                </Text>
                <HStack fontSize="1.3rem" gap="1.5rem" fontFamily="inter">
                  <Box
                    opacity=".7"
                    _hover={{ opacity: "1" }}
                    transition="all .3s ease"
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity((prev) => prev - 1);
                      }
                    }}
                  >
                    <AiOutlineMinusCircle />
                  </Box>
                  <Text
                    color="palette.accent"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    {quantity}
                  </Text>
                  <Box
                    opacity=".7"
                    _hover={{ opacity: "1" }}
                    transition="all .3s ease"
                    onClick={() => {
                      if (quantity < 50) {
                        setQuantity((prev) => prev + 1);
                      }
                    }}
                  >
                    <AiOutlinePlusCircle />
                  </Box>
                </HStack>
              </VStack>
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <VStack align="start" gap=".1rem">
                <Text fontSize="1rem" fontWeight="semibold">
                  Add-ons
                </Text>
                <VStack justify="start">
                  <HStack gap="1.2rem">
                    <Text fontFamily="inter" fontSize=".9rem">
                      Garlic Butter
                    </Text>
                    <HStack fontSize="1.3rem" gap="1.5rem" fontFamily="inter">
                      <Box
                        opacity=".7"
                        _hover={{ opacity: "1" }}
                        transition="all .3s ease"
                        onClick={() => {
                          if (quantity > 0) {
                            setGarlicButterQuantity((prev) => prev - 1);
                          }
                        }}
                      >
                        <AiOutlineMinusCircle />
                      </Box>
                      <Text
                        color="palette.accent"
                        fontSize="1rem"
                        fontWeight="bold"
                      >
                        {garlicButterQuantity}
                      </Text>
                      <Box
                        opacity=".7"
                        _hover={{ opacity: "1" }}
                        transition="all .3s ease"
                        onClick={() => {
                          if (quantity < 50) {
                            setGarlicButterQuantity((prev) => prev + 1);
                          }
                        }}
                      >
                        <AiOutlinePlusCircle />
                      </Box>
                    </HStack>
                    <Text
                      fontSize=".8rem"
                      color="palette.accent"
                      fontWeight="semibold"
                    >
                      +{GarlicButter}
                    </Text>
                  </HStack>
                  <HStack gap="1.2rem">
                    <Text fontFamily="inter" fontSize=".9rem">
                      Maple Butter
                    </Text>
                    <HStack fontSize="1.3rem" gap="1.5rem" fontFamily="inter">
                      <Box
                        opacity=".7"
                        _hover={{ opacity: "1" }}
                        transition="all .3s ease"
                        onClick={() => {
                          if (quantity > 0) {
                            setMapleButterQuantity((prev) => prev - 1);
                          }
                        }}
                      >
                        <AiOutlineMinusCircle />
                      </Box>
                      <Text
                        color="palette.accent"
                        fontSize="1rem"
                        fontWeight="bold"
                      >
                        {mapleButterQuantity}
                      </Text>
                      <Box
                        opacity=".7"
                        _hover={{ opacity: "1" }}
                        transition="all .3s ease"
                        onClick={() => {
                          if (quantity < 50) {
                            setMapleButterQuantity((prev) => prev + 1);
                          }
                        }}
                      >
                        <AiOutlinePlusCircle />
                      </Box>
                    </HStack>
                    <Text
                      fontSize=".8rem"
                      color="palette.accent"
                      fontWeight="semibold"
                    >
                      +{MapleButter}
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <HStack paddingTop="1.2rem">
            <Button p="1.5rem" leftIcon={<BsCartPlus />} onClick={addToCart}>
              Add to Cart
            </Button>
            <Button
              _hover={{ opacity: ".9" }}
              leftIcon={<BsFillPatchCheckFill />}
              p="1.5rem"
              bg="palette.accent"
              color="palette.primary"
              onClick={onPlaceOrderModalOpen}
            >
              Place Order
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
      {isPlaceOrderModalOpen ? (
        <PlaceOrderModal
          productName={productInfo.product_name}
          quantity={quantity}
          totalAmount={totalAmount}
          addOns={[
            { name: "Garlic Butter", quantity: garlicButterQuantity },
            { name: "Maple Butter", quantity: mapleButterQuantity },
          ]}
          isOpen={isPlaceOrderModalOpen}
          onClose={onPlaceOrderModalClose}
        />
      ) : null}
    </Modal>
  );
}

export default KEggAddToCartModal;
