import Header from "@/components/Header";
import "./globals.scss";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
