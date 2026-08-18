import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Help Nearby",
  description: "AI-assisted, human-reviewed matching that turns 10, 20, 30, or 60 spare minutes into digital help by call or nearby.",
  metadataBase: new URL("https://helpnearby-sg.github.io"),
  openGraph: {
    title: "Help Nearby",
    description: "Turn 碎片时间 into digital help by call or nearby.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Nearby",
    description: "Turn 碎片时间 into digital help by call or nearby.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
