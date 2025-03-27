"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface AnimatedSVGProps {
  path: string;
  viewBox: string;
}

interface JourneyStepProps {
  number: string;
  title: string;
  description: string;
  svgPath: string;
  viewBox: string;
  isReversed: boolean;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ path, viewBox }) => {
  const svgRef = useRef(null);
  const isInView = useInView(svgRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ["end end", "end start"],
  });

  const pathLength = useTransform(
    scrollYProgress,
    [0, 1],
    isInView ? [0, 1] : [0, 0]
  );

  return (
    <div ref={svgRef} className="my-10" aria-hidden="true">
      <motion.svg
        viewBox={viewBox}
        fill="none"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.path
          d={path}
          stroke="url(#paint0_linear)"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{ pathLength }}
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="4"
            y1="4"
            x2="968"
            y2="299.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0085FF" />
            <stop offset="1" stopColor="#0085FF" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

const JourneyStep: React.FC<JourneyStepProps> = ({
  number,
  title,
  description,
  svgPath,
  viewBox,
  isReversed,
}) => (
  <>
    <div
      className={`${
        isReversed ? "text-right flex flex-col items-end" : ""
      } space-y-5 md:space-y-0`}
    >
      <p
        className="font-britanicaBlack text-6xl md:text-[100px] md:leading-[120px]"
        aria-hidden="true"
      >
        {number}
      </p>
      <h2 className="font-britanicaBlack text-3xl md:text-[64px] md:leading-[76px]">
        {title}
      </h2>
      <p className="font-britannica text-xl md:text-3xl max-w-[990px]">
        {description}
      </p>
    </div>
    {number !== "5" && <AnimatedSVG path={svgPath} viewBox={viewBox} />}
  </>
);

export function CustomerJourney() {
  const journeySteps = [
    {
      number: "1",
      title: "Customer requirements",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aenean vulputate justo aliquam donec vivamus a. Viverra in magna nulla nisl ut euismod arcu vulputate donec. Tincidunt est pretium quis est iaculis in aliquam velit in. Felis accumsan lacus ac ac pellentesque nunc purus.",
      svgPath:
        "M4 4C33.7045 150.647 -93.5918 492.666 292.773 251.034C679.137 9.403 897.725 85.8454 957 296.982",
      viewBox: "0 0 961 339",
      isReversed: false,
    },
    {
      number: "2",
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aenean vulputate justo aliquam donec vivamus a. Viverra in magna nulla nisl ut euismod arcu vulputate donec. Tincidunt est pretium quis est iaculis in aliquam velit in. Felis accumsan lacus ac ac pellentesque nunc purus.",
      svgPath:
        "M957 4C927.296 150.647 821 281.5 668.227 251.034C515.455 220.569 63.2752 85.8454 4 296.982",
      viewBox: "0 0 961 301",
      isReversed: true,
    },
    {
      number: "3",
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aenean vulputate justo aliquam donec vivamus a. Viverra in magna nulla nisl ut euismod arcu vulputate donec. Tincidunt est pretium quis est iaculis in aliquam velit in. Felis accumsan lacus ac ac pellentesque nunc purus.",
      svgPath:
        "M4 4C33.7045 150.647 -93.5918 492.666 292.773 251.034C679.137 9.403 897.725 85.8454 957 296.982",
      viewBox: "0 0 961 339",
      isReversed: false,
    },
    {
      number: "4",
      title: "Testing",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aenean vulputate justo aliquam donec vivamus a. Viverra in magna nulla nisl ut euismod arcu vulputate donec. Tincidunt est pretium quis est iaculis in aliquam velit in. Felis accumsan lacus ac ac pellentesque nunc purus.",
      svgPath:
        "M957 4C927.296 150.647 821 281.5 668.227 251.034C515.455 220.569 63.2752 85.8454 4 296.982",
      viewBox: "0 0 961 301",
      isReversed: true,
    },
    {
      number: "5",
      title: "Launch",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aenean vulputate justo aliquam donec vivamus a. Viverra in magna nulla nisl ut euismod arcu vulputate donec. Tincidunt est pretium quis est iaculis in aliquam velit in. Felis accumsan lacus ac ac pellentesque nunc purus.",
      svgPath: "",
      viewBox: "",
      isReversed: false,
    },
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto space-y-10">
        {journeySteps.map((step, index) => (
          <JourneyStep key={index} {...step} />
        ))}
      </section>
    </div>
  );
}

