"use client";
import React from "react";
import Stepper from "./_components/Stepper";
import useParcelQuery from "../../../_hooks/queries/useParcelQuery";
import { useParams } from "next/navigation";
import Form from "./_components/Form";
import Map from "./_components/Map";
import { Box, Flex, Heading } from "@chakra-ui/react";

const ParcelDetail = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const { data, isLoading: loadingParcel } = useParcelQuery({
    id,
  });
  const parcel = data?.data?.doc;

  return (
    <Flex h="100vh" flexDir="column">
      <Flex
        alignItems="center"
        py={6}
        justifyContent="center"
        bg="white"
        w="calc(100% + 48px)"
        ml={-6}
        mt={-8}
        borderBottom={1}
        borderBottomStyle="solid"
        borderBottomColor="gray.100"
      >
        <Stepper />
      </Flex>
      <Flex mr={-6} ml={-6} flex={1}>
        <Box flex={1}>{!loadingParcel ? <Map parcel={parcel} /> : null}</Box>
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
          {!loadingParcel ? <Form parcel={parcel} /> : null}
        </Box>
      </Flex>
    </Flex>
  );
};

export default ParcelDetail;
