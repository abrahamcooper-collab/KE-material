import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HashScrollFix from "./components/HashScrollFix";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KE Material Handling DFW | Forklift Repair & Maintenance",
  description:
    "Professional mobile forklift repair, preventive maintenance, and equipment diagnostics throughout the Dallas–Fort Worth Metroplex. Call (972) 277-7563.",
  keywords:
    "forklift repair, forklift maintenance, material handling, DFW, Dallas Fort Worth, Arlington TX",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <HashScrollFix />
        {children}
      </body>
    </html>
  );
}
