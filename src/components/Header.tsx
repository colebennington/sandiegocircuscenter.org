"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="https://sandiegocircuscenter.org/"
            aria-label="San Diego Circus Center home"
            className="flex-shrink-0"
          >
            <Image
              src="https://cdn.prod.website-files.com/64e528a2a1e0067f4d14db9e/64e53afcacbabb62a1474a5c_SDCC-Solid-Tent_black-03.png"
              alt="San Diego Circus Center"
              width={108}
              height={108}
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="https://sandiegocircuscenter.org/classes#schedule"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Schedule & Pricing
            </a>
            <a
              href="https://sandiegocircuscenter.org/academy"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Academy
            </a>
            <a
              href="https://sandiegocircuscenter.org/summer-camps"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Camps
            </a>
            <a
              href="https://sandiegocircuscenter.org/events"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Events
            </a>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAboutDropdown}
                className="flex items-center text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                aria-expanded={isAboutDropdownOpen}
                aria-haspopup="menu"
              >
                About
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isAboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <a
                    href="https://sandiegocircuscenter.org/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                  >
                    Our Story
                  </a>
                  <a
                    href="https://sandiegocircuscenter.org/team"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                  >
                    Our Team
                  </a>
                  <a
                    href="https://sandiegocircuscenter.org/about#facility"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                  >
                    Our Facility
                  </a>
                  <a
                    href="https://sandiegocircuscenter.org/represents"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                  >
                    SDCC Represents
                  </a>
                </div>
              )}
            </div>

            <a
              href="https://sandiegocircuscenter.org/contact"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Contact
            </a>

            {/* Enroll Now CTA Button */}
            <a
              href="#enrolling-classes"
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #0249AC 0%, #0260D9 50%, #0377FF 100%)",
              }}
            >
              Enroll Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="https://sandiegocircuscenter.org/classes#schedule"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Schedule & Pricing
              </a>
              <a
                href="https://sandiegocircuscenter.org/academy"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Academy
              </a>
              <a
                href="https://sandiegocircuscenter.org/summer-camps"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Camps
              </a>
              <a
                href="https://sandiegocircuscenter.org/events"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Events
              </a>

              {/* Mobile About Section */}
              <div className="border-l-2 border-purple-200 pl-4">
                <div className="text-purple-600 font-medium mb-2">About</div>
                <div className="flex flex-col space-y-2 ml-4">
                  <a
                    href="https://sandiegocircuscenter.org/about"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    Our Story
                  </a>
                  <a
                    href="https://sandiegocircuscenter.org/team"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    Our Team
                  </a>
                  <a
                    href="https://sandiegocircuscenter.org/about#facility"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    Our Facility
                  </a>
                  <a
                    href="https://sandiegocircuscenter.org/represents"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    SDCC Represents
                  </a>
                </div>
              </div>

              <a
                href="https://sandiegocircuscenter.org/contact"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Contact
              </a>

              {/* Mobile Enroll Now CTA Button */}
              <a
                href="#enrolling-classes"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg text-center mt-4"
                style={{
                  background:
                    "linear-gradient(135deg, #0249AC 0%, #0260D9 50%, #0377FF 100%)",
                }}
                onClick={closeMenu}
              >
                Enroll Now
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Backdrop for dropdown (desktop) */}
      {isAboutDropdownOpen && (
        <div
          className="fixed inset-0 z-40 lg:block hidden"
          onClick={() => setIsAboutDropdownOpen(false)}
        />
      )}
    </header>
  );
}
