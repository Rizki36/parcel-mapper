"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import CourierParcelsTable from "./_components/Table";
import useCourierData from "./_hooks/useCourierData";
import CourierForm from "./_components/Form";
import UpdatePasswordForm from "./_components/UpdatePasswordForm";

const CourierDetail = () => {
  const { courier } = useCourierData();

  return (
    <Flex h="100vh" flexDir="column">
      <Grid templateColumns="1fr 1fr" columnGap={6} mb={5}>
        <GridItem h="100%">
          <Card h="100%">
            <CardHeader>
              <Heading size="md">Update Kurir</Heading>
            </CardHeader>
            <CardBody>
              {!!courier && <CourierForm courier={courier} />}
            </CardBody>
          </Card>
        </GridItem>
        <GridItem h="100%">
          <Card h="100%" mb={5}>
            <CardHeader>
              <Heading size="md">Ubah Password</Heading>
            </CardHeader>
            <CardBody>
              {!!courier && (
                <UpdatePasswordForm userId={courier?.userId ?? ""} />
              )}
            </CardBody>
          </Card>
        </GridItem>
      </Grid>

      <Card>
        <CardHeader>
          <Heading size="md">Paket Kurir</Heading>
        </CardHeader>
        <CardBody>
          <CourierParcelsTable />
        </CardBody>
      </Card>
    </Flex>
  );
};

export default CourierDetail;
