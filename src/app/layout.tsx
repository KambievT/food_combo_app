import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cafe",
  description: "Уютное кафе с лучшими блюдами и напитками",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-20">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-8 md:py-12">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
