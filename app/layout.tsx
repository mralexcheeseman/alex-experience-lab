import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Experience Lab",
  description: "A living laboratory for exquisite digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
