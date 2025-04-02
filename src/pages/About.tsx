import React from "react";
import Timeline from "../../components/about/Timeline";
import AboutCustomers from "../../components/about/AboutCustomers";
import OurPeople from "../../components/about/OurPeople";
import ApproachWork from "../../components/about/ApproachWork";
import JoinUs from "../../components/about/JoinUs";

const About = () => {
  return (
    <section className="px-4 pt-32 space-y-[5rem] md:space-y-[10rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 max-w-7xl mx-auto">
        <div className="space-y-7">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-left font-helvatica max-w-full md:max-w-[33rem]">
            We’re a passionate group of people building the future of ecommerce
          </h2>

          <p className="text-sm md:text-base lg:text-lg font-helvatica">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
            Qui irure qui lorem cupidatat commodo.
          </p>
        </div>

        <img
          src="/images/aboutHero.avif"
          alt="About Hero"
          className="rounded-xl mt-8 md:mt-32 w-full"
        />
      </div>

      <Timeline />
      <AboutCustomers />
      <OurPeople />
      <ApproachWork />
      <JoinUs />
    </section>
  );
};

export default About;
