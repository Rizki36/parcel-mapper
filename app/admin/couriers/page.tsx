"use client";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { HiMagnifyingGlass, HiOutlineTruck } from "react-icons/hi2";
import usePageParams from "./_hooks/usePageParams";
import useCustomRouter from "@/_hooks/useCustomRouter";
import { useDebounceFn } from "ahooks";
import dynamic from "next/dynamic";

const CourierTable = dynamic(() => import("./_components/Table"), {});
const ParcelFilter = dynamic(() => import("./_components/Filter"), {});

const CouriersPage = () => {
  const { search } = usePageParams();

  const { pushReplaceFilter, pushRemoveFilter } = useCustomRouter();

  const { run } = useDebounceFn(
    (value) => {
      if (!value) return pushRemoveFilter("/admin/couriers", "search");
      pushReplaceFilter("/admin/couriers", "search", value);
    },
    {
      wait: 500,
    }
  );

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
            <HiOutlineTruck />
            Kurir
          </Heading>
          <Flex alignItems="center" columnGap={4}>
            <InputGroup size="sm">
              <InputLeftElement pointerEvents="none">
                <HiMagnifyingGlass />
              </InputLeftElement>
              <Input
                colorScheme="teal"
                placeholder="Cari kurir"
                defaultValue={search}
                onChange={(e) => run(e.currentTarget.value)}
              />
            </InputGroup>
          </Flex>
        </Flex>
        <Box>
          <CourierTable />
        </Box>
      </Box>
      {/* filter */}
      <ParcelFilter />
    </Flex>
  );
};

export default CouriersPage;
