/* eslint-disable react/require-default-props */
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import ReactDOMServer from "react-dom/server";
import KEggAddToCartModal from "./KEggAddToCartModal";
import KEggProducts from "../sections/KEggProducts";
import SingleOrderTemplate from "../templates/SingleOrderTemplate";
import useApp from "../../../hooks/useApp";
import MultiOrderTemplate from "../templates/MultiOrderTemplate";

interface AddOns {
  name: string;
  quantity: number;
}

function PlaceOrderModalMulti({
  isOpen,
  onClose,
  totalAmount,
}: {
  isOpen: boolean;
  totalAmount: number;
  onClose: () => void;
}) {
  const appContext = useApp();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const toast = useToast();

  const handleConfirm = async () => {
    if (!name || !address || !contactNumber) {
      toast({
        title: "Missing Fields.",
        description: "Please fill all the fields",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    const htmlstring = ReactDOMServer.renderToString(
      <MultiOrderTemplate
        address={address}
        name={name}
        items={appContext?.cartItems || []}
        contact={contactNumber}
        total={totalAmount}
      />
    );
    setSending(true);
    const data = {
      email_template: htmlstring,
    };

    await emailjs
      .send("service_wvfem3y", "template_bbpog7p", data, "s4i9jk7PO-pMqAN4h")
      .then((res) => {
        console.log(res);
        setName("");
        setAddress("");
        setContactNumber("");
        setSending(false);
        onClose();
        toast({
          title: "Order Placed.",
          description: "You'll get your order within 20 minutes",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        console.log(err);
        setName("");
        setAddress("");
        setContactNumber("");
        setSending(false);
      });
  };

  return (
    <Modal isOpen={isOpen} isCentered preserveScrollBarGap onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="palette.secondary">
        <ModalHeader color="palette.secondary">
          <Text>Shipping Information</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack w="100%">
            <Input
              p="1.5rem"
              focusBorderColor="palette.accent"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="number"
              p="1.5rem"
              focusBorderColor="palette.accent"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <Input
              p="1.5rem"
              focusBorderColor="palette.accent"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            _hover={{ opacity: ".9" }}
            leftIcon={<BsFillPatchCheckFill />}
            p="1.5rem"
            bg="palette.accent"
            color="palette.primary"
            onClick={handleConfirm}
            isLoading={sending}
            loadingText="Submitting..."
          >
            Confirm Order
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PlaceOrderModalMulti;
