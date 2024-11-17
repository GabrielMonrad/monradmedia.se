"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sixtyfour } from "@next/font/google";
import Image from "next/image"; // Glöm inte att importera Image-komponenten
import { Lora } from "@next/font/google";

const sixtyfourFont = Sixtyfour({
  weight: '400', // or any other weight you prefer
  subsets: ['latin'],
});

const LoraFont = Lora({
  weight: '700', // or any other weight you prefer
  subsets: ['latin'],
});

const textDuration = 0.5; // Duration for text animations
const baseDelay = 0.1; // Base delay for synchronization

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 0, // Start slightly below
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // Stagger the entrance based on the index
      duration: 0.5, // Duration of the fade-in effect
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};



const MovieDetails = ({ movieId, title, director, dop, gaffer, mua, videoSrc, onClose }) => {
  const [isExitingVideo, setIsExitingVideo] = useState(false); // För video exit animation
  const [isTextVisible, setIsTextVisible] = useState(true); // För textvisning
  const [isVideoVisible, setIsVideoVisible] = useState(true); // State för att kontrollera video-visning

  // Animation-varianter för att hantera video-inträde och utträde
  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Starta med opacity 0 och skala ner
    visible: { opacity: 1, scale: 1 }, // Slut med full opacity och skala
    exit: { opacity: 0, scale: 0.8 }, // Skala ner och tona bort vid exit
  };

  const handleClose = () => {
    setIsVideoVisible(false); // Dölj videon
    setIsTextVisible(false); // Dölj texten

    // Fördröjning innan onClose för att tillåta videoanimation
    setTimeout(() => {
      onClose();
    }, 150); // Matcha denna duration med transition-duration för videon
  };

  return (
    <motion.div
      className="flex flex-col w-full h-screen overflow-hidden relative"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2  }}
    >
      {/* Övre blur-sektion */}
  
      {/* Videosektion */}
      <div className="flex flex-col items-center justify-center flex-1 p-4 relative z-10">
        <div className="flex justify-center items-center w-full h-full md:w-1/2 md:h-1/2 -mt-5">
          {isVideoVisible && (
            <motion.video
            className="w-full h-auto aspect-video rounded-lg z-50"
            controls
            loop
            autoPlay
            src="/OLW Commercial Final Draft.mov" // Dynamisk video-path via props
            variants={videoVariants}
            initial="hidden"
            animate={isExitingVideo ? 'exit' : 'visible'}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            style={{ pointerEvents: 'auto' }} // Gör videon klickbar
            />
          )}
        </div>
        
        {/* Separat informationsdel */}
        {isTextVisible && (
          <motion.div
          className="pt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1 className="text-5xl font-bold text-[#5b6d5d] ">
              {title} {/* Dynamisk titel via props */}
            </motion.h1>
  
            <motion.p className="mt-4 text-lg text-[#c5c5c5]">
              <span className="font-semibold text-xl">Director:</span> {director} {/* Dynamisk regissör via props */}
            </motion.p>
  
            <motion.p className="mt-2 text-lg text-[#c5c5c5]">
              <span className="font-semibold text-xl">DOP:</span> {dop} {/* Dynamisk DOP via props */}
            </motion.p>
  
            <motion.p className="mt-2 text-lg text-[#c5c5c5]">
              <span className="font-semibold text-xl">Gaffer:</span> {gaffer} {/* Dynamisk gaffer via props */}
            </motion.p>
  
            <motion.p className="mt-2 text-lg text-[#c5c5c5]">
              <span className="font-semibold text-xl">MUA:</span> {mua} {/* Dynamisk MUA via props */}
            </motion.p>
  
            <motion.button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-[#5b6d5d] text-white rounded-md hover:bg-[#4a5b4b] transition"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              X
            </motion.button>
            <div 
              className="flex-1 bg-gray-200/0  absolute inset-0 z-40"
              onClick={handleClose} // Klick för att stänga ner
            ></div>
          </motion.div>
        )}
      </div>
  
      {/* Nedre blur-sektion */}
      <div 
        className="flex-1 bg-gray-200/0 backdrop-blur-md absolute inset-0 z-0" // Samma blureffekt som övre sektionen
        onClick={handleClose} // Klick för att stänga ner
      ></div>
    </motion.div>
  );
  
}

