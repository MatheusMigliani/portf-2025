import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  FaLinkedin,
  FaGithub,
  FaArrowDown,
  FaCheck,
  FaFilePdf,
} from "react-icons/fa6";
import { useCopyToClipboard } from "usehooks-ts";
import { Input } from "@/components/ui/input";
import { CheckCheckIcon } from "lucide-react";
import Image from "next/image";

const words = [
  { text: "Olá,sou " },
  { text: "Matheus " },
  { text: "Migliani, " },
  { text: "Desenvolvedor " },
  { text: "Full-stack ", className: "text-blue-500 dark:text-blue-400" },
  { text: "focado " },
  { text: "em " },
  { text: "soluções " },
  { text: "para " },
  { text: "web ", className: "text-blue-500 dark:text-blue-400" },
  { text: "e " },
  { text: "mobile.", className: "text-blue-500 dark:text-blue-400" },
];

export function HomeSection() {
  const homeRef = useRef(null);
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  const [inputValue] = useState("matheusmigliani@yahoo.com.br");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 0.5, 0.5, 0]
  );
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
        <div className="mb-8">
          <TypewriterEffect
            className="text-xl text-center items-center justify-center"
            words={words}
          />
          <div className="py-2 flex row items-center justify-center gap-2">
            <a
              href="https://www.linkedin.com/in/matheus-migliani/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="size-10 transition-transform delay-150 duration-300 ease-in hover:scale-125 cursor-pointer" />
            </a>

            <a
              href="https://github.com/MatheusMigliani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="size-10 transition-transform delay-150 duration-300 ease-in hover:scale-125 cursor-pointer" />
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a
              href="https://www.linkedin.com/in/matheus-migliani/overlay/1729890857069/single-media-viewer/?profileId=ACoAADQ8ONYBmR3YMlZNV36BZAfciYz-jeE2H70"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn CV"
              className="flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-4 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-in-out gap-2"
            >
              <FaFilePdf className="h-5 w-5 text-white mr-2 transition-all ease-in" />
              Ver CV no LinkedIn
            </a>
            <button
              onMouseLeave={() => setCopied(false)}
              onClick={() => {
                copy(inputValue);
                setCopied(true);
              }}
              className="flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-10 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-in-out gap-2"
            >
              {copied ? (
                <>
                  Email copiado com sucesso!
                  <CheckCheckIcon className="h-5 w-5 text-white mr-2 transition-all ease-in" />
                </>
              ) : (
                <>
                  Email para contato
                  <FaCheck className="h-5 w-5 text-white mr-2 transition-all ease-out" />
                </>
              )}
            </button>
            <Input
              value={inputValue}
              type="email"
              readOnly
              aria-label="Email de contato"
              className="border border-black shadow-lg shadow-slate-500/10 text-blue-400 dark:border-white dark:text-blue-400 items-center justify-center text-center w-72 h-fit ring-4 bg-transparent"
            />
          </div>
          <TextGenerateEffect
            words="Sou um desenvolvedor apaixonado criando experiências web incríveis"
            className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8"
          />
          <div className="flex flex-col items-center justify-center text-cen space-y-6">
            <TextGenerateEffect
              words="Deslize para baixo e descubra mais sobre mim!"
              className="text-md md:text-xl text-slate-600 dark:text-gray-300 mb-4"
            />
            <FaArrowDown
              className={`size-16 ${
                scrolling ? "animate-bounce transition-all ease-in-out" : ""
              }`}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