export function CustomerJourney2() {
  // Create separate refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  // Track scroll progress for each section individually
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: section1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: section3Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: section4Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: section5Ref,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to control the drawing of each line
  const pathLength1 = useTransform(scrollYProgress1, [0, 0.5], [0, 1]);
  const pathLength2 = useTransform(scrollYProgress2, [0, 0.5], [0, 1]);
  const pathLength3 = useTransform(scrollYProgress3, [0, 0.5], [0, 1]);
  const pathLength4 = useTransform(scrollYProgress4, [0, 0.5], [0, 1]);
  const pathLength5 = useTransform(scrollYProgress5, [0, 0.5], [0, 1]);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Section 1 */}
      <p className="max-w-2xl mx-auto text-center text-3xl md:text-4xl lg:text-5xl font-manrope">
        What Is The Process Working With An AI Agency?
      </p>

      <div
        ref={section1Ref}
        className="grid grid-cols-1 md:grid-cols-2 mt-32 md:mt-32 gap-10"
      >
        {/* left */}
        <div className="col-span-1 space-y-3 md:space-y-5 order-1">
          <div className="relative">
            {/* SVG with animated path - Same for all screen sizes */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130 268"
              width="130"
              height="268"
              preserveAspectRatio="xMidYMid meet"
              className="absolute -bottom-5 -left-10 hidden md:block"
            >
              <defs>
                <linearGradient
                  id="lineGradient1"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="-162.739"
                  y1="-255.733"
                  x2="-151.310"
                  y2="33.228"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="50%"
                    stopColor="rgb(94,132,205)"
                    stopOpacity="0.5"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="rgb(79,185,217)"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <motion.path
                d="M-169,-334 C-169,-282 -168,-98 -168,-62"
                transform="matrix(1,0,0,1,233.5,260)"
                stroke="url(#lineGradient1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                strokeOpacity="0.4"
                strokeWidth="128"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength1 }}
              />
            </motion.svg>

            {/* Mobile SVG */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130 268"
              width="100"
              height="268"
              preserveAspectRatio="xMidYMid meet"
              className="absolute -bottom-10 -left-8 block md:hidden"
            >
              <defs>
                <linearGradient
                  id="lineGradientMobile1"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="-162.739"
                  y1="-255.733"
                  x2="-151.310"
                  y2="33.228"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="50%"
                    stopColor="rgb(94,132,205)"
                    stopOpacity="0.5"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="rgb(79,185,217)"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <motion.path
                d="M-169,-334 C-169,-282 -168,-98 -168,-62"
                transform="matrix(1,0,0,1,233.5,260)"
                stroke="url(#lineGradientMobile1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                strokeOpacity="0.4"
                strokeWidth="128"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength1 }}
              />
            </motion.svg>

            <h3 className="font-manrope  text-5xl md:text-6xl lg:text-8xl">
              1
            </h3>
          </div>
          <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl">
            Get A Ballpark
          </h2>

          <p className="font-manrope text-base md:text-lg">
            Meet with the founders, your product manager, and the AI engineers
            BEFORE the engagement begins. Our goal is to focus on how to get
            your decision makers to the magic moment with AI.
          </p>
        </div>

        {/* right */}
        <div className="col-span-1 order-2 flex justify-center">
          <img src="/svg/customer1.svg" alt="" className="w-full max-w-md" />
        </div>
      </div>

      {/* Section 2 */}
      <div
        ref={section2Ref}
        className="grid grid-cols-1 md:grid-cols-2 mt-32 md:mt-72 lg:mt-96 gap-10"
      >
        {/* left */}
        <div className="col-span-1 order-2 md:order-1 flex justify-center">
          <img src="/svg/customer1.svg" alt="" className="w-full max-w-md" />
        </div>

        {/* right */}
        <div className="col-span-1 space-y-3 md:space-y-5 order-1 md:order-2">
          <div className="relative">
            {/* Desktop SVG */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 464 520"
              width="464"
              height="520"
              preserveAspectRatio="xMidYMid meet"
              className="absolute -bottom-5 -left-10 md:-left-[10rem] lg:-left-[23rem] hidden md:block"
            >
              <defs>
                <linearGradient
                  id="lineGradient2"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="6.964"
                  y1="-260.858"
                  x2="3.264"
                  y2="257.935"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="50%"
                    stopColor="rgb(94,132,205)"
                    stopOpacity="0.5"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="rgb(79,185,217)"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <motion.path
                d="M-169,-334 C-169,-264 -169,-216 -169,-192 C-169,-168 -162,-80 -61.5,-53 C4.365,-35.305 52.612,-55.25 123.381,3.058 C175.5,46 159.5,133.5 160.5,191"
                transform="matrix(1,0,0,1,232,260)"
                stroke="url(#lineGradient2)"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                strokeOpacity="0.4"
                strokeWidth="130"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength2 }}
              />
            </motion.svg>

            {/* Mobile SVG */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130 268"
              width="100"
              height="268"
              preserveAspectRatio="xMidYMid meet"
              className="absolute -bottom-10 -left-8 block md:hidden"
            >
              <defs>
                <linearGradient
                  id="lineGradientMobile1"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="-162.739"
                  y1="-255.733"
                  x2="-151.310"
                  y2="33.228"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="50%"
                    stopColor="rgb(94,132,205)"
                    stopOpacity="0.5"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="rgb(79,185,217)"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <motion.path
                d="M-169,-334 C-169,-282 -168,-98 -168,-62"
                transform="matrix(1,0,0,1,233.5,260)"
                stroke="url(#lineGradientMobile1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                strokeOpacity="0.4"
                strokeWidth="128"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength2 }}
              />
            </motion.svg>

            <h3 className="font-manrope  text-5xl md:text-6xl lg:text-8xl">
              2
            </h3>
          </div>
          <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl">
            Get A Ballpark
          </h2>

          <p className="font-manrope text-base md:text-lg">
            Meet with the founders, your product manager, and the AI engineers
            BEFORE the engagement begins. Our goal is to focus on how to get
            your decision makers to the magic moment with AI.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div
        ref={section3Ref}
        className="grid grid-cols-1 md:grid-cols-2 mt-32 md:mt-60 lg:mt-72 gap-10"
      >
        {/* left */}
        <div className="col-span-1 space-y-3 md:space-y-5 order-1">
          <div className="relative">
            {/* Desktop SVG */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 688 392"
              width="688"
              height="392"
              preserveAspectRatio="xMidYMid meet"
              className="absolute -bottom-5 -left-10 md:-left-16 min-w-3xl hidden md:block"
            >
              <defs>
                <linearGradient
                  id="lineGradient3"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="-162.739"
                  y1="-255.733"
                  x2="-151.310"
                  y2="33.228"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="25%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0.25"
                  ></stop>
                  <stop
                    offset="50%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0.5"
                  ></stop>
                  <stop
                    offset="75%"
                    stopColor="rgb(94,132,205)"
                    stopOpacity="0.75"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="rgb(79,185,217)"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <motion.path
                d="M-169,-334 C-169,-282 -167.501,-264 -167.501,-228 C-167.501,-192 -197.5,-108 -336.5,-108 C-475.5,-108 -600.5,-109 -600.5,-109 C-600.5,-109 -727.5,-129 -727.5,37 C-727.5,43 -727.5,67 -727.5,67"
                transform="matrix(1,0,0,1,791.5,260)"
                stroke="url(#lineGradient3)"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                strokeOpacity="0.4"
                strokeWidth="128"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength3 }}
              />
            </motion.svg>

            {/* Mobile SVG */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130 268"
              width="100"
              height="268"
              preserveAspectRatio="xMidYMid meet"
              className="absolute -bottom-10 -left-8 block md:hidden"
            >
              <defs>
                <linearGradient
                  id="lineGradientMobile1"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="-162.739"
                  y1="-255.733"
                  x2="-151.310"
                  y2="33.228"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="50%"
                    stopColor="rgb(94,132,205)"
                    stopOpacity="0.5"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="rgb(79,185,217)"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <motion.path
                d="M-169,-334 C-169,-282 -168,-98 -168,-62"
                transform="matrix(1,0,0,1,233.5,260)"
                stroke="url(#lineGradientMobile1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                strokeOpacity="0.4"
                strokeWidth="128"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength3 }}
              />
            </motion.svg>

            <h3 className="font-manrope  text-5xl md:text-6xl lg:text-8xl">
              3
            </h3>
          </div>
          <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl">
            Get A Ballpark
          </h2>

          <p className="font-manrope text-base md:text-lg">
            Meet with the founders, your product manager, and the AI engineers
            BEFORE the engagement begins. Our goal is to focus on how to get
            your decision makers to the magic moment with AI.
          </p>
        </div>

        {/* right */}
        <div className="col-span-1 order-2 flex justify-center">
          <img src="/svg/customer1.svg" alt="" className="w-full max-w-md" />
        </div>
      </div>

      {/* Section 4 */}
      <div
        ref={section4Ref}
        className="grid grid-cols-1 md:grid-cols-2 mt-32 md:mt-60 lg:mt-72 gap-10"
      >
        {/* left */}
        <div className="col-span-1 order-2 md:order-1 flex justify-center">
          <img src="/svg/customer1.svg" alt="" className="w-full max-w-md" />
        </div>

        {/* right */}
        <div className="col-span-1 space-y-3 md:space-y-5 order-1 md:order-2">
          <div className="relative">
            {/* Desktop SVG */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 464 520"
              width="464"
              height="520"
              preserveAspectRatio="xMidYMid meet"
              className="absolute -bottom-5 -left-10 md:left-auto md:right-16 lg:right-68 min-w-3xl hidden md:block"
            >
              <defs>
                <linearGradient
                  id="lineGradient4"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="6.964"
                  y1="-260.858"
                  x2="3.264"
                  y2="257.935"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0"
                  />
                  <stop
                    offset="50%"
                    stopColor="rgb(94,132,205)"
                    stopOpacity="0.5"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(79,185,217)"
                    stopOpacity="1"
                  />
                </linearGradient>
              </defs>
              <motion.path
                d="M-169,-334 C-169,-264 -169,-216 -169,-192 C-169,-168 -162,-80 -61.5,-53 C4.365,-35.305 52.612,-55.25 123.381,3.058 C175.5,46 159.5,133.5 160.5,191"
                transform="matrix(1,0,0,1,232,260)"
                stroke="url(#lineGradient4)"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                strokeOpacity="0.4"
                strokeWidth="130"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength4 }}
              />
            </motion.svg>

            {/* Mobile SVG */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130 268"
              width="100"
              height="268"
              preserveAspectRatio="xMidYMid meet"
              className="absolute -bottom-10 -left-8 block md:hidden"
            >
              <defs>
                <linearGradient
                  id="lineGradientMobile1"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="-162.739"
                  y1="-255.733"
                  x2="-151.310"
                  y2="33.228"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="50%"
                    stopColor="rgb(94,132,205)"
                    stopOpacity="0.5"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="rgb(79,185,217)"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <motion.path
                d="M-169,-334 C-169,-282 -168,-98 -168,-62"
                transform="matrix(1,0,0,1,233.5,260)"
                stroke="url(#lineGradientMobile1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                strokeOpacity="0.4"
                strokeWidth="128"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength4 }}
              />
            </motion.svg>

            <h3 className="font-manrope  text-5xl md:text-6xl lg:text-8xl">
              4
            </h3>
          </div>
          <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl">
            Get A Ballpark
          </h2>
          <p className="font-manrope text-base md:text-lg">
            Meet with the founders, your product manager, and the AI engineers
            BEFORE the engagement begins. Our goal is to focus on how to get
            your decision makers to the magic moment with AI.
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <div
        ref={section5Ref}
        className="grid grid-cols-1 md:grid-cols-2 mt-32 md:mt-60 lg:mt-72 gap-10 mb-20"
      >
        {/* left */}
        <div className="col-span-1 space-y-3 md:space-y-5 order-1">
          <div className="relative">
            {/* Desktop SVG */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 688 392"
              width="688"
              height="392"
              preserveAspectRatio="xMidYMid meet"
              className="absolute -bottom-5 -left-10 md:-left-20 min-w-3xl hidden md:block"
            >
              <defs>
                <linearGradient
                  id="lineGradient5"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="-162.739"
                  y1="-255.733"
                  x2="-151.310"
                  y2="33.228"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0"
                  />
                  <stop
                    offset="25%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0.25"
                  />
                  <stop
                    offset="50%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0.5"
                  />
                  <stop
                    offset="75%"
                    stopColor="rgb(94,132,205)"
                    stopOpacity="0.75"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(79,185,217)"
                    stopOpacity="1"
                  />
                </linearGradient>
              </defs>
              <motion.path
                d="M-169,-334 C-169,-282 -167.501,-264 -167.501,-228 C-167.501,-192 -197.5,-108 -336.5,-108 C-475.5,-108 -600.5,-109 -600.5,-109 C-600.5,-109 -727.5,-129 -727.5,37 C-727.5,43 -727.5,67 -727.5,67"
                transform="matrix(1,0,0,1,791.5,260)"
                stroke="url(#lineGradient5)"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                strokeOpacity="0.4"
                strokeWidth="128"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength5 }}
              />
            </motion.svg>

            {/* Mobile SVG */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130 268"
              width="100"
              height="268"
              preserveAspectRatio="xMidYMid meet"
              className="absolute -bottom-10 -left-8 block md:hidden"
            >
              <defs>
                <linearGradient
                  id="lineGradientMobile1"
                  spreadMethod="pad"
                  gradientUnits="userSpaceOnUse"
                  x1="-162.739"
                  y1="-255.733"
                  x2="-151.310"
                  y2="33.228"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(109,78,193)"
                    stopOpacity="0"
                  ></stop>
                  <stop
                    offset="50%"
                    stopColor="rgb(94,132,205)"
                    stopOpacity="0.5"
                  ></stop>
                  <stop
                    offset="100%"
                    stopColor="rgb(79,185,217)"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
              <motion.path
                d="M-169,-334 C-169,-282 -168,-98 -168,-62"
                transform="matrix(1,0,0,1,233.5,260)"
                stroke="url(#lineGradientMobile1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity="0"
                strokeOpacity="0.4"
                strokeWidth="128"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength5 }}
              />
            </motion.svg>

            <h3 className="font-manrope  text-5xl md:text-6xl lg:text-8xl">
              5
            </h3>
          </div>
          <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl">
            Get A Ballpark
          </h2>
          <p className="font-manrope text-base md:text-lg">
            Meet with the founders, your product manager, and the AI engineers
            BEFORE the engagement begins. Our goal is to focus on how to get
            your decision makers to the magic moment with AI.
          </p>
        </div>

        {/* right */}
        <div className="col-span-1 order-1 flex justify-center">
          <img src="/svg/customer1.svg" alt="" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}
