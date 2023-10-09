import Header from "@/components/Header";
import "./globals.scss";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon-48x48.webp" />
      </head>
      <Providers>
        <body className=" min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
