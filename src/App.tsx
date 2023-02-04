import { ChakraProvider, Text } from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <ChakraProvider>
      <Text>This is our daycare app</Text>
    </ChakraProvider>
  );
}

export default App;
