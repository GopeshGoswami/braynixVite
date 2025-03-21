import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type JourneyStepProps = {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  isReversed?: boolean;
  svgPath: string;
  svgTransform: string;
  svgViewBox: string;
  svgWidth: string;
  svgHeight: string;
  svgClassName: string;
  gradientId: string;
  gradientX1: string;
  gradientY1: string;
  gradientX2: string;
  gradientY2: string;
};

export function JourneyStep({
  number,
  title,
  description,
  imageSrc,
  isReversed = false,
  svgPath,
  svgTransform,
  svgViewBox,
  svgWidth,
  svgHeight,
  svgClassName,
  gradientId,
  gradientX1,
  gradientY1,
  gradientX2,
  gradientY2,
}: JourneyStepProps) {
  const sectionRef = useRef(null);

  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to control the drawing of the line
  // Animation completes when this section is fully scrolled
  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const ContentSection = () => (
    <div className="col-span-1 space-y-5">
      <div className="relative">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={svgViewBox}
          width={svgWidth}
          height={svgHeight}
          preserveAspectRatio="xMidYMid meet"
          className={svgClassName}
        >
          <defs>
            <linearGradient
              id={gradientId}
              spreadMethod="pad"
              gradientUnits="userSpaceOnUse"
              x1={gradientX1}
              y1={gradientY1}
              x2={gradientX2}
              y2={gradientY2}
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
            d={svgPath}
            transform={svgTransform}
            stroke={`url(#${gradientId})`}
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity="0"
            strokeOpacity="0.4"
            strokeWidth="128"
            initial={{ pathLength: 0 }}
            style={{ pathLength }}
          />
        </motion.svg>
        <h3 className="text-8xl">{number}</h3>
      </div>
      <h2 className="text-5xl">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );

  const ImageSection = () => (
    <div className="col-span-1">
      <img
        src={imageSrc || "/placeholder.svg"}
        alt={`Step ${number} illustration`}
      />
    </div>
  );

  return (
    <div ref={sectionRef} className="grid grid-cols-2 gap-10 min-h-[80vh]">
      {isReversed ? (
        <>
          <ImageSection />
          <ContentSection />
        </>
      ) : (
        <>
          <ContentSection />
          <ImageSection />
        </>
      )}
    </div>
  );
}
