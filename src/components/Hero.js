import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  FileBadge,
  MapPin,
  ShieldCheck,
  FileText,
  Fingerprint,
  Sparkles,
  ArrowRight,
  Lock,
  Activity,
  Download,
  ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCountUp, useInView } from '../hooks/useInView';

const Stat = ({ label, value, suffix = '', decimals = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const animated = useCountUp(value, { start: inView, duration: 1600 });
  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl md:text-3xl font-bold text-secondary-900 tabular-nums">
        {animated.toFixed(decimals)}
        <span className="text-primary-600">{suffix}</span>
      </p>
      <p className="text-xs uppercase tracking-wider text-secondary-500 mt-1">{label}</p>
    </div>
  );
};

const Hero = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 4 + Math.random() * 10,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
        opacity: 0.25 + Math.random() * 0.4,
      })),
    []
  );

  const [timeNow, setTimeNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTimeNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-secondary-50 py-12 md:py-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-60 mask-fade-y -z-10" />

      {/* Blurry blobs */}
      <div className="absolute -top-24 -right-16 w-[28rem] h-[28rem] bg-primary-300/25 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute top-1/2 -left-24 w-[22rem] h-[22rem] bg-secondary-300/30 rounded-full blur-3xl -z-10 animate-blob-slow" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl -z-10 animate-float-slow" />

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none absolute rounded-full bg-primary-500/40 blur-[2px] -z-10"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `floatSlow ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-primary-200 rounded-full px-4 py-1.5 text-sm font-medium text-secondary-700 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
              </span>
              <ShieldCheck size={16} className="text-primary-600" />
              Cybersecurity GRC Analyst Portfolio
            </motion.p>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-secondary-900 leading-tight text-shadow-soft">
              Wai Yan <span className="gradient-text">Bo</span>
            </h1>

            <div className="mt-4 h-8 text-lg md:text-xl font-semibold text-primary-700 font-mono">
              &gt;{' '}
              <Typewriter
                words={[
                  'Cybersecurity GRC Analyst',
                  'Network Security Enthusiast',
                  'IT Compliance Specialist',
                  'Risk Assessment Practitioner',
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={1600}
              />
            </div>

            <p className="mt-5 text-secondary-600 leading-relaxed max-w-xl">
              Cybersecurity graduate with a <span className="font-semibold text-secondary-800">3.67 CGPA</span> and
              enterprise experience in Governance, Risk, and Compliance. I execute Security Risk Assessments,
              support DLP workflows, and translate technical findings into clear executive risk reporting.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/experience" className="cta-primary inline-flex items-center gap-2 group">
                View Experience
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="cta-ghost inline-flex items-center gap-2 group">
                <Sparkles size={18} className="text-primary-600 group-hover:rotate-12 transition-transform" />
                View Projects
              </Link>
              <a href="/resume.pdf" className="cta-dark inline-flex items-center gap-2 group">
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </motion.div>

            {/* Animated stats strip */}
            <div className="mt-10 grid grid-cols-4 gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur border border-secondary-200 shadow-sm">
              <Stat label="CGPA" value={3.67} decimals={2} />
              <Stat label="Dean's List" value={6} suffix="x" />
              <Stat label="Internships" value={3} suffix="+" />
              <Stat label="Uptime" value={99.9} suffix="%" decimals={1} />
            </div>
          </motion.div>

          {/* Right Column — Interactive ID Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, rotate: 0.4 }}
            className="relative group glow-ring rounded-2xl"
          >
            {/* Scan line overlay */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl z-10">
              <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-primary-400/20 via-primary-300/10 to-transparent animate-scan" />
            </div>

            {/* Hover glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-[length:200%_100%] rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500 animate-gradient-x" />

            <div className="relative bg-white rounded-2xl border border-secondary-200 shadow-lg overflow-hidden flex flex-col">
              {/* Header */}
              <div className="h-24 bg-secondary-900 w-full relative flex items-center px-6 overflow-hidden">
                {/* Subtle circuit pattern */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
                    backgroundSize: '14px 14px',
                  }}
                />
                <Fingerprint
                  size={46}
                  className="absolute top-4 right-4 text-white opacity-40 group-hover:opacity-80 transition-opacity"
                />
                <span className="text-secondary-400 text-xs font-mono uppercase tracking-widest border border-secondary-600 px-2 py-1 rounded bg-secondary-900/60">
                  Clearance: Level 3
                </span>
                <span className="ml-3 hidden sm:inline-flex items-center gap-1 text-primary-300 text-[10px] font-mono uppercase tracking-widest">
                  <Activity size={12} className="animate-pulse" />
                  Live
                </span>
              </div>

              {/* Photo */}
              <div className="px-6 -mt-12 relative z-10 flex justify-between items-end">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-primary-500/20 blur-md scale-110 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="w-28 h-28 rounded-xl border-4 border-white shadow-md overflow-hidden bg-secondary-100 relative">
                    <img
                      src="/profile.webp"
                      alt="Wai Yan Bo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="mb-1 flex items-center gap-1 text-[10px] font-mono text-secondary-500">
                  <Lock size={12} />
                  {timeNow.toLocaleTimeString([], { hour12: false })}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h2 className="text-xl font-bold text-secondary-900">Wai Yan Bo</h2>
                <p className="text-sm font-medium text-primary-600 mb-5 font-mono">ID: GRC-AUTH-2026</p>

                <div className="space-y-3 text-sm text-secondary-700 font-medium">
                  <p className="flex items-center gap-3 group/item">
                    <MapPin size={18} className="text-secondary-400 group-hover/item:text-primary-600 transition-colors" />
                    Kuala Lumpur, Malaysia
                  </p>
                  <p className="flex items-center gap-3 group/item">
                    <FileBadge size={18} className="text-secondary-400 group-hover/item:text-primary-600 transition-colors" />
                    6x Dean's List Award recipient
                  </p>
                  <p className="flex items-center gap-3 group/item">
                    <FileText size={18} className="text-secondary-400 group-hover/item:text-primary-600 transition-colors" />
                    Focus: SRA, DLP, TPRM, OWASP
                  </p>
                </div>

                <div className="mt-6 border-t border-secondary-100 pt-4">
                  <h3 className="text-xs font-bold text-secondary-500 uppercase tracking-wider mb-3">
                    Verified References
                  </h3>
                  <div className="space-y-2 text-sm font-medium">
                    <a
                      className="flex items-center gap-2 text-primary-700 hover:text-primary-600 transition-colors hover:translate-x-1"
                      href="/DrHaniza_Recommendation_Letter_MIS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText size={14} /> Dr. Haniza Recommendation
                    </a>
                    <a
                      className="flex items-center gap-2 text-primary-700 hover:text-primary-600 transition-colors hover:translate-x-1"
                      href="/Prof_Khalid_Recommendation_Letter.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText size={14} /> Prof. Khalid Recommendation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll nudge */}
        <div className="mt-14 flex justify-center">
          <div className="flex flex-col items-center text-secondary-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={18} className="animate-bounce-soft mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
