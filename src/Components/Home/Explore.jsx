import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import imageData from "./Explore.json";

const Explore = ({ setSelectedFilter, selectedFilter }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter); // Toggle filter
  };

  return (
    <div ref={ref} className="flex justify-center mx-[4rem]">
      <div className="w-full border-b-4 border-gray-300 py-10">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-10 text-2xl sm:text-3xl font-bold sm:px-6 text-center sm:text-left"
        >
          Explore our menu
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-5 font-medium text-sm sm:text-md sm:px-6 text-center sm:text-left"
        >
          Our menu features a diverse selection of mouth-watering dishes, with
          clear descriptions and pricing, <br /> catering to all tastes and
          dietary needs.
        </motion.p>

        <ul className="flex gap-8 mt-10 overflow-x-auto scrollbar-none scroll-smooth">
          {imageData.map((currImage) => (
            <li
              key={currImage.id}
              className={`inline-block flex-shrink-0 sm:px-6 cursor-pointer hover:scale-95 duration-200 ${
                selectedFilter === currImage.title ? "opacity-50" : ""
              }`}
              onClick={() => handleFilterClick(currImage.title)}
            >
              <div className="flex flex-col items-center">
                <img
                  src={currImage.image}
                  alt={currImage.title}
                  className="h-28 w-28 rounded-full"
                />
                <p className="mt-3 text-xl font-semibold text-slate-600">
                  {currImage.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Explore;
