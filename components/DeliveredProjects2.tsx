"use client";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DeliveredProjects2 = () => {
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
        <h2 className="text-3xl md:text-6xl text-center font-dm-sans">
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

export default DeliveredProjects2;

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
              className="font-dm-sans text-xl md:text-3xl"
              variants={textVariants}
            >
              {data.title}
            </motion.p>
            <div className="space-y-6">
              <motion.p
                className="font-dm-sans text-sm md:text-lg"
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
