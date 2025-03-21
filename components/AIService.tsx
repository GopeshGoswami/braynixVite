"use client";
// import { FaArrowRight } from "react-icons/fa6";
// import { useEffect, useState } from "react";

// import { motion } from "framer-motion";
import { AIServiceThree } from "./AIServiceThree";

const AIService = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto space-y-12 sm:space-y-[97px] flex flex-col items-center justify-center cursor-pointer px-4">
        {/* {services.map((data, index) => (
          <div key={index}>
            <ServiceCards data={data} />
          </div>
        ))} */}
        {/* <AIServiceTwo /> */}
        <AIServiceThree />
      </section>
    </>
  );
};

// const ServiceCards = ({ data }: any) => {
//   const [screenSize, setScreenSize] = useState("lg");

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         setScreenSize("sm");
//       } else if (width < 768) {
//         setScreenSize("md");
//       } else {
//         setScreenSize("lg");
//       }
//     };

//     // Initial check
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getScaleValue = () => {
//     switch (screenSize) {
//       case "sm":
//         return 1.1; // mobile
//       case "md":
//         return 1.2; // tablet
//       default:
//         return 1.4; // desktop
//     }
//   };

//   const getYValue = () => {
//     switch (screenSize) {
//       case "sm":
//         return 20; // mobile
//       case "md":
//         return 40; // tablet
//       default:
//         return 60; // desktop
//     }
//   };

//   return (
//     <>
//       <motion.div
//         className="flex flex-col items-center gap-8 sm:gap-[52px]"
//         whileHover="hover"
//         initial="rest"
//         animate="rest"
//       >
//         <motion.div
//           variants={{
//             rest: { scale: 1 },
//             hover: { scale: getScaleValue() },
//           }}
//           transition={{ type: "smooth", stiffness: 400, damping: 10 }}
//         >
//           <img
//             src={data.img}
//             width={500}
//             height={300}
//             alt="AI Service"
//             className="rounded-3xl"
//           />
//         </motion.div>

//         <motion.div
//           className="text-center max-w-xs sm:max-w-xl gap-2 sm:gap-4"
//           variants={{
//             rest: { y: 0 },
//             hover: { y: getYValue() },
//           }}
//           transition={{ type: "smooth", stiffness: 400, damping: 10 }}
//         >
//           <h3 className="text-xl mb-0 sm:mb-3 sm:text-[40px]">{data.title}</h3>

//           <div className="space-y-4 sm:space-y-[21px]">
//             <p className="text-sm sm:text-[22px] md:leading-7">
//               {data.subText}
//             </p>
//             <a
//               href={data.link}
//               className="flex items-center justify-center gap-2 sm:gap-[13px] text-[#4484FF] font-britannica text-sm sm:text-[22px]"
//             >
//               Learn More <FaArrowRight />
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

export default AIService;
