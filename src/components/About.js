import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-8">
          <h1 className="text-3xl font-bold text-secondary-900">Professional Profile</h1>
          <p className="mt-4 text-secondary-700 leading-relaxed">
            Cybersecurity graduate with a CGPA of 3.67 and hands-on enterprise experience in Governance, Risk,
            and Compliance (GRC). I have delivered Security Risk Assessments for new technologies, collaborated
            with DLP teams to reduce data leakage exposure, and produced executive-ready risk reports for leadership.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-secondary-900 flex items-center gap-2">
              <GraduationCap className="text-primary-600" />
              Education & Projects
            </h2>
            <p className="mt-4 text-secondary-700">
              Bachelor of Computer Science (Cybersecurity), Albukhary International University (Graduated Dec 2025)
            </p>
            <p className="text-secondary-600">CGPA: 3.67 (6x Dean's List Award recipient)</p>
            <ul className="mt-4 space-y-2 text-secondary-700">
              <li>- Built a Python-based web vulnerability scanner to identify security risks and support compliance checks.</li>
              <li>- Architected a Mental Health and Wellbeing System for senior care with UML modeling and privacy-first design.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-secondary-900 flex items-center gap-2">
              <Award className="text-primary-600" />
              Certifications
            </h2>
            <ul className="mt-4 space-y-2 text-secondary-700">
              <li>- Enterprise Networking</li>
              <li>- Hardware and Network Engineering</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-secondary-900 flex items-center gap-2">
              <Users className="text-primary-600" />
              Leadership
            </h3>
            <p className="mt-3 text-secondary-700">
              Event Unit Co-Representative, AIU Myanmar Student Association. Managed logistics,
              coordination, and communication across student event teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;