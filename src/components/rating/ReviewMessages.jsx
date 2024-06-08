import PropTypes from "prop-types";
import { ReviewsComponent } from "@/components";
import { ProductDetailsContext } from "@/context/ProductDetailsContext.jsx";
import { useContext } from "react";

const ReviewMessages = () => {
  const { productDetails, reviews } = useContext(ProductDetailsContext);

  return (
    <section className="md:container md:mx-auto">
      <div className="bg-white dark:bg-dark p-3 md:p-5 shadow-sm mb-5">
        <h1 className="text-lg md:text-2xl font-normal dark:text-slate-200 mb-3 md:mb-3 tracking-tighter border-b dark:border-slate-700 pb-2">
          Customer Reviews
        </h1>

        <ReviewsComponent reviews={reviews} productDetails={productDetails} />
      </div>
    </section>
  );
};

ReviewMessages.propTypes = {
  productDetails: PropTypes.object,
  reviews: PropTypes.array,
};

export default ReviewMessages;
