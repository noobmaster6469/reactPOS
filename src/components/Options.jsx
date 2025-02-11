import React from "react";
const Options = () => {
  const options = [
    {
      name: "Dashboard",
    },
    {
      name: "Settings",
    },
    {
      name: "Inventory",
    },
    {
      name: "Customers",
    },
    {
      name: "Orders",
    },
    {
      name: "Payments",
    },
    {
      name: "Inventory log",
    },
    {
      name: "Activity log ",
    },
  ];
  return (
    <div className="hidden md:flex flex-col gap-2">
      {options.map((option, index) => (
        <button
          key={index}
          className="btn text-[1.3rem] py-6 h-fit text-left text-pretty"
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default Options;
