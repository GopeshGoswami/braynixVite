interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "Aug 2021",
    title: "Founded company",
    description:
      "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
  },
  {
    date: "Dec 2021",
    title: "Secured $65m in funding",
    description:
      "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
  },
  {
    date: "Feb 2022",
    title: "Released beta",
    description:
      "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
  },
  {
    date: "Dec 2022",
    title: "Global launch of product",
    description:
      "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
  },
];

function Timeline() {
  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto ">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Horizontal connecting line */}
          {/* <div className="hidden md:block absolute top-2 left-0 right-0 h-[2px] bg-indigo-600/20" /> */}

          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                {/* Dot */}
                <div className="w-1 h-1 rounded-full bg-indigo-300 flex-shrink-0" />
                <span className="text-indigo-300 font-medium whitespace-nowrap">
                  {item.date}
                </span>
                <div className="h-[0.5px] w-full bg-white" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
