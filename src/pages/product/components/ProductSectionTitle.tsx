import { Divider, Text, VStack } from "@chakra-ui/react";
import React from "react";

function ProductSectionTitle({ title }: { title: string }) {
  return (
    <VStack>
      <Text fontWeight="bold" fontSize="1.8rem" color="palette.secondary">
        {title}
      </Text>
      <Divider
        borderWidth="2px"
        borderRadius="1rem"
        borderColor="palette.accent"
        w="5rem"
      />
    </VStack>
  );
}

export default ProductSectionTitle;
