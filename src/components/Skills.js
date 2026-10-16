import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { title: 'Cybersecurity & GRC', skills: ['Vulnerability & Risk Management', 'Security Risk Assessment (SRA)', 'Data Loss Prevention (DLP)', 'Penetration Testing', 'Cryptography'] },
  { title: 'Networking & Support', skills: ['Active Directory Domain Services', 'Cisco Routing & Switching', 'DNS', 'DHCP', 'VPN', 'Network Hardening', 'VMware Server', 'NAT', 'Packet Analysis'] },
  { title: 'Tools & Platforms', skills: ['Linux CLI', 'Postman', 'Burp Suite', 'Wireshark', 'Microsoft 365', 'K2'] },
  { title: 'Development', skills: ['Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript', 'Flask'] },
];
const training = [
  ['Mar 2020', 'Enterprise Networking Course', 'M.S.C Education Centre', 'Windows Server implementation, AD DS, DNS/DHCP, VPN, and VMware.'],
  ['Nov 2019', 'Hardware & Network Engineering', 'M.S.C Education Centre', '320 hours of hands-on training in telecommunications, OSI models, and A+/Network+ domains.'],
  ['2021', 'Communicative English Course', 'Flamingo Language Center', 'Professional communication training.'],
  ['2018', 'Intermediate General English', 'Success Language Academy', 'English language training.'],
];
export default function Skills() {
  const [query, setQuery] = useState('');
  const filtered = categories.map(c => ({ ...c, skills: c.skills.filter(s => `${c.title} ${s}`.toLowerCase().includes(query.trim().toLowerCase())) })).filter(c => c.skills.length);
  return <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <p className="eyebrow">Knowledge in practice</p><h1 className="mt-3 text-4xl font-bold">Skills & <span className="gradient-text">training.</span></h1>
    <p className="mt-4 max-w-2xl text-secondary-700">A technical foundation spanning enterprise support, risk assessment, and secure development.</p>
    <label className="skill-search"><Search size={20} /><span className="sr-only">Search skills</span><input type="search" placeholder="Find a skill, tool, or discipline…" value={query} onChange={e => setQuery(e.target.value)} /></label>
    <p className="text-sm text-secondary-600 mb-4" role="status">{filtered.reduce((n, c) => n + c.skills.length, 0)} skills {query ? 'matching your search' : 'across four disciplines'}</p>
    <div className="skills-directory"><AnimatePresence>{filtered.map((category, index) => <motion.article key={category.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="skill-row"><span className="eyebrow">0{index + 1}</span><h2>{category.title}</h2><div>{category.skills.map(skill => <span className="skill-pill bg-white text-secondary-800 border-secondary-200" key={skill}>{skill}</span>)}</div></motion.article>)}</AnimatePresence></div>
    {!filtered.length && <div className="p-10 border border-secondary-200 rounded-xl text-center"><p>No skills match “{query}”. Try Python, networking, or security.</p><button className="cta-ghost mt-4" onClick={() => setQuery('')}>Clear search</button></div>}
    <h2 className="text-2xl font-bold mt-14 mb-6">Certifications & communication</h2><div className="training-list">{training.map(([date, title, org, detail]) => <motion.article initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} key={title}><span className="eyebrow">{date}</span><div><h3>{title}</h3><p className="text-primary-700">{org}</p><p className="mt-2 text-secondary-700">{detail}</p></div></motion.article>)}</div>
    <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-primary-700 font-semibold">View certificates & education <ArrowUpRight size={18} /></Link>
  </section>;
}
