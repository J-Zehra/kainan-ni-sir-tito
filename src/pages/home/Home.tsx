import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import useObserver from "../../hooks/useObserver";
import Categories from "./sections/Categories";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import VideoPromotion from "./sections/VideoPromotion";

function Home(): ReactElement {
  const { ref } = useObserver("Home");

  return (
    <Box ref={ref}>
      <Hero />
      <VideoPromotion />
      <HowItWorks />
      <Categories />
    </Box>
  );
}

export default Home;
