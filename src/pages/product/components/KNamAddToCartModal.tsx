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
  KNamProductModel,
} from "../../../utils/interfaces/AppInterfaces";
import GarlicMayoDip from "../../../assets/knam/GARLIC_MAYO_DIP-removebg-preview.webp";
import PlaceOrderModal from "./PlaceOrderModal";

function KNamAddToCartModal({
  isOpen,
  onClose,
  productInfo,
}: {
  isOpen: boolean;
  onClose: () => void;
  productInfo: KNamProductModel;
}) {
  const GarlicMayoDipPrice = 28;

  const [pieces, setPieces] = useState<string>("5 Pieces");
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [addOnQuantity, setAddOnQuantity] = useState<number>(0);
  const appContext = useApp();
  const toast = useToast();

  useEffect(() => {
    if (pieces === "5 Pieces") {
      if (addOnQuantity > 0) {
        setTotalAmount(
          productInfo.product_5pcs_price * quantity +
            GarlicMayoDipPrice * addOnQuantity
        );
      } else {
        setTotalAmount(productInfo.product_5pcs_price * quantity);
      }
    } else if (pieces === "10 Pieces") {
      if (addOnQuantity > 0) {
        setTotalAmount(
          productInfo.product_10pcs_price * quantity +
            GarlicMayoDipPrice * addOnQuantity
        );
      } else {
        setTotalAmount(productInfo.product_10pcs_price * quantity);
      }
    }
  }, [
    addOnQuantity,
    pieces,
    productInfo.product_10pcs_price,
    productInfo.product_5pcs_price,
    quantity,
  ]);

  const addToCart = () => {
    const orderData: CartItemModel = {
      _id: productInfo._id,
      product_name: productInfo.product_name,
      pieces,
      quantity,
      product_image: productInfo.product_image,
      totalAmount,
      addOn: [{ name: "Garlic Mayo Dip", quantity: addOnQuantity }],
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
    setPieces("5 Pieces");
    setTotalAmount(0);
    setQuantity(1);
    setAddOnQuantity(0);
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
                  Pack
                </Text>
                <RadioGroup
                  colorScheme="pink"
                  onChange={setPieces}
                  value={pieces}
                >
                  <Stack direction="row" gap="1.5rem" fontFamily="inter">
                    <Radio value="5 Pieces">
                      <Text fontSize=".89rem" fontWeight="medium">
                        5 Pieces
                      </Text>
                    </Radio>
                    <Radio value="10 Pieces">
                      <Text fontSize=".9rem" fontWeight="medium">
                        10 Pieces
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
            <HStack w="100%" justifyContent="space-between">
              <VStack align="start" gap=".1rem">
                <Text fontSize="1rem" fontWeight="semibold">
                  Add-ons
                </Text>
                <HStack gap="1.2rem">
                  <Image src={GarlicMayoDip} w="2.5rem" />
                  <Text fontFamily="inter" fontSize=".9rem">
                    Garlic Mayo Dip
                  </Text>
                  <HStack fontSize="1.3rem" gap="1.5rem" fontFamily="inter">
                    <Box
                      opacity=".7"
                      _hover={{ opacity: "1" }}
                      transition="all .3s ease"
                      onClick={() => {
                        if (quantity > 0) {
                          setAddOnQuantity((prev) => prev - 1);
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
                      {addOnQuantity}
                    </Text>
                    <Box
                      opacity=".7"
                      _hover={{ opacity: "1" }}
                      transition="all .3s ease"
                      onClick={() => {
                        if (quantity < 50) {
                          setAddOnQuantity((prev) => prev + 1);
                        }
                      }}
                    >
                      <AiOutlinePlusCircle />
                    </Box>
                  </HStack>
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
          pieces={pieces}
          addOns={[{ name: "Garlic Mayo Dip", quantity }]}
          totalAmount={totalAmount}
          isOpen={isPlaceOrderModalOpen}
          onClose={onPlaceOrderModalClose}
        />
      ) : null}
    </Modal>
  );
}

export default KNamAddToCartModal;
