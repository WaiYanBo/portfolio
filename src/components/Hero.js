import React from 'react';
import { motion } from 'framer-motion';
import { FileBadge, MapPin, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary-50">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="inline-flex items-center gap-2 bg-secondary-100 border border-secondary-200 rounded-full px-4 py-1.5 text-sm font-medium text-secondary-700">
              <ShieldCheck size={16} />
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

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/experience" className="px-5 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                View Experience
              </Link>
              <Link to="/projects" className="px-5 py-3 bg-white border border-secondary-200 text-secondary-700 rounded-lg font-medium hover:bg-secondary-100 transition-colors">
                View Projects
              </Link>
              <a href="/resume.pdf" className="px-5 py-3 bg-white border border-secondary-200 text-secondary-700 rounded-lg font-medium hover:bg-secondary-100 transition-colors">
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-6"
          >
            <h2 className="text-xl font-semibold text-secondary-900">Quick Highlights</h2>
            <div className="mt-4 space-y-4 text-secondary-700">
              <p className="flex items-center gap-2"><MapPin size={16} className="text-primary-600" /> Kuala Lumpur, Malaysia</p>
              <p className="flex items-center gap-2"><FileBadge size={16} className="text-primary-600" /> 6x Dean's List Award recipient</p>
              <p className="flex items-center gap-2"><FileText size={16} className="text-primary-600" /> Focus: SRA, DLP, TPRM, OWASP Testing</p>
            </div>

            <div className="mt-6 border-t border-secondary-200 pt-4">
              <h3 className="font-medium text-secondary-900 mb-2">Recommendation Letters</h3>
              <div className="space-y-2 text-sm">
                <a className="block text-primary-700 hover:text-primary-600 underline" href="/DrHaniza_Recommendation_Letter_MIS.pdf" target="_blank" rel="noopener noreferrer">
                  Dr Haniza Recommendation Letter (PDF)
                </a>
                <a className="block text-primary-700 hover:text-primary-600 underline" href="/Prof_Khalid_Recommendation_Letter.pdf" target="_blank" rel="noopener noreferrer">
                  Prof Khalid Recommendation Letter (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;