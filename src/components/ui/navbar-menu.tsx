/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.li
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.li>
  );
};

const HoveredLink = ({ children, ...props }: any) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  const [open, setOpen] = useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        {...props}
        className={`relative px-4 py-2 text-white transition-colors hover ${
          isActive ? " " : ""
        }`}
      >
        {children}
        {/* Add the span here for hover effect */}
        <span
          style={{
            transform: "scaleX(0.5)",
          }}
          className={`absolute -bottom-0 -left-0 -right-0 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out`}
        />
      </Link>
    </div>
  );
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav>
      <motion.ul className="flex space-x-4">{children}</motion.ul>
    </nav>
  );
};

export { MenuItem, HoveredLink, Menu };
