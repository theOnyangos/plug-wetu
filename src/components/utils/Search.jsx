import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import EmptySearch from "./EmptySearch";

const Search = () => {
  return (
    <div className="h-full dark:bg-darken pt-1">
      {/* Search Input */}
      <div className="m-3 p-1 rounded-full bg-[#f1f5f9] dark:bg-darkGray dark:text-slate-100 dark:border-slate-500 border border-gray flex gap-1 items-center">
        <BiSearchAlt2 className="text-gray text-3xl ml-2 dark:text-dark" />
        <input
          type="text"
          placeholder="Search for any products"
          className="w-full p-3 font-light bg-[#f1f5f9] dark:bg-darkGray rounded-full dark:text-slate-100 dark:border-slate-500 border-none focus:outline-none"
        />
      </div>

      {/* Search Results */}
      <EmptySearch classes={"h-[450px]"} />
    </div>
  );
};

export default Search;
