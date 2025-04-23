import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-30 top-0 left-0 font-poppins">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl md:text-3xl font-extrabold text-gray-800"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link to="/" className="flex items-center space-x-1">
            <span className="text-pink-600">Re</span>
            <span className="text-gray-800">Food</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <NavItem to="/" text="Home" />
          <NavItem to="/services" text="Services" />
          <NavItem to="/about" text="About" />
          <NavItem to="/contact" text="Contact" />
          <li className="relative" ref={dropdownRef}>
            <motion.button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded-md px-3 py-1"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login/Sign Up
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="absolute bg-white shadow-xl rounded-lg w-40 mt-3 right-0 z-20 border border-gray-100"
                >
                  <AuthLink to="/admin" text="Admin" onClose={() => setIsDropdownOpen(false)} />
                  <AuthLink to="/ngo" text="NGO" onClose={() => setIsDropdownOpen(false)} />
                  <AuthLink to="/user" text="User" onClose={() => setIsDropdownOpen(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-pink-300 rounded-md p-2"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </motion.svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden bg-white shadow-lg overflow-hidden border-t border-gray-100"
          >
            <MobileLink to="/" text="Home" onClose={() => setMobileMenuOpen(false)} />
            <MobileLink to="/services" text="Services" onClose={() => setMobileMenuOpen(false)} />
            <MobileLink to="/about" text="About" onClose={() => setMobileMenuOpen(false)} />
            <MobileLink to="/contact" text="Contact" onClose={() => setMobileMenuOpen(false)} />
            <MobileLink to="/admin" text="Admin Login" onClose={() => setMobileMenuOpen(false)} />
            <MobileLink to="/ngo" text="NGO Login" onClose={() => setMobileMenuOpen(false)} />
            <MobileLink to="/user" text="User Login" onClose={() => setMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Font and Animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </nav>
  );
}

// Reusable Desktop Nav Item
const NavItem = ({ to, text }) => (
  <motion.li
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-base font-medium transition-colors duration-300 hover:text-pink-600 ${
          isActive ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-800'
        }`
      }
    >
      {text}
    </NavLink>
  </motion.li>
);

// Reusable Dropdown Auth Link
const AuthLink = ({ to, text, onClose }) => (
  <motion.div
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <Link
      to={to}
      onClick={onClose}
      className="block px-4 py-3 text-sm font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-300"
    >
      {text}
    </Link>
  </motion.div>
);

// Reusable Mobile Menu Link
const MobileLink = ({ to, text, onClose }) => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <Link
      to={to}
      onClick={onClose}
      className="block px-6 py-4 text-base font-medium text-gray-800 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-300"
    >
      {text}
    </Link>
  </motion.div>
);

export default Navbar;