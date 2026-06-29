import React, { useEffect, useRef, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01';

/**
 * Decrypt / scramble-in text effect. Each character settles from random
 * glyphs to its final value, left to right. Respects reduced-motion by
 * rendering the final text immediately. Triggers when scrolled into view.
 */
const DecryptText = ({ text, className = '', as = 'span', speed = 36 }) => {
  const Tag = as;
  const ref = useRef(null);
  const frame = useRef(0);
  const raf = useRef(null);
  const [display, setDisplay] = useState(text);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(text);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const run = () => {
      const total = text.length;
      const reveal = () => {
        const revealed = Math.floor(frame.current / 2);
        let out = '';
        for (let i = 0; i < total; i += 1) {
          const ch = text[i];
          if (ch === ' ') {
            out += ' ';
          } else if (i < revealed) {
            out += ch;
          } else {
            out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }
        setDisplay(out);
        frame.current += 1;
        if (revealed <= total) {
          raf.current = window.setTimeout(reveal, speed);
        } else {
          setDone(true);
        }
      };
      reveal();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      if (raf.current) clearTimeout(raf.current);
    };
  }, [text, speed]);

  return (
    <Tag ref={ref} className={`${className} ${done ? '' : 'font-mono'}`} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </Tag>
  );
};

export default DecryptText;
