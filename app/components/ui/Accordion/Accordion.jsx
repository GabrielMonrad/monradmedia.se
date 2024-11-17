import React, { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b ">
      <motion.button
        className="flex items-center justify-between w-full py-6 px-8 bg-black text-white font-bold cursor-pointer  "
        onClick={toggleAccordion}
        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{title}</span>
        <motion.span
          className="transition-transform duration-500 h-12 text-2xl "
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          &#x25BE;
        </motion.span>
      </motion.button>
      <motion.div
        className="overflow-hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto" },
          closed: { height: 0 },
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="p-8 bg-black">{content}</div>
      </motion.div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto  ">
      <AccordionItem
        title="What services does Mentdev offer?"
        content="Mentdev offers a wide range of services in web development, including website design and development, custom web application development, e-commerce solutions, CMS development, and API integration."
        isOpen={activeIndex === 0}
        toggleAccordion={() => toggleAccordion(0)}
      />
      <AccordionItem
        title="How to benefit from Mentdev's 24/7 support?"
        content="Benefit from Mentdev's round-the-clock support by having access to expert assistance and troubleshooting at any time. This ensures quick resolution of any technical issues or emergencies, minimizing downtime and maintaining the smooth functioning of your website or web application."
        isOpen={activeIndex === 1}
        toggleAccordion={() => toggleAccordion(1)}
      />
      <AccordionItem
        title="What expertise do Mentdev's web experts have?"
        content="Mentdev's web development experts have extensive expertise in Next.js and Tailwind CSS, two popular technologies in the web development industry. They are skilled in leveraging the features and capabilities of these frameworks to deliver efficient, scalable, and visually appealing web solutions."
        isOpen={activeIndex === 2}
        toggleAccordion={() => toggleAccordion(2)}
      />
      <AccordionItem
        title="How can I get in touch with the Mentdev team?"
        content="To get in touch with the Mentdev team, you can reach out to us through ur website's contact form, email, or phone. Our responsive communication channels ensure prompt and effective communication for inquiries, consultations, and project discussions. Support@Mentdev.com"
        isOpen={activeIndex === 3}
        toggleAccordion={() => toggleAccordion(3)}
      />
    </div>
  );
};

export default Accordion;
