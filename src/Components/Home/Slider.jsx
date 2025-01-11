import React, { useMemo, useState, useEffect } from "react";

const Testimonials = ({ data, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5); // Default to 5 cards for larger screens

  // Update visibleCards based on screen size
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setVisibleCards(screenWidth < 768 ? 3 : 5); // 3 cards for screens < 768px, 5 otherwise
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle card clicks and adjust the active index
  const handleCardClick = (clickedIndex) => {
    if (clickedIndex === activeIndex) return;

    const isNext =
      clickedIndex > activeIndex ||
      (clickedIndex === 0 && activeIndex === images.length - 1);
    setActiveIndex((prev) =>
      isNext
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length
    );
  };

  // Calculate position styles for each card based on the active index
  const positionStyles = useMemo(() => {
    const totalCards = images.length;

    return images.map((_, index) => {
      const offset = (index - activeIndex + totalCards) % totalCards;

      if (visibleCards === 3) {
        // Position logic for 3 visible cards
        switch (offset) {
          case 0:
            return {
              transform: "translateX(0%) scale(1)",
              zIndex: 3,
              opacity: 1,
            };
          case 1:
            return {
              transform: "translateX(60%) scale(0.85)",
              zIndex: 2,
              opacity: 0.8,
            };
          case totalCards - 1:
            return {
              transform: "translateX(-60%) scale(0.85)",
              zIndex: 2,
              opacity: 0.8,
            };
          default:
            return { opacity: 0 }; // Hide other cards
        }
      } else {
        // Position logic for 5 visible cards
        switch (offset) {
          case 0:
            return {
              transform: "translateX(0%) scale(1)",
              zIndex: 3,
              opacity: 1,
            };
          case 1:
            return {
              transform: "translateX(60%) scale(0.85)",
              zIndex: 2,
              opacity: 0.8,
            };
          case 2:
            return {
              transform: "translateX(120%) scale(0.7)",
              zIndex: 1,
              opacity: 0.6,
            };
          case totalCards - 1:
            return {
              transform: "translateX(-60%) scale(0.85)",
              zIndex: 2,
              opacity: 0.8,
            };
          case totalCards - 2:
            return {
              transform: "translateX(-120%) scale(0.7)",
              zIndex: 1,
              opacity: 0.6,
            };
          default:
            return { opacity: 0 }; // Hide other cards
        }
      }
    });
  }, [activeIndex, images, visibleCards]);

  return (
    <div className="w-full flex flex-col items-center justify-center pt-16 pb-10">
      <div className="pb-8">
        <h1 className="text-center font-bold text-xl md:text-[3vw] pb-[2vw]">
          {data.heading}
        </h1>
        <p className="text-center text-lg md:text-[2vw] px-4 md:px-[20vw]">
          {data.description}
        </p>
      </div>
      <ul className="relative flex justify-center w-[60vw] h-[40vh] md:h-[50vh] lg:h-[70vh] list-none perspective-300">
        {images.map((item, index) => (
          <li
            key={item.id}
            className="absolute flex items-center justify-center rounded-lg shadow-md w-[43vw] sm:w-[45%] lg:w-[40%] h-full transition-transform duration-300 bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage: `url(${item.image})`,
              ...positionStyles[index],
            }}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </ul>

      <div className="flex mt-4 space-x-6">
        {images.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 md:w-4 bg-blue-400 md:h-4 rounded-full cursor-pointer transition-transform duration-200 ${
              activeIndex === index
                ? "border-4 border-blue-500 transform scale-110"
                : "opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
