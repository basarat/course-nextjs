import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BooleanArt NextJS App",
  description: "Sample App for the BooleanArt NextJS Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
