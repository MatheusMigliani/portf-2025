'use client'

import { motion } from 'framer-motion'
import { HoverEffect } from "@/components/ui/card-hover-effect"

const blogPosts = [
  {
    title: 'Getting Started with Next.js',
    description: 'Learn how to build modern web applications with Next.js',
    link: '/blog/1',
  },
  {
    title: 'Mastering TailwindCSS',
    description: 'Discover the power of utility-first CSS with TailwindCSS',
    link: '/blog/2',
  },
  {
    title: 'The Future of Web Development',
    description: 'Exploring upcoming trends and technologies in web development',
    link: '/blog/3',
  },
  {
    title: 'Building Responsive Layouts',
    description: 'Tips and tricks for creating responsive web designs',
    link: '/blog/4',
  },
  {
    title: 'Optimizing React Performance',
    description: 'Strategies to improve the performance of your React applications',
    link: '/blog/5',
  },
  {
    title: 'Introduction to GraphQL',
    description: 'Understanding the basics of GraphQL and its advantages',
    link: '/blog/6',
  },
]

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Blog</h1>
      <HoverEffect items={blogPosts} />
    </motion.div>
  )
}