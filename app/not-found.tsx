import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const NotFoundPage = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Heading fontWeight="bold">404</Heading>
      <p>Halaman tidak ditemukan</p>
    </Flex>
  );
};

export default NotFoundPage;
