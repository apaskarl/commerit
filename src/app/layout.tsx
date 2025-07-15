import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commerit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
