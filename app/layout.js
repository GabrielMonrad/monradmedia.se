"use client";

import React from "react";
import Head from "next/head";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import CookiePrompt from "./components/ui/CookiePrompt/CookiePrompt";
import { ParallaxProvider } from "react-scroll-parallax";
import { Montserrat } from "@next/font/google"; // Import the Montserrat font
import "./globals.css";

// Optimized font import with only the necessary weight
const montserrat = Montserrat({
  subsets: ["latin"],
  weights: ["200"], // Specify ExtraLight weight
});

export default function RootLayout({ children }) {
  const meta = {
    title: "MonradMedia",
    description: "MonradMedia",
    cardImage: "Monrad Media (1).png", // Ensure this image path is correct
    url: "https://yourwebsite.com", // Add your website URL here
  };

  return (
    <html lang="en">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <meta name="description" content={meta.description} />

        <meta name="theme-color" content="#000000" />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Preload Montserrat font for faster loading */}
        <link rel="canonical" href="https://www.monradmedia.se/" />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </Head>

      <body className={`${montserrat.className} sans-serif`}>
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
