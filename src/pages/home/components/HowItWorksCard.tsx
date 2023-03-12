import { Box, Image, Text, VStack, WrapItem } from "@chakra-ui/react";
import React from "react";

function HowItWorksCard({
  items,
}: {
  items: { image: string; details: string };
}) {
  return (
    <WrapItem w="20rem">
      <VStack gap="2rem" w="100%">
        <Box>
          <Image src={items.image} />
        </Box>
        <Text fontFamily="inter" textAlign="center" color="palette.secondary">
          {items.details}
        </Text>
      </VStack>
    </WrapItem>
  );
}

export default HowItWorksCard;
