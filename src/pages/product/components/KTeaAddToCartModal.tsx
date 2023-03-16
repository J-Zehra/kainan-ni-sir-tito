/* eslint-disable no-underscore-dangle */
import {
  Box,
  Button,
  HStack,
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
  KTeaProductModel,
} from "../../../utils/interfaces/AppInterfaces";
import PlaceOrderModal from "./PlaceOrderModal";

function KTeaAddToCartModal({
  isOpen,
  onClose,
  productInfo,
}: {
  isOpen: boolean;
  onClose: () => void;
  productInfo: KTeaProductModel;
}) {
  const [size, setSize] = useState<string>("Medium");
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const appContext = useApp();
  const toast = useToast();

  useEffect(() => {
    if (size === "Medium") {
      setTotalAmount(productInfo.product_medium_price * quantity);
    } else if (size === "Large") {
      setTotalAmount(productInfo.product_large_price * quantity);
    }
  }, [
    size,
    quantity,
    productInfo.product_medium_price,
    productInfo.product_large_price,
  ]);

  const addToCart = () => {
    const orderData: CartItemModel = {
      _id: productInfo._id,
      product_name: productInfo.product_name,
      size,
      quantity,
      product_image: productInfo.product_image,
      totalAmount,
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
    setSize("Medium");
    setTotalAmount(0);
    setQuantity(1);
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
              <VStack align="start" gap=".1rem">
                <Text fontSize="1rem" fontWeight="semibold">
                  Size
                </Text>
                <RadioGroup colorScheme="pink" onChange={setSize} value={size}>
                  <Stack direction="row" gap="1.5rem" fontFamily="inter">
                    <Radio value="Medium">
                      <Text fontSize=".89rem" fontWeight="medium">
                        Medium
                      </Text>
                    </Radio>
                    <Radio value="Large">
                      <Text fontSize=".9rem" fontWeight="medium">
                        Large
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </VStack>
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
          size={size}
          totalAmount={totalAmount}
          isOpen={isPlaceOrderModalOpen}
          onClose={onPlaceOrderModalClose}
        />
      ) : null}
    </Modal>
  );
}

export default KTeaAddToCartModal;
