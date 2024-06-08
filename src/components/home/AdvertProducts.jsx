import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ProductSlideComponent from "../products/ProductSlideComponent";
import { useEffect, useState } from "react";

const AdvertProducts = ({ title, categorySlug }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="md:container md:mx-auto mt-5 md:mb-10">
      <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark md:rounded-t-md shadow-md flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-semibold text-slate-200">
          {title}
        </h1>

        {/* VIEW ALL BUTTON */}
        <div
          className="text-slate-100 dark:text-primary-light uppercase cursor-pointer text-sm"
          onClick={() => {
            navigate(`/category-products/${categorySlug}`);
          }}
        >
          View All
        </div>
      </div>

      {/* Products */}
      <ProductSlideComponent loading={loading} />
    </section>
  );
};

AdvertProducts.propTypes = {
  title: PropTypes.string.isRequired,
  categorySlug: PropTypes.string.isRequired,
};

export default AdvertProducts;
