"use client";
import { Box, Link, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { HiOutlineCube } from "react-icons/hi2";

const menus: { href: string; text: string; icon: React.ReactNode }[] = [
  {
    href: "/admin/parcels",
    text: "Paket",
    icon: <HiOutlineCube />,
  },
  {
    href: "/admin/branches",
    text: "Cabang",
    icon: <HiOutlineCube />,
  },
];

const MenuItem: FC<{
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}> = ({ href, children, icon }) => {
  const path = usePathname();
  const active = path.startsWith(href);

  return (
    <li>
      <Link
        py={2.5}
        px={2}
        rounded={4}
        display="flex"
        alignItems="center"
        columnGap={2}
        bg={active ? "primary" : "transparent"}
        color={active ? "white" : "inherit"}
        _hover={{
          bg: "primary",
          color: "white",
        }}
        href={href}
      >
        {icon}
        {children}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <Box as="aside" h="screen" borderRight={1} borderRightColor="gray.100">
      <Text fontSize="2xl" fontWeight="bold" my={7} textAlign="center">
        Admin
      </Text>
      <Box
        as="ul"
        px={4}
        mt={4}
        mb={4}
        _first={{
          mt: 0,
          mb: 0,
        }}
      >
        {menus.map((menu) => (
          <MenuItem key={menu.href} href={menu.href} icon={menu.icon}>
            {menu.text}
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
