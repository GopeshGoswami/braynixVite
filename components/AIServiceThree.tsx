// import React from "react";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "./animations/bento-grid-two";

const features = [
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
      />
    ),
    className: "col-span-2 row-span-1", // Large card top left
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
      />
    ),
    className: "col-span-1 row-span-1", // Small card top right
  },
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
      />
    ),
    className: "col-span-1 row-span-1", // Small card bottom left
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
      />
    ),
    className: "col-span-2 row-span-1", // Large card bottom right
  },
];

function AIServiceThree() {
  return (
    <section className="space-y-10">
      <h2 className="text-3xl md:text-6xl text-center">
        We are making bold moves, together
      </h2>
      <BentoGrid className="lg:grid-row">
        {features.map((feature) => (
          <BentoCard key={feature.name} type="" {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}

export { AIServiceThree };
