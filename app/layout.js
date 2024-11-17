"use client";

import React from "react";
import Head from "next/head";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import CookiePrompt from "./components/ui/CookiePrompt/CookiePrompt";
import { ParallaxProvider } from "react-scroll-parallax";
import { Montserrat } from "@next/font/google"; // Import the Montserrat font
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weights: ["200"], // Specify ExtraLight weight
});

export default function RootLayout({ children }) {
  const meta = {
    title: "Mentdev",
    description: "Mentdev",
    cardImage: "/icon.webp",
  };

  return (
    <html lang="en">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="favicon.ico"
          sizes="128x128"
        />
        <meta content={meta.description} name="description" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#000000" />
        <meta property="og:url" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y8KCF2C26R"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-38HBZ95D9M');
          `}
        </script>
      </Head>

      <body className={montserrat.className}>
        {" "}
        {/* Apply the font class to the body */}
        <Navbar />
        <ParallaxProvider>
          <CookiePrompt />
          <main>{children}</main>
        </ParallaxProvider>
        <Footer />
      </body>
    </html>
  );
}
