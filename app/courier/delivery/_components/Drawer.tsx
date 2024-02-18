import { Box, Flex } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Stepper from "./Stepper";
import Steps from "./Steps";

const MIN_HEIGHT = 200;

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
    </Flex>
  );
};

export default Drawer;
