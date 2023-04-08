import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto container md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <NavLink to="/" className="inline-flex items-center gap-2">
          <HiAcademicCap className="text-4xl text-[#5F54FD]" />
          <span className="text-2xl font-bold animate-text bg-gradient-to-r from-[#D040F5] to-[#5F54FD] bg-clip-text text-transparent">
            P-Hero
          </span>
        </NavLink>
        {/* Nav Items */}
        <ul className="lg:inline-flex gap-3 hidden font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              <TiShoppingCart className="text-3xl text-amber-400" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              Contacts
            </NavLink>
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
                  <NavLink to="/" className="inline-flex items-center gap-2">
                    <HiAcademicCap className="text-4xl text-[#5F54FD]" />
                    <span className="text-2xl font-bold animate-text bg-gradient-to-r from-[#D040F5] to-[#5F54FD] bg-clip-text text-transparent">
                      P-Hero
                    </span>
                  </NavLink>
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
                  <ul className="space-y-4 font-semibold">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "text-blue-700" : ""
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses"
                        className={({ isActive }) =>
                          isActive ? "text-blue-700" : ""
                        }
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                          isActive ? "text-blue-700" : ""
                        }
                      >
                        <TiShoppingCart className="text-3xl text-amber-400" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/instructors"
                        className={({ isActive }) =>
                          isActive ? "text-blue-700" : ""
                        }
                      >
                        Instructors
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          isActive ? "text-blue-700" : ""
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "text-blue-700" : ""
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                          isActive ? "text-blue-700" : ""
                        }
                      >
                        Contacts
                      </NavLink>
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
