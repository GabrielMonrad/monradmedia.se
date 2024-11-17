import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="border-b border-gray-200"
      layout
      initial={false}
      animate={{ backgroundColor: isOpen ? "#fff" : "#fff" }}
    >
      <div
        className="flex justify-between items-center cursor-pointer py-4 px-6"
        onClick={toggleAccordion}
      >
        <h2 className="text-xl font-bold">{question}</h2>
        <motion.svg
          className="h-6 w-6 transition-transform transform"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <motion.path
            key={isOpen ? "pathClosed" : "pathOpen"}
            fillRule="evenodd"
            clipRule="evenodd"
            d={isOpen ? "M19 9l-7 7-7-7" : "M12 5v14m0-14v14m-6-7h12"}
          />
        </motion.svg>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="py-2 px-6 text-black text-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: "anticipate", duration: 0.3 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Accordion2 = () => {
  return (
    <div>
      <div className="bg-white  justify-center flex py-20 text-2xl font-bold"></div>

      <div className="bg-white justify-center flex  pb-40 text-2xl font-bold text-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Accordion
              question="How do I choose the right package for my business?"
              answer="Consider factors such as your business size, specific needs, budget, scalability, and the features included in each package. Our package guide can help you make an informed decision."
            />

            <Accordion
              question="Can I customize a package based on my requirements?"
              answer="Yes, we offer a Custom Package option where you can tailor the features and development hours based on your unique requirements. Contact us for more details."
            />

            <Accordion
              question="What is included in the Enterprise Package?"
              answer="The Enterprise Package includes Responsive Design, HTML/CSS Development, JavaScript Interactivity, SEO Optimization, Backend Development (Node.js/Express), Database Integration, and Custom Features and Functionality."
            />

            <Accordion
              question="Is there flexibility in the number of development hours for each package?"
              answer="Yes, each package comes with a set number of development hours, but you can discuss additional hours or adjustments based on your project's needs."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion2;
