"use client";
import React from "react";
import Navigation from "./_componets/Navigation";
import { Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const excludePaths = ["/courier/delivery"];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (excludePaths.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <Flex direction="column" height="100vh">
      <Flex flex={1} id="main-content">
        {children}
      </Flex>
      <Navigation />
    </Flex>
  );
};

export default MainLayout;
