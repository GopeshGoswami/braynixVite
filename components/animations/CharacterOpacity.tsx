import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const CharacterOpacity = ({ text }: any) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <>
      <p ref={element} className="flex flex-wrap leading-none">
        {words.map((word: any, index: any) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={index} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </>
  );
};

const Word = ({ children, range, progress }: any) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mr-3 mt-3 relative">
      {characters.map((character: any, index: any) => {
        const start = range[0] + step * index;
        const end = range[0] + step * (index + 1);
        return (
          <Character key={index} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default CharacterOpacity;
// Styles.shadow
{
  /* <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span> */
}
