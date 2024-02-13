"use client";
import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
} from "@chakra-ui/react";
import CourierParcelsTable from "./_components/Table";
import useCourierData from "./_hooks/useCourierData";
import CourierForm from "./_components/Form";

const CourierDetail = () => {
  const { courier } = useCourierData();

  return (
    <Flex h="100vh" flexDir="column">
      <Card mb={5}>
        <CardHeader>
          <Heading size="md">Update Kurir</Heading>
        </CardHeader>
        <CardBody>{!!courier && <CourierForm courier={courier} />}</CardBody>
      </Card>

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
