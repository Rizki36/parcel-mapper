import React from "react";

export type SidebarMenu = { href: string; text: string; icon: React.ReactNode };

export type SidebarMenuProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};
