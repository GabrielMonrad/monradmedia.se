import { useState, useEffect } from 'react';
import { Poppins } from '@next/font/google';

const poppinsFont = Poppins({
  weight: '400', // You can specify the weight if needed
  subsets: ['latin'], // This defines the subset of the font (e.g., 'latin')
});

const HoverEffect = ({ index, boxData, isMobile }) => {
  const [canHover, setCanHover] = useState(false); // State to control hover effect

  // Conditional excluded IDs based on device type
  const excludedIds = isMobile ? [14] : [13, 2, 6, 8, 9, 15]; // Exclude index 14 on mobile, index 13 on desktop

  const title = boxData[index]?.title; // Get title from boxData for this index
  const tid = boxData[index]?.tid; // Get title from boxData for this index


  // If mobile, just immediately show the title (no hover effect needed)
  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        setCanHover(true); // Allow hover effect after 3 seconds on non-mobile devices
      }, 3000);

      return () => clearTimeout(timer); // Clean up timer if component unmounts
    } else {
      setCanHover(true); // Enable hover immediately on mobile devices
    }
  }, [isMobile]); // Runs when `isMobile` changes

  // Only render hover effect if title exists, the index is not excluded, and hover is allowed
  if (title && !excludedIds.includes(index) && canHover) {
    return (
<div className="group flex">
  <div className="absolute inset-0 w-full h-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-20 flex items-center justify-center">
    <h1 className="text-center w-full">
      <span className={`${poppinsFont.className} lg:text-4xl font-bold text-[#b3b3b3]`}>
        {title}
      </span>
    </h1>
    <div className="absolute sm:top-[calc(65%+20px)] top-[calc(60%+10px)] w-full text-center">
      <span className={`${poppinsFont.className} sm:text-xl text-xs font-bold text-[#b3b3b3]`}>
        {tid}
      </span>
    </div>
  </div>
</div>



    
    
    
    

    );
  }

  return null; // Return null if no title, excluded ids, or hover is not allowed yet
};

export default HoverEffect;
