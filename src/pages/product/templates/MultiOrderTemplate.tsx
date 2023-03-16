/* eslint-disable no-underscore-dangle */
/* eslint-disable react/require-default-props */
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { CartItemModel } from "../../../utils/interfaces/AppInterfaces";

interface AddOns {
  name: string;
  quantity: number;
}

function MultiOrderTemplate({
  name,
  contact,
  address,
  items,
  total,
}: {
  name: string;
  contact: string;
  address: string;
  items: CartItemModel[];
  total: number;
}) {
  return (
    <VStack gap="1.2rem" align="start" color="palette.secondary">
      <Heading>Shipping Details</Heading>
      <VStack align="start" marginTop="2rem">
        <Text>Name: {name}</Text>
        <Text>Contact Number: {contact}</Text>
        <Text>Address: {address}</Text>
      </VStack>
      <br />
      <Heading>Order</Heading>
      {items.map((item) => {
        return (
          <VStack key={item._id}>
            <Text>
              {`${item.product_name} ${item.size || ""}${item.pieces || ""} | ${
                item.quantity
              }`}
              {item.addOn?.map((add: AddOns) => {
                return ` | Add-ons: ${add.name} ${item.quantity}`;
              })}
            </Text>
          </VStack>
        );
      })}
      <br />
      <Text>Total: </Text>
      <Heading>₱{total}</Heading>
    </VStack>
  );
}

export default MultiOrderTemplate;
