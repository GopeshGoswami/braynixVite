"use client";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

export const DeliveredProjects2 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState<[number, number]>([0, -100]);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const calculateScrollRange = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const scrollDistance = containerWidth - viewportWidth;

      const buffer = 20;

      const endRange = -((scrollDistance + buffer) / viewportWidth) * 100;

      setScrollRange([0, endRange]);
    };

    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);

    return () => window.removeEventListener("resize", calculateScrollRange);
  }, [cardsData.length]);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${scrollRange[0]}%`, `${scrollRange[1]}%`]
  );
  return (
    <section className="h-[200vh] relative" ref={targetRef}>
      <div className=" sticky flex flex-col top-32 gap-[52px] min-h-[50vh] overflow-hidden">
        <h2 className="text-3xl md:text-6xl text-center font-helvatica">
          From the Vault - Delivered Projects
        </h2>
        <motion.div ref={containerRef} style={{ x }} className="flex gap-4">
          {cardsData.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ data }: any) => {
  const cardVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        // This makes the animation propagate to children
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const knowMoreVariants = {
    initial: { scale: 1, opacity: 0 },
    hover: {
      scale: 1.03,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: 20,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.04,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`flex bg-[#111111] rounded-3xl max-w-xl max-h-96 overflow-hidden backdrop-blur-3xl min-w-[400px] md:min-w-[600px]`}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        animate="initial"
      >
        <motion.div
          className="flex flex-col px-5 md:px-10 gap-5 justify-center"
          variants={contentVariants}
        >
          <img
            src={data.logoSrc}
            height={60}
            width={50}
            alt={`${data.title} logo`}
          />
          <div className="space-y-3">
            <motion.p
              className="font-helvatica text-xl md:text-3xl"
              variants={textVariants}
            >
              {data.title}
            </motion.p>
            <div className="space-y-6">
              <motion.p
                className="font-helvatica text-sm md:text-lg"
                variants={textVariants}
              >
                {data.description}
              </motion.p>
              <motion.button
                className="border border-white py-3 px-5 rounded-[50px] text-sm"
                variants={knowMoreVariants}
              >
                <a
                  href={data.link}
                  className="flex items-center gap-2 justify-center"
                >
                  Know More
                  <img
                    src="/images/heroKnowMore.svg"
                    height={20}
                    width={20}
                    alt="Know More icon"
                  />
                </a>
              </motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div className="grid grid-cols-2" variants={imageVariants}>
          <div className="-translate-y-20 flex flex-col gap-5">
            <img
              src="/images/deliveredProjCard1.png"
              height={120}
              width={250}
              alt="Project card 1"
            />
            <img
              src="/images/deliveredProjCard2.png"
              height={120}
              width={250}
              alt="Project card 2"
            />
          </div>
          <div className="-translate-y-10 flex flex-col gap-5">
            <img
              src="/images/deliveredProjCard1.png"
              height={120}
              width={250}
              alt="Project card 3"
            />
            <img
              src="/images/deliveredProjCard2.png"
              height={120}
              width={250}
              alt="Project card 4"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
const cardsData = [
  {
    id: 1,
    logoSrc: "/images/pawzibleLogo.svg",
    title: "Pawzible",
    description:
      "Best Medical online service. Best Medical online service. Best Medical online service.",
    link: "/",
  },
  {
    id: 2,
    logoSrc: "/images/pawzibleLogo.svg",
    title: "CareerX",
    description:
      "Best Medical online service. Best Medical online service. Best Medical online service.",
    link: "/",
  },
  {
    id: 3,
    logoSrc: "/images/pawzibleLogo.svg",
    title: "VITMEDS",
    description:
      "Best Medical online service. Best Medical online service. Best Medical online service.",
    link: "/",
  },
  {
    id: 4,
    logoSrc: "/images/pawzibleLogo.svg",
    title: "Enhealth",
    description:
      "Best Medical online service. Best Medical online service. Best Medical online service.",
    link: "/",
  },
  {
    id: 5,
    logoSrc: "/images/pawzibleLogo.svg",
    title: "Legalscout",
    description:
      "Best Medical online service. Best Medical online service. Best Medical online service.",
    link: "/",
  },
];

const projectData = [
  {
    id: 0,
    title: "Pawzible",
    text: "We help you realize your business with application programs that suit your business.",
    img: "/images/aiService.png",
    logoSrc: "/images/pawzibleLogo.svg",
    link: "/service-details",
  },
  {
    id: 1,
    title: "Pawzible",
    text: "We help you realize your business with application programs that suit your business.",
    img: "/images/dataService.png",
    logoSrc: "/images/pawzibleLogo.svg",
    link: "/service-details",
  },
  {
    id: 2,
    title: "Pawzible",
    text: "We help you realize your business with application programs that suit your business.",
    img: "/images/llmService.png",
    logoSrc: "/images/pawzibleLogo.svg",
    link: "/service-details",
  },
  {
    id: 3,
    title: "Pawzible",
    text: "We help you realize your business with application programs that suit your business.",
    img: "/images/enterpriseSolutionService.png",
    logoSrc: "/images/pawzibleLogo.svg",
    link: "/service-details",
  },
  {
    id: 4,
    title: "Pawzible",
    text: "We help you realize your business with application programs that suit your business.",
    img: "/images/techConsultingService.png",
    logoSrc: "/images/pawzibleLogo.svg",
    link: "/service-details",
  },
];

const ProjectItem = ({ data }: { data: any }) => {
  return (
    <div className="flex items-center h-[70vh] snap-start">
      <div className="relative w-full h-full flex flex-col md:flex-row justify-between border-2 px-6 md:px-10 lg:px-20 py-6 md:py-10 rounded-xl bg-black">
        <div className="relative z-20 text-white h-full py-6 md:py-12 lg:py-16 flex flex-col justify-center md:items-start md:text-left items-center text-center">
          <img src={data.logoSrc} alt="" className="mb-5 size-20" />
          {/* <p className="text-lg md:text-xl">Step {data.id + 1}</p> */}
          <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl space-y-3 md:space-y-5">
            <h2 className="text-2xl md:text-4xl lg:text-5xl mt-2 font-helvatica">
              {data.title}
            </h2>
            <div className="space-y-3 md:space-y-6">
              <p className="text-sm md:text-lg max--[220px] md:max-w-lg font-helvatica">
                {data.text}
              </p>
              <div className="flex items-center justify-center md:justify-start">
                <a
                  href={data.link}
                  className="border font-helvatica md:font-britannica border-white bg-transparent hover:bg-transparent text-white hover:border-white flex items-center py-2 px-4 md:py-3 md:px-6 w-full max-w-[200px] justify-center rounded-full text-xs md:text-base"
                >
                  Know More
                  <img
                    src="/images/heroKnowMore.svg"
                    height={16}
                    width={16}
                    alt=""
                    className="ml-2 h-[16px] w-[16px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex justify-center items-center mt-6 md:mt-0">
          <img
            src="/images/projectDemo.webp"
            alt="Project Demo"
            className="h-auto w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export const DeliveredProjects = () => {
  const containerRef = useRef(null);
  const { size } = useWindowSize();
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardHeight = size.height * 0.6; // 60vh in pixels
  const gap = 72; // space-y-72 in pixels

  const cardTimeline = projectData.map((_, i) => {
    // Calculate start and end positions based on previous card position
    const start = i * (cardHeight + gap);
    const end = start + cardHeight;

    return [start, end];
  });

  const animations = cardTimeline.map((range) => ({
    y: useTransform(
      scrollY,
      [range[0] - cardHeight, range[0]],
      [cardHeight, 0]
    ),
    opacity: useTransform(scrollY, [range[0] - cardHeight, range[0]], [0, 1]),
    scale: useTransform(
      scrollY,
      [range[0], range[1], range[1] + cardHeight],
      [1, 1, 0.8]
    ),
  }));

  return (
    // <ReactLenis root>
    <div className="relative min-h-screen" ref={containerRef}>
      <h2 className="text-3xl md:text-6xl mb-[52px] text-center font-helvatica sticky top-10">
        From the Vault - Delivered Projects
      </h2>
      {projectData.map((data, index) => (
        <motion.div
          key={data.id}
          style={{
            y: animations[index].y,
            opacity: animations[index].opacity,
            scale: animations[index].scale,
          }}
          className="h-[60vh] sticky top-32"
        >
          <ProjectItem key={data.id} data={data} />
          {/* Add your ProjectItem component here */}
        </motion.div>
      ))}
    </div>
    // </ReactLenis>
  );
};
