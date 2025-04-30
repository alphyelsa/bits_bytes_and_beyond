// src/components/Layout.tsx
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';


export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClasses = (path: string, anchor = false) =>
    `${location.pathname === path && !anchor ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-gray-900`;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">Bits, Bytes & Beyond</Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={navLinkClasses('/')}>Home</Link>
              <Link to="/blog" className={navLinkClasses('/blog')}>Blog</Link>
              <Link to="/portfolio" className={navLinkClasses('/portfolio')}>Portfolio</Link>
              {isHome && (
                <>
                  <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
                  <a href="#experience" className="text-gray-700 hover:text-gray-900">Experience</a>
                  <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
            <Link to="/" onClick={toggleMenu} className={navLinkClasses('/')}>Home</Link>
            <Link to="/blog" onClick={toggleMenu} className={navLinkClasses('/blog')}>Blog</Link>
            <Link to="/portfolio" onClick={toggleMenu} className={navLinkClasses('/portfolio')}>Portfolio</Link>
            {isHome && (
              <>
                <a href="#about" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">About</a>
                <a href="#experience" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Experience</a>
                <a href="#contact" onClick={toggleMenu} className="block text-gray-700 hover:text-gray-900">Contact</a>
              </>
            )}
          </div>
        )}
      </nav>

      <main className="pt-20">{children}</main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2025 Alphy Elsa Sebastian. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com" className="hover:text-gray-300"><Github size={24} /></a>
              <a href="https://linkedin.com" className="hover:text-gray-300"><Linkedin size={24} /></a>
              <a href="mailto:alphyelsa@gmail.com" className="hover:text-gray-300"><Mail size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
