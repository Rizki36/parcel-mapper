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
import useBranchAdminsPageSearchParams from "./_hooks/useBranchAdminsPageSearchParams";
import dynamic from "next/dynamic";
import { DeleteBranchAdminProvider } from "./_providers/DeleteBranchAdminStore";
import DeleteBranchAdminAlertDialog from "./_components/DeleteAlertDialog";
import SelectBranch from "./_components/SelectBranch";

const BranchAdminsTable = dynamic(() => import("./_components/Table"), {});

const BranchAdminsPage = () => {
  const { search } = useBranchAdminsPageSearchParams();
  const { pushReplaceFilter, pushRemoveFilter } = useCustomRouter();

  const { run } = useDebounceFn(
    (value) => {
      if (!value) return pushRemoveFilter("/admin/branch-admins", "search");
      pushReplaceFilter("/admin/branch-admins", "search", value);
    },
    {
      wait: 500,
    }
  );

  return (
    <DeleteBranchAdminProvider>
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
              Admin Cabang
            </Heading>
            <Flex alignItems="center" columnGap={4}>
              <Box minW="250px">
                <SelectBranch />
              </Box>
              <InputGroup size="sm">
                <InputLeftElement pointerEvents="none">
                  <HiMagnifyingGlass />
                </InputLeftElement>
                <Input
                  colorScheme="teal"
                  placeholder="Cari admin cabang"
                  defaultValue={search}
                  onChange={(e) => run(e.currentTarget.value)}
                />
              </InputGroup>
              <Tooltip label="Tambah admin cabang">
                <Link href="/admin/branch-admins/add">
                  <IconButton
                    aria-label="Tambah admin cabang"
                    icon={<HiMiniPlusSmall />}
                    size="sm"
                    colorScheme="teal"
                  />
                </Link>
              </Tooltip>
            </Flex>
          </Flex>
          <Box>
            <BranchAdminsTable />
          </Box>
        </Box>
      </Flex>
      <DeleteBranchAdminAlertDialog />
    </DeleteBranchAdminProvider>
  );
};

export default BranchAdminsPage;
