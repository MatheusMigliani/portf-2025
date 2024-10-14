/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  FaArrowDown,
  FaArrowUp,
  FaCheck,
  FaClipboardCheck,
  FaClipboardUser,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaDocker,
  FaPython,
} from "react-icons/fa6";
import { SiClerk, SiDrizzle, SiFastify, SiPrisma, SiSupabase, SiZod } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoIonic } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";
import { Input } from "@/components/ui/input";
import { CheckCheckIcon, CheckCircle2, ClipboardType } from "lucide-react";

const words = [
  { text: "Olá, " },
  { text: "sou " },
  { text: "Matheus " },
  { text: "Migliani, " },
  { text: "desenvolvedor " },
  { text: "Full-stack ", className: "text-blue-500 dark:text-blue-400" },
  { text: "focado " },
  { text: "em " },
  { text: "soluções " },
  { text: "para " },
  { text: "web ", className: "text-blue-500 dark:text-blue-400" },
  { text: "e " },
  { text: "mobile.", className: "text-blue-500 dark:text-blue-400" },
];

const blogPosts = [
  {
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js",
    link: "#blog-1",
  },
  {
    title: "Mastering TailwindCSS",
    description: "Discover the power of utility-first CSS with TailwindCSS",
    link: "#blog-2",
  },
  {
    title: "The Future of Web Development",
    description:
      "Exploring upcoming trends and technologies in web development",
    link: "#blog-3",
  },
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe",
    image: "/placeholder.svg",
    link: "#project-1",
  },
  {
    title: "Task Management App",
    description: "A productivity tool for teams using React and Firebase",
    image: "/placeholder.svg",
    link: "#project-2",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information using OpenWeatherMap API",
    image: "/placeholder.svg",
    link: "#project-3",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const projectsRef = useRef(null);

  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  const [inputValue, setInputValue] = useState("matheusmigliani@yahoo.com.br");

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 0.5, 0.5, 0]
  );

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = [homeRef, aboutRef, blogRef, projectsRef];
    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () =>
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <section
          id="home"
          ref={homeRef}
          className="min-h-screen flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ opacity }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl text-slate-800 dark:text-white font-bold mb-4">
              Bem-vindo ao meu Portfólio 😎
            </h1>
            <div className="mb-8 ">
              <TypewriterEffect
                className="text-xl text-center items-center justify-center"
                words={words}
              />
              <div className="py-2 flex row items-center justify-center gap-2">
                <FaLinkedin
                  href="https://www.linkedin.com/in/matheus-migliani/"
                  className="size-10 transition-transform delay-150 duration-300 ease-in hover:scale-125 cursor-pointer"
                />
                <FaGithub
                  href="https://github.com/MatheusMigliani"
                  className="size-10 transition-transform delay-150 duration-300 ease-in hover:scale-125 cursor-pointer"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <a href="https://www.linkedin.com/in/matheus-migliani/overlay/1727886467546/single-media-viewer/?profileId=ACoAADQ8ONYBmR3YMlZNV36BZAfciYz-jeE2H70">
                  <button className="flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-10 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear gap-2">
                    {" "}
                    Meu Currículo
                    <FaClipboardUser
                      href=""
                      className="size-5 transition-transform delay-150 duration-300 ease-in hover:scale-125"
                    />
                  </button>
                </a>
                <button
                  onMouseLeave={() => setCopied(false)}
                  onClick={() => {
                    copy(inputValue);
                    setCopied(true);
                  }}
                  className="flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-10 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-in-out gap-2 "
                >
                  {copied ? (
                    <>
                      {/* {{ edit_1 }} */}
                      Email copiado com sucesso!
                      <CheckCheckIcon className="h-5 w-5 text-white mr-2 transition-all ease-in" />{" "}
                    </>
                  ) : (
                    <>
                      {/* {{ edit_2 }} */}
                      Email para contato
                      <FaCheck className="h-5 w-5 text-white mr-2 transition-all  ease-out" />{" "}
                    </>
                  )}
                </button>
                <Input
                  value={inputValue}
                  type="email"
                  disabled
                  placeholder="Enter to copy"
                  className="border border-black shadow-lg shadow-slate-500/10 text-blue-400  dark:border-white  dark:text-blue-400  items-center justify-center text-center w-72 h-fit ring-4   disabled:bg-slate-800 "
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
              </div>

              <TextGenerateEffect
                words="Sou um desenvolvedor apaixonado criando experiências web incríveis"
                className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8"
              />
              <div className="flex flex-col items-center justify-center text-cen space-y-6">
                <TextGenerateEffect
                  words="Deslize para baixo e descubra mais sobre mim!"
                  className=" text-md md:text-xl text-slate-600 dark:text-gray-300 mb-4"
                />
                <FaArrowDown
                  className={`size-16  ${
                    scrolling
                      ? "animate-bounce transition-all ease-in-out "
                      : ""
                  }`}
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="about"
          ref={aboutRef}
          className="min-h-screen flex items-center justify-center py-20 "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Coluna da esquerda: Card e Foto */}
              <div className="flex flex-col items-center">
                <Image
                  src="/m.jpg"
                  alt="Minha foto 👍🤩"
                  width={300}
                  height={300}
                  className="rounded-full border-blue-400 shadow-lg shadow-black/30 hover:shadow-black/60  border-2 hover:scale-110 hover:border-4 transition-all ease-in-out delay-25"
                />
                {/* Card com a Tech Stack */}
                <CardContainer className="w-full">
                  <CardBody className="bg-indigo-200/50 border-blue-400 border-2 dark:bg-gray-800 p-6 rounded-xl shadow-md shadow-black/20  border-black/[0.1] dark:border-white/[0.1]">
                    <h3 className="text-xl font-bold text-neutral-600 dark:text-neutral-200 mb-4">
                      Minhas Habilidades Técnicas
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <FaHtml5 className="size-5" />
                        <span className="ml-2">HTML</span>
                      </div>
                      <div className="flex items-center">
                        <FaCss3Alt className="size-5" />
                        <span className="ml-2">CSS</span>
                      </div>
                      <div className="flex items-center">
                        <FaJs className="size-5" />
                        <span className="ml-2">JavaScript</span>
                      </div>
                      <div className="flex items-center">
                        <FaReact className="size-5" />
                        <span className="ml-2">React</span>
                      </div>
                      <div className="flex items-center">
                        <RiNextjsFill className="size-5" />
                        <span className="ml-2">Next.js</span>
                      </div>
                      <div className="flex items-center">
                        <FaNodeJs className="size-5" />
                        <span className="ml-2">Node.js</span>
                      </div>
                      <div className="flex items-center">
                        <FaPhp className="size-5" />
                        <span className="ml-2">PHP</span>
                      </div>
                      <div className="flex items-center">
                        <FaLaravel className="size-5" />
                        <span className="ml-2">Laravel</span>
                      </div>
                      <div className="flex items-center">
                        <FaDatabase className="size-5" />
                        <span className="ml-2">MySQL</span>
                      </div>
                      <div className="flex items-center">
                        <IoLogoIonic className="size-5" />
                        <span className="ml-2">Ionic</span>
                      </div>
                      <div className="flex items-center">
                        <IoLogoFirebase className="size-5" />
                        <span className="ml-2">Firebase</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-600 dark:text-neutral-200 mb-4">
                      Tecnologias que tive contato
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <FaDatabase className="size-5" />
                        <span className="ml-2">PostgreSQL</span>
                      </div>
                      <div className="flex items-center">
                        <FaPython className="size-5" />
                        <span className="ml-2">Python</span>
                      </div>
                      <div className="flex items-center">
                        <FaDocker className="size-5" />
                        <span className="ml-2">Docker</span>
                      </div>
                      <div className="flex items-center">
                        <SiPrisma className="size-5" />
                        <span className="ml-2">Prisma</span>
                      </div>
                      <div className="flex items-center">
                        <SiDrizzle className="size-5" />
                        <span className="ml-2">Drizzle ORM</span>
                      </div>
                      <div className="flex items-center">
                        <SiFastify className="size-5" />
                        <span className="ml-2">Fastify</span>
                      </div>
                      <div className="flex items-center">
                        <SiZod className="size-5" />
                        <span className="ml-2">Zod</span>
                      </div>
                      <div className="flex items-center">
                        <SiSupabase className="size-5" />
                        <span className="ml-2">Supabase</span>
                      </div>
                      <div className="flex items-center">
                        <SiClerk   className="size-5" />
                        <span className="ml-2">Clerk</span>
                      </div>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>

              {/* Coluna da direita: Textos */}
              <div className="text-left">
                <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
                <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                  Olá! Eu sou Matheus Migliani, um desenvolvedor Full-Stack com
                  experiência em APIs RESTful e um forte foco em design. Com um
                  ano e meio de experiência na área, especializo-me em construir
                  aplicações modernas e responsivas utilizando tecnologias como
                  HTML, CSS, JavaScript, React, Next.js e Node.js.
                </p>
                <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
                  Minha jornada no desenvolvimento web começou com a análise e
                  desenvolvimento de sistemas, e desde então, tive a
                  oportunidade de trabalhar em projetos variados, incluindo
                  aplicações web utilizando PHP, Laravel e MySQL, além de um
                  aplicativo mobile com Ionic e Firebase.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Quando não estou programando, você pode me encontrar
                  explorando novas tecnologias ou aprimorando minhas habilidades
                  em design. Acredito na aprendizagem contínua e sempre busco me
                  manter atualizado com as últimas tendências e melhores
                  práticas em desenvolvimento web.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-30 gap-4 ">
              <FaArrowDown
                className={`size-16  ${
                  scrolling ? "animate-bounce transition-all ease-in-out " : ""
                }`}
              />
            </div>
          </motion.div>
        </section>

        <section
          id="blog"
          ref={blogRef}
          className="min-h-screen flex items-center justify-center py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
            <HoverEffect items={blogPosts} />
          </motion.div>
        </section>

        <section
          id="projects"
          ref={projectsRef}
          className="min-h-screen flex items-center justify-center py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <CardContainer key={index} className="inter-var">
                  <CardBody className="bg-gray-50 dark:bg-gray-800 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] dark:hover:shadow-blue-500/[0.1] border-black/[0.1] dark:border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-neutral-200"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 dark:text-neutral-400 text-sm max-w-sm mt-2"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={project.title}
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.link}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-blue-500 dark:text-blue-400"
                      >
                        Tente agora →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-900 text-xs font-bold"
                      >
                        Inscreva-se
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
