import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const Pagination = (props: {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}) => {
  const { currentPage, totalPages, onPrevPage, onNextPage } = props;
  return (
    <Flex
      pt={4}
      w="full"
      borderTop={1}
      alignItems="center"
      borderTopColor="gray.100"
      borderTopStyle="solid"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap={1} color="gray.400">
        Page {currentPage} of {totalPages}
      </Flex>
      <Flex columnGap={3} alignItems="center">
        <Button
          p={0}
          colorScheme="gray"
          variant="outline"
          borderRadius="100%"
          size="sm"
          onClick={() => onPrevPage()}
          disabled={currentPage === 1}
        >
          <HiArrowLeft />
        </Button>
        <Button
          p={0}
          colorScheme="gray"
          variant="outline"
          borderRadius="100%"
          size="sm"
          onClick={() => onNextPage()}
          disabled={currentPage === totalPages}
        >
          <HiArrowRight />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pagination;
