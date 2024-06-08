import PropTypes from "prop-types";

const ProductDescription = ({ productDetails }) => {
  return (
    <section className="md:container md:mx-auto">
      <div className="bg-white dark:bg-dark p-3 md:p-5 shadow-sm mb-5">
        <h1 className="text-lg md:text-2xl font-normal dark:text-slate-200 mb-3 md:mb-3 tracking-tighter border-b dark:border-slate-700 pb-2">
          Product Details
        </h1>
        <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400 leading-tight">
          {productDetails.long_description}
        </p>
      </div>
    </section>
  );
};

ProductDescription.propTypes = {
  productDetails: PropTypes.object,
};

export default ProductDescription;
