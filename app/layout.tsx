import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sfFont = localFont({
  variable: "--font-sf",
  src: "../public/fonts/SF-Pro-Display-Regular.otf",
});
const sfFont_Black = localFont({
  variable: "--font-sf-black",
  src: "../public/fonts/SF-Pro-Display-Black.otf",
});
const sfFont_Bold = localFont({
  variable: "--font-sf-bold",
  src: "../public/fonts/SF-Pro-Display-Bold.otf",
});
const sfFont_Semibold = localFont({
  variable: "--font-sf-semibold",
  src: "../public/fonts/SF-Pro-Display-Semibold.otf",
});

export const metadata: Metadata = {
  title: "Apple Store Online - Apple (IN)",
  description: "This is Apple's site clone developed by Adithiyan",
  icons: {
    icon: "/apple-site/apple-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sfFont.variable} ${sfFont_Bold.variable} ${sfFont_Black.variable} ${sfFont_Semibold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
