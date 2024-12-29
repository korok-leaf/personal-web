import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative z-10 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide glow-effect">
          <span className="text-purple-400">Cosmic</span>Site
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          <a
            href="#home"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Call-to-Action Button */}
        <a
          href="#get-started"
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
