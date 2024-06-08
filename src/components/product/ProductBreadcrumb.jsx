import { BiChevronRight } from "react-icons/bi";

const ProductBreadcrumb = ({ productDetails }) => {
  return (
    <section className="container mx-auto">
      <div className="flex gap-2 my-3 md:my-5">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Home <BiChevronRight className="text-xl inline" />{" "}
          {productDetails?.category}{" "}
          <BiChevronRight className="text-xl inline" /> {productDetails?.title}{" "}
        </p>
      </div>
    </section>
  );
};

export default ProductBreadcrumb;
