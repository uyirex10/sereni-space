import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to apply different styling when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center w-full ${
        isScrolled
          ? "fixed top-0 left-0 bg-white shadow-md z-50 transition-all duration-300"
          : ""
      }`}
    >
      <Link to="/" className="flex items-center">
        <div className="text-xl font-serif">
          Still <span className="text-primary">+</span> Online (Serenispace)
        </div>
      </Link>

      {/* Mobile hamburger menu button */}
      <button
        className="md:hidden flex flex-col justify-center items-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black mb-1.5 ${
            isMenuOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mb-1.5 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black ${
            isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="/products" className="hover:text-primary transition-colors">
          Products
        </Link>
        <Link to="/journal" className="hover:text-primary transition-colors">
          Journal
        </Link>
        <Link to="/about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link to="/peace" className="hover:text-primary transition-colors">
          Book Your Peace
        </Link>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-white shadow-md z-50 py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/products"
              className="hover:text-primary transition-colors w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/journal"
              className="hover:text-primary transition-colors w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Journal
            </Link>
            <Link
              to="/about"
              className="hover:text-primary transition-colors w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/peace"
              className="hover:text-primary transition-colors w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Your Peace
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
