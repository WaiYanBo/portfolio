import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  Send,
  MessageCircle,
  CheckCircle2,
  Copy,
} from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'visitor'}`);
    const body = encodeURIComponent(
      `Hi Wai Yan,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=shoaiev126.wyb@gmail.com&su=${subject}&body=${body}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const copyToClipboard = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(''), 1800);
    } catch {
      /* ignore */
    }
  };

  const inputBase =
    'peer w-full px-3 pt-6 pb-2 bg-secondary-50 border border-secondary-200 rounded-lg text-secondary-900 placeholder-transparent focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all';

  const labelBase =
    'absolute left-3 top-2 text-xs font-medium text-secondary-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-600 transition-all pointer-events-none';

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
            <MessageCircle size={14} /> Let's Connect
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-secondary-900">
            Contact & <span className="gradient-text">References</span>
          </h1>
          <p className="mt-3 text-secondary-600 max-w-2xl">
            Whether you have an opportunity, a collaboration idea, or just want to talk security — drop a line
            and I'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-secondary-200 shadow-sm p-8 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-secondary-900 mb-5">Get in Touch</h2>
            <div className="space-y-3">
              {[
                {
                  key: 'email',
                  icon: Mail,
                  label: 'Email',
                  value: 'shoaiev126.wyb@gmail.com',
                  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=shoaiev126.wyb@gmail.com',
                  external: true,
                  copy: 'shoaiev126.wyb@gmail.com',
                },
                {
                  key: 'phone',
                  icon: Phone,
                  label: 'Phone',
                  value: '+60 115-189-8593',
                  href: 'tel:+601151898593',
                  copy: '+601151898593',
                },
                {
                  key: 'location',
                  icon: MapPin,
                  label: 'Location',
                  value: 'Kuala Lumpur, Malaysia',
                },
                {
                  key: 'linkedin',
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/waiyanbo-',
                  href: 'https://www.linkedin.com/in/waiyanbo-/',
                  external: true,
                  copy: 'https://www.linkedin.com/in/waiyanbo-/',
                },
              ].map(({ key, icon: Icon, label, value, href, external, copy }) => (
                <div
                  key={key}
                  className="group flex items-center justify-between gap-3 p-3 rounded-xl border border-transparent hover:border-primary-200 hover:bg-primary-50/40 transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-widest text-secondary-500 font-semibold">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className="block truncate text-secondary-800 hover:text-primary-700 font-medium"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="truncate text-secondary-800 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                  {copy && (
                    <button
                      onClick={() => copyToClipboard(key, copy)}
                      className="text-secondary-400 hover:text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded"
                      aria-label={`Copy ${label}`}
                      title="Copy"
                    >
                      {copied === key ? <CheckCircle2 size={16} className="text-primary-600" /> : <Copy size={16} />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-secondary-100 pt-5">
              <h3 className="text-sm font-semibold text-secondary-900 mb-3">Recommendation Letters</h3>
              <div className="space-y-2">
                <a
                  className="flex items-center gap-2 text-primary-700 hover:text-primary-600 text-sm font-medium hover:translate-x-1 transition-all"
                  href="/DrHaniza_Recommendation_Letter_MIS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={16} /> Dr. Haniza Recommendation Letter
                </a>
                <a
                  className="flex items-center gap-2 text-primary-700 hover:text-primary-600 text-sm font-medium hover:translate-x-1 transition-all"
                  href="/Prof_Khalid_Recommendation_Letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={16} /> Prof. Khalid Recommendation Letter
                </a>
              </div>
            </div>

            <div className="mt-6 text-sm text-secondary-700 space-y-3 bg-secondary-50 rounded-xl p-4 border border-secondary-100">
              <p>
                <strong>Dr. Nor Haniza Mohd Khir</strong>
                <br />
                Lecturer, Albukhary International University
                <br />
                <a
                  href="mailto:norhaniza.khir@aiu.edu.my"
                  className="text-primary-700 hover:text-primary-600"
                >
                  norhaniza.khir@aiu.edu.my
                </a>
              </p>
              <p>
                <strong>Professor Dr. Khalid Hussain</strong>
                <br />
                Professor of Cybersecurity, Albukhary International University
                <br />
                <a
                  href="mailto:khalid.hussain@aiu.edu.my"
                  className="text-primary-700 hover:text-primary-600"
                >
                  khalid.hussain@aiu.edu.my
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right: Interactive form */}
          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="relative bg-white rounded-2xl border border-secondary-200 shadow-sm p-8 hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary-200/40 blur-3xl" />
            <h2 className="relative text-xl font-semibold text-secondary-900 mb-1">Send a Message</h2>
            <p className="relative text-sm text-secondary-600 mb-5">
              Your message opens in Gmail with the details pre-filled.
            </p>

            <div className="relative space-y-4">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputBase}
                />
                <label htmlFor="name" className={labelBase}>
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputBase}
                />
                <label htmlFor="email" className={labelBase}>
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className={`${inputBase} resize-none`}
                />
                <label htmlFor="message" className={labelBase}>
                  Your Message
                </label>
                <p className="mt-1 text-right text-xs text-secondary-400 font-mono">
                  {form.message.length} chars
                </p>
              </div>

              <button
                type="submit"
                className="cta-primary w-full inline-flex items-center justify-center gap-2 group"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    Opened in Gmail
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-secondary-400 text-center">
                Prefer email directly?{' '}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shoaiev126.wyb@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary-600"
                >
                  Open Gmail
                </a>
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
