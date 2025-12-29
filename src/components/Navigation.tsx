import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavigationProps {
  activeTab: 'home' | '2025' | 'partners';
  setActiveTab: (tab: 'home' | '2025' | 'partners') => void;
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleTabChange = (tab: 'home' | '2025' | 'partners') => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'backdrop-blur-sm'
      } ${activeTab === 'home' ? 'bg-gray-900' : activeTab === '2025' ? 'bg-gray-800' : 'bg-gray-800'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleTabChange('home')}
            className="flex items-center space-x-3"
          >
            <img src={logo} alt="TyphoonHacks Logo" className="h-10 w-10 rounded-full" />
            <span className="text-white">TyphoonHacks</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => handleTabChange('home')}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                activeTab === 'home' 
                  ? 'bg-cyan-500 text-gray-900' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              TyphoonHacks 2026
            </button>
            <button
              onClick={() => handleTabChange('2025')}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                activeTab === '2025' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              2025 Recap
            </button>
            <button
              onClick={() => handleTabChange('partners')}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                activeTab === 'partners' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Partner with Us
            </button>
            {activeTab === 'home' && (
              <>
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
              </>
            )}
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
            <button
              onClick={() => handleTabChange('home')}
              className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'home' 
                  ? 'bg-cyan-500 text-gray-900' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              TyphoonHacks 2026
            </button>
            <button
              onClick={() => handleTabChange('2025')}
              className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === '2025' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              2025 Recap
            </button>
            <button
              onClick={() => handleTabChange('partners')}
              className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'partners' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Partner with Us
            </button>
            {activeTab === 'home' && (
              <>
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
              </>
            )}
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
