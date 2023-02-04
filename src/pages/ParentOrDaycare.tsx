import React from "react";
import NavBar from "../NavBar";
import { Button, Center, Heading, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ParentOrDaycare() {
  const navigate = useNavigate();

  return (
    <div className="App-header green-bgd">
      <NavBar />
      <Center>
        <HStack marginTop={"300px"}>
          <Button
            w={"600px"}
            h={"300px"}
            borderRadius={"30px"}
            backgroundColor={"white"}
            _hover={{
              bg: "yellow.100",
            }}
            onClick={() => {
              navigate("/provider-signup");
            }}
          >
            <Heading className="font">Provider</Heading>
          </Button>
          <Button
            w={"600px"}
            h={"300px"}
            borderRadius={"30px"}
            backgroundColor={"white"}
            _hover={{
              bg: "yellow.100",
            }}
            onClick={() => {
              navigate("/parent-signup");
            }}
          >
            <Heading className="font">Parent</Heading>
          </Button>
        </HStack>
      </Center>
    </div>
  );
}

export default ParentOrDaycare;
