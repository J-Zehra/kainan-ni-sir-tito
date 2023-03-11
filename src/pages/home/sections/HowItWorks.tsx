import { Box, Wrap } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import HowItWorksCard from "../components/HowItWorksCard";
import Step1 from "../../../assets/how-it-works/step1.svg";
import Step2 from "../../../assets/how-it-works/step2.svg";
import Step3 from "../../../assets/how-it-works/step3.svg";

function HowItWorks() {
  const items = [
    {
      image: Step1,
      details: "Choose From Our Weekly Menu",
    },
    {
      image: Step2,
      details: "We Will Deliver Your Purchase",
    },
    {
      image: Step3,
      details: "Enjoy Our Savoury Korean Foods",
    },
  ];

  return (
    <Box paddingBlock="6rem">
      <SectionTitle title="HOW IT WORKS" />
      <Wrap justify="center" marginTop="6rem" spacing="2rem">
        {items.map((item) => {
          return <HowItWorksCard items={item} key={item.details} />;
        })}
      </Wrap>
    </Box>
  );
}

export default HowItWorks;
