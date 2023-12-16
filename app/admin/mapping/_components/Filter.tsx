import React from "react";
import {
  AccordionIcon,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

const Filter = () => {
  return (
    <Box bg="white" rounded="xl" px={5} py={6} minH="700px">
      <Box
        pb={4}
        mb={2}
        borderBottom={1}
        fontWeight="semibold"
        borderBottomStyle="solid"
        borderBottomColor="gray.100"
      >
        Filter
      </Box>
      <Accordion defaultIndex={[]} allowMultiple>
        <StatusFilter />
        <BranchFilter />
      </Accordion>
    </Box>
  );
};

const StatusFilter = () => {
  return (
    <AccordionItem border={0}>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Status Paket
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel></AccordionPanel>
    </AccordionItem>
  );
};

const BranchFilter = () => {
  return (
    <AccordionItem border={0}>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Cabang
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel></AccordionPanel>
    </AccordionItem>
  );
};

export default Filter;
