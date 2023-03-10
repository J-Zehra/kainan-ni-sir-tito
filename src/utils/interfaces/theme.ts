import { extendTheme } from "@chakra-ui/react";

const colors = {
  palette: {
    primary: "white",
    secondary: "#111111",
    accent: "#FF7C14",
    accent_hover: "#FF7202",
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
