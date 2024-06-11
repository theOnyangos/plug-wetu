import PropTypes from "prop-types";
import {
  CallButton,
  WhatsappButton,
  WishlistButton,
  AddToCartButton,
  CatalogueProductSkeleton,
} from "@/components";

const CategoryProducts = ({ catalogueData, loading }) => {
  function generateProducts() {
    const products = [];
    for (let i = 0; i < 12; i++) {
      products.push(<CatalogueProductSkeleton key={i} />);
    }
    return products;
  }
  return (
    <>
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-2">
          {generateProducts()}
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-2">
          {catalogueData.map((catalogue, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md"
            >
              {/* Product Image */}
              <img
                src={catalogue.thumbnail}
                className="w-full h-[400px] object-cover rounded-t-md"
                alt={catalogue.title}
              />
              <div className="relative p-3">
                <h1 className="text-lg font-semibold dark:text-slate-200 tracking-tighter">
                  {catalogue.title}
                </h1>
                <div className="flex gap-2 items-center">
                  <p className="text-xl font-semibold text-primary dark:text-slate-200 tracking-tight">
                    KES {catalogue.discount_price}
                  </p>
                  <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through tracking-tight">
                    KES {catalogue.price}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  {/* Add to cart button */}
                  <AddToCartButton title="Add to Cart" />

                  {/* Wishlist button */}
                  <WishlistButton />

                  {/* Whatsapp Button */}
                  <WhatsappButton />

                  {/* Call Button */}
                  <CallButton handleClick={() => {}} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

CategoryProducts.propTypes = {
  catalogueData: PropTypes.array,
  loading: PropTypes.bool,
};

export default CategoryProducts;
