import { Box, Center, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  name: string;
  address: string;
  phoneNumber: string;
  verified: number;
}
export const DaycareCard = ({
  name,
  address,
  phoneNumber,
  verified,
}: IProps) => {
  return (
    <div>
      <Box
        className="border-green"
        w={"400px"}
        h={"500px"}
        margin={5}
        borderRadius={"30px"}
        padding={2}
        borderWidth={2}
        backgroundColor={"white"}
      >
        <Center>
          <Stack>
            <Box
              className="border-green"
              marginTop={7}
              w={"300px"}
              h={"250px"}
              borderRadius={"30px"}
              padding={2}
              borderWidth={2}
            >
              image here
            </Box>
            <Stack>
              <Center>
                <Heading className="small-font" fontSize={"30px"}>
                  {name}
                </Heading>
              </Center>
              <HStack marginTop={"50px"} paddingTop={8} paddingLeft={2}>
                <Box>
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
                    Address
                  </Text>
                </Box>
                <Box paddingLeft={"20px"}>
                  <Text
                    className="small-font"
                    fontSize={"20px"}
                    paddingBottom={2}
                  >
                    {phoneNumber}
                  </Text>

                  <Text
                    className="small-font"
                    fontSize={"20px"}
                    paddingBottom={2}
                  >
                    {address}
                  </Text>
                </Box>
              </HStack>
            </Stack>
          </Stack>
        </Center>
      </Box>
    </div>
  );
};
export default DaycareCard;
