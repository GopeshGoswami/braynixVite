const ApproachWork = () => {
  const cardData = [
    {
      id: 0,
      num: "250k",
      text: "Users on the platform",
      subText: "Vel labore deleniti veniam consequuntur sunt nobis.",
    },
    {
      id: 1,
      num: "250k",
      text: "Users on the platform",
      subText: "Vel labore deleniti veniam consequuntur sunt nobis.",
    },
    {
      id: 2,
      num: "250k",
      text: "Users on the platform",
      subText: "Vel labore deleniti veniam consequuntur sunt nobis.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="space-y-7 max-w-[55rem]">
        <h2 className="text-3xl md:text-6xl text-left font-helvatica">
          We approach work as a place to make the world better
        </h2>

        <p className="text-sm md:text-base font-helvatica">
          Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod
          lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.
          Integer vel nibh.
        </p>
      </div>

      <div className="grid grid-cols-3 place-items-end gap-10 mt-20">
        {cardData.map((item) => {
          return (
            <div
              key={item.id}
              className={`${item.id === 0 && "bg-gray-900 h-62"} ${
                item.id === 1 && "bg-[#000000a8 bg-indigo-500 h-96"
              }  ${
                item.id === 2 && "bg-[#A100FF] h-72"
              } p-10 rounded-xl flex flex-col justify-between`}
            >
              <p className="text-3xl font-bold">{item.num}</p>
              <div>
                <p className="text-lg font-bold mb-3">{item.text}</p>
                <p className="text-base">{item.subText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApproachWork;
