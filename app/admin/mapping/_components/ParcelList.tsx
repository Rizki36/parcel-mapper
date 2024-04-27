import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import useParcelsData from "../_hooks/useParcelsData";

const ParcelList = () => {
  const { parcels } = useParcelsData();

  return (
    <Box bg="white" rounded="xl" px={5} py={6} mt={6} minH="500px">
      <Box
        pb={4}
        mb={2}
        borderBottom={1}
        fontWeight="semibold"
        borderBottomStyle="solid"
        borderBottomColor="gray.100"
      >
        List Paket
      </Box>
      <Flex direction="column" gap={4}>
        {parcels?.map((item, index) => (
          <Flex alignItems="center" gap={3} key={item.id}>
            <Flex
              alignItems="center"
              justifyContent="center"
              minW="18px"
              rounded="100%"
              h="18px"
              bg="red"
              color="white"
              fontSize="small"
            >
              {index + 1}
            </Flex>
            {item.recipientName}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default ParcelList;
