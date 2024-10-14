'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

const content = [
  {
    title: "Collaborative Coding",
    description:
      "Work seamlessly with other developers in real-time. Our platform provides tools for effective pair programming and code reviews.",
  },
  {
    title: "AI-Powered Assistance",
    description:
      "Get intelligent code suggestions and autocompletions as you type. Our AI understands context and provides relevant recommendations.",
  },
  {
    title: "Version Control Integration",
    description:
      "Easily manage your codebase with built-in version control. Commit, branch, and merge without leaving the editor.",
  },
  {
    title: "Customizable Workspace",
    description:
      "Tailor your development environment to your needs. Choose from a variety of themes, layouts, and extensions.",
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-8 text-white">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            src="/placeholder.svg"
            alt="Your Name"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="text-lg mb-4 text-gray-300">
              Hello! I'm [Your Name], a passionate web developer with a keen eye for design and a love for creating
              seamless user experiences. With [X] years of experience in the field, I specialize in building modern,
              responsive websites and applications using cutting-edge technologies.
            </p>
            <p className="text-lg mb-4 text-gray-300">
              My journey in web development began [brief background]. Since then, I've had the opportunity to work on a
              diverse range of projects, from small business websites to large-scale enterprise applications.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me [your hobbies or interests]. I believe in continuous learning and
              always strive to stay updated with the latest trends and best practices in web development.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="mt-16">
        <StickyScroll content={content} />
      </div>
    </div>
  )
}