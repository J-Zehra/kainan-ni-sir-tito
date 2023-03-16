import { Box, Center, Grid, Text } from "@chakra-ui/react";
import React from "react";
import useObserver from "../../hooks/useObserver";
import BgImage from "../../assets/bgImage.webp";

function About() {
  const { ref } = useObserver("About");
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
        <Text fontSize="2rem">ABOUT PAGE </Text>
      </Center>
    </Box>
  );
}

export default About;
