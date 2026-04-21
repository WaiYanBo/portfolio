import React, { useEffect, useState } from 'react';

const CursorSpotlight = () => {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (coarse) return undefined;
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      className="spotlight"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  );
};

export default CursorSpotlight;
