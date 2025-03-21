import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const OurProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 md:gap-10 py-8">
        <div className="w-full">
          <img
            src="/images/ourProduct.png"
            width={600}
            height={400}
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col space-y-4 md:space-y-5 md:text-left">
          <p className="text-base">Our Product</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
            Unleashing Our Latest Products to <br className="hidden md:block" />{" "}
            the World
          </h2>

          <p className="text-base">
            We have worked with various kinds of clients from more than 50
            countries around the world and we continue to strive to provide the
            best service
          </p>
          <button className="border border-white py-3 px-5 rounded-[50px] text-sm max-w-44 mx-auto md:mx-0 w-full">
            <a href="/" className="flex items-center gap-2 justify-center">
              Know More
              <img
                src="/images/heroKnowMore.svg"
                height={20}
                width={20}
                alt=""
              />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export const OurProducts2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  //   const imageAspectRatio = useTransform(
  //     scrollYProgress,
  //     [0, 1],
  //     ["56.25%", "100%"]
  //   );

  const imageScale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.6, 0.4], {
    clamp: true,
  });

  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"], {
    clamp: true,
  });

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.8],
    [0, 0, 1, 1],
    { clamp: true }
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["50%", "0%", "0%"],
    { clamp: true }
  );

  return (
    <div ref={containerRef} className="h-[400vh] max-w-7xl mx-auto relative">
      <div className="sticky top-32 max-h-[65vh] flex items-center overflow-hidden">
        <motion.div
          className="relative w-full flex items-center justify-start"
          style={{
            scale: imageScale,
            x: imageX,
          }}
        >
          <motion.div
            className="relative w-full h-full"
            style={
              {
                //   paddingBottom: imageAspectRatio,
              }
            }
          >
            <img
              src="/images/ourProduct.png"
              alt="Our Product"
              className="transition-transform duration-300 rounded-3xl w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center p-8"
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-6 text-white">
            <motion.p
              className="text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              Our Product
            </motion.p>

            <motion.h2
              className="text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              Unleashing Our Latest Products to the World
            </motion.h2>

            <motion.p
              className="text-base max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              We have worked with various kinds of clients from more than 50
              countries around the world and we continue to strive to provide
              the best service
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
              >
                Know More
                <img
                  src="/images/heroKnowMore.svg"
                  height={20}
                  width={20}
                  alt=""
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
