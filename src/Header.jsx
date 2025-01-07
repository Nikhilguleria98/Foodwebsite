import React, { useState, useCallback, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import CartIcon from "./Components/Cart/CartIcon";

const NavLinkItem = ({ to, children, toggleMenu }) => (
  <NavLink
    to={to}
    onClick={toggleMenu}
    className={({ isActive }) =>
      `font-bold hover:text-orange-500 hover:bg-slate-300 rounded-lg ${
        isActive ? "text-orange-500" : ""
      }`
    }
  >
    <li className="hover:bg-slate-300 rounded-lg p-2 cursor-pointer">
      {children}
    </li>
  </NavLink>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Close the menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header>
      <nav className="fixed top-0 z-50 border-b">
        {/* Navbar */}
        <div className="flex-wrap md:justify-around justify-between md:p-3 px-10 py-3 h-fit w-screen items-center bg-white text-gray-500 flex opacity-95">
          {/* Logo */}
          <div>
            <p className="text-2xl text-orange-500 font-extrabold">QuickBite</p>
          </div>

          {/* Desktop Menu */}
          <div>
            <ul className="hidden md:flex gap-10 rounded-lg">
              <NavLinkItem to="/" toggleMenu={toggleMenu}>
                Home
              </NavLinkItem>
              <NavLinkItem to="/about" toggleMenu={toggleMenu}>
                About Us
              </NavLinkItem>
              <NavLinkItem to="/menu" toggleMenu={toggleMenu}>
                Menu
              </NavLinkItem>
              {/* <NavLinkItem to="/Blog" toggleMenu={toggleMenu}>
                Our Branches
              </NavLinkItem> */}
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex gap-3">
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                `font-bold flex justify-center items-center text-lg hover:bg-slate-200 duration-200 p-3 rounded-lg ${
                  isActive ? "text-orange-500" : ""
                }`
              }
            >
              Login
            </NavLink>
            {/* <div className="flex text-xl rounded-md w-12 justify-center h-10 items-center shadow-xl text-orange-500">
              <FaShoppingCart />
            </div> */}
                 <NavLink
              to="/cart"
             
            >
              <CartIcon />
              </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="text-2xl flex justify-center items-center md:hidden"
            onClick={toggleMenu}
            initial={{ rotate: 0 }}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            {/* Sidebar */}
            <motion.div
              className="w-64 h-fit bg-gray-200 text-gray-700 opacity-95 px-5 p-7 fixed top-16 right-5 space-y-10 md:hidden z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 40 }}
            >
              <ul className="space-y-5">
              <NavLink
              to="/cart"
             
            >
              <CartIcon />
              </NavLink>

                <div className="flex flex-col gap-2 justify-center">
                  <NavLinkItem to="/" toggleMenu={toggleMenu}>
                    Home
                  </NavLinkItem>
                  <NavLinkItem to="/about" toggleMenu={toggleMenu}>
                    About Us
                  </NavLinkItem>
                  <NavLinkItem to="/Room" toggleMenu={toggleMenu}>
                    Menu
                  </NavLinkItem>
                  {/* <NavLinkItem to="/Blog" toggleMenu={toggleMenu}>
                    Our Branches
                  </NavLinkItem> */}
                  <NavLinkItem to="/contact" toggleMenu={toggleMenu}>
                    Contact
                  </NavLinkItem>
                </div>

                {/* Login and Sign In Buttons */}
                <div className="flex flex-col gap-3 space-y-5">
                  <NavLink
                    to="/Login"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `font-bold flex justify-center items-center text-lg hover:bg-slate-300 duration-200 p-3 rounded-lg ${
                        isActive ? "text-orange-500" : ""
                      }`
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/Signin"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `font-bold text-lg hover:bg-gray-300 flex justify-center items-center duration-200 p-3 rounded-lg ${
                        isActive ? "text-white bg-orange-500" : ""
                      }`
                    }
                  >
                    Sign In
                  </NavLink>
                </div>
              </ul>
            </motion.div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
