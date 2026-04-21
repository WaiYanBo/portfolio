import React from 'react';
import { Linkedin, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary-900 text-secondary-100 py-14 border-t border-secondary-800 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] rounded-full bg-primary-600/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-lg bg-primary-600 text-white flex items-center justify-center shadow-md">
                <ShieldCheck size={18} />
              </span>
              <h3 className="text-2xl font-bold text-white">
                Wai Yan <span className="text-primary-500">Bo</span>
              </h3>
            </div>
            <p className="text-secondary-400 max-w-xs leading-relaxed">
              Enhancing security postures through detailed risk assessment, compliance strategies, and robust
              quality assurance.
            </p>
          </div>

          <div className="md:text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Navigate</h4>
            <ul className="space-y-2">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((p) => (
                <li key={p}>
                  <Link
                    to={`/${p}`}
                    className="group inline-flex items-center gap-1 text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    <span className="capitalize">{p}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex md:justify-end space-x-3 mb-4">
              <a
                href="https://www.linkedin.com/in/waiyanbo-/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-secondary-800 p-2.5 rounded-lg text-secondary-300 hover:text-white hover:bg-primary-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shoaiev126.wyb@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-secondary-800 p-2.5 rounded-lg text-secondary-300 hover:text-white hover:bg-primary-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-secondary-500 text-sm">
              Petaling Jaya, Selangor
              <br />
              Malaysia
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-secondary-500 text-sm">
            &copy; {currentYear} Wai Yan Bo. All rights reserved.
          </p>
          <p className="text-secondary-600 text-sm font-mono tracking-wider">
            Cybersecurity GRC Portfolio • v2.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
