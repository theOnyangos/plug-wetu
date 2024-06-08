import React, { useEffect, useState } from "react";
import { CategoryProducts } from "@/components";
import { fusionProducts } from "../../data/StaticData";

const CategoryProductsComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto pb-20 md:pb-10">
      {/* Products */}
      <CategoryProducts catalogueData={fusionProducts} loading={loading} />
    </section>
  );
};

export default CategoryProductsComponent;
