import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const DynamicSearch = () => {
  return (
    <div className="w-full bg-gray-200 dark:bg-darken flex items-center dark:border-gray-500 focus:border-primary border-b-[1px] rounded-[50px]">
      <BiSearchAlt2 className="ml-3 text-2xl text-secondary dark:text-slate-200" />
      <input
        type="text"
        placeholder="Search in all categories..."
        className="bg-transparent w-[300px] md:w-[500px] border-secondary  focus:outline-none focus:ring-0 py-3 px-4 text-gray-800 dark:text-gray-200"
      />
    </div>
  );
};

export default DynamicSearch;
