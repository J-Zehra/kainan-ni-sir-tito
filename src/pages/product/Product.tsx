import { Box, Center, Grid, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useObserver from "../../hooks/useObserver";
import BgImage from "../../assets/bgImage.webp";
import breakPoints from "../../utils/interfaces/Breakpoints";

function Product() {
  const { ref } = useObserver("Products");
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { label: "Ko-Tea", link: "" },
    { label: "Ko-Nam", link: "k-nam" },
    { label: "K-Egg", link: "k-egg" },
  ];

  return (
    <Box ref={ref}>
      <Center
        h="20rem"
        bg="red"
        bgImage={BgImage}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      >
        <Text fontSize="2rem">PRODUCTS PAGE NI SIR TITO</Text>
      </Center>
      <Center
        flexDir="column"
        paddingBlock="3rem"
        w={breakPoints}
        margin="auto"
      >
        <HStack color="palette.secondary" spacing=".2em">
          {tabs.map((item, index) => {
            return (
              <Link key={item.label} to={item.link}>
                <Text
                  transition="all .3s ease"
                  onClick={() => setActiveTab(index)}
                  color={
                    activeTab === index
                      ? "palette.primary"
                      : "palette.secondary"
                  }
                  cursor="pointer"
                  bg={activeTab === index ? "palette.accent" : "#ECECEC"}
                  p=".5rem 1.5rem"
                  borderLeftRadius={index === 0 ? "20rem" : ""}
                  borderRightRadius={index === tabs.length - 1 ? "20rem" : ""}
                >
                  {item.label}
                </Text>
              </Link>
            );
          })}
        </HStack>
        <Outlet />
      </Center>
    </Box>
  );
}

export default Product;
