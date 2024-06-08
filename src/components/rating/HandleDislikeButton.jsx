import { BiDislike, BiSolidDislike } from "react-icons/bi";

const HandleDislikeButton = ({ isDisLiked, title, handleClick }) => {
  return (
    <div className="bg-slate-200 py-2 pr-5 pl-2 rounded-r-full dark:bg-darken dark:text-slate-100 border-l border-slate-300 dark:border-slate-700">
      <button
        onClick={handleClick}
        className="btn text-darken dark:text-slate-100 flex gap-2 items-center"
      >
        {isDisLiked ? <BiSolidDislike /> : <BiDislike />}
        <p className="text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400">
          {title}
        </p>
      </button>
    </div>
  );
};

export default HandleDislikeButton;
