import { Icon, icons } from "lucide-react";
import {
  FaAward,
  FaCss3,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaReact,
  FaRibbon,
} from "react-icons/fa6";

export const words = [
  { text: "Olá, " },
  { text: "Matheus " },
  { text: "Migliani, " },
  { text: "Full-stack ", className: "text-blue-500" },
  { text: "em " },
  { text: "web ", className: "text-blue-500" },
  { text: "e " },
  { text: "mobile.", className: "text-blue-500" },
];

export const blogPosts = [
  {
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js",
    link: "#blog-1",
  },
  // other blog posts...
];

export const projects = [
  {
    title: "NASA Space Apps Challenge (10/2024)",
    award: "Vencedor do Voto Popular no Rio de Janeiro",
    iconLists: [{ icon: FaAward, color: "fill-yellow-500" }],
    tech: "Three.js, React, Anime.js",
    description:
      "Desenvolvemos uma solução inovadora para visualização de dados espaciais.",
    image: "/nasaapp.png",
    image2: "", // Add this if you have a second image
    link: "#project-1",
    isAward: true,
  },
  {
    title: "Trackman ERP",
    tech: "Next.js, React, Node.js, Prisma, Stripe, Supabase, TailwindCSS",
    description:
      "ERP robusto desenvolvido com Next.js e Node.js, integrando Stripe para pagamentos e Supabase para gestão de dados em tempo real.",
    image: "/trackman-next-js.vercel.app_teams.png",
    image2: "/trackman-next-js.vercel.app_dashboard.png",
    link: "https://trackman-next-js.vercel.app/",
  },
  {
    title: "Trackman ERP",
    tech: "Next.js, React, Node.js, Prisma, Stripe, Supabase, TailwindCSS",
    description:
      "ERP robusto desenvolvido com Next.js e Node.js, integrando Stripe para pagamentos e Supabase para gestão de dados em tempo real.",
    image: "/trackman-next-js.vercel.app_teams.png",
    image2: "/trackman-next-js.vercel.app_dashboard.png",
    link: "https://trackman-next-js.vercel.app/",
  },
];
