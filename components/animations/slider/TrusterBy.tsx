import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const TrustedBy = () => {
  const trustedData = [
    "/images/pawzibleLogoBig.svg",
    "/images/pawzibleLogoBig.svg",
    "/images/pawzibleLogoBig.svg",
    "/images/pawzibleLogoBig.svg",
    "/images/pawzibleLogoBig.svg",
    "/images/pawzibleLogoBig.svg",
  ];

  // Duplicate the array multiple times to ensure smooth looping
  const duplicatedData = [...trustedData, ...trustedData, ...trustedData];
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      const container = containerRef.current;
      if (!container) return;

      // Get the width of a single set of items
      const singleSetWidth = container.scrollWidth / 3;

      await controls.start({
        x: -singleSetWidth,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <section className="space-y-12 sm:space-y-16 lg:space-y-24">
      <h2 className="text-3xl md:text-4xl lg:text-6xl max-w-7xl mx-auto px-4 xl:px-0">
        Trusted By
      </h2>
      {/* Company Logos */}
      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex"
          animate={controls}
          initial={{ x: 0 }}
        >
          {duplicatedData.map((data, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10"
            >
              <img
                src={data}
                height={30}
                width={120}
                alt=""
                className="sm:h-8 sm:w-32 md:h-10 md:w-40 lg:h-12 lg:w-48"
              />
            </div>
          ))}
        </motion.div>
      </div>
      {/* Company Logos End */}
    </section>
  );
};

export default TrustedBy;
