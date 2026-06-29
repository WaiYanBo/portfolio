import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FlaskConical,
  ShieldAlert,
  Cpu,
  Calendar,
  MapPin,
  GraduationCap,
  Quote,
} from 'lucide-react';
import Reveal, { Stagger, StaggerItem } from './Reveal';

const research = [
  {
    id: 'dast',
    title: 'Dynamic Web Application Vulnerability Scanner',
    subtitle: 'Honours Thesis · DAST Framework',
    icon: ShieldAlert,
    date: 'Oct 2024 – Feb 2025',
    org: 'Albukhary International University',
    stack: ['Python', 'Flask', 'Requests', 'BeautifulSoup', 'JavaScript'],
    phases: {
      Motivation:
        'Investigated the complexity and inefficiency of existing vulnerability tools such as Burp Suite to provide an accessible cybersecurity solution for SMEs that lack dedicated security resources.',
      Design:
        'Designed and implemented a Dynamic Application Security Testing (DAST) web application using Python, Flask, Requests, BeautifulSoup, and a JavaScript front end.',
      Methodology:
        'Developed automated payload injection and response-analysis techniques to evaluate web applications for SQL Injection (SQLi), Cross-Site Scripting (XSS), and server misconfigurations using custom rule-based detection algorithms.',
      Results:
        'Demonstrated the feasibility of a lightweight DAST framework that detects SQLi, XSS, and common server misconfigurations while automatically generating remediation reports for secure web application development.',
    },
  },
  {
    id: 'edge-dms',
    title: 'Enhancing Driver Monitoring Systems via Edge Computing',
    subtitle: 'Directed Study · Intelligent Transportation',
    icon: Cpu,
    date: 'Jun 2024',
    org: 'Albukhary International University',
    stack: ['Edge Computing', 'Cloud–Edge', 'Literature Review', 'ITS'],
    phases: {
      Motivation:
        'Investigated latency and network-dependency challenges in cloud-based Driver Monitoring Systems (DMS) to improve real-time responsiveness for intelligent transportation systems.',
      Design:
        'Conducted a comprehensive literature review and proposed a conceptual hybrid cloud–edge architecture for real-time driver monitoring. No software implementation was undertaken.',
      Methodology:
        'Carried out a systematic review of recent DMS and edge-computing studies, comparing existing architectures, identifying research gaps, and synthesizing findings into a conceptual hybrid framework.',
      Results:
        'Proposed a scalable hybrid cloud–edge architecture that theoretically reduces latency and network dependency, providing a foundation for future implementation and experimental validation.',
    },
  },
];

const interests = [
  'Application Security',
  'Web Security',
  'Vulnerability Assessment',
  'Secure Software Engineering',
  'AI Security',
  'Edge Computing',
  'Intelligent Transportation Systems',
];

const ResearchCard = ({ item, index }) => {
  const tabs = Object.keys(item.phases);
  const [active, setActive] = useState(tabs[0]);
  const Icon = item.icon;

  return (
    <Reveal
      direction={index % 2 === 0 ? 'left' : 'right'}
      className="card-spotlight group relative bg-white rounded-2xl border border-secondary-200 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
        e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
      }}
    >
      <div className="relative z-10 p-7 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
              <Icon size={22} />
            </span>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary-700">
                {item.subtitle}
              </p>
              <h2 className="text-xl font-semibold text-secondary-900 leading-snug">
                {item.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs font-medium text-secondary-500">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} /> {item.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} /> {item.org}
          </span>
        </div>

        {/* Phase tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 ${
                active === tab
                  ? 'bg-secondary-900 text-white border-secondary-900 shadow-sm'
                  : 'bg-white text-secondary-600 border-secondary-200 hover:border-primary-300 hover:text-primary-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-4 min-h-[7.5rem] rounded-xl bg-secondary-50 border border-secondary-100 p-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm leading-relaxed text-secondary-700"
            >
              {item.phases[active]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.map((s) => (
            <span
              key={s}
              className="skill-pill bg-secondary-100 text-secondary-700 border-secondary-200/70"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

const Research = () => {
  return (
    <section className="py-8 relative">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-y -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary-700 font-semibold">
            <FlaskConical size={14} /> Research Experience
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-secondary-900">
            Applied <span className="gradient-text">Research</span>
          </h1>
          <p className="mt-3 text-secondary-600 max-w-2xl">
            Academic investigations spanning offensive web security tooling and edge-computing
            architecture — structured around motivation, design, methodology, and contribution.
          </p>
        </Reveal>

        {/* Advisor / thesis callout */}
        <Reveal
          direction="up"
          delay={0.05}
          className="mb-8 relative overflow-hidden rounded-2xl bg-secondary-900 text-secondary-100 p-6 md:p-7"
        >
          <Quote className="absolute top-4 right-4 text-secondary-700" size={42} />
          <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-primary-600/20 blur-3xl" />
          <p className="relative inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-primary-300">
            <GraduationCap size={14} /> Honours Thesis
          </p>
          <p className="relative mt-2 text-lg md:text-xl font-display font-semibold max-w-3xl">
            Design and Implementation of a Dynamic Web Application Vulnerability Scanner
          </p>
          <p className="relative mt-2 text-sm text-secondary-400">
            Advised by Prof. Dr. Khalid Hussain · Albukhary International University
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {research.map((item, i) => (
            <ResearchCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Research interests */}
        <Reveal className="mt-10">
          <h3 className="text-sm font-semibold text-secondary-900 uppercase tracking-wider mb-4">
            Research Interests
          </h3>
          <Stagger className="flex flex-wrap gap-2.5" gap={0.05}>
            {interests.map((tag) => (
              <StaggerItem key={tag} direction="up">
                <span className="skill-pill bg-white text-secondary-700 border-secondary-200 hover:border-primary-300 hover:text-primary-700 cursor-default">
                  {tag}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
};

export default Research;
