import { Box, Center, HStack, Spacer, Text, Stack } from "@chakra-ui/react";
import React from "react";
import NavBar from "../NavBar";

function Dashboard() {
  return (
    <div className="App-header">
      <NavBar />
      <Center marginTop={"40px"}>
        <Stack>
          <HStack>
            <Box w={"600px"} h={"400px"} borderRadius={"30px"} padding={2}>
              <Text className="font" fontSize={"60px"}>
                The fastest way to find childcare
              </Text>
              <Text className="small-font" fontSize={"20px"}>
                Finding childcare isn't easy. Kid Konnect helps simplify your
                search for safe and reliable daycares in your area, so you can
                get back to what really matters.
              </Text>
            </Box>
            <Spacer w={"150px"} />
            <Box
              w={"600px"}
              h={"400px"}
              borderColor={"green.400"}
              borderRadius={"30px"}
              borderWidth={2}
              padding={2}
            >
              <Text> Maybe put an image here?</Text>
            </Box>
          </HStack>
          <Center>
            <HStack marginTop={"150px"}>
              <Box w={"400px"} h={"400px"} borderWidth={2}>
                <Text className="font" fontSize={"40px"} align="center">
                  Parents
                </Text>
              </Box>
              <Spacer w={10} />
              <Box w={"400px"} h={"400px"} borderWidth={2}>
                <Text className="font" fontSize={"40px"} align="center">
                  Find a Daycare
                </Text>
              </Box>
              <Spacer w={10} />
              <Box w={"400px"} h={"400px"} borderWidth={2}>
                <Text className="font" fontSize={"40px"} align="center"></Text>
              </Box>
            </HStack>
          </Center>
          <HStack>
            <Box
              w={"600px"}
              h={"400px"}
              borderColor={"green.400"}
              borderRadius={"30px"}
              borderWidth={2}
              padding={2}
              marginTop={"150px"}
            >
              <Text> Maybe put an image here?</Text>
            </Box>
            <Spacer w={"150px"} />
            <Box w={"600px"} h={"400px"} borderRadius={"30px"} padding={2}>
              <Text className="font" fontSize={"60px"}>
                The fastest way to find childcare
              </Text>
              <Text className="small-font" fontSize={"20px"}>
                Finding childcare isn't easy. Kid Konnect helps simplify your
                search for safe and reliable daycares in your area, so you can
                get back to what really matters.
              </Text>
            </Box>
          </HStack>
        </Stack>
      </Center>
    </div>
  );
}

export default Dashboard;
