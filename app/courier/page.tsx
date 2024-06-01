"use client";
import React, { useMemo } from "react";
import StyleWrapper from "./_componets/Wrapper";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import useCourierHomePageStatQuery from "@/_hooks/queries/useCourierHomePageStatQuery";
import { useAuth } from "@/login/hooks/useAuth";

const CourierPage = () => {
  const { data: authData } = useAuth();
  const { data } = useCourierHomePageStatQuery({
    courierId: authData?.courierId || undefined,
  });

  const stat = useMemo(() => {
    if (!data?.data?.docs?.length) return { completed: 0, inComplete: 0 };

    const temp = data?.data?.docs?.reduce(
      (acc, curr) => {
        if (curr.status === "DELIVERED") {
          acc.completed += curr.count;
        } else {
          acc.inComplete += curr.count;
        }

        return acc;
      },
      {
        completed: 0,
        inComplete: 0,
      }
    );

    return temp;
  }, [data?.data?.docs]);

  return (
    <StyleWrapper pt={6}>
      <Flex direction="column" mb={6}>
        <Card size="md" mt={16}>
          <CardBody>
            <Heading size="lg" textAlign="center" py={6}>
              <div>Mari kirim</div>
              <div>Paket-paket mu</div>
            </Heading>
          </CardBody>
        </Card>

        <Box mt={10}>
          <Heading size="md" textAlign="center">
            Statistik Pengiriman
          </Heading>

          <SimpleGrid mt={3} spacing={4} templateColumns="repeat(2, 1fr)">
            <Card size="md">
              <CardHeader>
                <Heading size="md">Belum</Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Heading size="2xl" textAlign="right">
                  {stat.inComplete || 0}
                </Heading>
              </CardBody>
            </Card>
            <Card size="md">
              <CardHeader>
                <Heading size="md">Selesai</Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Heading size="2xl" textAlign="right">
                  {stat.completed || 0}
                </Heading>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>
      </Flex>
    </StyleWrapper>
  );
};

export default CourierPage;
