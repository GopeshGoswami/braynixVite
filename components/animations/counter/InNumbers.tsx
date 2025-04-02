import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Counter from "./Counter";

const InNumbers = () => {
  const scrollAnimationContent = [
    {
      content: "20+",
      title: "Successful Projects Delivered",
      subText: "in last 1year",
    },
    { content: "5+", title: "Clients", subText: "in last 1year" },
    { content: "5+", title: "Countries Served", subText: "in last 1year" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  // const y = useTransform(scrollYProgress, [0, 1], ["1%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      console.log("value", value);

      if (value === 0) {
        setCurrentIndex(0);
      } else if (value >= 0.1 && value < 0.99) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      className="max-w-7xl relative mx-auto space-y-10 h-full md:h-[120vh] py-10 md:py-0  px-4 xl:px-0"
      ref={targetRef}
    >
      <div className="sticky top-72">
        <div className="flex gap-32 items-center justify-between w-full">
          <div className="max-w-2xl space-y-5 md:block hidden">
            <p className="text-xl font-helvetica">In Number</p>
            <h3 className="text-3xl lg:text-5xl font-helvetica">
              At Braynix, we are dedicated to providing{" "}
              <span className="text-[#767676]">
                secure, reasonable products
              </span>{" "}
              as per your requirements.
            </h3>
          </div>

          <div className="flex md:hidden flex-col gap-10 w-full">
            {/* Projects Delivered */}
            <div className="md:flex md:flex-col md:items-start grid grid-cols-2">
              <p className="text-6xl md:text-9xl font-helvetica">
                <Counter from={0} to={20} />+
              </p>
              <div className="text-sm md:text-xl font-helvetica">
                <p className="">Successful Projects Delivered</p>
                <p className="text-[#767676]">in last 1year</p>
              </div>
            </div>
            {/* Projects Delivered End */}

            {/* Clients */}
            <div className="grid grid-cols-2 md:hidden">
              <p className="text-6xl md:text-9xl font-helvetica">
                <Counter from={0} to={5} />+
              </p>
              <div className="text-sm md:text-xl font-helvetica">
                <p className="">Clients</p>
                <p className="text-[#767676] font-helvetica">in last 1year</p>
              </div>
            </div>
            {/* Clients End */}

            {/* Countries Served */}
            <div className="grid grid-cols-2 md:hidden">
              <p className="text-6xl md:text-9xl font-helvetica">
                <Counter from={0} to={5} />+
              </p>
              <div className="text-sm md:text-xl font-helvetica">
                <p className="">Countries Served</p>
                <p className="text-[#767676] font-helvetica">in last 1year</p>
              </div>
            </div>
            {/* Countries Served End */}
          </div>

          <div className="w-full md:w-auto hidden md:block min-w-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.5,
                }}
                className=""
              >
                <motion.p
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="text-7xl md:text-[150px] font-bold mb-4 font-helvetica"
                >
                  {scrollAnimationContent[currentIndex].content}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="space-y-2"
                >
                  <p className="text-xl md:text-[22px] font-semibold font-helvetica">
                    {scrollAnimationContent[currentIndex].title}
                  </p>
                  <p className="text-lg md:text-[22px] text-[#767676] font-helvetica">
                    {scrollAnimationContent[currentIndex].subText}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InNumbers;
