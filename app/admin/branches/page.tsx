"use client";
import React from "react";
import {
  HiMagnifyingGlass,
  HiMiniPlusSmall,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { useDebounceFn } from "ahooks";
import useCustomRouter from "../../_hooks/useCustomRouter";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import useBranchesPageSearchParams from "./_hooks/useBranchesPageSearchParams";
import dynamic from "next/dynamic";

const BranchTable = dynamic(() => import("./_components/Table"), {});
// const BranchFilter = dynamic(() => import("./_components/Filter"), {});

const BranchesPage = () => {
  const { search } = useBranchesPageSearchParams();
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
                placeholder="Cari cabang"
                defaultValue={search}
                onChange={(e) => run(e.currentTarget.value)}
              />
            </InputGroup>
            <Tooltip label="Tambah cabang">
              <Link href="/admin/branches/add">
                <IconButton
                  aria-label="Tambah cabang"
                  icon={<HiMiniPlusSmall />}
                  size="sm"
                  colorScheme="teal"
                />
              </Link>
            </Tooltip>
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
