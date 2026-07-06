import React from 'react'
import { motion } from 'motion/react'

const AnimatedButton = ({text,href,download,children,className,target,whileHover,whileTap}) => {
  return (
    <motion.a href={href} download={download} target={target} className={`relative overflow-hidden group ${className || ''}`}
    whileHover="hover"
    initial="rest"
    >
    <motion.span className='absolute inset-0 bg-white origin-right'
    variants={{rest:{scaleX:0},hover:{scaleX:1}}}
    transition={{duration:0.35, ease:"easeInOut"}}
    />
        <span className='group-hover:text-black z-10 relative'>{children || text}</span>
    </motion.a>
  )
}

export default AnimatedButton