// "use client";

// import React, { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";

// interface AnimatedSVGProps {
//   path: string;
//   viewBox: string;
// }

// interface JourneyStepProps {
//   number: string;
//   title: string;
//   description: string;
//   svgPath: string;
//   viewBox: string;
//   isReversed: boolean;
// }

// const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ path, viewBox }) => {
//   const svgRef = useRef(null);
//   const isInView = useInView(svgRef, { once: false, amount: 0.3 });

//   const { scrollYProgress } = useScroll({
//     target: svgRef,
//     offset: ["end end", "end start"],
//   });

//   const pathLength = useTransform(
//     scrollYProgress,
//     [0, 1],
//     isInView ? [0, 1] : [0, 0]
//   );

//   return (
//     <div ref={svgRef} className="my-5" aria-hidden="true">
//       <motion.svg
//         viewBox={viewBox}
//         fill="none"
//         width="100%"
//         height="auto"
//         preserveAspectRatio="xMidYMid meet"
//         transition={{ duration: 0.5 }}
//       >
//         <motion.path
//           d={path}
//           stroke="url(#paint0_linear)"
//           strokeWidth="4"
//           strokeLinecap="round"
//           initial={{ pathLength: 0 }}
//           style={{ pathLength }}
//         />
//         <defs>
//           <linearGradient
//             id="paint0_linear"
//             x1="4"
//             y1="4"
//             x2="968"
//             y2="299.5"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#0085FF" />
//             <stop offset="1" stopColor="#0085FF" />
//           </linearGradient>
//         </defs>
//       </motion.svg>
//     </div>
//   );
// };

