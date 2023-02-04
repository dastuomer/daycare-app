import { Center, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import NavBar from "../NavBar";
import DaycareCard from "./DaycareCard";

function SearchDaycares() {
  return (
    <div className="App-header green-bgd">
      <NavBar />
      <Center marginTop={"40px"}>
        <Stack>
          <HStack marginBottom={"30px"}>
            <DaycareCard
              name={"Annie's World"}
              address={"123 Regina ave"}
              phoneNumber={"(306)023-1734"}
              verified={0}
            />
            <DaycareCard
              name={"Kids Rule ChildCare"}
              address={"178 Wascana st"}
              phoneNumber={"(306)173-2334"}
              verified={0}
            />
            <DaycareCard
              name={"Carl's Corner"}
              address={"4 Albert st"}
              phoneNumber={"(306)153-1994"}
              verified={0}
            />
          </HStack>
          <HStack marginBottom={"100px"}>
            <DaycareCard
              name={"Rosemont Learning "}
              address={"3453 Scarlet st"}
              phoneNumber={"(306)678-1254"}
              verified={0}
            />
            <DaycareCard
              name={"Dragon's Den"}
              address={"24 Ross ave"}
              phoneNumber={"(306)165-7234"}
              verified={0}
            />
            <DaycareCard
              name={"First Years"}
              address={"24 robinson st"}
              phoneNumber={"(306) 123-1234"}
              verified={0}
            />
          </HStack>
        </Stack>
      </Center>
    </div>
  );
}

export default SearchDaycares;
