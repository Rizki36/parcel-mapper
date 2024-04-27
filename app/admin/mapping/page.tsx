"use client";
import React from "react";
import { HiOutlineMap } from "react-icons/hi2";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Map from "./_components/Map";
import Aside from "./_components/Aside";
import SelectBranch from "./_components/SelectBranch";
import { useAuth } from "@/login/hooks/useAuth";
import { MappingStoreProvider } from "./_providers/MappingProviders";
import ParcelList from "./_components/ParcelList";

const MappingPage = () => {
  const { data } = useAuth();

  return (
    <Flex columnGap={4}>
      <Flex flex={1} gap={4} direction="column">
        <Box bg="white" rounded="xl" px={4} py={6} h="fit-content">
          <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Heading
              fontSize="2xl"
              fontWeight="semibold"
              display="flex"
              alignItems="center"
              columnGap={2}
            >
              <HiOutlineMap />
              Pemetaan
            </Heading>
            {data?.role === "super-admin" && (
              <Box minW="250px">
                <SelectBranch />
              </Box>
            )}
          </Flex>
          <Box>
            <Map />
          </Box>
        </Box>
        <Box bg="white" rounded="xl" px={4} py={6} h="fit-content">
          <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Heading
              fontSize="2xl"
              fontWeight="semibold"
              display="flex"
              alignItems="center"
              columnGap={2}
            >
              Kurir
            </Heading>
          </Flex>
          <Box></Box>
        </Box>
      </Flex>
      <Box as="aside" w="300px">
        <Aside />
        <ParcelList />
      </Box>
    </Flex>
  );
};

const Wrapper = () => {
  return (
    <MappingStoreProvider>
      <MappingPage />
    </MappingStoreProvider>
  );
};

export default Wrapper;
