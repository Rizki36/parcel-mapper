"use client";
import { ENV } from "@/_constants";
import { Box, Flex } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ReactMapGL from "react-map-gl";

const MIN_HEIGHT = 200;

const DeliveryPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(400);

  const handleResize = (e: React.TouchEvent) => {
    if (!ref.current) return;

    const touch = e.touches[0];
    if (touch.clientY < 30) return;

    const rect = ref.current.getBoundingClientRect();
    const diff = rect.bottom - touch.clientY + 12;
    setHeight(Math.max(MIN_HEIGHT, diff));
  };

  return (
    <Box position="relative">
      <ReactMapGL
        reuseMaps
        mapboxAccessToken={ENV.MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: 112.226479,
          latitude: -7.546839,
          zoom: 14,
        }}
        style={{ height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      ></ReactMapGL>
      <Box
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
      </Box>
    </Box>
  );
};

export default DeliveryPage;
