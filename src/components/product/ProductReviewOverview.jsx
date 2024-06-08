import { RatingOverview } from "@/components";

const ProductReviewOverview = ({ productDetails }) => {
  return (
    <section className="md:container md:mx-auto">
      <div className="bg-white dark:bg-dark p-3 md:p-5 shadow-sm">
        <h1 className="text-lg md:text-2xl font-normal dark:text-slate-200 mb-3 md:mb-3 tracking-tighter border-b dark:border-slate-700 pb-2">
          Rating Overview
        </h1>

        {/* Rating Overview */}
        <div className="md:flex md:justify-start">
          <div className="md:w-[100%]">
            <RatingOverview
              ratingDistribution={productDetails.ratingDistribution}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviewOverview;
