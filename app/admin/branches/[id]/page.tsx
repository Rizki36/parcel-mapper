"use client";
import React from "react";
import Form from "./_components/Form";
import BranchMap from "./_components/Map";
import { Box, Flex, Heading } from "@chakra-ui/react";
import useBranchData from "../_hooks/useBranchData";

const BranchDetail = () => {
  const { branch, loadingBranch } = useBranchData();

  return (
    <Flex h="100vh" flexDir="column">
      <Flex mr={-6} ml={-6} flex={1} mt={-8}>
        <Box flex={1}>{<BranchMap />}</Box>
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
          {!loadingBranch ? <Form branch={branch} /> : null}
        </Box>
      </Flex>
    </Flex>
  );
};

export default BranchDetail;
