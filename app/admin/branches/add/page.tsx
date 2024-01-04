"use client";
import React, { useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import BranchMap from "./_components/Map";

export type AreaLocation = {
  latitude: number;
  longitude: number;
};

const AddBranchPage = () => {
  const [areas, setAreas] = useState<AreaLocation[]>([]);

  return (
    <Flex h="100vh" flexDir="column">
      <Flex mr={-6} ml={-6} flex={1} mt={-8}>
        <Box flex={1}>{<BranchMap areas={areas} setAreas={setAreas} />}</Box>
        <Box
          bg="white"
          overflow="hidden"
          w="350px"
          borderLeft={1}
          borderLeftStyle="solid"
          borderLeftColor="gray.100"
          px={5}
        >
          <Heading
            fontWeight="semibold"
            textAlign="center"
            mb={4}
            mt={5}
            fontSize="md"
          >
            Data Paket
          </Heading>
          {<></>}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AddBranchPage;
