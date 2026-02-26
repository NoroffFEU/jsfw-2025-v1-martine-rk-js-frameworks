import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/components/shared/Navigation";
import Footer from "@/app/components/shared/Footer";
import ToastProvider from "@/app/components/shared/ToastProvider";

export const metadata: Metadata = {
  title: "The Selection",
  description: "React and Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-primary">
        <ToastProvider />
        <header>
          <Navigation />
        </header>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
