import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto container md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <div className="inline-flex items-center gap-2">
          <HiAcademicCap className="text-4xl text-[#5F54FD]" />
          <span className="text-2xl font-bold animate-text bg-gradient-to-r from-[#D040F5] to-[#5F54FD] bg-clip-text text-transparent">
            P-Hero
          </span>
        </div>
        {/* Nav Items */}
        <ul className="lg:inline-flex gap-3 hidden">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Instructors</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        {/* Mobile Navbar Section  */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-3xl text-[#5F54FD]" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2">
                    <HiAcademicCap className="text-4xl text-[#5F54FD]" />
                    <span className="text-2xl font-bold animate-text bg-gradient-to-r from-[#D040F5] to-[#5F54FD] bg-clip-text text-transparent">
                      P-Hero
                    </span>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <AiOutlineClose className="text-3xl text-[#5F54FD]" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                    <li>
                      <a href="#">Instructors</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contacts</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
