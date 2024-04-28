import React, { useMemo } from "react";
import { useDeliveryStore } from "../_providers/DeliveryProviders";
import { Flex } from "@chakra-ui/react";
import { Node } from "../_stores/delivery-store";
import { HiOutlineCheckCircle } from "react-icons/hi2";

export const RouteItems = () => {
  const { route, nodes, setNodeDetailId } = useDeliveryStore((state) => state);

  // map by id
  const mappedNodes = useMemo(() => {
    return nodes.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {} as Record<number, Node>);
  }, [nodes]);

  return (
    <Flex
      direction="column"
      mt={5}
      flex={1}
      overflowY="auto"
      flexWrap="nowrap"
      pb={5}
      rowGap="8px"
    >
      {route?.map((routeItem, index) => {
        const item = mappedNodes[routeItem.id];

        return (
          <Flex
            border="1px"
            borderColor="gray.100"
            rounded="lg"
            py="2"
            px="2"
            shadow="sm"
            key={index}
            justify="space-between"
            align="center"
            onClick={() => {
              if (item.type === "branch") return;

              setNodeDetailId(item.id);
            }}
          >
            <Flex flex={1}>
              {item?.type === "branch" ? "Cabang" : `Paket ${index}`}
            </Flex>
            <Flex>{routeItem.visited ? <HiOutlineCheckCircle /> : null}</Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
