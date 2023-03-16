/* eslint-disable react/require-default-props */
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";

interface AddOns {
  name: string;
  quantity: number;
}

function SingleOrderTemplate({
  name,
  contact,
  address,
  productName,
  quantity,
  total,
  size,
  pieces,
  addOns,
}: {
  name: string;
  contact: string;
  address: string;
  productName: string;
  quantity: number;
  total: number;
  addOns?: AddOns[];
  size?: string | "";
  pieces?: string | "";
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
      <Text>{`${productName} ${size || ""}${pieces || ""} | ${quantity}`}</Text>
      {addOns?.map((item) => {
        return (
          <Text
            key={item.name}
          >{`Add-ons: ${item.name} | ${item.quantity}`}</Text>
        );
      })}
      <br />
      <Text>Total: </Text>
      <Heading>₱{total}</Heading>
    </VStack>
  );
}

export default SingleOrderTemplate;
