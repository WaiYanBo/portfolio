import React, { useState } from 'react';
import { GraduationCap, Award, Users, X, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Helper to close modal and reset zoom
  const closeModal = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  return (
    <section className="py-8 relative">
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
            <p className="mt-4 text-secondary-700 font-medium">
              Bachelor of Computer Science (Cybersecurity), Albukhary International University (Graduated Dec 2025)
            </p>
            <p className="text-secondary-600 mb-4">CGPA: 3.67 (First Class Honours, 6x Dean's List Award recipient)</p>
            
            {/* First Class Honours Evidence */}
            <div className="mb-6 bg-secondary-50 p-4 rounded-lg border border-secondary-100">
              <p className="font-medium text-secondary-800 mb-3">Official Graduation Standing</p>
              <img 
                src="/FirstClassHonours.webp" 
                alt="First Class Honours Verification" 
                onClick={() => setSelectedImage('/FirstClassHonours.webp')}
                className="w-full max-w-sm rounded-lg border border-secondary-200 shadow-sm mb-3 cursor-pointer hover:opacity-90 hover:shadow-md transition-all"
                title="Click to view full screen and zoom"
              />
              <a 
                href="YOUR_GOOGLE_DRIVE_LINK_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 underline"
              >
                Download Official AIU 6th Convo Handbook (PDF)
              </a>
            </div>

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
            
            <div className="mt-5 space-y-6">
              {/* Enterprise Networking Certificate */}
              <div>
                <p className="font-medium text-secondary-800 mb-3">- Enterprise Networking</p>
                <img 
                  src="/ENC.webp" 
                  alt="Enterprise Networking Certificate" 
                  onClick={() => setSelectedImage('/ENC.webp')}
                  className="w-full max-w-sm rounded-lg border border-secondary-200 shadow-sm cursor-pointer hover:opacity-90 hover:shadow-md transition-all"
                  title="Click to view full screen and zoom"
                />
              </div>
              
              {/* Hardware and Network Engineering Certificates */}
              <div>
                <p className="font-medium text-secondary-800 mb-3">- Hardware and Network Engineering</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <img 
                    src="/FrontHW.webp" 
                    alt="Hardware and Network Engineering Certificate Front" 
                    onClick={() => setSelectedImage('/FrontHW.webp')}
                    className="w-full rounded-lg border border-secondary-200 shadow-sm cursor-pointer hover:opacity-90 hover:shadow-md transition-all"
                    title="Click to view full screen and zoom"
                  />
                  <img 
                    src="/BackHW.webp" 
                    alt="Hardware and Network Engineering Certificate Back" 
                    onClick={() => setSelectedImage('/BackHW.webp')}
                    className="w-full rounded-lg border border-secondary-200 shadow-sm cursor-pointer hover:opacity-90 hover:shadow-md transition-all"
                    title="Click to view full screen and zoom"
                  />
                </div>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-semibold text-secondary-900 flex items-center gap-2">
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

      {/* Zoomable Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex flex-col bg-secondary-900/95 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Top Control Bar */}
          <div 
            className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-secondary-900/80 to-transparent z-50"
            onClick={(e) => e.stopPropagation()} // Prevent clicking controls from closing the modal
          >
            <div className="flex gap-3">
              <button 
                onClick={() => setZoomLevel(prev => Math.min(4, prev + 0.5))}
                className="p-2 bg-white text-secondary-800 rounded-lg hover:bg-secondary-100 transition-colors shadow-sm flex items-center gap-2"
                title="Zoom In"
              >
                <ZoomIn size={20} /> <span className="hidden sm:inline font-medium text-sm">Zoom In</span>
              </button>
              <button 
                onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.5))}
                className="p-2 bg-white text-secondary-800 rounded-lg hover:bg-secondary-100 transition-colors shadow-sm flex items-center gap-2"
                title="Zoom Out"
              >
                <ZoomOut size={20} /> <span className="hidden sm:inline font-medium text-sm">Zoom Out</span>
              </button>
              <button 
                onClick={() => setZoomLevel(1)}
                className="p-2 bg-white text-secondary-800 rounded-lg hover:bg-secondary-100 transition-colors shadow-sm flex items-center gap-2"
                title="Reset Zoom"
              >
                <RefreshCw size={20} /> <span className="hidden sm:inline font-medium text-sm">Reset</span>
              </button>
            </div>
            
            <button 
              onClick={closeModal}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-sm"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Scrollable Container for Zoomed Image */}
          <div className="flex-1 overflow-auto w-full h-full flex items-center justify-center p-4 pt-20">
            <div 
              style={{
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.2s ease-out',
                transformOrigin: 'center center'
              }}
            >
              <img 
                src={selectedImage} 
                alt="Full screen preview" 
                className="max-w-none max-h-[85vh] object-contain rounded shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;