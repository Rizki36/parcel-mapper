import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useDeliveryStore } from "../../_providers/DeliveryProviders";
import useStepWithValidation from "../../_hooks/useStepWithValidation";

const Step1 = () => {
  const { setStep } = useStepWithValidation();

  const { distances, setDistances } = useDeliveryStore((state) => state);

  return (
    <Flex
      justify="center"
      direction="column"
      flex={1}
      overflowY="auto"
      flexWrap="nowrap"
    >
      <Flex columnGap="4px">
        <Button
          flex={1}
          colorScheme={distances.length ? undefined : "teal"}
          size="sm"
          onClick={() => {
            setDistances([
              [0, 1, 2, 3, 4], // 0
              [1, 0, 5, 6, 7], // 1
              [2, 5, 0, 8, 9], // 2
              [3, 6, 8, 0, 10], // 3
              [4, 7, 9, 10, 0], // 4
            ]);
          }}
        >
          {distances.length ? "Perbarui Jarak Paket" : "Dapatkan Jarak Paket"}
        </Button>
        {!!distances.length && (
          <Button colorScheme="teal" size="sm" onClick={() => setStep(2)}>
            Lanjut
          </Button>
        )}
      </Flex>

      <Flex
        direction="column"
        mt={5}
        flex={1}
        overflowY="auto"
        flexWrap="nowrap"
        pb={5}
      >
        <Accordion allowMultiple>
          {distances.map((row, rowIndex) => {
            return (
              <AccordionItem key={rowIndex}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {rowIndex === 0 ? "Cabang" : `Paket ${rowIndex}`} ke
                      lainnya
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TableContainer>
                    <Table size="sm">
                      <Thead>
                        <Tr>
                          <Th>Ke</Th>
                          <Th>Jarak</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {row.map((column, columnIndex) => {
                          return (
                            <Tr key={1}>
                              <Td>
                                {columnIndex === 0
                                  ? "Cabang"
                                  : `Paket ${columnIndex}`}
                              </Td>
                              <Td>{column} Km</Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default Step1;
