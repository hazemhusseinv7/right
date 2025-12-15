import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "./providers";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton/ContactButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Right",
  description:
    "Founded in 1995, Al Sawab Commercial Company (RIGHT) has established a strong presence in the Kingdom of Saudi Arabia for more than 25 years. Originating in Yanbu as a trading and services company, Al Sawab has evolved into a reputable and diversified enterprise committed to supporting the Kingdom's growth, modernization, and vision for sustainable development.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID,
    gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Providers>
          <Header />
          {children}
          <ContactButton />
          <Footer />
        </Providers>
      </body>

      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
