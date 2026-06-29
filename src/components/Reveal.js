import React from 'react';
import { motion } from 'framer-motion';

/**
 * Scroll-triggered reveal with directional + spring options.
 * Wraps children in a single motion element that animates once on enter.
 *
 *  <Reveal>                       // fade + rise
 *  <Reveal direction="left">      // slide from left
 *  <Reveal delay={0.1} as="li">   // staggered list item
 */
const offsets = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
  none: { x: 0, y: 0 },
};

const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  amount = 0.25,
  once = true,
  as = 'div',
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;
  const off = offsets[direction] || offsets.up;

  return (
    <MotionTag
      initial={{ opacity: 0, ...off }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

/**
 * Container that staggers the reveal of its direct <Reveal>-style children.
 * Use with StaggerItem for choreographed list/grid entrances.
 */
export const Stagger = ({ children, className = '', gap = 0.08, amount = 0.2 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: gap } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '', direction = 'up', ...rest }) => {
  const off = offsets[direction] || offsets.up;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...off },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
