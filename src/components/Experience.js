import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'IT Help Desk and Support',
      company: 'JLO Global Resources',
      date: 'Dec 2025 - Present',
      tag: 'Current',
      tagColor: 'bg-primary-100 text-primary-700 border-primary-200',
      points: [
        'Facilitated IT onboarding and delivered training on organizational workflows and internal systems.',
        'Performed maintenance and troubleshooting for workspace computers and printers to minimize downtime.',
        'Authored technical documentation for IT procurement and new network architectures.',
      ],
    },
    {
      id: 2,
      role: 'Intern Project Coordinator (Cybersecurity GRC Focus)',
      company: 'Averis (RGE Group)',
      date: 'Apr 2025 - Oct 2025',
      tag: 'GRC',
      tagColor: 'bg-secondary-200 text-secondary-800 border-secondary-300',
      points: [
        'Executed Security Risk Assessments for technologies like Zoom AI and DAM systems aligned with ISO 27001.',
        'Audited data flows with DLP teams to reduce sensitive corporate data leakage.',
        'Managed IT budget planning and authored executive-level risk reports for leadership.',
      ],
    },
    {
      id: 3,
      role: 'QA and Security Tester',
      company: 'IIB Tech Team',
      date: 'Nov 2024 - Sep 2025',
      tag: 'Security QA',
      tagColor: 'bg-secondary-200 text-secondary-800 border-secondary-300',
      points: [
        'Identified OWASP Top 10 risks such as SQL injection and XSS with Burp Suite.',
        'Conducted security audits and protocol compliance testing with Postman.',
        'Executed UAT and helped maintain 99.9% system uptime.',
        'Prioritized vulnerabilities for developers using CVSS scoring.',
      ],
    },
  ];

  return (
    <section className="py-8 relative">
      <div className="absolute inset-0 grid-bg opacity-40 mask-fade-y -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary-700 font-semibold">
            <span className="h-px w-8 bg-primary-600" /> Career Journey
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-secondary-900">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="mt-3 text-secondary-600 max-w-2xl">
            A progressive track record across IT support, GRC, and security QA — delivering compliant systems
            and measurable business risk reduction.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary-400 via-primary-300 to-secondary-200" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, idx) => {
              const leftAlign = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${leftAlign ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <span className="absolute left-5 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 ring-4 ring-secondary-50 shadow-md">
                    <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-60" />
                  </span>

                  {/* Spacer for timeline alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`pl-14 md:pl-0 md:w-1/2 ${leftAlign ? 'md:pr-12' : 'md:pl-12'}`}>
                    <article className="group bg-white rounded-2xl border border-secondary-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 p-7 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="relative">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider border px-2.5 py-1 rounded-full ${exp.tagColor}`}
                          >
                            {exp.tag}
                          </span>
                          <p className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary-500">
                            <Calendar size={14} /> {exp.date}
                          </p>
                        </div>
                        <h2 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors">
                          {exp.role}
                        </h2>
                        <p className="text-primary-700 font-medium flex items-center gap-2 mt-1 text-sm">
                          <Briefcase size={16} /> {exp.company}
                        </p>
                        <ul className="mt-5 space-y-2.5 text-secondary-700 text-sm">
                          {exp.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <CheckCircle2
                                size={16}
                                className="text-primary-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer marker */}
          <div className="relative mt-6 md:mt-10">
            <span className="absolute left-5 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary-300" />
            <p className="md:text-center text-xs uppercase tracking-widest text-secondary-500 pl-14 md:pl-0 pt-1">
              Open to new opportunities
              <MapPin className="inline-block ml-1 -mt-0.5" size={12} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
