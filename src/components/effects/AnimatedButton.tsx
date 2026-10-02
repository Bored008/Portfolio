import React from 'react';
import { motion, type TargetAndTransition, type VariantLabels } from 'motion/react';

export interface AnimatedButtonProps {
  text?: string;
  href?: string;
  download?: boolean | string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  whileHover?: TargetAndTransition | VariantLabels;
  whileTap?: TargetAndTransition | VariantLabels;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  href,
  download,
  children,
  className,
  target,
  whileHover,
  whileTap
}) => {
  return (
    <motion.a
      href={href}
      download={download}
      target={target}
      className={`relative overflow-hidden group ${className || ''}`}
      whileHover={whileHover || "hover"}
      whileTap={whileTap}
      initial="rest"
    >
      <motion.span
        className="absolute inset-0 bg-white origin-right"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      />
      <span className="group-hover:text-black z-10 relative">{children || text}</span>
    </motion.a>
  );
};

export default AnimatedButton;
