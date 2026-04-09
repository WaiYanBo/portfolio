import React from 'react';
import { Shield, HeartPulse, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Web Application Vulnerability Scanner',
      category: 'Cybersecurity',
      icon: <Shield size={22} className="text-primary-600" />,
      description: 'Developed a Python-based scanner to identify common web security weaknesses and improve compliance readiness.',
      highlights: [
        'Created scanning workflows focused on web application risk patterns.',
        'Mapped findings into practical remediation recommendations.',
        'Improved visibility of potential security gaps for project teams.'
      ],
      tags: ['Python', 'Web Security', 'Vulnerability Analysis', 'Compliance'],
      githubLink: 'https://github.com/Irrfan47/Web-Application-Vulnerability-Scanner'
    },
    {
      title: 'Mental Health and Wellbeing System',
      category: 'System Architecture',
      icon: <HeartPulse size={22} className="text-primary-600" />,
      description: 'Architected a system for senior care with emphasis on accessibility, structured design, and privacy-aware data handling.',
      highlights: [
        'Produced UML models covering key actors, flows, and modules.',
        'Planned privacy design for handling sensitive user information.',
        'Balanced functional requirements with security considerations.'
      ],
      tags: ['UML', 'System Design', 'Privacy Design', 'Senior Care']
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-8">Key Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article key={project.title} className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-8 flex flex-col">
              <div className="flex-1">
                <p className="inline-block text-xs font-semibold uppercase tracking-wide bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                  {project.category}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {project.icon}
                  <h2 className="text-xl font-semibold text-secondary-900">{project.title}</h2>
                </div>
                <p className="mt-3 text-secondary-700">{project.description}</p>

                <ul className="mt-4 space-y-2 text-secondary-700">
                  {project.highlights.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-md border border-secondary-200/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link Button renders if githubLink exists */}
              {project.githubLink && (
                <div className="mt-8 pt-5 border-t border-secondary-100">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary-900 text-white text-sm font-medium rounded-lg hover:bg-secondary-800 transition-colors shadow-sm"
                  >
                    <Github size={18} />
                    View Source Code
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;