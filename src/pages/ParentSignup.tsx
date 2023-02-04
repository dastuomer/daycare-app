import React from "react";
import NavBar from "../NavBar";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ParentSignup() {
  const navigate = useNavigate();

  return (
    <div className="App-header green-bgd">
      <NavBar />
      <Center>
        <HStack marginTop={"100px"}>
          <Box
            w={"600px"}
            h={"700px"}
            borderRadius={"30px"}
            backgroundColor={"white"}
          >
            <Center>
              <Container
                maxW="lg"
                py={{ base: "12", md: "24" }}
                px={{ base: "0", sm: "8" }}
              >
                <Stack spacing="8">
                  <Stack spacing="6">
                    <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                      <Stack>
                        <Stack spacing="1" justify="center">
                          <Text color="muted">Sign up as a Parent</Text>
                          <Heading size={{ base: "xs", md: "sm" }}>
                            Already have an account?
                          </Heading>
                          <Button
                            variant="link"
                            colorScheme="blue"
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            Login
                          </Button>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Box
                    py={{ base: "0", sm: "8" }}
                    px={{ base: "4", sm: "10" }}
                    bg={{ base: "transparent", sm: "bg-surface" }}
                    boxShadow={{ base: "none", sm: "md" }}
                    borderRadius={{ base: "none", sm: "xl" }}
                  >
                    <Stack spacing="6">
                      <Stack spacing="5">
                        <HStack>
                          <FormControl>
                            <FormLabel htmlFor="email">First Name</FormLabel>
                            <Input id="email" type="email" />
                          </FormControl>
                          <FormControl>
                            <FormLabel htmlFor="email">Last Name</FormLabel>
                            <Input id="email" type="email" />
                          </FormControl>
                        </HStack>
                        <FormControl>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input id="email" type="email" />
                        </FormControl>
                      </Stack>
                      <Stack spacing="5">
                        <FormControl>
                          <FormLabel htmlFor="email">Password</FormLabel>
                          <Input id="password" type="password" />
                        </FormControl>
                      </Stack>
                      <HStack justify="space-between"></HStack>
                      <Stack spacing="6">
                        <Button
                          className="yellow-bgd"
                          variant="primary"
                          onClick={() => navigate("/parent-signup/child")}
                        >
                          Continue
                        </Button>
                        <HStack>
                          <Divider />
                          <Divider />
                        </HStack>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Container>
            </Center>
          </Box>
        </HStack>
      </Center>
    </div>
  );
}

export default ParentSignup;
