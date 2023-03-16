import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useApp from "../../../hooks/useApp";

interface NavLinkProps {
  nav: string;
}

function NavLink(props: NavLinkProps) {
  const { nav } = props;
  const appContext = useApp();

  return (
    <Link to={nav === "Home" ? "/" : nav.toLowerCase()}>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        transition="all .2s ease"
        pos="relative"
        fontWeight={appContext?.activeNav === nav ? "semibold" : "medium"}
        fontSize={appContext?.scrolled ? ".9rem" : ".95rem"}
        color={
          appContext?.activeNav === nav ? "palette.accent" : "palette.primary"
        }
        _hover={{
          color: "palette.accent",
        }}
      >
        {nav}
      </Text>
    </Link>
  );
}

export default NavLink;
