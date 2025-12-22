import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import logo from 'figma:asset/ae6efa433c67d69913609d2291c9fee036091676.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="TyphoonHacks Logo" className="h-10 w-10 rounded-full" />
              <span>TyphoonHacks</span>
            </div>
            <p className="text-gray-400 mb-4">
              Hong Kong's first true 48-hour hackathon where students build from scratch. 
              A different theme every year, empowering the next generation of tech leaders.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:codequesthk@gmail.com"
                className="bg-white/10 hover:bg-cyan-500/20 p-2 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/codequesthk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-cyan-500/20 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:codequesthk@gmail.com" className="hover:text-cyan-400 transition-colors">
                  codequesthk@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/codequesthk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  @codequesthk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="mb-2">
            Organized by Hong Kong Joint-School Technology Union (HKJSTU) & TyphoonHacks Committee
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TyphoonHacks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
