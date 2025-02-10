"use client";
// pages/ommig/page.js
import { motion } from "framer-motion";
import { Rajdhani } from 'next/font/google';
import { Sixtyfour } from "@next/font/google";


const sixtyfourFont = Sixtyfour({
  weight: 'variable', // or any other weight you prefer
  subsets: ['latin'],
});

const rajdhani = Rajdhani({
  weight: '500', // Specify the weight
  subsets: ['latin'], // Subset you want to include
});

// Define animation variants
const pageVariants = {
  hidden: { opacity: 0, backgroundColor: 'black' }, // Start fully black
  visible: { opacity: 1, backgroundColor: 'transparent' }, // Transition to transparent background
};

const contentVariants = {
  hidden: { opacity: 0, x: 20 }, // Content starts transparent and slightly below
  visible: { opacity: 1, y: 0 }, // Content becomes fully opaque and moves to original position
};

export default function Ommig() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-white min-h-screen"
      initial="hidden" // Initial state for the animation
      animate="visible" // Animation state to transition to
      variants={pageVariants} // Animation variants for background
      transition={{ duration: 1 }} // Duration of the animation
    >
      <div className="relative w-screen h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="/Bild4 2.jpeg" // Kontrollera att sökvägen är korrekt
          alt="Gabriel Monrad"
          layout="fill" // Bilden fyller hela boxen
          objectFit="cover" // Täcker hela boxen
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform"
          initial="hidden"
          animate="visible"
        />
        
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Left White Box */}
          <motion.div 
            className="absolute top-20 left-32 bg-white/0 w-[500px] text-black p-4 rounded"
            initial="hidden" // Start hidden
            animate="visible" // Animate to visible
            variants={contentVariants} // Animation variants for content
            transition={{ duration: 0.5, delay: 0.5 }} // Duration of the content animation with delay
          >
            <p className={`${rajdhani.className} font-4xl text-5xl text-white leading-[1.3]`}>
              Jag är en frilansande filmskapare <br />
              som 
              regisserar, fotar,
              <br />
              skriver och berättar.  
            </p>
          </motion.div>

          {/* Right Tall Box */}
          <motion.div 
            className="absolute top-64 right-14 bg-white/0 w-[400px] h-[600px] text-black p-4 rounded"
            initial="hidden" // Start hidden
            animate="visible" // Animate to visible
            variants={contentVariants} // Animation variants for content
            transition={{ duration: 0.5, delay: 1 }} // Delay increased to 1 second for better visibility
          >
            <p className={`${rajdhani.className} font-bold text-4xl text-white leading-[1.3] `}>
              Mitt sätt att förmedla film är en rytmisk musikalitet i känsla, timing, vinklar, färger & djup, där djupet ofta är fler än i tre dimensioner. Film är för mig både konkret & abstrakt. Det är art i sin renaste form.
            </p>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden w-full flex flex-col items-center justify-center absolute -top-6  mt-10 left-1/2 transform -translate-x-1/2">
          {/* Centered Text Box for Mobile */}
          <motion.div 
            className="bg-white/0 w-full max-w-[350px] text-black p-4 rounded"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className={`${rajdhani.className} font-4xl text-3xl text-white leading-[1.5] text-center`}>
              Jag är en frilansande filmskapare <br />
              som regisserar, fotar, <br />
              skriver och berättar
            </p>
          </motion.div>

          {/* Centered Text Box for Mobile (Right Box) */}
          <motion.div
            className="bg-white/0 w-full max-w-[350px] text-black p-4 rounded mt-8"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className={`${rajdhani.className} font-bold text-2xl text-white leading-[1.5] text-center mt-60`}>
              Mitt sätt att förmedla film är en rytmisk musikalitet i känsla, timing, vinklar, färger & djup, där djupet ofta är fler än i tre dimensioner. Film är för mig både konkret & abstrakt. Det är art i sin renaste form.
            </p>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
