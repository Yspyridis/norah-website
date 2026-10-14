import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Variable slot names (--font-archivo/--font-inter) kept as-is — they feed
// the generic --font-display/--font-sans mapping in globals.css, so nothing
// else needs to change when the actual typeface loaded here changes.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "NORAH · National Waste & Recycling Robotics Adoption Hub",
    template: "%s · NORAH",
  },
  description:
    "NORAH is a vendor-neutral national hub helping councils, waste operators and recycling businesses evaluate, demonstrate and scale robotics, from first assessment to operational scale-up.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
