import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Help Nearby",
  description: "Small moments of spare time, matched with simple community needs nearby.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
