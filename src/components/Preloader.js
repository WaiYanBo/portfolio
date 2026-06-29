import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const LINES = [
  'Initializing secure session',
  'Verifying credentials',
  'Loading risk profile',
  'Access granted',
];

/**
 * Brief, one-time-per-session boot sequence themed around a secure login.
 * Skipped entirely for reduced-motion users and on subsequent navigations.
 */
const Preloader = () => {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const seen =
    typeof window !== 'undefined' && sessionStorage.getItem('wyb_boot') === '1';

  const [active, setActive] = useState(!reduce && !seen);
  const [progress, setProgress] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    document.body.style.overflow = 'hidden';

    const lineTimer = setInterval(() => {
      setLine((l) => Math.min(LINES.length - 1, l + 1));
    }, 300);

    const progTimer = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.max(2, (100 - p) * 0.18)));
    }, 45);

    const done = setTimeout(() => {
      sessionStorage.setItem('wyb_boot', '1');
      setActive(false);
    }, 1400);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progTimer);
      clearTimeout(done);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-secondary-900 text-secondary-100"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-primary-600/15 blur-3xl" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center shadow-glow-primary"
          >
            <span className="absolute inset-0 rounded-2xl bg-primary-400/40 blur-lg animate-pulse" />
            <ShieldCheck size={30} className="relative text-white" />
          </motion.div>

          <p className="relative mt-6 font-mono text-xs uppercase tracking-[0.3em] text-primary-300">
            {LINES[line]}
            <span className="decrypt-caret" />
          </p>

          <div className="relative mt-5 h-1 w-56 overflow-hidden rounded-full bg-secondary-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600"
              style={{ width: `${progress}%`, transition: 'width 80ms linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
