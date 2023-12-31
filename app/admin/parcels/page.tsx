"use client";
import React from "react";
import {
  HiOutlineCube,
  HiMagnifyingGlass,
  HiMiniPlusSmall,
} from "react-icons/hi2";
import dynamic from "next/dynamic";
import { useDebounceFn } from "ahooks";
import useCustomRouter from "../../_hooks/useCustomRouter";
import usePageParams from "./_hooks/usePageParams";
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

const ParcelTable = dynamic(() => import("./_components/Table"), {});
const ParcelFilter = dynamic(() => import("./_components/Filter"), {});

const ParcelsPage = () => {
  const { search } = usePageParams();
  const { pushReplaceFilter, pushRemoveFilter } = useCustomRouter();

  const { run } = useDebounceFn(
    (value) => {
      if (!value) return pushRemoveFilter("/admin/parcels", "search");
      pushReplaceFilter("/admin/parcels", "search", value);
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
            <HiOutlineCube />
            Paket
          </Heading>
          <Flex alignItems="center" columnGap={4}>
            <InputGroup size="sm">
              <InputLeftElement pointerEvents="none">
                <HiMagnifyingGlass />
              </InputLeftElement>
              <Input
                colorScheme="teal"
                placeholder="Cari paket"
                defaultValue={search}
                onChange={(e) => run(e.currentTarget.value)}
              />
            </InputGroup>
            <Tooltip label="Tambah paket">
              <Link href="/admin/parcels/add">
                <IconButton
                  aria-label="Tambah paket"
                  icon={<HiMiniPlusSmall />}
                  size="sm"
                  colorScheme="teal"
                />
              </Link>
            </Tooltip>
          </Flex>
        </Flex>
        <Box>
          <ParcelTable />
        </Box>
      </Box>
      <ParcelFilter />
    </Flex>
  );
};

export default ParcelsPage;
