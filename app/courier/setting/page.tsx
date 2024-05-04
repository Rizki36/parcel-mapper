"use client";
import useLogout from "@/login/hooks/useLogout";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const SettingPage = () => {
  const { logout } = useLogout();

  return (
    <Flex w="100%" pb={5} px={4} alignItems="center">
      <Button onClick={logout} size="sm" w="100%">
        Keluar
      </Button>
    </Flex>
  );
};

export default SettingPage;
