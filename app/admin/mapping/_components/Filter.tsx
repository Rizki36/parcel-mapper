import React from "react";
import { Box } from "@chakra-ui/react";

const Filter = () => {
  return (
    <Box bg="white" rounded="xl" px={5} py={6} minH="500px">
      <Box
        pb={4}
        mb={2}
        borderBottom={1}
        fontWeight="semibold"
        borderBottomStyle="solid"
        borderBottomColor="gray.100"
      >
        Pengaturan
      </Box>
      <div></div>
    </Box>
  );
};

export default Filter;
