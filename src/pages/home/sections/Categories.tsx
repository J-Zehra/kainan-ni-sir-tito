import { Box, Divider, HStack, Text, VStack, Wrap } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import breakPoints from "../../../utils/interfaces/Breakpoints";
import CategoryCard from "../components/CategoryCard";
import Category1 from "../../../assets/categories/1.svg";
import Category2 from "../../../assets/categories/2.svg";
import Category3 from "../../../assets/categories/3.svg";
import Item1 from "../../../assets/categories/kegg.png";
import Item2 from "../../../assets/categories/Knam.png";
import Item3 from "../../../assets/categories/Kotea.png";
import SectionTitle from "../../../components/SectionTitle";

function Categories() {
  const navigate = useNavigate();
  const categories = [
    {
      name: "KO - TEA",
      description: "Korean Boba",
      image: Category3,
      link: "/products",
      items: [Item3, Item3, Item3, Item3, Item3],
    },
    {
      name: "K - NAM",
      description: "An upside down satisfaction guaranteed",
      image: Category2,
      link: "/products/k-name",
      items: [Item2, Item2, Item2, Item2, Item2],
    },
    {
      name: "K - EGG",
      description: "Egg, Drop, Roll!",
      link: "/products/k-egg",
      image: Category1,
      items: [Item1, Item1, Item1, Item1, Item1],
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
