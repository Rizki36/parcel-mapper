"use client";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
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
import useLogout from "@/login/hooks/useLogout";
import { useAuth } from "@/login/hooks/useAuth";

const menu: SidebarMenu[] = [
  {
    href: "/admin/parcels",
    text: "Paket",
    icon: <HiOutlineCube />,
    allowedRoles: ["admin", "super-admin"],
  },
  {
    href: "/admin/couriers",
    text: "Kurir",
    icon: <HiOutlineTruck />,
    allowedRoles: ["admin", "super-admin"],
  },
  {
    href: "/admin/branches",
    text: "Cabang",
    icon: <HiOutlineHomeModern />,
    allowedRoles: ["super-admin"],
  },
  {
    href: "/admin/branch-admins",
    text: "Admin Cabang",
    icon: <HiOutlineUserGroup />,
    allowedRoles: ["super-admin"],
  },
  {
    href: "/admin/mapping",
    text: "Pemetaan",
    icon: <HiOutlineMap />,
    allowedRoles: ["admin", "super-admin"],
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
  const auth = useAuth();
  const { logout } = useLogout();

  return (
    <Flex
      as="aside"
      h="screen"
      borderRight={1}
      borderRightStyle="solid"
      borderRightColor="gray.100"
      direction="column"
    >
      <Text fontSize="2xl" fontWeight="bold" my={7} textAlign="center">
        Admin {auth?.role === "super-admin" ? "Pusat" : "Cabang"}
      </Text>
      <Box flex={1}>
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
          {menu.map((menu) => {
            if (!auth?.role || !menu.allowedRoles?.includes(auth?.role)) {
              return null;
            }

            return (
              <MenuItem key={menu.href} href={menu.href} icon={menu.icon}>
                {menu.text}
              </MenuItem>
            );
          })}
        </Box>
      </Box>
      <Flex justifyContent="center" px={2} py={5}>
        <Button onClick={logout} size="sm" w="100%">
          Keluar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
