import { Box, Divider, HStack, Text, VStack, Wrap } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import breakPoints from "../../../utils/interfaces/Breakpoints";
import CategoryCard from "../components/CategoryCard";
import Category1 from "../../../assets/categories/1.svg";
import Category2 from "../../../assets/categories/2.svg";
import Category3 from "../../../assets/categories/3.svg";
import SectionTitle from "../../../components/SectionTitle";

import Tea1 from "../../../assets/ktea/Cheesecake__1_-removebg-preview.webp";
import Tea2 from "../../../assets/ktea/Choco___Choco_Cheesecake-removebg-preview.webp";
import Tea3 from "../../../assets/ktea/Hokkaido-removebg-preview.webp";
import Tea4 from "../../../assets/ktea/Macha-removebg-preview.webp";
import Tea5 from "../../../assets/ktea/Okinawa-removebg-preview.webp";
import Tea6 from "../../../assets/ktea/Oreo_Cheesecake-removebg-preview.webp";
import Tea7 from "../../../assets/ktea/Oreo_Matcha-removebg-preview.webp";
import Tea8 from "../../../assets/ktea/Red_Velvet_Cheesecake-removebg-preview.webp";
import Tea9 from "../../../assets/ktea/WinterMelon-removebg-preview.webp";

import Nam1 from "../../../assets/knam/HIKORY_BBQ.webp";
import Nam2 from "../../../assets/knam/HONEY_SRIRACHA.webp";
import Nam3 from "../../../assets/knam/SOY_GARLIC.webp";
import Nam4 from "../../../assets/knam/SPICY_BBQ.webp";
import Nam5 from "../../../assets/knam/SPICY_KOREAN.webp";

import Egg1 from "../../../assets/kegg/K-EGG_BACON.webp";
import Egg2 from "../../../assets/kegg/K-EGG_CLASSIC_TOAST.webp";
import Egg3 from "../../../assets/kegg/K-EGG_HAM.webp";
import Egg4 from "../../../assets/kegg/K-EGG_PREMIUM_BULGOG.webp";
import Egg5 from "../../../assets/corndog/CHICKEN_PORK_FLOSS_CORNDOG.webp";
import Egg6 from "../../../assets/corndog/CLASSIC_CORNDOG.webp";
import Egg7 from "../../../assets/corndog/MOZZADOG.webp";
import Egg8 from "../../../assets/corndog/POTATO_CORNDOG.webp";
import Egg9 from "../../../assets/corndog/RAMYEON_CORNDOG.webp";

function Categories() {
  const categories = [
    {
      name: "KO - TEA",
      description: "Korean Boba",
      image: Category3,
      link: "/products",
      items: [Tea1, Tea2, Tea3, Tea4, Tea5, Tea6, Tea7, Tea8, Tea9],
    },
    {
      name: "K - NAM",
      description: "An upside down satisfaction guaranteed",
      image: Category2,
      link: "/products/k-nam",
      items: [Nam1, Nam2, Nam3, Nam4, Nam5],
    },
    {
      name: "K - EGG",
      description: "Egg, Drop, Roll!",
      link: "/products/k-egg",
      image: Category1,
      items: [Egg1, Egg2, Egg3, Egg4, Egg5, Egg6, Egg7, Egg8, Egg9],
    },
  ];

  return (
    <Box paddingBlock="6rem">
      <SectionTitle title="OUR CATEGORIES" />
      <Wrap
        justify="center"
        p="1rem"
        spacing="5rem"
        paddingTop="8rem"
        w={breakPoints}
        margin="auto"
      >
        {categories.map((item) => {
          return (
            <CategoryCard
              items={item.items}
              key={item.name}
              image={item.image}
              link={item.link}
              description={item.description}
            />
          );
        })}
      </Wrap>
    </Box>
  );
}

export default Categories;
