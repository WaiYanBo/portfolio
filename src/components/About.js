import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Brain, Award, BookOpen } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 90, icon: Code },
    { name: 'React/Next.js', level: 85, icon: Globe },
    { name: 'Node.js/Express', level: 80, icon: Database },
    { name: 'Python/Django', level: 75, icon: Brain },
    { name: 'SQL/MongoDB', level: 70, icon: Database },
    { name: 'AWS/Docker', level: 65, icon: Globe },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      year: '2020 - 2024',
      gpa: '3.8/4.0',
      icon: BookOpen,
    },
    {
      degree: 'High School Diploma',
      school: 'High School Name',
      year: '2016 - 2020',
      gpa: '4.0/4.0',
      icon: Award,
    },
  ];

  const achievements = [
    'Dean\'s List for 6 consecutive semesters',
    'First Place in University Hackathon 2023',
    'Published research paper on Machine Learning',
    'Teaching Assistant for Data Structures course',
    'President of Computer Science Club',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">My Story</h3>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              I'm a passionate Computer Science graduate with a strong foundation in software development 
              and a love for solving complex problems. My journey in tech began with curiosity about how 
              things work, and has evolved into a career focused on building innovative solutions.
            </p>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              Throughout my academic career, I've developed expertise in full-stack development, 
              algorithms, and system design. I enjoy working with modern technologies and am always 
              eager to learn new tools and frameworks that can help me create better, more efficient solutions.
            </p>
            <p className="text-secondary-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <skill.icon className="text-primary-600" size={20} />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-secondary-700">{skill.name}</span>
                      <span className="text-sm text-secondary-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-secondary-50 rounded-lg card-hover"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <edu.icon className="text-primary-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary-900">{edu.degree}</h4>
                    <p className="text-secondary-600">{edu.school}</p>
                    <p className="text-sm text-secondary-500">{edu.year} • GPA: {edu.gpa}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <p className="text-secondary-600">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
