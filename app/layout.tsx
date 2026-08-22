import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Help Nearby",
  description: "AI-assisted, human-reviewed matching that turns spare minutes into simple everyday help by call or nearby.",
  metadataBase: new URL("https://helpnearby-sg.github.io"),
  openGraph: { title: "Help Nearby", description: "Turn spare time into simple everyday help by call or nearby.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Help Nearby", description: "Turn spare time into simple everyday help by call or nearby.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{/* THESIS: A neighbourhood switchboard for small windows of useful help; it refuses the generic marketplace grid. OWN-WORLD: warm paper, midnight navy, signal red, ruled coordination rows, and connected human handoffs. STORY: a resident sees the mechanism, understands the safety boundary, and chooses a form. FIRST VIEWPORT: a two-part statement on the left and a live pilot board on the right, with request and volunteer rows joined by an AI-agent signal. FORM: Call-sheet switchboard, candidate 5 of the grounded direction list, seed 007468ee. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. */}{children}</body></html>;
}
