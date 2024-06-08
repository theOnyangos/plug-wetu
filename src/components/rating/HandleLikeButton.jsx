import { BiLike, BiSolidLike } from "react-icons/bi";

const HandleLikeButton = ({ isLiked, title, handleClick }) => {
  return (
    <div className="bg-slate-200 py-2 pl-5 pr-3 rounded-l-full dark:bg-darken dark:text-slate-100">
      <button
        onClick={handleClick}
        className="btn text-darken dark:text-slate-100 flex gap-2 items-center"
      >
        {isLiked ? <BiSolidLike /> : <BiLike />}
        <p className="text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400">
          {title}
        </p>
      </button>
    </div>
  );
};

export default HandleLikeButton;
