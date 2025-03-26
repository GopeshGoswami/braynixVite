import { motion } from "framer-motion";

const Industries = () => {
  const cards = [
    {
      id: 1,
      title: "Healthcare",
      text: "Maximizing efficiency, elevating brands, driving growth.",
      img: "/images/industries1.avif",
    },
    {
      id: 2,
      title: "Enterprise",
      text: "Maximizing efficiency, elevating brands, driving growth.",
      img: "/images/industries1.avif",
    },
    {
      id: 3,
      title: "Retail",
      text: "Maximizing efficiency, elevating brands, driving growth.",
      img: "/images/industries1.avif",
    },
    {
      id: 4,
      title: "Financial",
      text: "Maximizing efficiency, elevating brands, driving growth.",
      img: "/images/industries1.avif",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto space-y-[52px] md:space-y-24 px-4">
      <h2 className="text-3xl md:text-6xl text-center">
        Industries We Work With
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 palce-items-center gap-4 md:gap-8">
        {cards.map((card) => {
          return (
            <>
              <div
                key={card.id}
                className="border border-[#ffffff62] space-y-2 px-5 pt-10 h-84 overflow-hidden rounded-3xl"
              >
                <p className="text-base font-medium h-8 w-8 rounded-full flex items-center justify-center text-black bg-[#ffb81c]">
                  {card.id}
                </p>
                <p className="text-[#ffb81c] font-semibold text-lg">
                  {card.title}
                </p>
                <p>{card.text}</p>
                <motion.img
                  src={card.img}
                  alt=""
                  className=" translate-x-44 translate-y-8"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Industries;
