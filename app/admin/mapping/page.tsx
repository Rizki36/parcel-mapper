"use client";
import React from "react";
import { HiOutlineLink, HiOutlineMap } from "react-icons/hi2";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import Map from "./_components/Map";
import Filter from "./_components/Filter";

const MappingPage = () => {
  return (
    <Flex columnGap={4}>
      <Box flex={1} bg="white" rounded="xl" px={4} py={6} h="fit-content">
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
        </Flex>
        <Box>
          <Map />
        </Box>
      </Box>
      <Box as="aside" w="300px">
        <Box bg="white" rounded="xl" px={5} py={6} mb={4}>
          <Flex fontSize="lg" fontWeight="bold" columnGap={1}>
            80 Paket
            <Link href="/admin/mapping/parcels" px={2} py={1}>
              <HiOutlineLink />
            </Link>
          </Flex>
          Belum dipetakan
        </Box>
        <Filter />
      </Box>
    </Flex>
  );
};

export default MappingPage;
