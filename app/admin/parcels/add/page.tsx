"use client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Map from "./_components/Map";
import Form from "./_components/Form";

export type MarkerLocation = {
  latitude: number | null;
  longitude: number | null;
};

const AddParcelPage = () => {
  const [location, setLocation] = useState<MarkerLocation>({
    latitude: null,
    longitude: null,
  });

  return (
    <Flex h="100vh" flexDir="column">
      <Flex mt={-8} mr={-6} ml={-6} flex={1}>
        <Box flex={1}>
          {<Map location={location} setLocation={setLocation} />}
        </Box>
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
          <Form location={location} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default AddParcelPage;
