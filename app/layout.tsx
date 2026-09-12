import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melica Resort Phu Quoc | Tropical Stay",
  description: "A serene tropical stay in Cua Lap, Duong To, Phu Quoc.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
