"use client";
import useAdminHomePageStatQuery from "@/_hooks/queries/useAdminHomePageStatQuery";
import { useAuth } from "@/login/hooks/useAuth";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AdminHomePage = () => {
  const { data: authData } = useAuth();
  const { data: statData } = useAdminHomePageStatQuery({
    branchId: authData?.branchId || undefined,
  });

  const stat = statData?.data?.doc;

  return (
    <Flex columnGap={4}>
      <Box flex={1} h="fit-content">
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <Heading
            fontSize="2xl"
            fontWeight="semibold"
            display="flex"
            alignItems="center"
            columnGap={2}
          >
            Beranda
          </Heading>
        </Flex>
        <SimpleGrid spacing={4} templateColumns="repeat(3, 1fr)">
          <Link href="/admin/couriers">
            <Card size="md">
              <CardHeader>
                <Heading size="md">Jumlah Kurir</Heading>
              </CardHeader>
              <CardBody>
                <Heading size="2xl" textAlign="right">
                  {stat?.courierCount || 0}
                </Heading>
              </CardBody>
            </Card>
          </Link>
          {authData?.role === "super-admin" && (
            <Link href="/admin/branches">
              <Card size="md">
                <CardHeader>
                  <Heading size="md">Jumlah Cabang</Heading>
                </CardHeader>
                <CardBody>
                  <Heading size="2xl" textAlign="right">
                    {stat?.branchCount || 0}
                  </Heading>
                </CardBody>
              </Card>
            </Link>
          )}
          <Link href="/admin/parcels?status=ON_THE_WAY&status=PENDING">
            <Card size="md">
              <CardHeader>
                <Heading size="md">Paket Belum Terkirim</Heading>
              </CardHeader>
              <CardBody>
                <Heading size="2xl" textAlign="right">
                  {stat?.parcelCount || 0}
                </Heading>
              </CardBody>
            </Card>
          </Link>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default AdminHomePage;
