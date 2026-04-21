import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, HeartPulse, Github, ArrowUpRight, Code2, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Web Application Vulnerability Scanner',
    category: 'Cybersecurity',
    icon: <Shield size={22} className="text-primary-600" />,
    accent: 'from-primary-500/20 to-primary-700/10',
    description:
      'Developed a Python-based scanner to identify common web security weaknesses and improve compliance readiness.',
    highlights: [
      'Created scanning workflows focused on web application risk patterns.',
      'Mapped findings into practical remediation recommendations.',
      'Improved visibility of potential security gaps for project teams.',
    ],
    tags: ['Python', 'Web Security', 'Vulnerability Analysis', 'Compliance'],
    githubLink: 'https://github.com/Irrfan47/Web-Application-Vulnerability-Scanner',
  },
  {
    title: 'Mental Health and Wellbeing System',
    category: 'System Architecture',
    icon: <HeartPulse size={22} className="text-primary-600" />,
    accent: 'from-secondary-400/20 to-primary-600/10',
    description:
      'Architected a system for senior care with emphasis on accessibility, structured design, and privacy-aware data handling.',
    highlights: [
      'Produced UML models covering key actors, flows, and modules.',
      'Planned privacy design for handling sensitive user information.',
      'Balanced functional requirements with security considerations.',
    ],
    tags: ['UML', 'System Design', 'Privacy Design', 'Senior Care'],
  },
];

const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 10;
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card relative ${className}`}
      style={{
        background:
          'radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(117,146,40,0.12), transparent 60%)',
      }}
    >
      {children}
    </div>
  );
};

const Projects = () => {
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
            <Code2 size={14} /> Featured Work
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-secondary-900">
            Key <span className="gradient-text">Projects</span>
          </h1>
          <p className="mt-3 text-secondary-600 max-w-2xl">
            Selected projects that demonstrate end-to-end thinking — from risk modeling and scanner design to
            privacy-led system architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <TiltCard className="rounded-2xl">
                <article className="relative tilt-card-inner bg-white rounded-2xl border border-secondary-200 shadow-sm hover:shadow-2xl transition-shadow duration-400 p-8 flex flex-col h-full overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div className="relative flex-1">
                    <div className="flex items-center justify-between">
                      <p className="inline-block text-xs font-semibold uppercase tracking-wide bg-primary-100 text-primary-700 px-3 py-1 rounded-full border border-primary-200/60">
                        {project.category}
                      </p>
                      <Layers size={18} className="text-secondary-300 group-hover:text-primary-500 transition-colors" />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                        {project.icon}
                      </div>
                      <h2 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors">
                        {project.title}
                      </h2>
                    </div>
                    <p className="mt-3 text-secondary-700">{project.description}</p>

                    <ul className="mt-4 space-y-2 text-secondary-700 text-sm">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="skill-pill bg-secondary-100 text-secondary-700 border-secondary-200/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.githubLink ? (
                    <div className="mt-8 pt-5 border-t border-secondary-100 relative flex items-center justify-between">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-dark inline-flex items-center gap-2 group/cta"
                      >
                        <Github size={18} />
                        View Source Code
                        <ArrowUpRight size={16} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                      </a>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-secondary-400">
                        Open Source
                      </span>
                    </div>
                  ) : (
                    <div className="mt-8 pt-5 border-t border-secondary-100 relative flex items-center justify-between">
                      <span className="text-xs text-secondary-500 italic">Academic / architectural artifact</span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-secondary-400">
                        Private
                      </span>
                    </div>
                  )}
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
