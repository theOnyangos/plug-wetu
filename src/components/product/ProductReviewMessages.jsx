import PropTypes from "prop-types";
import ReviewsComponent from "@/components/rating/ReviewsComponent";
import { useContext } from "react";
import { ProductDetailsContext } from "@/context/ProductDetailsContext";

const ProductReviewMessages = () => {
  const { reviews, productDetails } = useContext(ProductDetailsContext);

  return (
    <section className="md:container md:mx-auto">
      <div className="bg-white dark:bg-dark p-3 md:p-5 shadow-sm mb-5">
        <h1 className="text-lg md:text-2xl font-normal dark:text-slate-200 mb-3 md:mb-3 tracking-tighter border-b dark:border-slate-700 pb-2">
          Reviews
        </h1>

        <ReviewsComponent reviews={reviews} productDetails={productDetails} />
      </div>
    </section>
  );
};

ProductReviewMessages.propTypes = {
  reviews: PropTypes.array,
  productDetails: PropTypes.object,
};

export default ProductReviewMessages;
