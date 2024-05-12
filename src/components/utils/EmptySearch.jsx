import React from "react";
import cartImage from "../../../public/images/empty-search.png";

const EmptySearch = ({ classes }) => {
  return (
    <div
      className={`w-full bg-white dark:bg-dark rounded-md p-5 mb-3 ${classes} md:h-[700px] flex flex-col justify-center items-center`}
    >
      <div className="">
        <img src={cartImage} alt="Empty Cart" />
      </div>
      <h1 className="text-xl text-primary font-semibold dark:text-slate-200">
        Search is empty
      </h1>
      <p className="text-gray-500 text-sm dark:text-slate-200">
        Your search items will appear here...
      </p>
    </div>
  );
};

export default EmptySearch;
