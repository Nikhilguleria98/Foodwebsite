import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import Heroimg1 from '../../assets/images/Hero.jpg';
import Heroimg2 from '../../assets/images/Heroimg2.jpg';
import Heroimg3 from '../../assets/images/Heroimg3.jpg';
import Explore from './Explore';
import TopDishes from './TopDishes';
import Contact from '../ContactUs/ContactUs';
import { NavLink } from 'react-router-dom';
import Testimonials from './Slider';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Heroimg1, Heroimg2, Heroimg3];
  const content = [
    {
      heading: 'Delicious Meals, Delivered Fast',
      description: 'Craving something tasty? Order from your favorite local restaurants and get it delivered to your door in minutes.',
    },
    {
      heading: 'Fresh and Healthy Options',
      description: 'Choose from a variety of healthy, fresh meals that cater to your diet preferences.',
    },
    {
      heading: 'Fast Delivery, Hot Meals',
      description: 'Get your meals delivered quickly while they’re still hot and fresh, ready to enjoy.',
    }
  ]; 

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); 
    return () => clearInterval(intervalId);
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };



  const dataSection2 = {
    heading: "A Feast for the Senses",
    description:
      "Savor the artistry of fine dining through our curated selection of dishes, crafted to delight your palate.",
    images: [
      {
        id: 1,
        image:
          "/images/cake2.webp",
      },
      {
        id: 2,
        image:
        "/images/deserts1.webp",
      },
      {
        id: 3,
        image:
        "/images/pizza1.webp",
      },
      {
        id: 4,
        image:
        "/images/sandwich3.webp",
      },
      {
        id: 5,
        image:
        "/images/salad1.webp",
      },
    ],
  };


  return (
    <>
      <div className="relative">
        <motion.img
          key={currentIndex} 
          src={images[currentIndex]}
          alt="Delicious food"
          className="h-screen w-full object-cover"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 1 }} 
        />

        <motion.div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 1 }} 
        >
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight px-4"
            key={content[currentIndex].heading}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {content[currentIndex].heading}
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white mt-4 px-6 sm:px-8"
            key={content[currentIndex].description}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          >
            {content[currentIndex].description}
          </motion.p>

          {/* Animated Buttons */}
          <div className="flex flex-col sm:flex-row sm:gap-4">
          <NavLink to={`/menu`}>
          <motion.button
              className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-yellow-500 text-white text-md sm:text-xl font-semibold rounded-full hover:bg-yellow-600 transition-colors"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            >
              Explore our menu
            </motion.button>
          </NavLink>
            <motion.button
              className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-yellow-500 text-white text-md sm:text-xl font-semibold rounded-full hover:bg-yellow-600 transition-colors"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
            >
              Order Now
            </motion.button>
          </div>
        </motion.div>

        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prevImage}
            className="text-white bg-black p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            &#10094;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={nextImage}
            className="text-white bg-black p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            &#10095;
          </button>
        </div>
      </div>
      
      <TopDishes />
      <Testimonials data={dataSection2} images={dataSection2.images}/>
      <Contact />

    </>
  );
};

export default Home;
