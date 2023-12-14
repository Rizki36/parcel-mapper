import React, { FC } from "react";
import Sidebar from "./_components/Sidebar";
import { Box } from "@chakra-ui/react";

const AdminLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Box as="main" display="grid" gridTemplateColumns="250px 1fr" h="100vh">
      <Sidebar />
      <Box pt={8} px={6} pb={0} bg="gray.50">
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
