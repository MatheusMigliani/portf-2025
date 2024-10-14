'use client'

import React from "react"
import { motion } from "framer-motion"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M0 0L100 0L100 100L0 100L0 0Z",
    "M0 0L100 0L100 100L0 100L0 0Z",
    "M0 0L100 0L100 100L0 100L0 0Z",
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            fill="none"
            stroke="rgba(0, 255, 98, 0.1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2 + index, repeat: Infinity, repeatType: "loop" }}
          />
        ))}
      </svg>
    </div>
  )
}