import React from "react";
import { PARCEL_STATUS } from "../../../_constants";
import usePageParams from "../_hooks/usePageParams";
import useCustomRouter from "../../../_hooks/useCustomRouter";
import {
  AccordionIcon,
  Box,
  Checkbox,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

const Filter = () => {
  return (
    <Box
      as="aside"
      bg="white"
      rounded="xl"
      px={5}
      py={6}
      w="300px"
      minH="700px"
    >
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
      <Accordion defaultIndex={[0]} allowMultiple>
        <StatusFilter />
      </Accordion>
    </Box>
  );
};

const StatusFilter = () => {
  const { status } = usePageParams();
  const { pushToggleFilter } = useCustomRouter();

  return (
    <AccordionItem border={0}>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          Status
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <Grid gap="2" display="inline-grid">
          {Object.entries(PARCEL_STATUS).map(([key, value]) => (
            <Text key={key} as="label" size="2">
              <Flex gap="2">
                <Checkbox
                  name="status"
                  isChecked={status?.includes(key) ?? false}
                  colorScheme="teal"
                  onChange={() => {
                    pushToggleFilter("/admin/parcels", "status", key);
                  }}
                >
                  {" "}
                  {value}
                </Checkbox>
              </Flex>
            </Text>
          ))}
        </Grid>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Filter;
