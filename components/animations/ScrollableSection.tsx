import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { useEffect, useRef, useState } from "react";
import { BentoCard } from "./bento-grid-two";

export default function ScrollableSection() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Combine the sections data with features content
  const sections = [
    {
      id: "section1",
      title: "Getting Started",
      content:
        "This is the introduction to our platform. We provide innovative solutions to help you achieve your goals. Our team is dedicated to ensuring you have the best experience possible.",
      feature: {
        Icon: FileTextIcon,
        name: "AI Service",
        description:
          "Real-time metrics with AI-powered insights and predictive analytics",
        href: "/",
        cta: "Learn more",
        background: (
          <img
            src="/images/dataService.png"
            className="absolute h-full opacity-30 object-cover"
            alt="AI Service"
          />
        ),
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      },
    },
    {
      id: "section2",
      title: "Features Overview",
      content:
        "Explore our comprehensive suite of features designed to enhance productivity and streamline your workflow. From intuitive dashboards to powerful analytics, we have everything you need.",
      feature: {
        Icon: InputIcon,
        name: "Full text search",
        description: "Search through all your files in one place.",
        href: "/",
        cta: "Learn more",
        background: (
          <img
            src="/images/dataService.png"
            className="absolute h-full opacity-30 object-cover"
            alt="Full text search"
          />
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
      },
    },
    {
      id: "section3",
      title: "Case Studies",
      content:
        "Discover how our clients have transformed their businesses using our platform. Real-world examples showcase the impact of our solutions across various industries.",
      feature: {
        Icon: GlobeIcon,
        name: "Multilingual",
        description: "Supports 100+ languages and counting.",
        href: "/",
        cta: "Learn more",
        background: (
          <img
            src="/images/dataService.png"
            className="absolute h-full opacity-30 object-cover"
            alt="Multilingual"
          />
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
      },
    },
    {
      id: "section4",
      title: "Pricing Plans",
      content:
        "Choose from our flexible pricing options designed to accommodate businesses of all sizes. Whether you're a startup or an enterprise, we have a plan that fits your needs.",
      feature: {
        Icon: CalendarIcon,
        name: "Calendar",
        description: "Use the calendar to filter your files by date.",
        href: "/",
        cta: "Learn more",
        background: (
          <img
            src="/images/dataService.png"
            className="absolute h-full opacity-30 object-cover"
            alt="Calendar"
          />
        ),
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      },
    },
    {
      id: "section5",
      title: "Support & Resources",
      content:
        "Access comprehensive documentation, tutorials, and dedicated support to make the most of our platform. Our team is available to assist you every step of the way.",
      feature: {
        Icon: BellIcon,
        name: "Notifications",
        description:
          "Get notified when someone shares a file or mentions you in a comment.",
        href: "/",
        cta: "Learn more",
        background: (
          <img
            src="/images/dataService.png"
            className="absolute h-full opacity-30 object-cover"
            alt="Notifications"
          />
        ),
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
      },
    },
  ];

  // Initialize sectionRefs with the correct number of elements
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);

    // Fill any undefined refs with null
    while (sectionRefs.current.length < sections.length) {
      sectionRefs.current.push(null);
    }
  }, [sections.length]);

  useEffect(() => {
    // Initialize the Intersection Observer to detect which section is in view
    const options = {
      root: null, // viewport
      rootMargin: "-30% 0px -30% 0px", // trigger when element is 30% in viewport
      threshold: 0.1, // trigger when 10% of the element is visible
    };

    const handleIntersect = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Observe all section refs that exist
    sectionRefs.current.forEach((ref) => {
      if (ref && observerRef.current) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Function to scroll to a specific section when clicking a header
  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto relative min-h-screen">
        {/* Header for mobile screens */}
        <div className="block lg:hidden p-4">
          <p className="text-3xl md:text-6xl mb-6 text-center">
            We are making bold moves together
          </p>
        </div>

        {/* Left fixed section with headers */}
        <div className="hidden lg:block w-1/3 sticky top-32 p-8 shadow-md max-h-screen overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold mb-10">
              We are making bold moves together
            </h1>
            <nav className="space-y-">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  className={`block text-left text-xl w-full py-2 rounded-lg transition-all duration-300
                  ${
                    activeSection === index
                      ? "text-white font-semibold shadow-lg transform"
                      : "text-gray-600"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right scrollable section with cards */}
        <div className="w-full lg:w-2/3 overflow-y-auto p-4 sm:p-8">
          <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24">
            {sections.map((section, index) => (
              <div
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el; // Assign the element to the ref array
                }}
                className="scroll-mt-8"
              >
                <div className="mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base mb-6">
                    {section.content}
                  </p>
                </div>
                <BentoCard type="bento" {...section.feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
