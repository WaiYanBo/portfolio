import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'GRC and Compliance',
      skills: ['Security Risk Assessment (SRA)', 'IT Governance', 'Data Loss Prevention (DLP)', 'Third-Party Risk Management (TPRM)']
    },
    {
      title: 'Networking',
      skills: ['Cisco Routing and Switching', 'Packet Analysis (Wireshark)', 'Network Hardening']
    },
    {
      title: 'Tools',
      skills: ['Burp Suite', 'Tenable (Theory)', 'Microsoft 365 Security', 'Linux CLI']
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-8">Technical Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-7 rounded-2xl border border-secondary-200 shadow-sm">
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">{category.title}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-secondary-100 text-secondary-800 text-sm rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;