import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Help Nearby",
  description: "AI-assisted, human-reviewed matching for simple digital help in nearby communities.",
  metadataBase: new URL("https://helpnearby-sg.github.io"),
  openGraph: {
    title: "Help Nearby",
    description: "Spare time, matched with simple needs nearby.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Nearby",
    description: "Spare time, matched with simple needs nearby.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
