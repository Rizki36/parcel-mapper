import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "mapbox-gl/dist/mapbox-gl.css";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import Providers from "./providers";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Parcel Mapper",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Theme appearance="light">{children}</Theme>
        </Providers>
      </body>
    </html>
  );
}
