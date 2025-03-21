import { FaArrowRightLong } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className="rounded-b-3xl md:rounded-b-[60px] z-50 pb-10 md:pb-32 relative bg-black">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl text-center">
          Got a Project ? Just Tell Us!
        </h2>

        <div className="flex items-center justify-center">
          <button className="bg-[#4484FF] rounded-full max-w-xs w-full py-3">
            <a
              href="/contact"
              className="flex items-center gap-2 justify-between px-5 w-full text-white"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white">
                Enquiry Now
              </p>
              <FaArrowRightLong className="text-xl sm:text-2xl md:text-3xl text-white" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
