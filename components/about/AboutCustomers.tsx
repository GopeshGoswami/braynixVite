import React from "react";
import {
  CircleDot,
  LayoutGrid,
  MonitorSmartphone,
  CircleDollarSign,
  CircleEqual,
} from "lucide-react";
import { motion } from "framer-motion";

const AboutCustomers = () => {
  const icons = [
    { icon: <CircleEqual className="h-8 w-8" />, label: "Transistor" },
    { icon: <LayoutGrid className="h-8 w-8" />, label: "Reform" },
    { icon: <MonitorSmartphone className="h-8 w-8" />, label: "Tuple" },
    { icon: <CircleDollarSign className="h-8 w-8" />, label: "SavvyCal" },
    { icon: <CircleDot className="h-8 w-8" />, label: "Statamic" },
  ];

  // Duplicate the icons array to create a seamless infinite scroll effect
  const scrollingIcons = [...icons, ...icons];

  return (
    <div
      className="relative w-full overflow-hidden rounded-[32px] px-6 sm:px-8 py-12 sm:py-16 text-white max-w-7xl mx-auto"
      style={{
        background: `
          radial-gradient(100% 100% at 50% 100%, rgba(13, 17, 31, 0.08) 0%, rgba(13, 17, 31, 0.06) 100%),
          linear-gradient(180deg, #0A0F1C 0%, #1B2341 100%),
          linear-gradient(247.23deg, #151A2D 0%, #0C1221 100%)`,
      }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
          Our customers love us
        </h2>
        <p className="mx-auto mb-12 sm:mb-16 max-w-2xl text-base sm:text-lg text-gray-300">
          Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit
          occaecat labore proident cillum in nisi adipisicing officia excepteur
          tempor deserunt.
        </p>
        <div className="sm:flex items-center justify-center gap-16 hidden">
          <div className="flex items-center gap-4">
            <CircleEqual className="h-8 w-8" />
            <span className="text-xl font-semibold">Transistor</span>
          </div>
          <div className="flex items-center gap-4">
            <LayoutGrid className="h-8 w-8" />
            <span className="text-xl font-semibold">Reform</span>
          </div>
          <div className="flex items-center gap-4">
            <MonitorSmartphone className="h-8 w-8" />
            <span className="text-xl font-semibold">Tuple</span>
          </div>
          <div className="flex items-center gap-4">
            <CircleDollarSign className="h-8 w-8" />
            <span className="text-xl font-semibold">SavvyCal</span>
          </div>
          <div className="flex items-center gap-4">
            <CircleDot className="h-8 w-8" />
            <span className="text-xl font-semibold">Statamic</span>
          </div>
        </div>

        {/* Scrolling Section */}
        <div className="relative overflow-hidden sm:hidden block">
          <motion.div
            className="flex gap-8 sm:gap-12"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {scrollingIcons.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 min-w-[120px]"
              >
                {item.icon}
                <span className="text-sm sm:text-base lg:text-xl font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutCustomers;
