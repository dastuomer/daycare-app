import { Box, Center, HStack, Spacer, Text, Stack } from "@chakra-ui/react";
import React from "react";
import NavBar from "../NavBar";

function Dashboard() {
  return (
    <div className="App-header green-bgd ">
      <NavBar />
      <Center marginTop={"40px"}>
        <Stack>
          <Box
            className="border-yellow"
            w={"700px"}
            h={"400px"}
            borderRadius={"30px"}
            padding={6}
            borderWidth={2}
          >
            <Text className="font" fontSize={"60px"}>
              The fastest way to find childcare
            </Text>
            <Text className="small-font" fontSize={"20px"}>
              Finding childcare isn't easy. Kid Konnect helps simplify your
              search for safe and reliable daycares in your area, so you can get
              back to what really matters. Get affordable licensed Daycare
              Services without the long and frustrating wait times. Get
              affordable licensed Daycare Services without the long and
              frustrating wait times
            </Text>
          </Box>
          <Spacer w={"150px"} />
          {/* <Box w={"600px"} h={"400px"} padding={2}>
            <img src="src/images/kid.png" alt="kid" />
          </Box> */}

          {/* <Center>
            <HStack marginTop={"150px"} marginBottom={"150px"}>
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
          </Center> */}
          <HStack paddingBottom={"150px"}>
            <Box w={"600px"} h={"400px"} padding={2}>
              {/* <img
                className="image"
                src="/Users/dastuomer/daycare-app/src/images/WalkingToDaycare.png"
                alt="WalkingToDaycare"
              /> */}
            </Box>
            <Spacer w={"150px"} />
            <Box
              className="border-yellow"
              w={"700px"}
              h={"350px"}
              borderRadius={"30px"}
              padding={6}
              borderWidth={2}
            >
              <Text className="font" fontSize={"60px"}>
                Our Mission
              </Text>
              <Text className="small-font" fontSize={"20px"}>
                Parents and Guardians suffer monetary loss while waiting to find
                available day care spots that are Licensed and monetized. we
                have created a digital solution that allows parents easily
                search, compare and choose childcare options that meet their
                needs and provide peace of mind about their children's care.
              </Text>
            </Box>
          </HStack>
        </Stack>
      </Center>
    </div>
  );
}

export default Dashboard;
