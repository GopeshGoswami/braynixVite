"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { TestimonialsSection } from "./testimonials/TestimonialsSection";

export const Testimonials = () => {
  // const swiperRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const slides = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.",
      author: "Aaron Charles Erlan",
      role: "Photographer and Civilians",
    },

    {
      text: "Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.",
      author: "Aaron Charles Erlan",
      role: "Photographer and Civilians",
    },

    {
      text: "Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.",
      author: "Aaron Charles Erlan",
      role: "Photographer and Civilians",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto space-y-10 md:space-y-20">
      {/* Header */}
      <div className="flex items-center gap-5 md:gap-10 pl-4 xl:pl-0">
        <h2 className="text-3xl md:text-6xl text-left">
          What people have to say
        </h2>
        <img src="/images/testimonialLogo.svg" width={60} height={60} alt="" />
      </div>
      {/* Header End */}

      <div className="md:space-y-10 pl-4 xl:pl-0">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.5, spaceBetween: 50 }, // Medium screens
            // 1024: { slidesPerView: 2, spaceBetween: 40 }, // Large screens
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="text-white p-8"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="border-r border-dashed">
              {({ isNext }) => (
                // <div className="mb-8">
                <div
                  className={`pr-4 md:pr-8 pb-8 transition-opacity duration-300 ${
                    isNext ? "opacity-50" : "opacity-100"
                  }`}
                >
                  <p className="text-sm md:text-lg mb-4 md:mb-6">
                    {slide.text}
                  </p>
                  <div className="flex items-center">
                    <img
                      height={12}
                      width={12}
                      src="/images/testimonialProfile.png"
                      alt="Author"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-blue-500 font-semibold text-base md:text-xl">
                        {slide.author}
                      </h3>
                      <p className="text-sm md:text-lg">{slide.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" bottom-4 right-4 flex space-x-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white text-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white text-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
};

export const TestimonialsTwo = () => {
  const testimonials = [
    {
      author: {
        name: "Emma Thompson",
        handle: "@emmaai",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      },
      text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
      href: "https://twitter.com/emmaai",
    },
    {
      author: {
        name: "David Park",
        handle: "@davidtech",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
      href: "https://twitter.com/davidtech",
    },
    {
      author: {
        name: "Sofia Rodriguez",
        handle: "@sofiaml",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
    },
  ];
  return (
    <TestimonialsSection
      title="Trusted by developers worldwide"
      description="Join thousands of developers who are already building the future with our AI platform"
      testimonials={testimonials}
    />
  );
};
