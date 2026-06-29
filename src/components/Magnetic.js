import React, { useRef, useState } from 'react';

/**
 * Magnetic wrapper — the child eases toward the cursor while hovered, then
 * springs back on leave. Disabled on coarse (touch) pointers and for users
 * who prefer reduced motion. Renders an inline-block span so it can wrap
 * buttons, links, or icons without disturbing layout.
 */
const Magnetic = ({ children, strength = 0.35, className = '', ...rest }) => {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const allowed =
    typeof window !== 'undefined' &&
    !window.matchMedia('(pointer: coarse)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMove = (e) => {
    if (!allowed) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setT({ x, y });
  };

  const reset = () => setT({ x: 0, y: 0 });

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`magnetic inline-flex ${className}`}
      style={{ transform: `translate3d(${t.x}px, ${t.y}px, 0)` }}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Magnetic;
