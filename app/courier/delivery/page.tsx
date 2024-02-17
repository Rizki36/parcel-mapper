"use client";
import { ENV } from "@/_constants";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ReactMapGL from "react-map-gl";

const MIN_HEIGHT = 200;

const StepperItem = ({
  active,
  onClick,
  step,
}: {
  active: boolean;
  onClick: () => void;
  step: number;
}) => {
  return (
    <IconButton
      isRound={true}
      variant="solid"
      colorScheme={active ? "teal" : "gray"}
      aria-label="Done"
      fontSize="20px"
      size="sm"
      icon={<>{step}</>}
      onClick={onClick}
    />
  );
};

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Flex justify="space-between">
      <StepperItem
        step={1}
        active={activeStep >= 1}
        onClick={() => setActiveStep(1)}
      />
      <StepperItem
        step={2}
        active={activeStep >= 2}
        onClick={() => setActiveStep(2)}
      />
      <StepperItem
        step={3}
        active={activeStep >= 3}
        onClick={() => setActiveStep(3)}
      />
    </Flex>
  );
};

const Drawer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(400);

  const handleResize = (e: React.TouchEvent) => {
    if (!ref.current) return;

    const touch = e.touches[0] || e.changedTouches[0];
    if (touch.clientY < 30) return;

    const rect = ref.current.getBoundingClientRect();
    const diff = rect.bottom - touch.clientY + 12;
    setHeight(Math.max(MIN_HEIGHT, diff));
  };

  return (
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
      p={2}
      pt={8}
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
      <Box mx="auto" width="80%" mt={3}>
        <Stepper />
      </Box>
    </Box>
  );
};

const DeliveryPage = () => {
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
        style={{ height: "100dvh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      ></ReactMapGL>
      <Drawer />
    </Box>
  );
};

export default DeliveryPage;
