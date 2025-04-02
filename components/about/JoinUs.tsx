import { ArrowRight } from "lucide-react";
import React from "react";

const JoinUs = () => {
  const jobs = [
    {
      id: 1,
      title: "Full-Time Developer",
      subText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quia possimus vero impedit deleniti praesentium nihil minus, recusandae officia ipsum, debitis numquam adipisci velit optio sapiente veniam, animi ad libero accusantium eligendi iure quibusdam nam? Provident, quam at quos enim beatae illum consectetur distinctio labore est facilis totam laborum reprehenderit.",
      location: "Remote",
    },
    {
      id: 2,
      title: "Full-Time Developer",
      subText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quia possimus vero impedit deleniti praesentium nihil minus, recusandae officia ipsum, debitis numquam adipisci velit optio sapiente veniam, animi ad libero accusantium eligendi iure quibusdam nam? Provident, quam at quos enim beatae illum consectetur distinctio labore est facilis totam laborum reprehenderit.",
      location: "Remote",
    },
    {
      id: 3,
      title: "Full-Time Developer",
      subText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quia possimus vero impedit deleniti praesentium nihil minus, recusandae officia ipsum, debitis numquam adipisci velit optio sapiente veniam, animi ad libero accusantium eligendi iure quibusdam nam? Provident, quam at quos enim beatae illum consectetur distinctio labore est facilis totam laborum reprehenderit.",
      location: "Remote",
    },
    {
      id: 4,
      title: "",
      subText: "",
      location: "",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="space-y-7 max-w-[30rem]">
        <h2 className="text-3xl md:text-4xl text-left font-helvatica">
          We’re always looking for awesome people to join us
        </h2>

        <p className="text-sm md:text-base font-helvatica">
          Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod
          lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.
          Integer vel nibh.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-10 mt-10">
        {/* left */}
        <img
          src="/images/aboutHero.avif"
          alt=""
          className="rounded-xl col-span-2"
        />
        {/* right */}
        <div className="col-span-3 space-y-10">
          {jobs.map((item) => {
            return (
              <div className="space-y-2" key={item.id}>
                {jobs.length === item.id ? (
                  <div className="flex items-center gap-2 font-bold">
                    <p>View all openings</p> <ArrowRight />
                  </div>
                ) : (
                  <>
                    <p className="font-bold text-lg">{item.title}</p>
                    <p className="">{item.subText}</p>
                    <p className="font-light">{item.location}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
