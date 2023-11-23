"use client";
import { TextField } from "@radix-ui/themes";
import { FiUser } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <TextField.Root>
        <TextField.Input />
        <TextField.Slot>
          <FiUser />
        </TextField.Slot>
      </TextField.Root>
    </div>
  );
}
