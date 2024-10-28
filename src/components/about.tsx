   // src/components/about-section.tsx
   import { motion } from "framer-motion";
   import Image from "next/image";
   import { CardContainer, CardBody } from "@/components/ui/3d-card";
   import { FaHtml5, FaCss3Alt, FaJs, FaReact,  FaNodeJs, FaPhp, FaLaravel, FaDatabase, FaDocker, FaPython,  } from "react-icons/fa6";
   import { SiPrisma, SiDrizzle, SiFastify, SiSupabase, SiZod, SiClerk } from "react-icons/si";
import { IoLogoIonic } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

   export function AboutSection() {
     return (
       <section id="about" className="min-h-screen flex items-center justify-center py-20">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="max-w-3xl mx-auto text-center space-y-10"
         >
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="flex flex-col items-center">
               <Image
                 src="/m.jpg"
                 alt="Minha foto 👍🤩"
                 width={300}
                 height={300}
                 className="rounded-full border-blue-400 shadow-lg shadow-black/30 hover:shadow-black/60 border-2 hover:scale-110 hover:border-4 transition-all ease-in-out delay-25"
               />
               <CardContainer className="w-full">
                 <CardBody className="bg-indigo-200/50 border-blue-400 border-2 dark:bg-gray-800 p-6 rounded-xl shadow-md shadow-black/20 border-black/[0.1] dark:border-white/[0.1]">
                   <h3 className="text-xl font-bold text-neutral-600 dark:text-neutral-200 mb-4">
                     Minhas Habilidades Técnicas
                   </h3>
                   <div className="flex flex-wrap gap-4">
                     <div className="flex items-center"><FaHtml5 className="size-5" /><span className="ml-2">HTML</span></div>
                     <div className="flex items-center"><FaCss3Alt className="size-5" /><span className="ml-2">CSS</span></div>
                     <div className="flex items-center"><FaJs className="size-5" /><span className="ml-2">JavaScript</span></div>
                     <div className="flex items-center"><FaReact className="size-5" /><span className="ml-2">React</span></div>
                     <div className="flex items-center"><RiNextjsFill className="size-5" /><span className="ml-2">Next.js</span></div>
                     <div className="flex items-center"><FaNodeJs className="size-5" /><span className="ml-2">Node.js</span></div>
                     <div className="flex items-center"><FaPhp className="size-5" /><span className="ml-2">PHP</span></div>
                     <div className="flex items-center"><FaLaravel className="size-5" /><span className="ml-2">Laravel</span></div>
                     <div className="flex items-center"><FaDatabase className="size-5" /><span className="ml-2">MySQL</span></div>
                     <div className="flex items-center"><IoLogoIonic className="size-5" /><span className="ml-2">Ionic</span></div>
                     <div className="flex items-center"><IoLogoFirebase className="size-5" /><span className="ml-2">Firebase</span></div>
                   </div>
                   <h3 className="text-xl font-bold text-neutral-600 dark:text-neutral-200 mb-4">
                     Tecnologias que tive contato
                   </h3>
                   <div className="flex flex-wrap gap-4">
                     <div className="flex items-center"><FaDatabase className="size-5" /><span className="ml-2">PostgreSQL</span></div>
                     <div className="flex items-center"><FaPython className="size-5" /><span className="ml-2">Python</span></div>
                     <div className="flex items-center"><FaDocker className="size-5" /><span className="ml-2">Docker</span></div>
                     <div className="flex items-center"><SiPrisma className="size-5" /><span className="ml-2">Prisma</span></div>
                     <div className="flex items-center"><SiDrizzle className="size-5" /><span className="ml-2">Drizzle ORM</span></div>
                     <div className="flex items-center"><SiFastify className="size-5" /><span className="ml-2">Fastify</span></div>
                     <div className="flex items-center"><SiZod className="size-5" /><span className="ml-2">Zod</span></div>
                     <div className="flex items-center"><SiSupabase className="size-5" /><span className="ml-2">Supabase</span></div>
                     <div className="flex items-center"><SiClerk className="size-5" /><span className="ml-2">Clerk</span></div>
                   </div>
                 </CardBody>
               </CardContainer>
             </div>
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
         </motion.div>
       </section>
     );
   }