import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'IT Help Desk and Support',
      company: 'JLO Global Resources',
      date: 'Dec 2025 - Present',
      points: [
        'Facilitated IT onboarding and delivered training on organizational workflows and internal systems.',
        'Performed maintenance and troubleshooting for workspace computers and printers to minimize downtime.',
        'Authored technical documentation for IT procurement and new network architectures.'
      ]
    },
    {
      id: 2,
      role: 'Intern Project Coordinator (Cybersecurity GRC Focus)',
      company: 'Averis (RGE Group)',
      date: 'Apr 2025 - Oct 2025',
      points: [
        'Executed Security Risk Assessments for technologies like Zoom AI and DAM systems aligned with ISO 27001.',
        'Audited data flows with DLP teams to reduce sensitive corporate data leakage.',
        'Managed IT budget planning and authored executive-level risk reports for leadership.'
      ]
    },
    {
      id: 3,
      role: 'QA and Security Tester',
      company: 'IIB Tech Team',
      date: 'Nov 2024 - Sep 2025',
      points: [
        'Identified OWASP Top 10 risks such as SQL injection and XSS with Burp Suite.',
        'Conducted security audits and protocol compliance testing with Postman.',
        'Executed UAT and helped maintain 99.9% system uptime.',
        'Prioritized vulnerabilities for developers using CVSS scoring.'
      ]
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-8">Work Experience</h1>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <article key={exp.id} className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-secondary-900">{exp.role}</h2>
                  <p className="text-primary-700 font-medium flex items-center gap-2 mt-1">
                    <Briefcase size={16} />
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm font-medium text-secondary-500">{exp.date}</p>
              </div>
              <ul className="mt-5 space-y-2 text-secondary-700">
                {exp.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;