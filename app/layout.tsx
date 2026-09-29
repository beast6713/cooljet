import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoolJet | Refrigerant-less Cooling",
  description: "CoolJet is a refrigerant-less cooling concept using blower and C-D nozzle technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
