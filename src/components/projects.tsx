import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { projects } from "@/lib/constants";
import { FaAward } from "react-icons/fa6";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";

interface Project {
  title: string;
  award?: string;
  tech: string;
  description: string;
  image: string;
  image2?: string;
  link: string;
  isAward?: boolean;
}

const ImageCarousel = ({ images }: { images: string[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return images.length > 1 ? (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="relative h-48">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt={`Project image ${index + 1}`}
          />
        </div>
      ))}
    </Slider>
  ) : (
    <div className="relative h-48">
      <Image
        src={images[0]}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
        alt="Project image"
      />
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <CardContainer className="w-full h-full shadow-md shadow-black/15 ">
    <CardBody
      className={`gap-4 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] dark:hover:shadow-blue-500/[0.1] rounded-xl p-6 border-4 flex flex-col h-full transition-all duration-300  
      ${
        project.isAward
          ? "shadow-lg border-indigo-300 bg-gradient-to-br from-white to-blue-50 dark:border-yellow-500 dark:from-yellow-900/30 dark:to-gray-900/80"
          : "shadow-md border-blue-200 bg-gradient-to-br from-white to-blue-50 dark:border-blue-800 dark:from-blue-900/30 dark:to-gray-900/80"
      }
      backdrop-blur-md bg-opacity-80 dark:bg-opacity-30`}
    >
      <CardItem
        translateZ="50"
        className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
      >
        {project.title}
      </CardItem>
      {project.award && (
        <CardItem
          as="div"
          translateZ="60"
          className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 text-sm font-semibold mb-4"
        >
          <FaAward className="w-5 h-5" />
          <span>{project.award}</span>
        </CardItem>
      )}
      <CardItem
        as="p"
        translateZ="60"
        className="text-gray-600 dark:text-gray-300 text-sm flex-grow"
      >
        {project.description}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-4 mb-6"
      >
        {project.tech}
      </CardItem>
      <CardItem translateZ="100" className="w-full mb-6">
        <ImageCarousel
          images={[project.image, project.image2].filter(Boolean) as string[]}
        />
      </CardItem>
      <div className="flex justify-between items-center mt-auto">
        <CardItem
          translateZ={20}
          as="a"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"
        >
          Ver projeto →
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
);

export function ProjectsSection() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="custom-dots">
        <ul className="flex justify-center mt-4"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="custom-dot w-3 h-3 mx-1 rounded-full bg-gray-600 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500"></div>
    ),
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] dark:bg-[url('/grid-dark.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto px-4 relative z-10"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Projetos
        </h2>
        <div className="relative px-8">
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <ProjectCard project={project} />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
}
