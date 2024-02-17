import React from "react";
import StyleWrapper from "./_componets/Wrapper";
import { Flex, Text } from "@chakra-ui/react";

const CourierPage = () => {
  return (
    <StyleWrapper pt={6}>
      <Flex direction="column" mb={6}>
        <Text fontWeight="bold" fontSize="larger">
          Halo
        </Text>
        <Text fontWeight="bold" fontSize="larger">
          Sutarno
        </Text>
      </Flex>
    </StyleWrapper>
  );
};

export default CourierPage;
