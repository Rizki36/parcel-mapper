import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useMemo, useRef, useState } from "react";
import Stepper from "./Stepper";
import Steps from "./Steps";
import { useDeliveryStore } from "../_providers/DeliveryProviders";
import { HiOutlineChevronLeft } from "react-icons/hi2";

const MIN_HEIGHT = 200;

const Drawer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(400);
  const { nodeDetailId } = useDeliveryStore((state) => state);

  const handleResize = (e: React.TouchEvent) => {
    if (!ref.current) return;

    const touch = e.touches[0] || e.changedTouches[0];
    if (touch.clientY < 30) return;

    const rect = ref.current.getBoundingClientRect();
    const diff = rect.bottom - touch.clientY + 12;
    setHeight(Math.max(MIN_HEIGHT, diff));
  };

  return (
    <Flex
      background="white"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      height={height}
      boxShadow="0 26px 58px 0 rgba(0, 0, 0, .28), 0 5px 14px 0 rgba(0, 0, 0, .10)"
      borderTopRadius={20}
      zIndex={999}
      ref={ref}
      p={2}
      pt={8}
      overflow="hidden"
      direction="column"
    >
      <Flex
        justifyContent="center"
        position="absolute"
        top="8px"
        left={0}
        right={0}
      >
        <Box
          bg="gray.200"
          width="100px"
          height="10px"
          rounded={10}
          onTouchMove={handleResize}
          cursor="ns-resize"
        ></Box>
      </Flex>
      {nodeDetailId ? (
        <NodeDetail />
      ) : (
        <>
          <Box mx="auto" width="80%" mt={3}>
            <Stepper />
          </Box>

          <Flex
            direction="column"
            mt="5"
            px="4"
            flex={1}
            flexWrap="nowrap"
            overflow="hidden"
          >
            <Steps />
          </Flex>
        </>
      )}
    </Flex>
  );
};

const NodeDetail = () => {
  const { nodes, nodeDetailId, route, setRoute, setNodeDetailId } =
    useDeliveryStore((state) => state);
  const selectedNode = useMemo(() => {
    return nodes.find((item) => item.id === nodeDetailId);
  }, [nodeDetailId, nodes]);

  const selectedRoute = useMemo(() => {
    return route.find((item) => item.id === nodeDetailId);
  }, [nodeDetailId, route]);

  return (
    <div>
      <Button onClick={() => setNodeDetailId(null)} type="button" size="sm">
        <HiOutlineChevronLeft />
      </Button>
      <Flex direction="column" mt={6} mx={6}>
        <Flex>
          <Box flex={1} flexShrink={0}>
            <Text fontWeight="semibold" fontSize="sm">
              Nama Penerima
            </Text>
            <Text fontSize="md">{selectedNode?.recipientName}</Text>
          </Box>
          <Box flex={1} flexShrink={0}>
            <Text fontWeight="semibold" fontSize="sm">
              Nomor Telepon
            </Text>
            <Text fontSize="md">{selectedNode?.recipientName}</Text>
          </Box>
        </Flex>

        <Box mt={6}>
          <Text fontWeight="semibold" fontSize="sm">
            Alamat
          </Text>
          <Text fontSize="md">{selectedNode?.recipientAddress}</Text>
        </Box>
      </Flex>

      <Flex justifyContent="center" columnGap="4px" mt={10}>
        {selectedRoute?.visited ? (
          <Button
            onClick={() => {
              setRoute(
                route.map((item) => {
                  if (item.id === nodeDetailId) {
                    return { ...item, visited: false };
                  }
                  return item;
                })
              );
            }}
            colorScheme="red"
            size="sm"
          >
            Batalkan Diterima
          </Button>
        ) : (
          <Button
            onClick={() => {
              setRoute(
                route.map((item) => {
                  if (item.id === nodeDetailId) {
                    return { ...item, visited: true };
                  }
                  return item;
                })
              );
            }}
            colorScheme="teal"
            size="sm"
          >
            Paket Diterima
          </Button>
        )}

        {(!selectedNode?.lat || !selectedNode?.lng) && (
          <Button colorScheme="teal" size="sm">
            Tandai Koordinat
          </Button>
        )}
      </Flex>
    </div>
  );
};

export default Drawer;
