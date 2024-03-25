import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isPageActive = (pagePath: string) => location.pathname === pagePath;

  return (
    <div className="relative flex flex-col sm:flex-row justify-center sm:items-center h-[10rem]">
      <nav
        className="w-full sm:h-[4.5rem] h-[6.5rem] sm:border-[1px] sm:border-gray-800 shadow-xl sm:w-[60%] rounded-lg flex justify-between items-center px-4"
      >
        {/* Left aligned logo */}
        <div>
          {/* Replace "Logo" with your actual logo */}
          <Link
            to="/"
            style={{ fontFamily: 'Mustica-Bold', color: isPageActive('/') ? 'white' : 'white' }}
            className="text-xl sm:text-2xl ps-2 text-white hover:text-[#7e5af2]"
          >
            millymox
          </Link>
        </div>
        {/* Right aligned items */}
        <div style={{ fontFamily: 'Mustica-SemiBold' }} className="hidden lg:flex space-x-7 pe-12">
          <Link
            to="/"
            style={{ color: isPageActive('/') ? '#7e5af2' : '' }}
            className="text-lg text-white hover:text-[#7e5af2] transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{ color: isPageActive('/about') ? '#7e5af2' : '' }}
            className="text-lg text-white hover:text-[#7e5af2] transition duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            style={{ color: isPageActive('/services') ? '#7e5af2' : '' }}
            className="text-lg text-white hover:text-[#7e5af2] transition duration-200"
          >
            Services
          </Link>
          <Link
            to="/projects"
            style={{ color: isPageActive('/projects') ? '#7e5af2' : '' }}
            className="text-lg text-white hover:text-[#7e5af2] transition duration-200"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            style={{ color: isPageActive('/contact') ? '#7e5af2' : '' }}
            className="text-lg text-white hover:text-[#7e5af2] transition duration-200"
          >
            Contact
          </Link>
        </div>
        {/* Hamburger menu for mobile */}
        <IoIosMenu onClick={() => setMenuOpen(!menuOpen)} className="text-white text-[2.5rem]  rounded-lg sm:hidden flex cursor-pointer" />
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[7rem] w-[90%] left-1/2 transform -translate-x-1/2 border border-gray-800 bg-[#121212] flex justify-center py-5 ps-1 rounded-lg flex-col space-y-4">
          <Link
            to="/"
            style={{ color: isPageActive('/') ? '#7e5af2' : '' }}
            className="text-white hover:text-[#7e5af2] px-2 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{ color: isPageActive('/about') ? '#7e5af2' : '' }}
            className="text-white hover:text-[#7e5af2] px-2 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            style={{ color: isPageActive('/services') ? '#7e5af2' : '' }}
            className="text-white hover:text-[#7e5af2] px-2 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="/projects"
            style={{ color: isPageActive('/contact') ? '#7e5af2' : '' }}
            className="text-white hover:text-[#7e5af2] px-2 transition duration-200"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            style={{ color: isPageActive('/contact') ? '#7e5af2' : '' }}
            className="text-white hover:text-[#7e5af2] rounded-md py-3 px-2 bg-[#7e5af2] transition duration-200"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
