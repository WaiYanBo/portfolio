import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Download, ShieldCheck, Server, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';

const areas = [
  { name: 'IT operations', icon: Server, number: '99%', label: 'Operational uptime', title: 'Keeping people connected.', detail: 'L1 & L2 support, Active Directory, Microsoft 365, and reliable network infrastructure at JLO Global Resources.', route: '/experience' },
  { name: 'Risk & compliance', icon: ShieldCheck, number: '3', label: 'Enterprise platforms assessed', title: 'Making risk understandable.', detail: 'ISO 27001-aligned risk assessments, DLP collaboration, and reporting for an RM 3.3M technology portfolio at AVERIS.', route: '/experience' },
  { name: 'Application security', icon: Code2, number: '20+', label: 'System defects identified & patched', title: 'Turning findings into fixes.', detail: 'Security audits, CVSS-based remediation, and functional testing at IIB. A Python-based DAST scanner developed as an honours thesis.', route: '/projects' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const area = areas[active];
  return (
    <section className="portfolio-home">
      <div className="hero-eyebrow"><span className="status-dot" /> Kuala Lumpur, Malaysia <span>Portfolio / Wai Yan Bo</span></div>
      <div className="hero-layout">
        <motion.div initial={{ opacity: 0, y: reduce ? 0 : 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow">IT support. Security. Real-world impact.</p>
          <h1 className="hero-name">Wai Yan <span>Bo.</span></h1>
          <p className="hero-statement">Reliable systems.<br /><em>Considered security.</em></p>
          <p className="hero-intro">Junior IT Helpdesk and Support Engineer with a First-Class Honours degree in Cybersecurity. Connecting hands-on technical support with governance, risk, and application security.</p>
          <div className="hero-actions">
            <Magnetic><Link to="/experience" className="cta-primary inline-flex items-center gap-3">Explore my work <ArrowUpRight size={18} /></Link></Magnetic>
            <Magnetic><a href="/resume.pdf" download="Wai-Yan-Bo-CV.pdf" className="cta-ghost inline-flex items-center gap-3"><Download size={17} /> Download CV</a></Magnetic>
          </div>
          <div className="hero-education"><strong>3.67 <span>/ 4.00 CGPA</span></strong><span>First-Class Honours<br />Dean’s List · 6 semesters</span></div>
        </motion.div>
        <motion.div className="portrait-stage" initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="portrait-grid" aria-hidden="true" />
          <span className="portrait-index">01 / PROFILE</span>
          <div className="portrait-orbit" aria-hidden="true" />
          <img src="/profile.webp" alt="Wai Yan Bo" className="hero-portrait" fetchPriority="high" />
          <div className="portrait-caption"><ShieldCheck size={22} /><div><strong>Built on a security mindset.</strong><span>BSc Computer Science (Cybersecurity)</span></div></div>
          <span className="portrait-side">SUPPORT / ASSESS / IMPROVE</span>
        </motion.div>
      </div>
      <div className="practice-heading"><p className="eyebrow">Three connected disciplines</p><span>Select a focus to explore <ArrowRight size={15} /></span></div>
      <div className="practice-layout">
        <div className="practice-options" aria-label="Professional focus">
          {areas.map((item, i) => { const Icon = item.icon; return <button key={item.name} aria-pressed={active === i} aria-controls="focus-detail" onClick={() => setActive(i)} className={`practice-option ${active === i ? 'selected' : ''}`}><span className="practice-number">0{i + 1}</span><Icon size={20} /><span>{item.name}</span><ArrowUpRight size={18} />{active === i && <motion.span className="practice-indicator" layoutId="practice-indicator" transition={{ type: 'spring', stiffness: 350, damping: 30 }} />}</button>; })}
        </div>
        <div className="practice-detail" id="focus-detail" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={active} className="practice-content" initial={{ opacity: 0, y: reduce ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <div className="practice-stat"><strong>{area.number}</strong><span>{area.label}</span></div>
              <div><h2>{area.title}</h2><p>{area.detail}</p><Link to={area.route}>Explore {active === 2 ? 'projects' : 'experience'} <ArrowUpRight size={16} /></Link></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Link to="/about" className="home-next"><span>Behind the work</span><strong>Education, research & community.</strong><ArrowUpRight /></Link>
    </section>
  );
}
