import { Box, Center, Grid, Text } from "@chakra-ui/react";
import React from "react";
import useObserver from "../../hooks/useObserver";
import BgImage from "../../assets/bgImage.svg";

function Contact() {
  const { ref } = useObserver("Contact");
  return (
    <Box h="100vh" ref={ref}>
      <Center
        h="20rem"
        bg="red"
        bgImage={BgImage}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      >
        <Text fontSize="2rem">CONTACT PAGE NI SIR TITO</Text>
      </Center>
    </Box>
  );
}

export default Contact;
