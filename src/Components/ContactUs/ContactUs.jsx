import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time the section comes into view
    threshold: 0.2,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const formErrors = {};

    if (!formData.from_name) {
      formErrors.from_name = "Name is required";
      isValid = false;
    }

    if (!formData.from_email) {
      formErrors.from_email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      formErrors.from_email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      formErrors.message = "Message should be at least 10 characters long";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const serviceId = "service_25igr0i";
    const templateId = "template_og3i49g";
    const publicKey = "gLbkWJZNFXJ64Os2K";

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Form submitted successfully!");
        setFormData({ from_name: "", from_email: "", message: "" });
        setErrors({});
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("There was an error submitting the form. Please try again.");
      });
  };

  // Animation Variants
  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen  flex flex-col md:flex-row items-center justify-center pt-20"
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Contact Information */}
   
          <motion.div className='w-full md:w-1/2 flex flex-col items-center ' variants={parentVariants}>
        <motion.div className='flex flex-col gap-3'>
          <motion.h1 variants={childVariants} className='text-[8vh] md:text-[5vw] font-bold'><span className='text-orange-400 '>Connect</span> <br /> <span className="text-[7vh] md:text-[4vw]"  variants={childVariants} >With Us</span></motion.h1>
          <motion.div className='flex flex-col justify-center '    variants={childVariants}>
            <motion.div className='flex items-center gap-2'>
              <SiGmail className='text-red-600'/>
              <p>Mail</p>
            </motion.div>
            <p className='px-6'>nikhilbatiyal3891@gmail.com</p>
          </motion.div>
          <motion.div className='flex flex-col justify-center '  variants={childVariants}>
            <div className='flex items-center gap-2'>
              <CiLocationOn className='text-blue-600'/>
              <p>Address</p>
            </div>
            <p className='px-6'>Chandigarh</p>
          </motion.div>
          <motion.div className='flex flex-col justify-center '  variants={childVariants}>
            <div className='flex items-center gap-2'>
              <FaPhoneAlt className='text-green-700'/>
              <p>Phone</p>
            </div>
            <p className='px-6'>+91 7807569493</p>
          </motion.div>
        </motion.div>
        </motion.div>

      {/* Contact Form */}
      <motion.div
        className="flex flex-col items-center w-full md:w-1/2"
        variants={parentVariants}
      >
        <form onSubmit={handleSubmit} className="w-full max-w-md p-6">
          <motion.div className="mb-4" variants={childVariants}>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 text-zinc-700 rounded-md border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Name"
              required
            />
            {errors.from_name && (
              <p className="text-red-500 text-xs">{errors.from_name}</p>
            )}
          </motion.div>

          <motion.div className="mb-4" variants={childVariants}>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border text-zinc-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Email"
              required
            />
            {errors.from_email && (
              <p className="text-red-500 text-xs">{errors.from_email}</p>
            )}
          </motion.div>

          <motion.div className="mb-4" variants={childVariants}>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border text-zinc-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:bg-orange-400 focus:ring-offset-2"
            variants={childVariants}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
