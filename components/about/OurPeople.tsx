const OurPeople = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 md:space-y-7">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-left font-helvatica max-w-full md:max-w-[33rem]">
            Our People
          </h2>

          <p className="text-sm sm:text-base md:text-lg font-helvatica">
            Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati
            eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
            Excepturi quidem expedita molestias quas.
          </p>

          <p className="text-sm sm:text-base md:text-lg font-helvatica">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat. Quasi aperiam sit non sit neque reprehenderit.
          </p>
        </div>

        <img
          src="/images/aboutHero.avif"
          alt="Our People"
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>
      {/* <ImageLayout /> */}
    </>
  );
};

export default OurPeople;

// const ImageLayout = () => {
//   return (
//     <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-5">
//       {/* Middle Image */}
//       <div className="relative z-10 w-full sm:w-1/2 lg:w-1/3">
//         <img
//           src="/images/aboutHero.avif"
//           alt="Office Meeting"
//           className="rounded-xl object-cover w-96 h-96 "
//         />
//       </div>

//       {/* Left Image */}
//       <div className="absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%] w-full sm:w-1/2 lg:w-1/3">
//         <img
//           src="/images/aboutHero.avif"
//           alt="Beach Scene"
//           className="rounded-xl object-cover w-full h-64"
//         />
//       </div>

//       {/* Right Image */}
//       <div className="absolute top-0 right-0 transform translate-x-[50%] translate-y-[-50%] w-full sm:w-1/2 lg:w-1/3">
//         <img
//           src="/images/aboutHero.avif"
//           alt="Beach Volleyball"
//           className="rounded-xl object-cover w-full h-64"
//         />
//       </div>
//     </div>
//   );
// };
