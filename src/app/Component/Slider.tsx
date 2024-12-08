import React from 'react';
import { PiCirclesFourDuotone } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";

const Slider = () => {
  return (
    <div className="overflow-hidden w-full bg-[#FAF4F4] py-4 px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <LuSettings2 className="h-5 w-5 text-black-500 mr-2" />
          <p className="font-semibold text-black-700">Filter:</p>
          <PiCirclesFourDuotone className="h-5 w-5 text-black-500 ml-2" />
          <BsViewList className="h-5 w-5 text-black-500 ml-2" />
          <p className="ml-2 text-black-500">Showing 1-16 of 32 results</p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-black-700 mr-2">Show:</p>
          <input type="text" className="border border-black-300 px-2 py-1 ml-2 w-10 text-center" value="16" />
          <p className="ml-2 font-semibold text-black-700 mr-2">Sort by:</p>
          <select className="border border-gray-300 px-2 py-1 ml-2">
            <option>Default</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Slider;