export default function Home() {
  const rows = 4; // Number of rows
  const cols = 4; // Number of columns
  const [lines, setLines] = useState([]); // To hold lines
  const [isFullScreen, setIsFullScreen] = useState(false); // State to manage full screen view

  // Define box data with IDs and links
const boxes = Array.from({ length: rows * cols }).map((_, index) => {
  const boxData = [
    {
      id: 0,
      title: "Inner Power (KIA)",
      director: "Gabriel Monrad",
      dop: "Filip Palmbäck & Alfred Bolsöy",
      gaffer: "Oscar Gidefjord & Wille Jonson",
      paSoundProducer: "Tilda Persdotter",
      mua: "Otto Galli",
      videoSrc: "/path/to/inner_power_video.mp4", // Ange sökväg till videon här
    },
    {
      id: 1,
      title: "Wish I could be something bigger",
      director: "Gabriel Monrad",
      gaffer: "Wilhelm Jonson",
      videoSrc: "/path/to/wish_i_could_be_video.mp4", // Ange sökväg till videon här
    },
    {
      id: 2,
      title: "CCM ft6",
      director: "Gabriel Monrad",
      dop: "Gabriel Monrad",
      gaffer: "Martin Vilcek",
      videoSrc: "/path/to/ccm_ft6_video.mp4", // Ange sökväg till videon här
    },
    {
      id: 3,
      title: "Lighthouse playin`",
      director: "Gabriel Monrad",
      videoSrc: "/path/to/lighthouse_playin_video.mp4", // Ange sökväg till videon här
    },
    {
      id: 4,
      title: "Spice of 2021",
      director: "Gabriel Monrad",
      videoSrc: "/path/to/spice_of_2021_video.mp4", // Ange sökväg till videon här
    },
    {
      id: 5,
      title: "Zalabees",
      director: "Gabriel Monrad",
      videoSrc: "/OLW Commercial Final Draft.mov", // Ange sökväg till videon här
    },
    {
      id: 6,
      title: "Hype festival D1",
      director: "Gabriel Monrad",
      videoSrc: "/path/to/hype_festival_d1_video.mp4", // Ange sökväg till videon här
    },
    {
      id: 7,
      title: "Monrads website",
      director: "Gabriel Monrad",
      videoSrc: "/path/to/monrads_website_video.mp4", // Ange sökväg till videon här
    },
    {
      id: 8,
      title: "Maran",
      director: "Oscar Gidefjord",
      dop: "Gabriel Monrad & Wille Jonson",
      producerSound: "Tilda Persdotter",
      gaffer: "Edvin Runudde Bydén",
      script: "Malin Almqvist",
      editor: "Gabriel Monrad",
      videoSrc: "/path/to/maran_video.mp4", // Ange sökväg till videon här
    },
    {
      id: 9,
      title: "Luffarslöjd",
      director: "Edvin Runudde Bydén",
      producer: "Henery Forsnor & Thea Grude",
      photoEditor: "Wilhelm Jonson",
      bPhoto: "Gabriel Monrad",
      cPhoto: "Tilda Persdotter",
      gaffers: "David Agardh, Alexandros Samaras, Mikael Larsson",
      sound: "Jordan Hazel, Tilda Persdotter",
      videoSrc: "/path/to/luffarslojd_video.mp4", // Ange sökväg till videon här
    },
    {
      id: 10,
      title: "OLW",
      director: "Viktor Blomdahl @company9",
      dop: "Gabriel Monrad",
      gaffer: "Cynthia Toledo, Kalle Silvmark",
      mua: "Helin Kavak",
      videoSrc: "/path/to/olw_video.mp4", // Ange sökväg till videon här
    },
    {
      id: 11,
      title: "Take off - DeVetDu",
      director: "Viktor Blomdahl",
      dop: "Gabriel Monrad",
      producer: "Marcus Nyberg",
      productionLeader: "Cynthia Toledo",
      gaffer: "Alexander Fogelström",
      vfx: "Vikor Blomdahl",
      videoSrc: "/path/to/take_off_video.mp4", // Ange sökväg till videon här
    },
  ];

  return {
    id: `box-${index + 1}`,
    link: boxData[index]?.id !== undefined ? `#` : null, // You can add links here
    data: boxData[index] || {},
  };
});
  // Function to create lines between the boxes
  const createLines = () => {
    const newLines = [];
    const boxWidth = window.innerWidth / cols; // Calculate the width of each box
    const boxHeight = window.innerHeight / rows; // Calculate the height of each box

    // Horizontal lines (drawn from left to right)
    for (let row = 0; row <= rows; row++) {
      newLines.push({
        x1: 0, // Start from the left of the viewport
        y1: row * boxHeight, // Adjust based on box height
        x2: window.innerWidth, // Extend to the right of the viewport
        y2: row * boxHeight, // Adjust based on box height
      });
    }

    // Vertical lines (drawn from top to bottom)
    for (let col = 0; col <= cols; col++) {
      newLines.push({
        x1: col * boxWidth, // Start at the current column
        y1: 0, // Start from the top of the viewport
        x2: col * boxWidth, // Extend to the bottom of the viewport
        y2: window.innerHeight, // Extend to the bottom of the viewport
      });
    }

    setLines(newLines);
  };

  useEffect(() => {
    createLines(); // Create lines when the component loads
    window.addEventListener("resize", createLines); // Reset lines on window resize
    return () => {
      window.removeEventListener("resize", createLines); // Clean up the event listener
    };
  }, []);

  // Handle box click to toggle full-screen view
  const handleBoxClick = (index) => {
    if (index === 5) { // Check for Box 6 (0-based index)
      setIsFullScreen(true);
    }
  };


  const [isMobile, setIsMobile] = useState(false);

  // Lyssna på fönsterstorlek för att bestämma layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile: <768px
    };
    handleResize(); // Initial kontroll
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative w-screen h-screen bg-black overflow-hidden ${
        isFullScreen ? "fixed inset-0 z-50" : ""
      }`}
    >
      {/* SVG for lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
        {lines.map((line, index) => {
          const randomDelay = Math.random() * 1.75 + 0.25; // Random delay between 0.25 and 2 seconds
          const randomDuration = Math.random() * 1.5 + 0.7; // Random duration between 0.7 and 2.2 seconds
          const strokeWidth = 4; // Fixed line width

          return (
            <motion.line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#5b665c"
              strokeWidth={strokeWidth} // Fixed line width
              initial={{ x1: line.x1, y1: line.y1, x2: line.x1, y2: line.y1 }} // Initial position offscreen
              animate={{
                x1: line.x1,
                y1: line.y1,
                x2: line.x2,
                y2: line.y2,
              }}
              transition={{
                duration: randomDuration * 0.9, // Reduce duration by 30%
                delay: randomDelay, // Random delay
              }}
            />
          );
        })}
      </svg>

      {isMobile ? (
        /* Mobil vy: Horisontell scroll */
        <div className="flex overflow-x-scroll snap-x snap-mandatory w-full h-full z-10 relative">
          {boxes.map((box, index) => {
            const baseDelay = Math.random() * 1.75 + 0.25; // Base delay for text animation
            const textDuration = 0.21; // Fixed duration for text animation (30% faster)

            return (
              <div
                key={box.id}
                className="snap-center flex-shrink-0 w-full h-full flex items-center justify-center p-4"
                onClick={() => handleBoxClick(index)} // Trigger full-screen view on Box click
              >
                <motion.div
                  className="flex items-center justify-center bg-transparent w-[90%] h-[90%] relative overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: textDuration,
                    delay: baseDelay,
                  }}
                >
                  {/* Box content */}
                  <div className="text-center text-gray-700/50">
                    <span className="text-2xl font-bold">{box.content}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Dator vy: 4x4 Rutnät */
        <div className="grid grid-cols-4 grid-rows-4 gap-0 p-0 w-full h-full z-10 relative">
          {boxes.map((box, index) => {
            const baseDelay = Math.random() * 1.75 + 0.25; // Base delay for text animation
            const textDuration = 0.21; // Fixed duration for text animation (30% faster)

            return (
              <div
                key={box.id}
                className="relative flex items-center justify-center cursor-pointer w-full h-full"
                onClick={() => handleBoxClick(index)} // Trigger full-screen view on Box click
              >
                <motion.div
                  className="flex items-center justify-center bg-transparent w-full h-full transition duration-300 ease-in-out relative overflow-hidden"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: textDuration,
                    delay: baseDelay,
                  }}
                >
          {/* Display "Akriv" in box 3, Box 9, and "Gabriel Monrad" in box 10 */}
          {index === 2 ? (
                        <Link href="/kontakt">

            <span
              className={`${sixtyfourFont.className} text-5xl font-bold text-[#5b6d5d] transition-all duration-500 hover:text-[#7f7f7f] hover:scale-90`}
            >
              KONTAKT
            </span>
            </Link>
          ) : index === 9 ? ( // Box 9
            
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
            <motion.img
        src="/Bild6 2.webp" // Kontrollera att sökvägen är korrekt
        alt="Gabriel Monrad"
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform "
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />
            </div>
          ) : index === 6 ? ( // Box 7
            <div className="flex items-center justify-center w-full h-full overflow-hidden">
            <motion.img
              src="/Bild2.webp" // Kontrollera att sökvägen är korrekt
              alt="Gabriel Monrad"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              custom={index} // Pass index for staggered animations
            />
            </div>
          ) : index === 8 ? ( // Box 10
            <Link href="/ommig" className="flex flex-col items-center justify-center w-full h-full">
            <span
              className={`${sixtyfourFont.className} text-5xl font-bold text-[#5b6d5d] transition-all duration-500 hover:text-[#7f7f7f] hover:scale-90`}
            >
              GABRIEL
            </span>
            <span
              className={`${sixtyfourFont.className} text-5xl font-bold text-[#5b6d5d] transition-all duration-500 hover:text-[#7f7f7f] hover:scale-90`}
            >
              MONRAD
            </span>
          </Link>
          ) : index === 1 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/WICBSB Still_1.1.1.png" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                objectFit="cover" // Täcker hela boxen
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          ) 
          : index === 5 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/CCM Logo_1.1.1.png" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                objectFit="cover" // Täcker hela boxen
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          )
          : index === 11 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/DeVetDu Still_1.1.1.png" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                objectFit="cover" // Täcker hela boxen
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          )
          : index === 0 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/KIA CARS STILL_2.1.1.png" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                objectFit="cover" // Täcker hela boxen
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          )
          : index === 13 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/LH _1.1.4.png" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                objectFit="cover" // Täcker hela boxen
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          )
          : index === 13 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/LH _1.1.4.png" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                objectFit="cover" // Täcker hela boxen
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          )
          : index === 7 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/Luffarslöjd still_1.1.1.png" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                objectFit="cover" // Täcker hela boxen
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          )
          : index === 3 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/Skärmavbild 2024-10-15 kl. 19.51.22.png" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                objectFit="cover" // Täcker hela boxen
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          )
          : index === 4 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/Skärmavbild 2024-10-15 kl. 19.41.31.png" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                className="transition-all duration-500 object-cover"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          )
          : index === 10 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/Skärmavbild 2024-10-06 kl. 20.27.17.webp" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                objectFit="cover" // Täcker hela boxen
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          )

          : index === 14 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden text-white/50">
             <span> ... UPCOMING</span>
            </div>
          )

          
          : index === 12 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden text-white/50 ">
             <span> ... UPCOMING</span>
            </div>
          )

          
          : index === 15 ? ( // Box 9
            <div className="flex items-center justify-center w-full h-full overflow-hidden ">
              <motion.img
                src="/ZALABEEZ Still_1.1.1.png" // Kontrollera att sökvägen är korrekt
                alt="Gabriel Monrad"
                layout="fill" // Bilden fyller hela boxen
                objectFit="cover" // Täcker hela boxen
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-5 hover:-translate-y-5"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for staggered animations
              />
            </div>
          ) : (
            box.id // Display the box ID for all other boxes
          )}
        </motion.div>
    </div>

    );
  })}
</div>


      )}
    </div>
  );
}
