"use client";
import React from "react";
import useBranchQuery from "../_hooks/useBranchQuery";
import { useParams } from "next/navigation";
import Form from "./_components/Form";
import Map from "./_components/Map";
import { Box, Flex, Heading } from "@chakra-ui/react";

const ParcelDetail = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const { data, isLoading: loadingParcel } = useBranchQuery({
    id,
  });
  const parcel = data?.data?.doc;

  return (
    <Flex h="100vh" flexDir="column">
      <Flex mr={-6} ml={-6} flex={1} mt={-8}>
        <Box flex={1}>{<Map branch={parcel} />}</Box>
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
          {!loadingParcel ? <Form branch={parcel} /> : null}
        </Box>
      </Flex>
    </Flex>
  );
};

export default ParcelDetail;
