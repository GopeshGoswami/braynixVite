import StarsCanvas from "./Stars";
import StarHero from "../hero/StarHero";

const StarsMain = () => {
  return (
    <div className=" relative z-0 h-screen">
      {/* <Contact /> */}
      {/* <div className="h-screen" /> */}
      <StarHero />
      <div className="absolute top-0 z-50 w-full h-full">
        <StarsCanvas />
      </div>
    </div>
  );
};

export default StarsMain;
