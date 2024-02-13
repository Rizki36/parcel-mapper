"use client";
import React from "react";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import CourierParcelsTable from "./_components/Table";
import useCourierData from "./_hooks/useCourierData";

const CourierDetail = () => {
  const { courier } = useCourierData();

  return (
    <Flex h="100vh" flexDir="column">
      <Box bg="white" overflow="hidden" px={5} py={5}>
        <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
          <Heading
            fontWeight="semibold"
            fontSize="xl"
            textDecorationLine="underline"
          >
            {courier?.name}
          </Heading>
          <Text>
            {courier?.branch?.name} - ({courier?.branch?.branchCode})
          </Text>
        </Flex>

        <Divider />

        <CourierParcelsTable />
      </Box>
    </Flex>
  );
};

export default CourierDetail;
