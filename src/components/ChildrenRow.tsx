import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

function ChildrenRow() {
  return (
    <HStack
      h={"70px"}
      className={"border-green"}
      borderRadius={"10px"}
      borderWidth={2}
    >
      <Stack marginLeft={"15px"}>
        <Text className={"small-font"} fontSize={"25px"}>
          Childs name
        </Text>
      </Stack>
      <Box marginLeft={"20px"} w={"50px"} h={"50px"}>
        <Text
          className={"small-font"}
          marginTop={"15px"}
          marginLeft={"60px"}
          fontSize={"15px"}
          w={"80px"}
        >
          Birthday
        </Text>
      </Box>
      <Box paddingLeft={"220px"} w={"50px"} h={"50px"}>
        <Text
          className={"small-font"}
          marginTop={"15px"}
          marginLeft={"60px"}
          fontSize={"15px"}
          w={"80px"}
        ></Text>
      </Box>
    </HStack>
  );
}
export default ChildrenRow;
