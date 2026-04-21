import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Network,
  ServerCog,
  Wrench,
  Boxes,
  Award,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'GRC and Compliance',
    icon: Shield,
    color: 'from-primary-500 to-primary-700',
    skills: [
      { name: 'Security Risk Assessment (SRA)', level: 88 },
      { name: 'IT Governance', level: 82 },
      { name: 'Data Loss Prevention (DLP)', level: 78 },
      { name: 'Third-Party Risk Management (TPRM)', level: 75 },
    ],
  },
  {
    title: 'Networking',
    icon: Network,
    color: 'from-primary-600 to-secondary-700',
    skills: [
      { name: 'Cisco Routing and Switching', level: 85 },
      { name: 'Packet Analysis (Wireshark)', level: 80 },
      { name: 'Network Hardening', level: 78 },
      { name: 'VLAN & LAN/WAN Infrastructure', level: 82 },
      { name: 'VPN & Remote Access', level: 76 },
      { name: 'OSI Models & IEEE Standards', level: 84 },
    ],
  },
  {
    title: 'Systems Administration',
    icon: ServerCog,
    color: 'from-secondary-600 to-secondary-800',
    skills: [
      { name: 'Windows Server Administration', level: 83 },
      { name: 'Active Directory Domain Services', level: 80 },
      { name: 'DNS & DHCP Management', level: 78 },
      { name: 'VMware Virtualization', level: 74 },
      { name: 'Server Roles (Web, FTP, Exchange)', level: 72 },
    ],
  },
  {
    title: 'Hardware & IT Support',
    icon: Wrench,
    color: 'from-primary-500 to-primary-600',
    skills: [
      { name: 'System Assembly & Upgrades', level: 86 },
      { name: 'Hardware Diagnostics', level: 84 },
      { name: 'Disaster Recovery Protocols', level: 76 },
      { name: 'OS Installation & Configuration', level: 88 },
    ],
  },
  {
    title: 'Security Tools',
    icon: Boxes,
    color: 'from-secondary-700 to-primary-700',
    skills: [
      { name: 'Burp Suite', level: 80 },
      { name: 'Tenable (Theory)', level: 65 },
      { name: 'Microsoft 365 Security', level: 78 },
      { name: 'Linux CLI', level: 82 },
      { name: 'Cisco Packet Tracer', level: 88 },
      { name: 'GNS3', level: 76 },
    ],
  },
];

const SkillBar = ({ name, level, color, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-secondary-800 group-hover:text-primary-700 transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono font-semibold text-secondary-500 tabular-nums">
          {inView ? level : 0}%
        </span>
      </div>
      <div className="h-2 bg-secondary-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden`}
          style={{
            width: inView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        >
          <span
            className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] bg-[length:200%_100%]"
            style={{ animation: 'shimmer 2.4s linear infinite' }}
          />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-8 relative">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-y -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary-700 font-semibold">
            <Award size={14} /> Technical Arsenal
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-secondary-900">
            <span className="gradient-text">Skills</span> & Proficiencies
          </h1>
          <p className="mt-3 text-secondary-600 max-w-2xl">
            Hands-on breadth across governance, networks, systems, and security tooling — grounded in
            enterprise coursework and real-world engagements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, cIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: cIdx * 0.08 }}
                className="group relative bg-white p-7 rounded-2xl border border-secondary-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden"
              >
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 blur-2xl`}
                />
                <div className="relative flex items-center gap-3 mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <Icon size={20} />
                  </div>
                  <h2 className="text-lg font-semibold text-secondary-900">{category.title}</h2>
                </div>
                <div className="space-y-3 relative">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={i * 80}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee of frameworks/standards */}
        <div className="mt-14 relative overflow-hidden rounded-2xl bg-secondary-900 text-secondary-200 py-4 border border-secondary-800">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary-900 to-transparent z-10" />
          <div className="flex gap-10 animate-marquee whitespace-nowrap font-mono text-sm uppercase tracking-widest">
            {[
              'ISO 27001',
              'NIST CSF',
              'OWASP Top 10',
              'CIS Controls',
              'ITIL',
              'COBIT',
              'MITRE ATT&CK',
              'GDPR',
              'PCI-DSS',
              'ISO 27001',
              'NIST CSF',
              'OWASP Top 10',
              'CIS Controls',
              'ITIL',
              'COBIT',
              'MITRE ATT&CK',
              'GDPR',
              'PCI-DSS',
            ].map((tag, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
