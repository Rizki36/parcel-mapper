"use client";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import { HiMiniTruck, HiHome, HiMiniCog6Tooth } from "react-icons/hi2";
import { useSelectedLayoutSegment } from "next/navigation";

const Navigation = () => {
  const segment = useSelectedLayoutSegment();

  const isHomePage = segment === null;
  const isSettingPage = segment === "setting";

  return (
    <Flex
      mx="auto"
      w="100%"
      justify="center"
      bg="white"
      boxShadow="0 26px 58px 0 rgba(0, 0, 0, .10), 0 5px 14px 0 rgba(0, 0, 0, .10)"
    >
      <Flex w="70%" justify="space-between" py="2">
        <Link href="/courier" display="flex" justifyContent="center">
          <IconButton
            isRound={true}
            variant="link"
            colorScheme={isHomePage ? "teal" : "gray"}
            aria-label="Done"
            fontSize="20px"
            icon={<HiHome />}
          />
        </Link>
        <Link href="/courier/delivery" display="flex" justifyContent="center">
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="teal"
            aria-label="Done"
            fontSize="25px"
            size="lg"
            icon={<HiMiniTruck />}
          />
        </Link>
        <Link href="/courier/setting" display="flex" justifyContent="center">
          <IconButton
            isRound={true}
            variant="link"
            colorScheme={isSettingPage ? "teal" : "gray"}
            aria-label="Done"
            fontSize="20px"
            icon={<HiMiniCog6Tooth />}
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navigation;
