import React from "react";
import RootLayout from "../app/layout";
import { Montserrat } from "@next/font/google";
import '@fontsource/geist-mono'; // Import the font

// Import the Montserrat ExtraLight font
const montserrat = Montserrat({
  subsets: ["latin"],
  weights: ["200"], // Specify ExtraLight weight
});

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <div className={montserrat.className}>
        <Component {...pageProps} />

        {/* "Coming soon..." message for phone resolutions */}
        <div className="text-center text-lg font-semibold text-[#5b6d5d] p-4 hidden sm:block">
          Coming soon...
        </div>
      </div>
    </RootLayout>
  );
}

export default MyApp;
