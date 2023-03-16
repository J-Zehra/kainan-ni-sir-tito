import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./App";
import theme from "./utils/interfaces/theme";
import "@fontsource/recursive/400.css";
import "@fontsource/recursive/500.css";
import "@fontsource/recursive/600.css";
import "@fontsource/recursive/700.css";
import "@fontsource/recursive/900.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";

import AppContext from "./context/AppContext";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={client}>
        <AppContext>
          <App />
        </AppContext>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
