import React, { useEffect, useState } from 'react';
import { Menu, X, FileText, ShieldCheck } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Experience', to: '/experience' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 12);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-secondary-50/90 backdrop-blur-xl shadow-md border-b border-secondary-200'
          : 'bg-secondary-50/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          <Link
            to="/"
            className="group flex items-center gap-2 text-2xl font-bold text-secondary-900 tracking-tight"
          >
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary-600 text-white shadow-sm group-hover:rotate-12 transition-transform">
              <ShieldCheck size={18} />
              <span className="absolute inset-0 rounded-lg bg-primary-400/50 blur opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </span>
            <span>
              Wai Yan <span className="text-primary-600">Bo</span>
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
                      isActive ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        className={`absolute left-2 right-2 -bottom-0.5 h-0.5 bg-primary-600 rounded-full origin-left transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="/resume.pdf"
              className="group relative flex items-center space-x-2 border border-primary-600 text-primary-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-600 hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-primary-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 -z-0"></span>
              <FileText size={16} className="relative z-10" />
              <span className="relative z-10">Resume</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-800 hover:text-primary-600 focus:outline-none p-2 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="relative w-6 h-6 inline-block">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 bg-[length:200%_100%] animate-gradient-x transition-[width] duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'
        } bg-secondary-50 border-t border-secondary-200`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 shadow-lg">
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={{ animationDelay: `${i * 40}ms` }}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium transition-all animate-slide-up ${
                  isActive
                    ? 'text-primary-600 bg-secondary-100'
                    : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-100 hover:translate-x-1'
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
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-all duration-300 shadow-sm"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
