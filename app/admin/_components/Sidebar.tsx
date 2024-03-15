"use client";
import { Box, Link, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import {
  HiOutlineCube,
  HiOutlineHomeModern,
  HiOutlineMap,
  HiOutlineTruck,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { SidebarMenu, SidebarMenuProps } from "./Sidebar.type";

const menu: SidebarMenu[] = [
  {
    href: "/admin/parcels",
    text: "Paket",
    icon: <HiOutlineCube />,
  },
  {
    href: "/admin/couriers",
    text: "Kurir",
    icon: <HiOutlineTruck />,
  },
  {
    href: "/admin/branches",
    text: "Cabang",
    icon: <HiOutlineHomeModern />,
  },
  {
    href: "/admin/branch-admins",
    text: "Admin Cabang",
    icon: <HiOutlineUserGroup />,
  },
  {
    href: "/admin/mapping",
    text: "Pemetaan",
    icon: <HiOutlineMap />,
  },
];

const MenuItem: FC<SidebarMenuProps> = ({ href, children, icon }) => {
  const path = usePathname();
  const active = path.startsWith(href);

  return (
    <Box as="li" listStyleType="none">
      <Link
        py={2.5}
        px={2}
        rounded={4}
        display="flex"
        alignItems="center"
        columnGap={2}
        bg={active ? "teal.400" : "transparent"}
        color={active ? "white" : "inherit"}
        _hover={{
          bg: "teal.400",
          color: "white",
        }}
        mt={2}
        href={href}
      >
        {icon}
        {children}
      </Link>
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Box
      as="aside"
      h="screen"
      borderRight={1}
      borderRightStyle="solid"
      borderRightColor="gray.100"
    >
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
        {menu.map((menu) => (
          <MenuItem key={menu.href} href={menu.href} icon={menu.icon}>
            {menu.text}
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
