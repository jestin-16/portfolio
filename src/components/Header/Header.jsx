import React, { useState, useEffect } from 'react';

// Navigation Links Component
const NavLink = ({ id, label }) => {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scrolling function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li
      className={`cursor-pointer transition duration-300 px-3 py-1 rounded-full ${
        activeSection === id
          ? 'bg-indigo-600 text-white shadow-lg'
          : 'text-slate-300 hover:text-indigo-400 hover:bg-slate-800'
      }`}
      onClick={() => scrollToSection(id)}
    >
      {label}
    </li>
  );
};

const Header = () => {
    return(
         <div className="min-h-screen font-sans bg-slate-900 text-slate-200">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b shadow-xl bg-slate-900/95 backdrop-blur-sm border-slate-800">
        <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-2xl font-extrabold tracking-wider text-indigo-400 transition-colors cursor-pointer hover:text-indigo-300">
            JESTIN.dev
          </div>
          <nav>
            <ul className="flex space-x-2 text-sm font-medium sm:space-x-4">
              <NavLink id="home" label="Home" />
              <NavLink id="about" label="About" />
              <NavLink id="skills" label="Skills" />
              <NavLink id="projects" label="Projects" />
              <NavLink id="contact" label="Contact" />
            </ul>
          </nav>
        </div>
      </header>
      </div>
    );
};

export default Header;
