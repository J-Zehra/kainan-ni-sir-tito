import { extendTheme } from "@chakra-ui/react";

const colors = {
  palette: {
    primary: "white",
    secondary: "#111111",
    accent: "#C37CD1",
    accent_hover: "#D487E3",
  },
};

const fonts = {
  body: `'Recursive', serif`,
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
    },
    body: {
      bg: "palette.primary",
      color: "palette.primary",
    },
    _placeholder: {
      color: "rgba(38, 50, 56, .6)",
      fontSize: ".9rem",
    },
  },
};

const theme = extendTheme({ colors, fonts, styles });
export default theme;
