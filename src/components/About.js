import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, X, ZoomIn, ZoomOut, RefreshCw, BookOpen, Sparkles } from 'lucide-react';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const closeModal = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="py-8 relative">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-y -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative bg-white rounded-2xl border border-secondary-200 shadow-sm p-8 overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary-200/30 blur-3xl" />
          <p className="relative inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary-700 font-semibold">
            <Sparkles size={14} /> Profile
          </p>
          <h1 className="relative mt-3 text-3xl md:text-4xl font-bold text-secondary-900">
            Professional <span className="gradient-text">Profile</span>
          </h1>
          <p className="relative mt-4 text-secondary-700 leading-relaxed max-w-3xl">
            Cybersecurity graduate with a CGPA of 3.67 and hands-on enterprise experience in Governance, Risk,
            and Compliance (GRC). I have delivered Security Risk Assessments for new technologies, collaborated
            with DLP teams to reduce data leakage exposure, and produced executive-ready risk reports for
            leadership.
          </p>
        </motion.div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-8 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-secondary-900 flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center">
                <GraduationCap className="text-primary-600" />
              </span>
              Education & Projects
            </h2>
            <p className="mt-4 text-secondary-700 font-medium">
              Bachelor of Computer Science (Cybersecurity), Albukhary International University (Graduated Dec
              2025)
            </p>
            <p className="text-secondary-600 mb-4">
              CGPA: <span className="font-semibold text-secondary-800">3.67</span> (First Class Honours, 6x
              Dean's List Award recipient)
            </p>

            <div className="mb-6 bg-gradient-to-br from-secondary-50 to-primary-50/40 p-4 rounded-xl border border-secondary-100 group">
              <p className="font-medium text-secondary-800 mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-primary-600" /> Official Graduation Standing
              </p>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/FirstClassHonours.webp"
                  alt="First Class Honours Verification"
                  onClick={() => setSelectedImage('/FirstClassHonours.webp')}
                  className="w-full max-w-sm rounded-lg border border-secondary-200 shadow-sm cursor-pointer hover:opacity-95 transition-all duration-500 group-hover:scale-[1.02]"
                  title="Click to view full screen and zoom"
                />
                <span className="absolute top-2 right-2 bg-secondary-900/70 text-white text-[10px] uppercase tracking-widest font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to zoom
                </span>
              </div>
              <a
                href="YOUR_GOOGLE_DRIVE_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 underline"
              >
                Download Official AIU 6th Convo Handbook (PDF)
              </a>
            </div>

            <ul className="mt-4 space-y-2 text-secondary-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                Built a Python-based web vulnerability scanner to identify security risks and support
                compliance checks.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                Architected a Mental Health and Wellbeing System for senior care with UML modeling and
                privacy-first design.
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-8 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-secondary-900 flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center">
                <Award className="text-primary-600" />
              </span>
              Certifications
            </h2>

            <div className="mt-5 space-y-6">
              <div className="group">
                <p className="font-medium text-secondary-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" /> Enterprise Networking
                </p>
                <img
                  src="/ENC.webp"
                  alt="Enterprise Networking Certificate"
                  onClick={() => setSelectedImage('/ENC.webp')}
                  className="w-full max-w-sm rounded-lg border border-secondary-200 shadow-sm cursor-pointer hover:opacity-95 hover:shadow-md transition-all group-hover:scale-[1.02]"
                  title="Click to view full screen and zoom"
                />
              </div>

              <div>
                <p className="font-medium text-secondary-800 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" /> Hardware and Network Engineering
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['/FrontHW.webp', '/BackHW.webp'].map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt="Hardware and Network Engineering Certificate"
                      onClick={() => setSelectedImage(src)}
                      className="w-full rounded-lg border border-secondary-200 shadow-sm cursor-pointer hover:opacity-95 hover:shadow-md hover:scale-[1.02] transition-all"
                      title="Click to view full screen and zoom"
                    />
                  ))}
                </div>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-semibold text-secondary-900 flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center">
                <Users className="text-primary-600" size={18} />
              </span>
              Leadership
            </h3>
            <p className="mt-3 text-secondary-700">
              Event Unit Co-Representative, AIU Myanmar Student Association. Managed logistics, coordination,
              and communication across student event teams.
            </p>
          </motion.div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-secondary-900/95 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-secondary-900/80 to-transparent z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-3">
              <button
                onClick={() => setZoomLevel((prev) => Math.min(4, prev + 0.5))}
                className="p-2 bg-white text-secondary-800 rounded-lg hover:bg-secondary-100 hover:scale-105 transition-all shadow-sm flex items-center gap-2"
                title="Zoom In"
              >
                <ZoomIn size={20} /> <span className="hidden sm:inline font-medium text-sm">Zoom In</span>
              </button>
              <button
                onClick={() => setZoomLevel((prev) => Math.max(0.5, prev - 0.5))}
                className="p-2 bg-white text-secondary-800 rounded-lg hover:bg-secondary-100 hover:scale-105 transition-all shadow-sm flex items-center gap-2"
                title="Zoom Out"
              >
                <ZoomOut size={20} /> <span className="hidden sm:inline font-medium text-sm">Zoom Out</span>
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-2 bg-white text-secondary-800 rounded-lg hover:bg-secondary-100 hover:scale-105 transition-all shadow-sm flex items-center gap-2"
                title="Reset Zoom"
              >
                <RefreshCw size={20} /> <span className="hidden sm:inline font-medium text-sm">Reset</span>
              </button>
            </div>

            <button
              onClick={closeModal}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hover:scale-105 transition-all shadow-sm"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-auto w-full h-full flex items-center justify-center p-4 pt-20">
            <div
              style={{
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.2s ease-out',
                transformOrigin: 'center center',
              }}
            >
              <img
                src={selectedImage}
                alt="Full screen preview"
                className="max-w-none max-h-[85vh] object-contain rounded shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
