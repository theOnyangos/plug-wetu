import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoriesCarousel = ({ items, responsive, deviceType }) => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={deviceType === "mobile"}
      autoPlaySpeed={3000}
      swipeable={true}
      infinite={true}
      arrows={false}
    >
      {items.map((category, index) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <div className="rounded-full md:w-[110px] md:h-[110px] w-[80px] h-[80px] border-dotted border-2 border-dark cursor-pointer hover:border-primary transition ease-in-out delay-150 flex justify-center items-center dark:bg-gray-400 mb-3">
            <img
              src={category.icon}
              className="md:w-[100px] w-[80px] rounded-full"
              alt={category.name}
            />
          </div>
          <p className="text-center text-sm md:text-lg font-normal text-dark dark:text-slate-100">
            {category.name}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default CategoriesCarousel;
