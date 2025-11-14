import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AseerLogo from './AseerLogo';

const getEmailLink = () => {
  const isMobile = /iPhone|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const email = 'aseerco8supprt@gmail.com';
  const subject = 'Help%20Request';

  if (isMobile) {
    return `mailto:${email}?subject=${subject}`;
  }
  return `https://mail.google.com/mail/?view=cm&to=${email}&subject=${subject}`;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const emailLink = getEmailLink();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-2 sm:top-4 lg:top-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-4">
      <AseerLogo className="absolute left-2 sm:left-4 w-6 h-10 sm:w-8 sm:h-12 hidden" />
      <div className="flex items-center justify-center w-full">

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-2 sm:gap-4 lg:gap-6 py-2 px-2 sm:px-4 rounded-full bg-gradient-to-r from-aseer-purple to-aseer-dark border border-white/10 flex-wrap">
          <Link to="/" className="text-xs sm:text-sm text-white hover:opacity-80 rounded-full px-2 sm:px-4 py-1 transition whitespace-nowrap">
            Home
          </Link>
          <Link to="/about-us" className="text-xs sm:text-sm text-white hover:opacity-80 rounded-full px-2 sm:px-4 py-1 transition whitespace-nowrap">
            About Us
          </Link>
          <Link to="/our-vision" className="text-xs sm:text-sm text-white hover:opacity-80 rounded-full px-2 sm:px-4 py-1 transition whitespace-nowrap">
            Our Vision
          </Link>
          <Link to="/about-product" className="text-xs sm:text-sm text-white hover:opacity-80 rounded-full px-2 sm:px-4 py-1 transition whitespace-nowrap">
            Our product
          </Link>
          <a
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-white hover:opacity-80 rounded-full px-2 sm:px-4 py-1 transition whitespace-nowrap contact-link"
          >
            Help
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden absolute right-2 sm:right-4 p-2 text-white hover:opacity-80 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 mx-2 sm:mx-4 bg-gradient-to-r from-aseer-purple to-aseer-dark border border-white/10 rounded-lg p-4 space-y-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-white hover:opacity-80 px-4 py-2 rounded-full transition whitespace-nowrap hover:bg-white/10"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-white hover:opacity-80 px-4 py-2 rounded-full transition whitespace-nowrap hover:bg-white/10"
          >
            About Us
          </Link>
          <Link
            to="/our-vision"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-white hover:opacity-80 px-4 py-2 rounded-full transition whitespace-nowrap hover:bg-white/10"
          >
            Our Vision
          </Link>
          <Link
            to="/about-product"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-white hover:opacity-80 px-4 py-2 rounded-full transition whitespace-nowrap hover:bg-white/10"
          >
            Our product
          </Link>
          <a
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-white hover:opacity-80 px-4 py-2 rounded-full transition whitespace-nowrap hover:bg-white/10 contact-link"
          >
            Help
          </a>
        </div>
      )}
    </nav>
  );
}
