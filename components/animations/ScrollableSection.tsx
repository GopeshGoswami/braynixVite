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
      title: "Case-Studies",
      content:
        "This is the introduction to our platform. We provide innovative solutions to help you achieve your goals.",
      cards: [
        {
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
        },
        {
          Icon: InputIcon,
          name: "Full Text Search",
          description: "Search through all your files in one place.",
          href: "/",
          cta: "Learn more",
          background: (
            <img
              src="/images/dataService.png"
              className="absolute h-full opacity-30 object-cover"
              alt="Full Text Search"
            />
          ),
        },
        {
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
        },
      ],
    },
    {
      id: "section2",
      title: "Generative AI",
      content:
        "Explore our comprehensive suite of features designed to enhance productivity and streamline your workflow.",
      cards: [
        {
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
        },
        {
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
        },
        {
          Icon: FileTextIcon,
          name: "File Management",
          description: "Organize and manage your files efficiently.",
          href: "/",
          cta: "Learn more",
          background: (
            <img
              src="/images/dataService.png"
              className="absolute h-full opacity-30 object-cover"
              alt="File Management"
            />
          ),
        },
      ],
    },
    {
      id: "section3",
      title: "Publications",
      content:
        "Explore our comprehensive suite of features designed to enhance productivity and streamline your workflow.",
      cards: [
        {
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
        },
        {
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
        },
        {
          Icon: FileTextIcon,
          name: "File Management",
          description: "Organize and manage your files efficiently.",
          href: "/",
          cta: "Learn more",
          background: (
            <img
              src="/images/dataService.png"
              className="absolute h-full opacity-30 object-cover"
              alt="File Management"
            />
          ),
        },
      ],
    },
    // Add similar structure for section3, section4, and section5
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
          <p className="text-3xl md:text-6xl mb-6 text-center font-syne">
            We are making bold moves together
          </p>
        </div>

        {/* Left fixed section with headers */}
        <div className="hidden lg:block w-1/3 sticky top-32 p-8 shadow-md max-h-screen overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold mb-10 font-syne">
              We are making bold moves together
            </h1>
            <nav className="space-y-">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  className={`font-syne block text-left text-xl w-full py-2 rounded-lg transition-all duration-300
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
                  <h2 className="font-syne text-xl sm:text-2xl font-bold mb-2">
                    {section.title}
                  </h2>
                  <p className="font-syne  text-sm sm:text-base mb-6">
                    {section.content}
                  </p>
                </div>
                {section.cards.map((card, cardIndex) => (
                  <BentoCard
                    key={cardIndex}
                    type="bento"
                    {...card}
                    className=""
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
