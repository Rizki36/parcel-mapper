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
import useRequestDirections from "../../_hooks/useRequestDirections";
import {
  generateDistancesFromDirections,
  meterToKm,
} from "@/admin/mapping/_utils";
import { indexToAlphabet } from "@/_utils";

const Step1 = () => {
  const { request } = useRequestDirections();
  const { setStep } = useStepWithValidation();

  const { routeProfile, distances, setDistances, nodes, setDirections } =
    useDeliveryStore((state) => state);

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
          onClick={async () => {
            try {
              const response = await request(nodes, routeProfile);
              setDirections(response);
              setDistances(generateDistancesFromDirections(nodes, response));
            } catch (error) {
              console.log(error);
            }
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
                      {rowIndex === 0
                        ? "Cabang"
                        : `Paket ${indexToAlphabet(rowIndex)}`}{" "}
                      ke lainnya
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
                              <Td>
                                {Number.isFinite(column)
                                  ? Math.round(meterToKm(column) * 100) / 100
                                  : 0}{" "}
                                Km
                              </Td>
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
