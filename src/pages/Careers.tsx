import { BriefcaseBusiness, Clock, MapPin } from "lucide-react";
import React from "react";

const Careers = () => {
  const careersData = [
    {
      id: 0,
      title: "Design",
      subText: "Open positions in our design team",
      card: [
        {
          id: 0,
          name: "Product Designer",
          role: "Design",
          location: "Remote",
          subText: "We're looking for a product designer for our team.",
          exp: "2-3",
          type: "Full-Time",
        },
        {
          id: 1,
          name: "UI/UX Designer",
          role: "Design",
          location: "On-site",
          subText: "Join our team to create stunning user experiences.",
          exp: "3-5",
          type: "Part-Time",
        },
      ],
    },
    {
      id: 1,
      title: "Engineering",
      subText: "Open positions in our engineering team",
      card: [
        {
          id: 0,
          name: "Frontend Developer",
          role: "Engineering",
          location: "Remote",
          subText: "We need a skilled frontend developer to build amazing UIs.",
          exp: "1-3",
          type: "Full-Time",
        },
        {
          id: 1,
          name: "Backend Developer",
          role: "Engineering",
          location: "Remote",
          subText: "Help us build scalable backend systems.",
          exp: "3-5",
          type: "Full-Time",
        },
      ],
    },
    {
      id: 2,
      title: "Marketing",
      subText: "Open positions in our marketing team",
      card: [
        {
          id: 0,
          name: "Content Strategist",
          role: "Marketing",
          location: "Remote",
          subText: "Craft compelling content strategies for our brand.",
          exp: "2-4",
          type: "Full-Time",
        },
        {
          id: 1,
          name: "Social Media Manager",
          role: "Marketing",
          location: "On-site",
          subText: "Manage and grow our social media presence.",
          exp: "1-3",
          type: "Part-Time",
        },
      ],
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 pt-32">
      <div className="space-y-7 mb-[52px]">
        <h2 className="text-3xl md:text-6xl text-left font-helvatica">
          Start doing work that matters
        </h2>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          reprehenderit!
        </p>
      </div>

      {careersData.map((item, index) => {
        return (
          <div
            className="border-t grid grid-cols-1 md:grid-cols-3 py-10 gap-6"
            key={index}
          >
            {/* left */}
            <div className="col-span-1">
              <h4 className="font-bold text-lg md:text-xl">{item.title}</h4>
              <p className="text-sm md:text-base">{item.subText}</p>
            </div>
            {/* right */}
            <div className="col-span-2 space-y-5">
              {item.card.map((card, index) => {
                return (
                  <div
                    className="border rounded-lg p-4 md:p-6 hover:border-gray-400 transition-colors"
                    key={index}
                  >
                    <div className="flex flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex flex-row items-start md:items-center gap-2 md:gap-5">
                        <p className="font-bold text-lg md:text-xl">
                          {card.name}
                        </p>
                        <p className="bg-gray-900 text-white text-sm md:text-base p-1 md:p-2 rounded-md">
                          • {card.role}
                        </p>
                      </div>
                      <p className="bg-gray-900 text-white text-sm md:text-base p-1 md:p-2 rounded-md">
                        {card.location}
                      </p>
                    </div>

                    <div className="mt-2">
                      <p className="text-sm md:text-base">{card.subText}</p>

                      <div className="flex flex-row gap-4 md:gap-10 mt-6">
                        <div className="flex items-center gap-2 md:gap-4">
                          <BriefcaseBusiness className="text-sm md:text-xl" />
                          <p className="text-sm md:text-base">{card.exp}</p>
                        </div>

                        <div className="flex items-center gap-2 md:gap-4">
                          <Clock className="text-sm md:text-xl" />
                          <p className="text-sm md:text-base">{card.type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Careers;
