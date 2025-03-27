import BentoGridTwo from "../components/BentoGrid";
import StarsMain from "../components/animations/stars/index";
import DeliveredProjects2 from "../components/DeliveredProjects2";
import ScrollableSection from "../components/animations/ScrollableSection";
// import AIService from "../components/AIService";
import InNumbers from "../components/animations/counter/InNumbers";
// import TrustedBy from "../components/animations/slider/TrusterBy";
import { TestimonialsTwo } from "../components/animations/slider/Testimonial";
import { FaqNew } from "../components/faq/FaqNew";
import { CustomerJourney2 } from "../components/CustomerJourney";
import CTA from "../components/CTA";
import Industries from "../components/Industries";
// import {
//   OurProducts,
//   // OurProducts2,
// } from "../components/animations/OurProducts";
import "./App.css";

function App() {
  return (
    <section className="max-w-[100vw] overflow-">
      {/* <HeroThree /> */}
      {/* <StarHero /> */}
      <StarsMain />
      <section className="space-y-32 sm:space-y-44 md:space-y-60 ">
        <BentoGridTwo />
        <Industries />
        {/* <DeliveredProjects /> */}
        <DeliveredProjects2 />
        <div className="px-4 xl:px-0">
          <CustomerJourney2 />
        </div>
        <ScrollableSection />
        {/* <AIService /> */}
        {/* <BentoGrid /> */}
        <InNumbers />
        {/* <TrustedBy /> */}
        <TestimonialsTwo />
        {/* <div className="hidden">
          <OurProducts />
        </div> */}
        <div className="md:block hidden max-w-4xl mx-auto">
          {/* <OurProducts2 /> */}
        </div>
        {/* <Faq /> */}
        <FaqNew />
        <CTA />
      </section>
    </section>
  );
}

export default App;
