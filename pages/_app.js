// pages/_app.js
import { ChakraProvider,CSSReset } from "@chakra-ui/react";
import customTheme from "../utils/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;