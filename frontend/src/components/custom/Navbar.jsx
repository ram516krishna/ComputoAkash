import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react'; // optional for icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/notes', label: 'Notes' },
    { to: '/courses', label: 'Courses' },
  ];

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50 text-white">
      <div className="px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">ComputoAkash</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className=" dark:text-white hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link to={"/login"}>
          <Button variant="outline" className="ml-4 text-gray-800 dark:text-white hover:text-gray-900">
            Login
          </Button>
          </Link>
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ModeToggle />
          <button
            onClick={toggleMobileMenu}
            className=" focus:outline-none text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="space-y-3 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)} // close menu on click
                className="block  dark:text-white hover:text-blue-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link to={"/login"}>
            <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
              Login
            </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
