import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "George Halterman - Full Stack Engineer",
  description: "Profile site of George Halterman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-slate-200">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-16 bg-slate-200">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
