"use client";
import React from "react";
import { HiMagnifyingGlass, HiOutlineHomeModern } from "react-icons/hi2";
import { useDebounceFn } from "ahooks";
import useCustomRouter from "../../_hooks/useCustomRouter";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import usePageParams from "./_hooks/usePageParams";
import dynamic from "next/dynamic";

const BranchTable = dynamic(() => import("./_components/Table"), {});
// const BranchFilter = dynamic(() => import("./_components/Filter"), {});

const BranchesPage = () => {
  const { search } = usePageParams();
  const { pushReplaceFilter, pushRemoveFilter } = useCustomRouter();

  const { run } = useDebounceFn(
    (value) => {
      if (!value) return pushRemoveFilter("/admin/branches", "search");
      pushReplaceFilter("/admin/branches", "search", value);
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
            <HiOutlineHomeModern />
            Cabang
          </Heading>
          <Flex alignItems="center" columnGap={4}>
            <InputGroup size="sm">
              <InputLeftElement pointerEvents="none">
                <HiMagnifyingGlass />
              </InputLeftElement>
              <Input
                colorScheme="teal"
                placeholder="Cari branch"
                defaultValue={search}
                onChange={(e) => run(e.currentTarget.value)}
              />
            </InputGroup>
          </Flex>
        </Flex>
        <Box>
          <BranchTable />
        </Box>
      </Box>
      {/* <BranchFilter /> */}
    </Flex>
  );
};

export default BranchesPage;
