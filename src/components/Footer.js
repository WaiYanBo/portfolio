import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-100 py-12 border-t border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Wai Yan <span className="text-primary-500">Bo</span>
            </h3>
            <p className="text-secondary-400 max-w-xs leading-relaxed">
              Enhancing security postures through detailed risk assessment, compliance strategies, and robust quality assurance.
            </p>
          </div>

          <div className="col-span-1 md:text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-secondary-400 hover:text-primary-400 transition-colors">About</Link></li>
              <li><Link to="/experience" className="text-secondary-400 hover:text-primary-400 transition-colors">Experience</Link></li>
              <li><Link to="/projects" className="text-secondary-400 hover:text-primary-400 transition-colors">Projects</Link></li>
              <li><Link to="/skills" className="text-secondary-400 hover:text-primary-400 transition-colors">Skills</Link></li>
              <li><Link to="/contact" className="text-secondary-400 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex md:justify-end space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/waiyanbo-/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-800 p-2 rounded-lg text-secondary-300 hover:text-white hover:bg-primary-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shoaiev126.wyb@gmail.com"
                className="bg-secondary-800 p-2 rounded-lg text-secondary-300 hover:text-white hover:bg-primary-600 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-secondary-500 text-sm">
              Petaling Jaya, Selangor<br />
              Malaysia
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-500 text-sm">
            &copy; {currentYear} Wai Yan Bo. All rights reserved.
          </p>
          <p className="text-secondary-600 text-sm mt-2 md:mt-0">
            Cybersecurity GRC Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;