import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "mapbox-gl/dist/mapbox-gl.css";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import React from "react";
import Providers from "./_components/Providers";

const inter = Inter({
  subsets: ["latin"],
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
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          <Theme appearance="light">{children}</Theme>
        </Providers>
      </body>
    </html>
  );
}
