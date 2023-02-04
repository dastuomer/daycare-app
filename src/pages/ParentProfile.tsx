import { Box, HStack, Text, Center } from "@chakra-ui/react";
import React from "react";
import NavBar from "../NavBar";

function ParentProfile() {
  return (
    <div className="App-header green-bgd">
      <NavBar />
      <Center>
        <HStack marginTop={"100px"}>
          <Box
            w={"1080px"}
            h={"700px"}
            borderRadius={"30px"}
            backgroundColor={"white"}
          >
            <Center>
              <HStack marginTop={"50px"}>
                <Box w={"400px"} h={"300px"} borderRadius={"30px"}>
                  <Center>
                    <Text
                      className="small-font"
                      fontSize={"30px"}
                      fontWeight={"semibold"}
                    >
                      Personal Details
                    </Text>
                  </Center>
                  <Center>
                    <HStack marginLeft={"20px"} marginTop={"20px"}>
                      <Box>
                        <Text
                          className="small-font"
                          fontSize={"20px"}
                          paddingBottom={2}
                        >
                          Email
                        </Text>
                        <Text
                          className="small-font"
                          fontSize={"20px"}
                          paddingBottom={2}
                        >
                          Phone number
                        </Text>
                        <Text
                          className="small-font"
                          fontSize={"20px"}
                          paddingBottom={2}
                        >
                          Children
                        </Text>
                        <Text
                          className="small-font"
                          fontSize={"20px"}
                          paddingBottom={2}
                        >
                          Insurance
                        </Text>
                      </Box>
                      <Box paddingLeft={"20px"}>
                        <Text
                          className="small-font"
                          fontSize={"20px"}
                          paddingBottom={2}
                        >
                          Email
                        </Text>
                        <Text
                          className="small-font"
                          fontSize={"20px"}
                          paddingBottom={2}
                        >
                          Phone number
                        </Text>
                        <Text
                          className="small-font"
                          fontSize={"20px"}
                          paddingBottom={2}
                        >
                          Children
                        </Text>
                        <Text
                          className="small-font"
                          fontSize={"20px"}
                          paddingBottom={2}
                        >
                          Insurance
                        </Text>
                      </Box>
                    </HStack>
                  </Center>
                </Box>
                <Box
                  w={"600px"}
                  h={"300px"}
                  borderRadius={"30px"}
                  backgroundColor={"yellow.300"}
                ></Box>
              </HStack>
            </Center>
          </Box>
        </HStack>
      </Center>
    </div>
  );
}

export default ParentProfile;
