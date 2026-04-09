import React from 'react';
import { motion } from 'framer-motion';
import { FileBadge, MapPin, ShieldCheck, FileText, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary-50 py-12 md:py-20">
      {/* Background Blur Effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Column: Text & Call to Actions */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="inline-flex items-center gap-2 bg-secondary-100 border border-secondary-200 rounded-full px-4 py-1.5 text-sm font-medium text-secondary-700">
              <ShieldCheck size={16} className="text-primary-600" />
              Cybersecurity GRC Analyst Portfolio
            </p>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-secondary-900 leading-tight">
              Wai Yan <span className="text-primary-600">Bo</span>
            </h1>
            <p className="mt-3 text-lg text-secondary-700 font-medium">
              Cybersecurity GRC Analyst | Network Security | IT Compliance
            </p>
            <p className="mt-4 text-secondary-600 leading-relaxed">
              Cybersecurity graduate with CGPA 3.67 and enterprise experience in Governance, Risk, and Compliance.
              I execute Security Risk Assessments, support DLP workflows, and translate technical findings into
              clear executive risk reporting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/experience" className="px-5 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm">
                View Experience
              </Link>
              <Link to="/projects" className="px-5 py-3 bg-white border border-secondary-200 text-secondary-700 rounded-lg font-medium hover:bg-secondary-100 transition-colors shadow-sm">
                View Projects
              </Link>
              <a href="/resume.pdf" className="px-5 py-3 bg-secondary-900 text-white rounded-lg font-medium hover:bg-secondary-800 transition-colors shadow-sm">
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Column: The "Security ID Badge" Photo Concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            {/* Hover Glow Effect Behind the Card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            {/* ID Badge Container */}
            <div className="relative bg-white rounded-2xl border border-secondary-200 shadow-lg overflow-hidden flex flex-col">
              
              {/* Badge Header Area */}
              <div className="h-24 bg-secondary-900 w-full relative flex items-center px-6">
                 <div className="absolute top-4 right-4 opacity-50">
                    <Fingerprint size={40} className="text-white" />
                 </div>
                 <span className="text-secondary-400 text-xs font-mono uppercase tracking-widest border border-secondary-600 px-2 py-1 rounded">Clearance: Level 3</span>
              </div>

              {/* Profile Photo - Overlapping the header */}
              <div className="px-6 -mt-12 relative z-10 flex justify-between items-end">
                <div className="w-28 h-28 rounded-xl border-4 border-white shadow-md overflow-hidden bg-secondary-100">
                  <img 
                    src="/profile.webp" 
                    alt="Wai Yan Bo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Badge Content / Quick Highlights */}
              <div className="p-6 pt-4">
                <h2 className="text-xl font-bold text-secondary-900">Wai Yan Bo</h2>
                <p className="text-sm font-medium text-primary-600 mb-5">ID: GRC-AUTH-2026</p>

                <div className="space-y-3 text-sm text-secondary-700 font-medium">
                  <p className="flex items-center gap-3"><MapPin size={18} className="text-secondary-400" /> Kuala Lumpur, Malaysia</p>
                  <p className="flex items-center gap-3"><FileBadge size={18} className="text-secondary-400" /> 6x Dean's List Award recipient</p>
                  <p className="flex items-center gap-3"><FileText size={18} className="text-secondary-400" /> Focus: SRA, DLP, TPRM, OWASP</p>
                </div>

                <div className="mt-6 border-t border-secondary-100 pt-4">
                  <h3 className="text-xs font-bold text-secondary-500 uppercase tracking-wider mb-3">Verified References</h3>
                  <div className="space-y-2 text-sm font-medium">
                    <a className="flex items-center gap-2 text-primary-700 hover:text-primary-600 transition-colors" href="/DrHaniza_Recommendation_Letter_MIS.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText size={14} /> Dr. Haniza Recommendation
                    </a>
                    <a className="flex items-center gap-2 text-primary-700 hover:text-primary-600 transition-colors" href="/Prof_Khalid_Recommendation_Letter.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText size={14} /> Prof. Khalid Recommendation
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;