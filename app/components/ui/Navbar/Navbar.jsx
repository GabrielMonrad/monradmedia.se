"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { GeistMono } from '@next/font/google';
import { useRouter } from 'next/navigation'; // From next/navigation

const Navbar = () => {
  const colorfulDivVariants1 = {
    hover: { scaleX: [1, 1.2, 1.5, 1], transition: { duration: 0.9 } },
  };

  const colorfulDivVariants2 = {
    hover: { scaleX: [1, 0.6, 1, 0.8, 1], transition: { duration: 0.9 } },
  };

  const colorfulDivVariants3 = {
    hover: { scaleX: [1, 2, 1.2, 1], transition: { duration: 0.9 } },
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const DesktopNavbar = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [hasScrolled, setHasScrolled] = useState(false);
    const controls = useAnimation();
    const lastScrollY = useRef(0); // Use ref to store last scroll position

    const router = useRouter();  // Next.js router

    const handleClick = () => {
      // If the current route is already the homepage, we reload the page
      if (window.location.pathname === '/') {
        window.location.reload();
      } else {
        router.push('/');
      }
    };

    const SCROLL_THRESHOLD = 80; // Set a threshold for hiding the navbar (in pixels)

    useEffect(() => {
      // Get the initial state from local storage or default to true
      if (typeof window !== "undefined") {
        const savedState = localStorage.getItem("isBannerVisible");
        setIsBannerVisible(savedState !== null ? JSON.parse(savedState) : true);
      }
    }, []);

    useEffect(() => {
      // Save the state to local storage whenever it changes
      if (typeof window !== "undefined") {
        localStorage.setItem("isBannerVisible", JSON.stringify(isBannerVisible));
      }
    }, [isBannerVisible]);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Check if the user has scrolled down and if the scroll distance exceeds the threshold
        if (currentScrollY > lastScrollY.current && currentScrollY > SCROLL_THRESHOLD) {
          setScrollDirection("down");
        } else if (currentScrollY < lastScrollY.current && currentScrollY > SCROLL_THRESHOLD) {
          setScrollDirection("up");
        }

        // Mark that the user has scrolled
        if (!hasScrolled && currentScrollY > 0) {
          setHasScrolled(true);
        }

        lastScrollY.current = currentScrollY; // Update the last scroll position
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [hasScrolled]);

    useEffect(() => {
      // Only control the animation after the first scroll and if the scroll exceeds the threshold
      if (hasScrolled) {
        if (scrollDirection === "down" && lastScrollY.current > SCROLL_THRESHOLD) {
          controls.start({ y: "-100%", transition: { duration: 0.3 } });
        } else if (scrollDirection === "up" && lastScrollY.current > SCROLL_THRESHOLD) {
          controls.start({ y: "0%", transition: { duration: 0.3 } });
        }
      }
    }, [scrollDirection, controls, hasScrolled]);

    return (
      <>
        <div className="sticky top-0 z-50 hidden lg:block">
          <motion.nav
            className="bg-white text-black/60"
            role="navigation"
          >
            <div className="relative flex justify-between items-center p-20 font-semibold w-full bg-gradient-to-t from-white/70 to-black backdrop-blur backdrop-filter backdrop-opacity-100">
              {/* Logo positioned halfway between left border and center */}
              <div className="absolute left-1/4 transform -translate-x-1/2 z-10 hover:scale-90 duration-500">
                <Link href="/">
                  <div onClick={handleClick}>
                    <Image
                      src="/Monrad Media (1).png"
                      alt="Monrad Media"
                      width={100} // Set the width
                      height={100} // Set the height
                      className="rounded-lg transition-all duration-700 hover:invert scale-110"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </motion.nav>
        </div>
      </>
    );
  }

  const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerAnimation = useAnimation();

    const handleMenuToggle = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    // Close the menu when a link is clicked
    const handleLinkClick = () => {
      setIsOpen(false);
    };

    useEffect(() => {
      containerAnimation.start(isOpen ? "visible" : "hidden");
    }, [containerAnimation, isOpen]);

    const containerVariants = {
      hidden: { opacity: 0, height: 0 },
      visible: { opacity: 1, height: "auto", transition: { duration: 0.2 } },
    };

    const contentVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    return (
      <nav className=" bg-gradient-to-t from-white/70 to-black backdrop-blur backdrop-filter backdrop-opacity-100 sticky top-0 z-50" role="navigation">
        <div className="block lg:hidden md:hidden">
          <div className="flex justify-between items-center px-1 font-semibold">
            <Link href="/">
              <Image
                src="/Monrad Media (1).png"
                alt="icon"
                className="ml-4 scale-90 rounded-lg transition-all duration-700"
                height={120}
                width={100}
                priority={true}
              />
            </Link>
            <button
              className="mr-4 focus:outline-none sm:hidden"
              onClick={handleMenuToggle}
            >
              <motion.svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {isOpen ? (
                  <>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 6L6 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 6L18 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </>
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 4h16v2H4V9zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"
                  />
                )}
              </motion.svg>
            </button>
          </div>
          <motion.div
            className={`${isOpen ? "block" : "hidden"}`}
            id="mobile-menu"
            variants={containerVariants}
            initial="hidden"
            animate={containerAnimation}
          >
            <motion.div
              className="z-10 space-y-4 px-2 pb-3 pt-2 flex flex-col text-center"
              variants={contentVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              transition={{ delay: 0.25, easeIn: 0, easeOut: 0 }}
            >
              <span className="justify-start items-start z-10 space-y-4 px-2 pb-3 pt-2 flex flex-col mx-4 text-center font-semibold text-black">
                <Link href="/kontakt" onClick={handleLinkClick}>
                  <p className="duration-300 ease-in-out hover:text-gray-900 hover:scale-105">
                    KONTAKT
                  </p>
                </Link>

                <Link href="/ommig" onClick={handleLinkClick}>
                  <p className="duration-300 ease-in-out hover:text-gray-900 hover:scale-105">
                    GABRIEL MONRAD
                  </p>
                </Link>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </nav>
    );
  };

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
