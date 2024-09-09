import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"
import Header from './components/Header';
import Footer from './components/Footer';


export const metadata: Metadata = {
  title: "Market Mavens - Hands On Experience",
  description: "Our seasoned professionals deliver tailored marketing, risk management, and technology consultancy services designed to maximize ROI and drive scalable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