// const JourneyStep: React.FC<JourneyStepProps> = ({
//   number,
//   title,
//   description,
//   svgPath,
//   viewBox,
//   isReversed,
// }) => (
//   <>
//     <div
//       className={`${
//         isReversed ? "text-right flex flex-col items-end" : ""
//       } space-y-3 md:space-y-0`}
//     >
//       <p
//         className="font-britanicaBlack text-xl md:text-[20px] md:leading-[25px]"
//         aria-hidden="true"
//       >
//         {number}
//       </p>
//       <h2 className="font-britanicaBlack text-lg md:text-[18px] md:leading-[22px]">
//         {title}
//       </h2>
//       <p className="font-britannica text-sm md:text-base max-w-[990px]">
//         {description}
//       </p>
//     </div>
//     {number !== "5" && <AnimatedSVG path={svgPath} viewBox={viewBox} />}
//   </>
// );

// export default function CustomerJourney() {
//   const journeySteps = [
//     {
//       number: "1",
//       title: "Customer requirements",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Aenean vulputate justo aliquam donec vivamus a. Viverra in magna nulla nisl ut euismod arcu vulputate donec. Tincidunt est pretium quis est iaculis in aliquam velit in. Felis accumsan lacus ac ac pellentesque nunc purus.",
//       svgPath:
//         "M4 4C33.7045 100.647 -93.5918 342.666 292.773 201.034C679.137 -9.597 897.725 65.8454 957 246.982",
//       viewBox: "0 0 961 250", // Adjusted viewBox height
//       isReversed: false,
//     },
//     {
//       number: "2",
//       title: "Design",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Aenean vulputate justo aliquam donec vivamus a. Viverra in magna nulla nisl ut euismod arcu vulputate donec. Tincidunt est pretium quis est iaculis in aliquam velit in. Felis accumsan lacus ac ac pellentesque nunc purus.",
//       svgPath:
//         "M957 4C927.296 100.647 821 231.5 668.227 201.034C515.455 170.569 63.2752 65.8454 4 246.982",
//       viewBox: "0 0 961 250", // Adjusted viewBox height
//       isReversed: true,
//     },
//     {
//       number: "3",
//       title: "Development",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Aenean vulputate justo aliquam donec vivamus a. Viverra in magna nulla nisl ut euismod arcu vulputate donec. Tincidunt est pretium quis est iaculis in aliquam velit in. Felis accumsan lacus ac ac pellentesque nunc purus.",
//       svgPath:
//         "M4 4C33.7045 100.647 -93.5918 342.666 292.773 201.034C679.137 -9.597 897.725 65.8454 957 246.982",
//       viewBox: "0 0 961 250", // Adjusted viewBox height
//       isReversed: false,
//     },
//     {
//       number: "4",
//       title: "Testing",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Aenean vulputate justo aliquam donec vivamus a. Viverra in magna nulla nisl ut euismod arcu vulputate donec. Tincidunt est pretium quis est iaculis in aliquam velit in. Felis accumsan lacus ac ac pellentesque nunc purus.",
//       svgPath:
//         "M957 4C927.296 100.647 821 231.5 668.227 201.034C515.455 170.569 63.2752 65.8454 4 246.982",
//       viewBox: "0 0 961 250", // Adjusted viewBox height
//       isReversed: true,
//     },
//     {
//       number: "5",
//       title: "Launch",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Aenean vulputate justo aliquam donec vivamus a. Viverra in magna nulla nisl ut euismod arcu vulputate donec. Tincidunt est pretium quis est iaculis in aliquam velit in. Felis accumsan lacus ac ac pellentesque nunc purus.",
//       svgPath: "",
//       viewBox: "",
//       isReversed: false,
//     },
//   ];

//   return (
//     <div>
//       <section className="max-w-7xl mx-auto space-y-8">
//         {journeySteps.map((step, index) => (
//           <JourneyStep key={index} {...step} />
//         ))}
//       </section>
//     </div>
//   );
// }
