import React, { FC } from "react";
import Sidebar from "./components/Sidebar";
import "@radix-ui/themes/styles.css";

const AdminLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <main className="grid grid-cols-[250px,1fr]">
      <Sidebar />
      <section className="pt-8 px-6 pb-0 bg-neutral-50">{children}</section>
    </main>
  );
};

export default AdminLayout;
