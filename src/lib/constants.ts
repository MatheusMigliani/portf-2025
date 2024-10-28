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
    link: "https://matheusmigliani-nasa-spaceapps.vercel.app/",
    isAward: true,
  },
  {
    title: "Trackman ERP",
    tech: "Next.js, React, Node.js, Prisma, Stripe, Supabase, TailwindCSS,Clerk (Atualmente em desenvolvimento, apenas front-end disponível no momento)",
    description:
      "ERP robusto desenvolvido com Next.js e Node.js, integrando Stripe para pagamentos e Supabase para gestão de dados em tempo real.",
    image: "/trackman-next-js.vercel.app_teams.png",
    image2: "/trackman-next-js.vercel.app_dashboard.png",
    link: "https://trackman-next-js.vercel.app/",
  },
  {
    title: "Tá Barato? - Mobile Full-Stack App",
    tech: "Ionic, ReactJS, Firebase, IsThereAnyDeal API",
    description:
      "Aplicativo mobile desenvolvido com Ionic e ReactJS, utilizando a API IsThereAnyDeal para encontrar os menores preços de jogos. Integração com Firebase para autenticação em tempo real e banco de dados.",
    image: "/tabarato.png",
    image2: "/tbhome.png",
    link: "https://example.com/ta-barato",
  },
  {
    title: "Telecall - Sistema Web Full-Stack",
    tech: "PHP, Laravel, ViaCep API, SweetAlert",
    description:
      "Um dos meus primeiros projetos, um sistema web full-stack desenvolvido com PHP e Laravel, incluindo operações CRUD, autenticação, recuperação de senha e painel de controle com troca de senha. Integrado com APIs externas para otimizar usabilidade e segurança.",
    image: "/projeto-tc.vercel.app_.png",
    image2: "/projeto-tc.vercel.app_login.html.png",
    link: "https://github.com/MatheusMigliani/telecall-laravel",
  },
];
