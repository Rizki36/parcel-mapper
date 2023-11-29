"use client";
import classNames from "classnames";
import Link from "next/link";
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
  const active = path === href;

  return (
    <li>
      <Link
        className={classNames(
          "py-3 flex items-center font-semibold gap-x-2 leading-[130%] hover:text-white hover:bg-primary px-2 rounded-lg",
          {
            "bg-primary text-white": active,
          }
        )}
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
    <aside className="h-screen border-r border-r-neutral-100">
      <h1 className="text-2xl font-bold mt-7 text-center mb-7">Admin</h1>
      <ul className="px-4 space-y-1">
        {menus.map((menu) => (
          <MenuItem key={menu.href} href={menu.href} icon={menu.icon}>
            {menu.text}
          </MenuItem>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
