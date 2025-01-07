

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";


const Footer = () => {
  return (
    <div className="bg-orange-600 overflow-hidden flex flex-col items-center justify-center">
      <div className="bg-white w-[120vw] -mt-[30vw] h-[40vw] md:-mt-[15vw] md:h-[20vw] rounded-b-[100%]"></div>

      <div className="w-full h-full pt-[10vw] md:pt-[4vw] md:py-[1vw] flex flex-col md:flex-row px-[10vw] gap-[5vw]">
        {/* Socail Links */}
        <div className="w-full h-full flex justify-center md:justify-start items-center">
          <div className="flex flex-col gap-2">
            <div className="w-[191px] hover:cursor-pointer">
              <Link href="/">
              <div>
            <p className="text-2xl text-white font-extrabold">QuickBite</p>
          </div>
              </Link>
            </div>

            <div className="flex w-full gap-4 justify-start item-start">
              <div>
                <Link
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="text- transition hover:opacity-75"
                >
                  <div className="w-7 h-7 overflow-hidden">
                  <Facebook  className="w-full h-full object-cover text-white"/>
                  </div>
                </Link>
              </div>

              <div>
                <Link
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <div className="w-7 h-7 overflow-hidden">
                  <Instagram className="w-full h-full object-cover text-white" />
                  </div>
                </Link>
              </div>

              <div>
                <Link
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:opacity-75"
                >
                  <div className="w-7 h-7 overflow-hidden">
                  <Linkedin className="w-full h-full object-cover text-white" />
                  </div>
                </Link>
              </div>

           
            </div>
          </div>
        </div>

        {/* Website Links */}
        <div className="w-full h-full items-start text-white flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-semibold">Menu</h1>
          </div>
          <div className="w-full flex justify-start gap-20">
            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/menu">Menu</Link>
            </div>
       
          </div>
        </div>

        {/* Contact */}
        <div className="w-full h-full items-start text-white flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-semibold">Contact</h1>
          </div>
          <div className="flex text-white flex-col items-start gap-4">
            <Link href="tel:+91-8264470355">
              <div className="flex gap-4 items-center justify-center">
                <div className="w-5 h-5 overflow-hidden ">
                  <Phone className="w-full h-full object-cover" />
                </div>
                <p>+91-9876543210</p>
              </div>
            </Link>

            <Link href="mailto:Kreativan@gmail.com">
              <div className="flex gap-4 items-center justify-center">
                <div className="w-5 h-5 overflow-hidden">
                  <Mail className="w-full h-full object-cover" />
                </div>
                <p>nikhil@gmail.com</p>
              </div>
            </Link>

            <Link to="https://www.google.com/maps/place/IT+Park+Chandigarh/@30.7269801,76.84161,17z/data=!3m1!4b1!4m6!3m5!1s0x390f9333773d5863:0xf32395e75d7dffc0!8m2!3d30.7269755!4d76.8441849!16s%2Fg%2F11jy5fy7kc?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D">
              <div className="w-full h-full flex justify-center gap-4">
                <div className="w-6 h-5 overflow-hidden">
                  <MapPin className="w-full h-full object-cover" />
                </div>
                <p className="w-full h-full text-wrap hover:cursor-pointer">
                 Chandigarh , India
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CopyWrite */}
      <div className="w-full h-full flex flex-col items-center justify-center py-[5vw] md:py-[2vw]">
        <hr className="w-[80vw] h-2 text-[#A4A1A1]" />
        <p className="text-[#A4A1A1] text-[3vw] md:text-[0.8vw]">
          Copyright @ 2024 Company | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;