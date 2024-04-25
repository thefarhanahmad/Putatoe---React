import React from "react";
import { servicesItems } from "../data";

const Services = () => {
  return (
    <div className="w-full bg-[#0291a0]">
      <div className=" w-[90%] mx-auto flex flex-row items-center justify-between p-3">
        {/* icons */}
        {servicesItems.map((item, i) => (
          <div
            key={i}
            className="flex cursor-pointer flex-col gap-1 items-center justify-center "
          >
            <div className="sm:w-12  sm:h-12 w-10 h-10 overflow-hidden bg-white p-2 sm:p-3 rounded-full flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src={item.icon}
                alt={item.name}
              />
            </div>
            <p className="sm:text-lg text-sm font-semibold text-white">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
