"use client";

import { motion } from "framer-motion";
import { ThreeDCardDemo } from "@/components/ui/3d-card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity tool for teams using React and Firebase",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information using OpenWeatherMap API",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio site built with Gatsby and GraphQL",
    image: "/placeholder.svg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Projects
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <ThreeDCardDemo {...project} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
