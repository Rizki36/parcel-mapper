import React from "react";
import { RouteItems } from "../RouteItems";
import { Flex } from "@chakra-ui/react";

const Step3 = () => {
  return (
    <Flex
      justify="center"
      direction="column"
      flex={1}
      overflowY="auto"
      flexWrap="nowrap"
    >
      <RouteItems />
    </Flex>
  );
};

export default Step3;
