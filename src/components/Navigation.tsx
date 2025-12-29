import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavigationProps {
  currentPath: string;
}

export function Navigation({ currentPath }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first then scroll
    if (currentPath !== '/') {
      navigate('/');
      // Use setTimeout to wait for navigation
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = currentPath === '/';
  const is2025 = currentPath === '/2025';
  const isPartners = currentPath === '/partners';

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="TyphoonHacks Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-white">TyphoonHacks</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                isHome
                  ? 'bg-cyan-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              TyphoonHacks 2026
            </Link>
            <Link
              to="/2025"
              onClick={handleLinkClick}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                is2025
                  ? 'bg-cyan-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              2025 Recap
            </Link>
            <Link
              to="/partners"
              onClick={handleLinkClick}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                isPartners
                  ? 'bg-cyan-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Partner with Us
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="px-6 py-2 rounded-full text-gray-300 hover:text-cyan-400 transition-colors whitespace-nowrap"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('event-details')}
              className="px-6 py-2 rounded-full text-gray-300 hover:text-cyan-400 transition-colors whitespace-nowrap"
            >
              Event Details
            </button>
            <a
              href="mailto:codequesthk@gmail.com"
              className="bg-cyan-500 text-gray-900 px-6 py-2 rounded-full hover:bg-cyan-400 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-all ${
                isHome
                  ? 'bg-cyan-500 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              TyphoonHacks 2026
            </Link>
            <Link
              to="/2025"
              onClick={handleLinkClick}
              className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-all ${
                is2025
                  ? 'bg-cyan-500 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              2025 Recap
            </Link>
            <Link
              to="/partners"
              onClick={handleLinkClick}
              className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-all ${
                isPartners
                  ? 'bg-cyan-500 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Partner with Us
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2 px-4"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('event-details')}
              className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2 px-4"
            >
              Event Details
            </button>
            <a
              href="mailto:codequesthk@gmail.com"
              className="block w-full bg-cyan-500 text-gray-900 px-6 py-2 rounded-full hover:bg-cyan-400 transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
