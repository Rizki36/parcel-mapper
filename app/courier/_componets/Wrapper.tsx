import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

const StyleWrapper = ({
  children,
  ...restProps
}: { children: React.ReactNode } & FlexProps) => {
  return (
    <Flex p="4" direction="column" width="100%" {...restProps}>
      {children}
    </Flex>
  );
};

export default StyleWrapper;
