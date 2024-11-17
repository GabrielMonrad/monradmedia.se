"use client";
// pages/contact.js
import { motion } from "framer-motion";
import { Sixtyfour } from "@next/font/google";
import { Lora } from "@next/font/google";

const sixtyfourFont = Sixtyfour({
  weight: "400",
  subsets: ["latin"],
});

export default function Contact() {
  // Define animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 20 }, // Start fully transparent and slightly translated down
    visible: { opacity: 1, y: 0 }, // Fully visible and in original position
  };

  return (
    <motion.div
      className="flex flex-col items-center mt-16 min-h-screen p-4 bg-black text-white"
      initial="hidden" // Initial state for the animation
      animate="visible" // Animate to visible
      variants={pageVariants} // Animation variants
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <h1>
        <span
          className={`${sixtyfourFont.className} lg:text-[8vw] sm:text-6xl md:text-7xl text-2xl font-bold text-[#5b6d5d] transition-all duration-500 hover:text-[#7f7f7f] hover:scale-90`}
        >
          MONRAD MEDIA
        </span>
      </h1>

      <div className="flex flex-col justify-center items-center w-full mt-24 space-y-8 text-base md:text-lg px-4 sm:px-20">
  <p className={`${sixtyfourFont.className} text-center`}>
    <strong>Phone Number:</strong>
    <span className="block sm:inline">
      <br />
    </span>
    <a
      href="tel:+46768116068"
      className="text-blue-500 hover:text-blue-700 underline"
    >
      +46 768 11 60 68
    </a>
  </p>

  {/* Radbrytning för mobil */}
  <p className={`${sixtyfourFont.className} text-center`}>
    <strong>Email:</strong>
    <span className="block sm:inline">
      <br />
    </span>
    <a
      href="mailto:Monradmedia@gmail.com"
      className="text-blue-500 hover:text-blue-700 underline"
    >
      Monradmedia@gmail.com
    </a>
  </p>

  <p className={`${sixtyfourFont.className} text-center`}>
    <strong>Location:</strong>
    <span className="block sm:inline">
      <br />
    </span>
    <span className="text-blue-500 hover:text-blue-700">
      Stockholm, Sweden
    </span>
  </p>
</div>


    </motion.div>
  );
}
