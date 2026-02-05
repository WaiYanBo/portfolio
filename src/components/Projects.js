import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter, Code, Database, Globe, Smartphone, Brain } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'backend', name: 'Backend Systems' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design.',
      image: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Globe,
      features: ['User Authentication', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSockets'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Code,
      features: ['Real-time Collaboration', 'Drag & Drop', 'Team Management', 'Progress Tracking'],
    },
    {
      id: 3,
      title: 'Weather Prediction Model',
      description: 'Machine learning model for weather prediction using historical data and advanced algorithms with 95% accuracy.',
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Weather+ML',
      technologies: ['Python', 'TensorFlow', 'NumPy', 'Pandas'],
      category: 'ml',
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Brain,
      features: ['Time Series Analysis', 'Neural Networks', 'Data Visualization', 'API Integration'],
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      description: 'Cross-platform mobile application for tracking workouts, nutrition, and health metrics with social features.',
      image: 'https://via.placeholder.com/400x250/ef4444/ffffff?text=Fitness+App',
      technologies: ['React Native', 'Redux', 'SQLite', 'Charts.js'],
      category: 'mobile',
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Smartphone,
      features: ['Workout Tracking', 'Nutrition Logging', 'Progress Analytics', 'Social Sharing'],
    },
    {
      id: 5,
      title: 'API Gateway Service',
      description: 'Scalable microservices architecture with API gateway, authentication, rate limiting, and monitoring capabilities.',
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=API+Gateway',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
      category: 'backend',
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Database,
      features: ['Microservices', 'Rate Limiting', 'Load Balancing', 'Health Monitoring'],
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and engagement tracking.',
      image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Social+Dashboard',
      technologies: ['Vue.js', 'D3.js', 'PostgreSQL', 'REST APIs'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Globe,
      features: ['Data Analytics', 'Post Scheduling', 'Engagement Metrics', 'Multi-platform Support'],
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-12">
            Here are some of my recent projects that showcase my skills and experience in software development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-700 hover:bg-secondary-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <project.icon className="text-white bg-primary-600 p-2 rounded-lg" size={24} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">{project.title}</h3>
                <p className="text-secondary-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-xs text-secondary-600">
                        • {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                      whileHover={{ scale: 1.2 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                  <motion.button
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-secondary-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
