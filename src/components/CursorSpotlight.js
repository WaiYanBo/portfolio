import React, { useEffect, useRef } from 'react';
export default function CursorSpotlight() {
  const ref = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)');
    let frame;
    const move = e => {
      if (preference.matches) { ref.current.style.opacity = '0'; return; }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.transform = `translate3d(${e.clientX - 260}px, ${e.clientY - 260}px, 0)`;
        ref.current.style.opacity = '1';
      });
    };
    const leave = () => { cancelAnimationFrame(frame); if (ref.current) ref.current.style.opacity = '0'; };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    preference.addEventListener('change', leave);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', leave); preference.removeEventListener('change', leave); };
  }, []);
  return <div ref={ref} className="spotlight" style={{ left: 0, top: 0, opacity: 0 }} aria-hidden="true" />;
}
