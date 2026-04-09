import React from 'react';
import { Mail, Phone, MapPin, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-8">Contact and References</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-8">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">Get in Touch</h2>
            <div className="space-y-4 text-secondary-700">
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-primary-600" /> 
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shoaiev126.wyb@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-700"
                >
                  shoaiev126.wyb@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} className="text-primary-600" /> 
                <a href="tel:+601151898593" className="hover:text-primary-700">+60 115-189-8593</a>
              </p>
              <p className="flex items-center gap-2"><MapPin size={18} className="text-primary-600" /> Kuala Lumpur, Malaysia</p>
              <p className="flex items-center gap-2">
                <Linkedin size={18} className="text-primary-600" /> 
                <a href="https://www.linkedin.com/in/waiyanbo-/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-700">linkedin.com/in/waiyanbo-</a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-8">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">Recommendations and References</h2>
            <p className="text-secondary-700 text-sm">You can add 1-2 quote snippets from these letters later for stronger social proof.</p>

            <div className="mt-4 space-y-2">
              <a className="flex items-center gap-2 text-primary-700 hover:text-primary-600 underline" href="/DrHaniza_Recommendation_Letter_MIS.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={16} />
                DrHaniza_Recommendation_Letter_MIS.pdf
              </a>
              <a className="flex items-center gap-2 text-primary-700 hover:text-primary-600 underline" href="/Prof_Khalid_Recommendation_Letter.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={16} />
                Prof_Khalid_Recommendation_Letter.pdf
              </a>
            </div>

            <div className="mt-6 text-sm text-secondary-700 space-y-3">
              <p>
                <strong>Dr. Nor Haniza Mohd Khir</strong><br />
                Lecturer, Albukhary International University<br />
                <a href="mailto:norhaniza.khir@aiu.edu.my" className="text-primary-700 hover:text-primary-600">norhaniza.khir@aiu.edu.my</a>
              </p>
              <p>
                <strong>Professor Dr. Khalid Hussain</strong><br />
                Professor of Cybersecurity, Albukhary International University<br />
                <a href="mailto:khalid.hussain@aiu.edu.my" className="text-primary-700 hover:text-primary-600">khalid.hussain@aiu.edu.my</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;