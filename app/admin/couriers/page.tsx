"use client";
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
import React from "react";
import {
  HiMagnifyingGlass,
  HiMiniPlusSmall,
  HiOutlineTruck,
} from "react-icons/hi2";
import useCouriersPageQuery from "./_hooks/useCouriersPageQuery";
import useCustomRouter from "@/_hooks/useCustomRouter";
import { useDebounceFn } from "ahooks";
import dynamic from "next/dynamic";
import SelectBranch from "./_components/SelectBranch";
import { DeleteCourierProvider } from "./_providers/DeleteCourierProvider";
import DeleteCourierAlertDialog from "./_components/DeleteAlertDialog";
import { useAuth } from "@/login/hooks/useAuth";

const CourierTable = dynamic(() => import("./_components/Table"), {});
// const ParcelFilter = dynamic(() => import("./_components/Filter"), {});

const CouriersPage = () => {
  const { search } = useCouriersPageQuery();

  const { pushReplaceFilter, pushRemoveFilter } = useCustomRouter();

  const { data } = useAuth();

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
    <DeleteCourierProvider>
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
              {data?.role === "super-admin" && (
                <Box minW="250px">
                  <SelectBranch />
                </Box>
              )}
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
              <Tooltip label="Tambah kurir">
                <Link href="/admin/couriers/add">
                  <IconButton
                    aria-label="Tambah kurir"
                    icon={<HiMiniPlusSmall />}
                    size="sm"
                    colorScheme="teal"
                  />
                </Link>
              </Tooltip>
            </Flex>
          </Flex>
          <Box>
            <CourierTable />
          </Box>
        </Box>
        {/* filter */}
        {/* <ParcelFilter /> */}
      </Flex>
      <DeleteCourierAlertDialog />
    </DeleteCourierProvider>
  );
};

export default CouriersPage;
