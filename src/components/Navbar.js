import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Experience', to: '/experience' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-secondary-50/95 backdrop-blur-md shadow-sm border-b border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-secondary-900 tracking-tight">
            Wai Yan <span className="text-primary-600">Bo</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="/resume.pdf"
              className="flex items-center space-x-2 border border-primary-600 text-primary-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-800 hover:text-primary-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary-50 border-t border-secondary-200 absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2 shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive ? 'text-primary-600 bg-secondary-100' : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-100'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <a
                href="/resume.pdf"
                className="inline-flex items-center space-x-2 border border-primary-600 text-primary-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;